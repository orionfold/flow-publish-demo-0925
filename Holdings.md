---
title: Holdings
tags: [portfolio, parameters, night-shift]
---
# Portfolio inputs

**Illustrative business inputs.** Edit the named table using its **Open in the table editor** control. **View ▸ Edit Table** opens the first table. Save the input document, then run the Jobs on [[Portfolio Dashboard]]; its refreshed views read these saved rows.

## Holdings

| symbol | shares | cost | bought |
| --- | --- | --- | --- |
| AAPL | 40 | 267.61 | 2026-04-27 |
| MSFT | 18 | 424.82 | 2026-04-27 |
| NVDA | 60 | 216.61 | 2026-04-27 |
| AMZN | 35 | 261.12 | 2026-04-27 |
| GOOGL | 30 | 350.34 | 2026-04-27 |
| META | 12 | 678.62 | 2026-04-27 |
| TSLA | 20 | 378.67 | 2026-04-27 |
| BRK-B | 15 | 472.81 | 2026-04-27 |
| AVGO | 22 | 418.20 | 2026-04-27 |
| JPM | 25 | 311.63 | 2026-04-27 |

## Macros

| symbol | name |
| --- | --- |
| ^GSPC | S&P 500 |
| ^IXIC | Nasdaq Composite |
| ^VIX | VIX |
| ^TNX | 10-year Treasury yield |
| DX-Y.NYB | US dollar index |
| GC=F | Gold |
| CL=F | Crude oil |
| BTC-USD | Bitcoin |

## Settings

| key | value |
| --- | --- |
| currency | USD |
| cash | 12500 |
| benchmark | ^GSPC |
| focus | NVDA |

## About these inputs

This is the one file you edit. The **Holdings** table records positions, **Macros** lists indicators, and **Settings** holds cash and display preferences. [[Portfolio Dashboard]] reads this file each night and redraws its holdings table from it, and [[Portfolio Refresh]] reads it to know which prices to fetch.

## What each field means

| Field | What it is | Example |
| --- | --- | --- |
| `symbol` | The ticker as Yahoo Finance spells it. A class share uses a hyphen: `BRK-B`. | `NVDA` |
| `shares` | How many you hold. Fractions are fine: `12.5`. | `60` |
| `cost` | Your average cost per share, in `currency`. The dashboard's gain and loss figures are measured from it. | `118.75` |
| `bought` | When you bought, or when you last added. Kept for your own record; nothing computes on it. | `2025-11-20` |
| `cash` | Cash held beside the positions. Counted in the portfolio total and allocation chart; excluded from the historical fixed-basket price comparison. | `12500` |
| `benchmark` | The index the one-month line compares against. | `^GSPC` |
| `focus` | The one holding drawn as candlesticks. | `NVDA` |
| `macros` | The indicators in the macro table. Use a supported Yahoo Finance symbol and check its units. Price changes and yield changes are not economically equivalent. | `^TNX` |

## Make it yours

- **Add a stock.** Choose **View ▸ Edit Table** and add a **Holdings** row with the symbol, shares, average cost and purchase date, then save. The next successful price refresh includes it.
- **Remove a stock.** Delete its line. That is all.
- **Change a lot.** Edit `shares` and `cost` in place. If you added to a position, put the new average cost.
- **Track a different indicator.** Replace a `macros` line. A currency pair is `EURUSD=X`; a sector fund is its ticker, `XLK`.

These lots are illustrative and are not a recommended allocation. Cost is an entered example basis, not a verified purchase record. This example assumes positive long positions quoted in USD; it does not convert currencies or calculate transaction-based investment returns.
