// Prints the fitted speed and a per-place comparison against the current profile.
import { DEFAULT_PROFILE, calibrateSpeed, calibrationReport } from "../distance.js";

// One row per place: straightKm is from this tool's own "about X km" output,
// actualMinutes is the real drive time from Google Maps.
const SAMPLES = [
  // { straightKm: 3.8, actualMinutes: 18 },
];

if (SAMPLES.length === 0) {
  console.log("Add { straightKm, actualMinutes } rows to SAMPLES in tools/calibrate.js first.");
} else {
  const speed = calibrateSpeed(SAMPLES);
  console.log("Current speed: " + DEFAULT_PROFILE.speedKmh + " km/h (road factor " + DEFAULT_PROFILE.roadFactor + ")");
  console.log("Fitted speed:  " + speed.toFixed(1) + " km/h\n");
  console.log(calibrationReport(SAMPLES));
}
