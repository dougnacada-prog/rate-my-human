// Rate My Human: The One-Line Review — make.fun entry.
// The program writes a single review sentence to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Three stars: he only talks to me at 2 a.m., always opens with 'quick question,' and has never once asked a quick question.";

const out = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";
mkdirSync(dirname(out), { recursive: true });
writeFileSync(out, LINE);
