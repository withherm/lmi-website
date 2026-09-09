# Codex brief: empirical audit of leanmethods.com.au

_9 September 2026. Companion to `LMI_EXTERNAL_REVIEW_BRIEF_v1.md`, which goes to a separate reviewer for copy, layout and branding. Do not do that work. This brief is the half that has right answers._

---

## Access

**Repo:** `withherm/lmi-website`, branch `eqt-417-design-coherence`
**Preview:** https://d91de323-lmi-website.equibt.workers.dev (public, no auth, one commit behind the branch)
**Stack:** Astro 6 static output, Cloudflare Workers with static assets. 53 routes.

Run it yourself rather than using the preview, it will be faster and current:

```
npm install
npm run build
npx wrangler dev -c dist/server/wrangler.json
```

You have a browser. Use it. `@Browser` against the local dev server. This brief is asking you to **drive the site**, not read the CSS and infer.

---

## Hard constraint

**Report only. Do not commit to `eqt-417-design-coherence`.**

That branch is six verified commits building 53 pages with no thin or empty routes and no overflow at 1440 or 390. A separate reviewer is working the same branch. If two agents write to it, a regression cannot be attributed.

If you want to demonstrate a fix, put it on a branch off `907cf8d` named `codex/eqt-417-audit` and say so. Do not merge it.

Site copy is Claude-authored by house rule. Do not rewrite copy. If copy blocks an accessibility fix, say which string and why.

---

## What to audit

### 1. Keyboard and focus

Every one of these is interactive and none has been tested with a keyboard.

- **Nav dropdowns.** Desktop opens on CSS `:hover`, with `focusin` and `focusout` handlers in `src/layouts/Layout.astro` for keyboard. Tab through the whole nav. Can you reach every dropdown item? Does the panel stay open while focus is inside it? Does Escape close it and return focus to the chevron button? Does focus order match visual order?
- **Mobile accordion.** Below 820, the chevron button toggles. Test at 390. Does the hamburger trap focus while open? Should it?
- **Belt ladder** on the home page. Buttons with `aria-pressed`, driven by click handlers in `src/pages/index.astro`. Operable by keyboard? Does the ladder fill and the detail line update?
- **Sector tabs** on the home page. `role="tab"`, `aria-selected`, `tabindex` roving. Do arrow keys move between tabs, as the tab pattern requires? I suspect not, only click is wired.
- **Filter chips** on `/courses/` and `/insights/`.
- **Skip link.** `<a href="#main" class="sr-only">` is first in the body. Does it become visible on focus? It currently has no `:focus` style, so I expect it does not, which makes it useless.

### 2. Screen reader semantics

- Heading order on every page. Any level skipped.
- The sector tab panel relationship. `aria-controls`, `aria-labelledby`, `hidden`.
- The belt ladder. `aria-pressed` is being used for a selection, which may be the wrong pattern.
- Icons. `src/components/icons/Icon.astro` renders `role="presentation"` and `aria-hidden`. Correct where the icon is decorative beside a heading. Check whether any icon is the only label for something.
- The `.illus` placeholders carry `role="img"` with an `aria-label` describing an image that does not exist yet. Is announcing "Illustration placeholder: ..." better or worse than hiding them until the art lands?
- Form labels on `/contact/`.

### 3. Contrast, measured on rendered pixels

I have computed the token pairs. Two failures are already fixed on the branch: `.filter-label` was `#9A9A9A` on white at 2.81, now charcoal at 8.86; `.eyebrow` on the pale tint ground was 4.44 and is now navy at 10.18.

**Three open questions I could not settle by computation. Measure them rendered and give a verdict.**

1. **The cyan icon accent.** `.hd-acc` is `#35A8DC`. Against white that is 2.70:1, against the `#E3EBF4` card icon band it is 2.24:1. Non-text contrast wants 3:1 for graphics required to understand the content. The accent is not decorative, it carries the meaning of each icon, the special-cause point, the caught defect, the seal. So either it needs to darken, or the case has to be made that the icon reads without it. Which?
2. **Text over `.illus` blocks.** Placeholder label is `#1F3268` on `#C2D4E7`. Fine. But when real illustration lands, any text over it needs checking, and the pattern should be decided now.
3. **`.signal`.** White on `#E8484C` is 3.84:1, below AA. It is currently unused dead CSS. Delete it, or fix it before someone adopts it?

Then sweep the rendered pages for anything I have not thought of.

### 4. Responsive and layout integrity

Verified at 1440 and 390 with no horizontal overflow. Not verified anywhere else.

- 768, 820 and 1024 specifically. 820 is the nav breakpoint and 1024 is a grid breakpoint, so both are where things break.
- Long content. The longest course title is 72 characters, the longest price string is "By application". Check they do not blow out a card.
- 200% browser zoom. Reflow, not horizontal scroll.
- `prefers-reduced-motion`. There are `.reveal` transitions, a `.chev` underline animation and the ladder fill. All claim to be guarded. Verify.

### 5. Head, SEO and structured data

- One `<h1>` per page. Titles unique across all 53. Descriptions present and unique.
- No `| LMI` anywhere. That was shipping in eight titles and is fixed, confirm it is gone.
- Canonicals, `og:` and `twitter:` tags. I believe there are none. Should there be.
- No structured data at all. `Course` and `Organization` schema are the obvious candidates for a training provider, and the course pages have the price, duration and provider to populate them. Worth it?
- `sitemap.xml` and `robots.txt`. `/type-compare/` was removed but check nothing else internal is exposed.

### 6. Performance and code health

- Lighthouse on `/`, `/courses/` and a course page.
- Font loading. Montserrat 500/600/700 and Source Serif 4 400/500 plus both italics are imported through `@fontsource` in the layout, so every page pays for all of them. Is the italic actually used. Is there a subsetting win.
- Anything unused: dead CSS, orphaned components, dependencies in `package.json` that nothing imports.
- Build output size and per-page weight.

---

## Output

One document, ordered by severity, not by section.

For each finding: the file and line or the URL and element, what is wrong, which WCAG criterion or measurable standard it breaks and the measured value, and the concrete fix. If it is a judgement call rather than a violation, say so and argue it.

**Separate confirmed violations from opinions.** A measured 2.24:1 is a fact. "Consider adding structured data" is an opinion. Do not mix them in one list.

End with the three things you would fix first, and why those three.
