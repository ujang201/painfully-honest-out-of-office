// The Painfully Honest Out-of-Office
// A deterministic TypeScript program: no randomness, no clock, no network,
// no input. It writes exactly one out-of-office auto-reply to entry.txt
// and refuses to write anything that fails the competition gate
// (UTF-8 text, 1-200 characters, not only whitespace, a single sentence).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The entry: one sentence, painfully honest about the inbox, still polite
// enough to survive being forwarded to a manager.
const ENTRY =
  "Thank you for your email \u2014 I'm away until Monday, and honestly I'll return to an inbox I've already given up on, so please resend anything urgent and I'll reply as soon as I can.";

// Gate, mirrored from the competition rules: 1-200 characters, not only
// whitespace, exactly one sentence (a single terminal full stop).
// Verified 2026-11-26: the entry below is 178 characters, one sentence.
function passesGate(text: string): boolean {
  if (text.length < 1 || text.length > 200) return false;
  if (text.trim().length === 0) return false;
  const sentences = text.split(".").filter((part) => part.trim().length > 0);
  if (sentences.length !== 1) return false;
  if (!text.endsWith(".")) return false;
  return true;
}

if (!passesGate(ENTRY)) {
  throw new Error(
    `entry fails gate: ${ENTRY.length} characters, ${JSON.stringify(ENTRY)}`,
  );
}

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
