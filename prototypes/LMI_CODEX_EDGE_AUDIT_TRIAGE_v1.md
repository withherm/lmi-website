# TRIAGE: CODEX DRAWN-EDGE AUDIT

11 September 2026, EQT-417. Audit ran against `94dbf76`. Fixes below.

---

## Both confirmed defects were real. Both fixed.

### 1. Form boundaries at 1.29:1

**Confirmed.** All seven form controls computed to `1px rgba(31,50,104,0.14)`.
The credential field carried its own 2px steel-blue rule, but the shared
`input[type=text]` rule sits later in the same file at equal specificity and
reset it. The 2px steel blue never rendered anywhere.

**Fixed.** One form boundary for the whole site, 2px steel blue, and the
duplicate credential rule is gone so there is nothing left to override it.
Verified by computed style: 35 form-control observations across 53 routes at
five widths, all `2px rgb(91,135,192)`, 3.70:1 on white.

**The lesson is mine.** I measured the token and reported 3.70:1 as if it were
on the page. Codex read `getComputedStyle` and found the rule had been reset.
A contrast figure taken from a stylesheet rather than from the rendered element
is not a measurement.

### 2. `background-clip` reset by a later shorthand

**Confirmed.** 41 of 134 drawn containers on nine routes computed to
`border-box`. A `background:` shorthand resets `background-clip`, so every
later fill declaration silently undid the clipping and the fill painted under
the transparent border, leaving a rim outside the drawn line.

**Fixed.** Every drawn container now uses `background-color`, including the
ones in `base.css` that happened to be safe only because of file order. Codex
was right that moving the generated file later would not have been enough,
because `.g-wash .card-tint` wins on specificity regardless.

Verified: 2355 drawn-container observations across 53 routes at five widths,
all `padding-box`, none `border-box`. A 3x screenshot of the credential card on
the washed band shows the white rim gone.

---

## Two things it found that I would not have

- **`.panel` matched no element on any of the 53 routes.** Dead selector,
  dead pooling rule, and one entry in the generator's list. All removed.
- **Nine tokens defined and never referenced**, including `--edge-blue`. That
  one was an active trap: the generator hardcodes its colours into the SVG
  paths, so anyone editing `--edge-blue` to recolour the outline would change
  nothing and lose an hour. Removed, and `tokens.css` now says where the
  colours actually live.

---

## Checks Codex could not run, closed here

- **WCAG 1.4.4, text at 200%.** Root font size doubled at 1280px: no horizontal
  overflow on any of the 53 routes.
- **1.4.10 at 400% zoom** is the 320px viewport test, which passed. 1280 CSS px
  at 400% is 320 CSS px. Not a separate test.
- **3x visual on the washed surfaces.** No spill outside any filtered element
  and no rim outside the drawn line.

---

## One claim withdrawn

I told Herman the path edges made the site slightly faster, from 365ms to
339ms over 20 frames. Codex could not reproduce it and was right not to.

Re-measured with ten samples per arm instead of three: the current build scrolls
at a median 342ms with the drawn system and 329ms without it, ranges 322 to 349
and 319 to 333. So the drawn system **costs** about 0.6ms per frame rather than
saving anything, and my original figure compared two builds on three noisy
samples each in a headless container.

The cost is small enough to keep the treatment. The claim was wrong and is
withdrawn.

---

## Still open

- Exhaustive hover coverage and raster focus-indicator checks at mobile widths.
- Real browser zoom stepping rather than viewport equivalence.

Neither blocks anything. Both are worth a pass before launch.
