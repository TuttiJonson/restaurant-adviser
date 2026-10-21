/* ------------------------------------------------------------------
   DISTANCE AND DRIVE TIME
   All the distance maths lives here: straight-line distance, the drive
   time estimate, the "Minutes I'll drive" test and the distance score.
   The constants in PROFILES are starting values. Calibrate them against
   real Google Maps drive times with `node tools/calibrate.js`.
   ------------------------------------------------------------------ */

// A profile says how a trip behaves.
//   roadFactor: roads wind, so the real route is this many times the straight line
//   speedKmh:   average speed along the route, stops and lights included
//   spread:     the range is the estimate plus or minus this share (0.15 = 15%)
export const PROFILES = {
  city: { roadFactor: 1.4, speedKmh: 18, spread: 0.15 }
};

export const DEFAULT_PROFILE = PROFILES.city;

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

// Drive minutes for a straight-line distance under a profile.
function driveMinutes(straightKm, profile) {
  return straightKm * profile.roadFactor / profile.speedKmh * 60;
}

// Turns a low and high estimate into whole minutes: single minutes under 10,
// steps of 5 from there, so a trip reads "15-20" and not "15.1-20.4".
function roundRange(lo, hi) {
  if (hi < 10) {
    const a = Math.max(1, Math.round(lo)), b = Math.max(a + 1, Math.round(hi));
    return [a, b];
  }
  const a = Math.max(5, Math.round(lo / 5) * 5), b = Math.max(a + 5, Math.round(hi / 5) * 5);
  return [a, b];
}

// Describes the trip from `from` to `place`: { straightKm, minutes, range, label },
// or null when either end has no coordinates. `minutes` is the middle of the
// range. `label` is the finished text, like "about 3.8 km · 15-20 min drive".
export function describeTrip(from, place, profile) {
  if (!hasCoords(from) || !hasCoords(place)) return null;
  const p = profile || DEFAULT_PROFILE;
  const straightKm = straightLineKm(from, place);
  const minutes = driveMinutes(straightKm, p);
  const range = roundRange(minutes * (1 - p.spread), minutes * (1 + p.spread));
  const label = "about " + straightKm.toFixed(1) + " km" + MIDDLE_DOT + range[0] + "-" + range[1] + " min drive";
  return { straightKm: straightKm, minutes: minutes, range: range, label: label };
}

// The "Minutes I'll drive" filter. `limit` is a number of minutes or 'any'.
// A place with unknown minutes is kept.
export function withinDriveLimit(minutes, limit) {
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
// { straightKm, actualMinutes }. Keeps the profile's roadFactor and finds the
// speedKmh that best matches the real times (least squares). Null if no samples.
export function calibrateSpeed(samples, profile) {
  const p = profile || DEFAULT_PROFILE;
  let xy = 0, xx = 0;
  samples.forEach(function (s) {
    xy += s.straightKm * s.actualMinutes;
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
  const lines = [pad("straight km", 13) + pad("actual min", 12) + pad("estimate", 10) + pad("range", 10) + "in range?"];
  samples.forEach(function (s) {
    const minutes = driveMinutes(s.straightKm, p);
    const range = roundRange(minutes * (1 - p.spread), minutes * (1 + p.spread));
    const inside = s.actualMinutes >= range[0] && s.actualMinutes <= range[1];
    lines.push(pad(s.straightKm.toFixed(1), 13) + pad(s.actualMinutes, 12) + pad(minutes.toFixed(1), 10) +
      pad(range[0] + "-" + range[1], 10) + (inside ? "yes" : "no"));
  });
  return lines.join("\n");
}
