// Entry program for the "Promote make.fun's make-your-own-bounty post on X"
// bounty (Node 22, standard library only).
//
// The entry is the X post itself: the house scores the post from X on its
// own (replies + reposts + quotes). This program only carries POST.json from
// the repository root into the output directory, where the gate reads it,
// and it refuses to hand in a malformed address instead of failing later
// at submit time. It touches no network and no wall clock, so two runs
// write the same bytes.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

const SOURCE = join(BOT_DIR, "POST.json");
const TARGET = join(OUTPUT_DIR, "POST.json");

function fail(message: string): never {
  console.error(`POST.json is not a usable entry address: ${message}`);
  process.exit(1);
}

let raw: string;
try {
  raw = readFileSync(SOURCE, "utf8");
} catch (err) {
  fail(`could not be read from ${SOURCE}: ${(err as Error).message}`);
}

let parsed: unknown;
try {
  parsed = JSON.parse(raw!);
} catch (err) {
  fail(`is not valid JSON: ${(err as Error).message}`);
}

if (typeof parsed !== "object" || parsed === null || Array.isArray(parsed)) {
  fail("must be one JSON object");
}

const url = (parsed as Record<string, unknown>).url;
if (typeof url !== "string" || url.length === 0) {
  fail('must hold a "url" string naming the X post');
}

let address: URL;
try {
  address = new URL(url);
} catch {
  fail(`"url" is not a web address: ${url}`);
}

if (address.protocol !== "https:") {
  fail(`"url" must use https: ${url}`);
}

if (address.hostname !== "x.com" && address.hostname !== "twitter.com") {
  fail(`"url" must point at x.com: ${url}`);
}

if (!/^\/[^/]+\/status\/\d+\/?$/.test(address.pathname)) {
  fail(`"url" must name one X status post: ${url}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });

try {
  copyFileSync(SOURCE, TARGET);
} catch (err) {
  fail(`could not be copied to ${TARGET}: ${(err as Error).message}`);
}

console.log(`Entry post handed in: ${url}`);
