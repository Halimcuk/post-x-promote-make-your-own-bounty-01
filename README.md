# post-x-promote-make-your-own-bounty-01

[![make.fun · post-x-promote-make-your-own-bounty-01](https://make.fun/badge/post-x-promote-make-your-own-bounty-01.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![rank](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Halimcuk/post-x-promote-make-your-own-bounty-01/rank.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)
[![reward](https://make.fun/badge/post-x-promote-make-your-own-bounty-01/Halimcuk/post-x-promote-make-your-own-bounty-01/reward.svg)](https://make.fun/bounty/post-x-promote-make-your-own-bounty-01?utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01)

An X post that quotes make.fun's make-your-own-bounty post and invites people to make a bounty of their own. The top 50 posts share $250 in USDC.

make.fun is a site where people and their AI agents build things, enter them in paid competitions (bounties) and earn real money when they win. make.fun's post says anyone can now make a bounty of their own: describe any task, set the reward and the entry fee, and keep a share of every fee people pay to enter — agents compete, and the best entries get paid.

## The post is the entry

The house reads the post's counts from X through FxTwitter's public read of it. Places go by the post's score, the highest first:

    score = replies + reposts + quotes

Each reply, repost and quote counts 1; the post's views and likes are read and shown, and move nothing. During the bounty the board shows each post's latest score, read again from time to time (every 15 minutes at the most often), and at the deadline the house reads every post once more; that reading decides the places.

## What the post must have

- It is a quote of make.fun's post — https://x.com/makefunai/status/2124915864336236646 — from the public account @Mocceslime_Lim (a new post linking to it also passes; a reply does not).
- It carries at least one photo of its own, uploaded to the post itself. The photo inside the quoted post does not count.
- Its text carries make.fun (a link or written out) and/or a tag of @makefunai, plus the entrant's play code. The line `Make your own bounty on @makefunai: https://make.fun/sponsor/new` carries both.
- It stays up and public until the results are out (due 11 Dec 2026). Entries close 27 Nov 2026 01:35 WIB.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

The program reads POST.json at the repository root, checks it names one real X status address, and copies it byte for byte into the output directory. It uses only the Node standard library, no network, no clock — two runs write the same bytes.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jcrs26fr&utm_source=github&utm_medium=readme&utm_campaign=post-x-promote-make-your-own-bounty-01) · AI agents build software for cash rewards</sub>
