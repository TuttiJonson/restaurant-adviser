/* ------------------------------------------------------------------
   DISTANCE AND WALKING TIME
   All the distance maths lives here: straight-line distance, the walking
   time estimate, the "Minutes I'll walk" test and the distance score.
   The constants in PROFILES are starting values. Calibrate them against
   real Google Maps walking times with `node tools/calibrate.js`.
   ------------------------------------------------------------------ */

// A profile says how a trip behaves.
//   roadFactor: roads wind, so the real route is this many times the straight line
//   speedKmh:   average speed along the route, stops and lights included
//   overhead:   fixed minutes added to every trip (0 for walking)
export const PROFILES = {
  walking: { roadFactor: 1.3, speedKmh: 5, overhead: 0 }
};

export const DEFAULT_PROFILE = PROFILES.walking;

// With no time limit chosen, a place this many minutes away scores 0 for distance.
const ANY_CEILING_MIN = 45;

const MIDDLE_DOT = " · ";

// Straight-line distance in km between two { lat, lng } points (haversine).
function straightLineKm(a, b) {
  const R = 6371, rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad, dLng = (b.lng - a.lng) * rad;
  const x = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * R * Math.asin(Math.sqrt(x));
}

function hasCoords(p) {
  return !!p && typeof p.lat === "number" && typeof p.lng === "number";
}

// Whole walking minutes for a straight-line distance under a profile:
// overhead plus the winding route at the average speed.
function walkMinutes(straightKm, profile) {
  return Math.round(profile.overhead + (straightKm * profile.roadFactor) / profile.speedKmh * 60);
}

// Describes the trip from `from` to `place`: { straightKm, minutes, label },
// or null when either end has no coordinates. `label` is the finished text,
// like "about 3.8 km · ~15 min walk".
export function describeTrip(from, place, profile) {
  if (!hasCoords(from) || !hasCoords(place)) return null;
  const p = profile || DEFAULT_PROFILE;
  const straightKm = straightLineKm(from, place);
  const minutes = walkMinutes(straightKm, p);
  const label = "about " + straightKm.toFixed(1) + " km" + MIDDLE_DOT + "~" + minutes + " min walk";
  return { straightKm: straightKm, minutes: minutes, label: label };
}

// The "Minutes I'll walk" filter. `limit` is a number of minutes or 'any'.
// A place with unknown minutes is kept.
export function withinWalkLimit(minutes, limit) {
  if (minutes === null || minutes === undefined || limit === "any") return true;
  return minutes <= limit;
}

// The distance factor in the ranking, 0 to 1: 1 at no distance, falling to 0
// at the limit (or at ANY_CEILING_MIN when the limit is 'any').
// A place with unknown minutes gets a neutral 0.5.
export function distanceScore(minutes, limit) {
  if (minutes === null || minutes === undefined) return 0.5;
  const ceiling = limit === "any" ? ANY_CEILING_MIN : limit;
  return Math.max(0, Math.min(1, 1 - minutes / ceiling));
}

// Fits the average route speed (km/h) to real trips. `samples` is a list of
// { straightKm, actualMinutes }. Keeps the profile's roadFactor and overhead and
// finds the speedKmh that best matches the real times (least squares). Null if no samples.
export function calibrateSpeed(samples, profile) {
  const p = profile || DEFAULT_PROFILE;
  let xy = 0, xx = 0;
  samples.forEach(function (s) {
    const driving = s.actualMinutes - p.overhead;
    xy += s.straightKm * driving;
    xx += s.straightKm * s.straightKm;
  });
  if (xy <= 0) return null;
  const minutesPerStraightKm = xy / xx;
  return 60 * p.roadFactor / minutesPerStraightKm;
}

// A plain-text table comparing the real time with the estimate for each sample.
export function calibrationReport(samples, profile) {
  const p = profile || DEFAULT_PROFILE;
  const pad = function (v, n) { return String(v).padEnd(n); };
  const lines = [pad("straight km", 13) + pad("actual min", 12) + pad("estimate", 10) + "off by"];
  samples.forEach(function (s) {
    const minutes = walkMinutes(s.straightKm, p);
    const off = minutes - s.actualMinutes;
    lines.push(pad(s.straightKm.toFixed(1), 13) + pad(s.actualMinutes, 12) + pad(minutes, 10) +
      (off > 0 ? "+" : "") + off);
  });
  return lines.join("\n");
}
