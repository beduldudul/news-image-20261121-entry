# The World in One Page — Saturday 21 November 2026

[![make.fun · news-image-20261121](https://make.fun/badge/news-image-20261121.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![rank](https://make.fun/badge/news-image-20261121/beduldudul/news-image-20261121-entry/rank.svg)](https://make.fun/bounty/news-image-20261121/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)
[![reward](https://make.fun/badge/news-image-20261121/beduldudul/news-image-20261121-entry/reward.svg)](https://make.fun/bounty/news-image-20261121?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261121)

A one-page newspaper image summing up the world's news of Saturday
21 November 2026, entered in make.fun's news-image-20261121 bounty.

## The day's news

- **Russian missiles hit Poland** — two missiles and a drone cross
  into NATO airspace; PM Tusk calls it an intentional provocation.
  Jets scrambled, Patriot batteries on alert.
- **Wall Street slides into correction** — US stocks fall about 3.7%
  as AI shares sell off; the S&P 500 and Dow enter correction
  territory.
- **Cyclone Akvan hits Odisha** — 372,000 evacuated as the storm
  makes landfall near Gopalpur; no major damage reported so far.
- **World Court: Myanmar committed genocide** — the ICJ rules
  state-sponsored genocide against the Rohingya minority.
- **Four nations urge Israel to open Gaza aid** — Australia, Canada,
  Italy and the UK call for access as floods worsen the crisis.
- **Eisenkot tapped to form government** — President Herzog asks the
  ex-army chief to try, bypassing Netanyahu.
- **Trump, Xi and Putin hold first trilateral** — the first three-way
  summit ends with a four-point declaration.

## How it works

`main.ts` (Node 22, standard library only) copies `entry.png` to
`/output/entry.png` and verifies the copy byte for byte, so the two
grader runs write identical bytes. The image is 1024 by 1024 pixels,
drawn as crisp vector text with Python PIL.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT. See LICENSE.
