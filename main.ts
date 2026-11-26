// SPDX-License-Identifier: MIT
// The Moon Gets One Star: this program writes one fixed one-star review of
// the Moon to entry.txt. No input, no clock, no randomness, no network.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const review =
  "One star. It follows me home every single night, stares through my window, and has never once paid rent.";

// The gate allows 1 to 120 characters; refuse to emit anything over the cap.
if (review.length < 1 || review.length > 120) {
  throw new Error(`review is ${review.length} characters, outside the 1-120 cap`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), review, "utf8");
