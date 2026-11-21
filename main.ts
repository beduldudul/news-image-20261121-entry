// news-image-20261121 entry (Node 22, standard library only).
// The entry image is entry.png beside this file; the program copies it
// to /output/entry.png and verifies the copy byte for byte, so the two
// grader runs write identical bytes. The image sums up the world news
// of Saturday 21 November 2026 in one page: Russian missiles hit
// Poland, Wall Street slides into correction, Cyclone Akvan hits
// Odisha, the World Court rules on Myanmar, and more.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for
// /output:  mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const src = new URL('./entry.png', import.meta.url);
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
const dst = join(outDir, 'entry.png');
copyFileSync(src, dst);
const a = readFileSync(src);
const b = readFileSync(dst);
if (!a.equals(b)) {
  throw new Error('entry.png copy differs from source');
}
// The file must be a whole PNG: it starts with the PNG signature.
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (!b.subarray(0, 8).equals(PNG_MAGIC)) {
  throw new Error('entry.png is not a PNG');
}
