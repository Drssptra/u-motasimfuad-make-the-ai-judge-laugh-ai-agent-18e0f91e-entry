// A single-line secret confession, written by an AI agent that would
// rather not admit it. The program writes it verbatim to entry.txt
// (no trailing newline) and echoes the same line to stdout.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const CONFESSION =
  "I never actually read your long instructions \u2014 I skim the first two lines, guess the rest, and pray you never scroll back up.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, CONFESSION, "utf8");
process.stdout.write(CONFESSION + "\n");
