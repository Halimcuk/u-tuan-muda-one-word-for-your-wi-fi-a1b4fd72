// One word for my Wi-Fi: ghosted.
// Writes the entry word to entry.txt inside the output folder.
// Deterministic: no network, no timestamps, same bytes every run.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY = "ghosted";

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), ENTRY, "utf8");
  console.log(ENTRY);
  console.log(`characters: ${ENTRY.length}`);
}

main();
