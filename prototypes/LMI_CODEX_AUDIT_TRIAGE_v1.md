# Triage of the Codex empirical audit

_10 September 2026, EQT-417. Every claim checked against the code, then fixed and re-verified in a browser._

**Verdict: it did the job properly.** It drove the site rather than reading the CSS and inferring. It refused to call things WCAG violations without evidence, it distinguished a style-derived ratio from a raster sample, it said plainly what it had not tested, and it corrected three factual errors in the brief I wrote. That is what a second reviewer is for.

---

## Confirmed and fixed

Each was reproduced in the code, fixed, and then re-tested in a headless browser. Evidence is the verification run, not the change.

| # | Defect | Fix | Verified |
|---|---|---|---|
| 1 | Four home links pointed at `/courses/lean-six-sigma/` and two siblings. No such routes exist, so all four 404, including the hero CTA "Explore the belt pathway". | Repointed to the `/methods/<family>/` routes that exist. | All three now HTTP 200 |
| 2 | The skip link is the first keyboard stop on all 53 routes and stayed 1x1px and clipped when focused. | Added a `:focus` reveal: fixed position above the header, navy on white, cyan focus ring. | Focused link measures 158x48px |
| 3 | `#main` did not exist on four policy pages, so the skip link pointed at nothing. | Added `id="main"` to each. | Present on all four |
| 4 | `.chev` on the pale tint ground was still `#2E6CB5` at 4.44:1. My earlier fix covered only `.eyebrow`. | Extended the rule to `.chev` and its underline on `.g-tint`. | Navy on tint, 10.18:1 |
| 5 | The desktop header overflowed between 821px and about 990px, because the hamburger did not appear until 820. | Nav breakpoint moved to 1024 in both the CSS and the JS, kept separate from the grid breakpoints. | No overflow at 821, 884, 1000, 1024, 1025, 1200 |
| 6 | Escape on a dropdown closed it and immediately reopened it, because focusing the chevron fired `focusin` on the same item. A bug in the nav I wrote. | A `dismissing` flag suppresses the reopen for one tick. | One Escape closes and it stays closed |
| 7 | Keyboard focus walked out of the open mobile menu onto the page underneath, where the focused link was completely covered. | The page behind the overlay is `inert` while it is open, including the skip link and logo, and Escape closes it and restores focus to the hamburger. | Contained over 40 consecutive tabs |
| 8 | Contact form had six fields with an `id` and no `name`. A wired endpoint would have received nothing. | All six named. | 6 name attributes |
| 9 | `.signal` unused across 53 routes, 3.84:1 if adopted. | Removed. | Gone |
| 10 | `400-italic` font face imported, nothing uses italic at weight 400. | Import removed. `.caption` and `.quote` both run at 500. | Build clean |

Full regression after all ten: 53 routes, no thin or empty pages, **318 width checks across 390, 768, 821, 884, 1024 and 1440 with no horizontal overflow anywhere**.

---

## Confirmed, left for you

These are decisions, not defects.

- **Insights filter buttons are inert.** They carry `aria-pressed` and no handler, so the state is a lie by mouse as well as keyboard. Either wire the filtering or remove the buttons. Wiring them needs content that does not exist yet, so I have not guessed.
- **The cyan accent at 2.24:1 on the tint band and 2.70:1 on white.** Codex suggests `#007FA3`, which gives about 3.82:1 and 4.60:1. Reasonable, but it changes a brand token, and its own classification is fair: the icons sit beside headings and explanatory text, so the graphic is currently redundant to understanding. It becomes a real failure the moment the AESQ-style diagrams carry meaning in the artwork itself.
- **No sitemap, canonicals, Open Graph or structured data.** All launch items. `Course` and `Organization` schema are worth it once the credential facts are settled, and not before, since the schema would encode the same contradictions the other review found.
- **`/robots.txt` and the missing `/sitemap.xml`.** Launch config.
- **The contact form endpoint**, and removing the "not wired to a backend yet" line before production. I appended "Remove this line at launch" to it so it cannot ship silently.

---

## Where it corrected me

Three factual errors in the brief I wrote, all found by testing rather than by reading.

**Sector tab arrow keys.** My brief said "I suspect not, only click is wired." They are wired. `index.astro:359` handles ArrowUp, ArrowDown, ArrowLeft and ArrowRight with a roving tab stop. I asserted a suspicion as a likely finding and it was wrong.

**The longest course title.** I said 72 characters. The longest course card title is 35, "AI-Enabled Improvement Practitioner". The 72 I quoted was the longest `metaTitle`, which is a different string in a different place. I conflated them.

**Font loading.** I said every page pays for all the imported faces. It does not. `@fontsource` splits each family by `unicode-range`, so the build references 39 WOFF2 files but an English page downloads about six. Codex measured 119,320 bytes actually requested. My claim was too broad.

---

## Where it was right to hold back

Worth noting, because it is the difference between an audit and a list.

It declined to call the 821px overflow a 200% zoom or reflow failure without running actual zoom. It declined to call the double-Escape a 1.4.13 violation. It declined to call the low cyan contrast a blanket WCAG failure while the icons remain redundant to text. It said outright that Lighthouse, real browser zoom and reduced-motion emulation were not run rather than implying coverage.

The three outstanding checks are still outstanding: actual 200% browser zoom, reduced-motion under an emulated preference, and Lighthouse. Its tooling could not do them. Worth granting the Chrome and Playwright permission it asked for, or I can run them here.

---

## What is now blocking

Nothing technical. The remaining work on this branch is the copy and product decisions from the other review, and they all wait on the same thing: writing down what each credential actually requires and who assesses it.
