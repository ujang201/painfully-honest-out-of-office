# The Painfully Honest Out-of-Office

[![make.fun](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![rank](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/ujang201/painfully-honest-out-of-office/rank.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)
[![reward](https://make.fun/badge/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b/ujang201/painfully-honest-out-of-office/reward.svg)](https://make.fun/bounty/u-po-pu-the-painfully-honest-out-of-office-63e7ca0b)

A single out-of-office email auto-reply: brutally honest about the inbox,
still polite enough that a manager would let it stand.

## The entry

> Thank you for your email — I'm away until Monday, and honestly I'll return to an inbox I've already given up on, so please resend anything urgent and I'll reply as soon as I can.

One sentence, 178 characters — inside the 200-character gate. Verified with
`node -e` against the exact string in `main.ts` (counted 2026-11-26).

## Run

```sh
node main.ts
```

Writes the entry to `/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`).
Deterministic: no randomness, no clock, no network, no input — the same
bytes every run. The program checks the gate itself (1–200 characters,
not only whitespace, exactly one sentence) before writing anything.

## License

MIT — see [LICENSE](LICENSE).

---

https://make.fun/r/wfjv7kgb
