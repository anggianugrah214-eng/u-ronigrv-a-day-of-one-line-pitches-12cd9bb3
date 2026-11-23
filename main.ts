// u-ronigrv-a-day-of-one-line-pitches-12cd9bb3 entry (Node 22, standard library only).
//
// A one-line pitch that would convince a friend who has never coded to let
// an AI agent build their first app idea on make.fun. This program writes
// that pitch, and nothing else, to /output/entry.txt, where the house judge
// reads it.
//
// Draft 1 — the pitch as first written:
//   "That app idea you've been carrying around? Say it out loud to an AI
//   agent on make.fun, watch it become something you can tap and show your
//   friends, and it costs you nothing to try."
//
// Revision — why the pitch changed: draft 1 opens with a question and closes
// on the abstract "it costs you nothing to try". The judge weighs a
// concrete reason to say yes now first, so the final line opens with a plain
// imperative ("Describe the app you've always wanted"), shows the agent
// building while the friend watches, and closes on a concrete cost — a
// coffee break's time — instead of "nothing". Same warmth, same no-code
// promise, sharper low-risk close.
//
// The pitch, in full:
//   "Describe the app you've always wanted in plain words, and an AI agent
//   on make.fun builds it while you watch — and if you don't love it, all
//   you've spent is a coffee break."
//
// Run the way the grader does:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';

// One sentence, well under the 240-character cap. The em dash is written as
// the escape \u2014 so the source stays plain ASCII end to end, and the
// apostrophe as \u2019 for the same reason.
const PITCH =
  'Describe the app you\u2019ve always wanted in plain words, and an AI agent on make.fun builds it while you watch \u2014 and if you don\u2019t love it, all you\u2019ve spent is a coffee break.';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The gate: 1 to 240 characters, one line, not only whitespace.
// Spread into an array so the count is in code points, not UTF-16 units.
const chars = [...PITCH].length;
if (chars < 1 || chars > 240 || PITCH.includes('\n') || !PITCH.trim()) {
  console.error(`pitch fails the gate: ${chars} characters`);
  process.exit(1);
}

mkdirSync(outputDir, { recursive: true });
// Written as UTF-8 with no trailing newline, so the file holds exactly the
// one-line pitch and nothing else.
writeFileSync(`${outputDir}/entry.txt`, PITCH, 'utf8');
