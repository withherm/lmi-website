# Lean Methods Institute: empirical audit

10 September 2026. Report only. Tested build: `636571ec0a07f9082e96cb62def3cafc6123bb91`, branch `eqt-417-design-coherence`. Preview: https://6b959d5a-lmi-website.equibt.workers.dev/.

**Three confirmed accessibility failures were found: focus hidden behind the mobile menu, an invisible focused skip link, and normal-sized pathway-link text below 4.5:1.** Four home-page links also reach missing pages. The contact form and Insights filters remain non-functional placeholders.

This is an evidence-backed audit with three outstanding checks, not a WCAG conformance certification. Actual 200% browser zoom, reduced-motion emulation and Lighthouse remain untested. The Browser runtime exposes viewport sizing and keyboard operation but not those controls. Permission to supplement it with Chrome/Playwright and Lighthouse was requested and remains pending. Resizing a viewport is not evidence of actual browser zoom.

The user's later instruction makes the supplied AESQ explainer screenshots the close visual target. That art-direction assessment is included separately from violations below. No site copy was rewritten, no fixes were applied, and no branch, commit or PR was created. While testing, another reviewer added commit `10164ad`, containing two review documents only. The tested site source was unchanged.

## Confirmed WCAG violations, ordered by severity

### 1. Mobile menu lets keyboard focus disappear behind its overlay

**Location:** home page at 390 × 844; hamburger menu and subsequent hero CTA. `src/layouts/Layout.astro:65`, `src/styles/base.css:245`.

**Reproduction:** Tab to the hamburger, Enter to open, Tab through the navigation and expanded Courses section. After the final navigation CTA, Tab reaches the hero's “Get in touch” link underneath the still-open menu. Escape from that hidden link does not close the menu.

**Measured result:** the focused hero link occupies x=24, y=442.07, width=149.06, height=46 CSS pixels. The menu covers x=0, y=80, width=390, height=764. The focused element is completely covered. Hit-testing its centre returns a navigation element instead of the focused link.

**Criterion:** WCAG 2.2 [2.4.11 Focus Not Obscured (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/focus-not-obscured-minimum.html), AA, and [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), AA.

**Fix:** treat this full-screen menu consistently. While open, prevent focus reaching the covered page, support Escape, and restore focus to the hamburger when closed. Alternatively, close the overlay when focus leaves navigation. Adding `aria-modal` alone does not implement any of this. No copy change is necessary.

Evidence: [mobile screenshot](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/08-mobile-focus-hidden.jpg), [focus trace](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/mobile-trace.json).

### 2. The first keyboard stop is invisible on every page

**Location:** shared “Skip to content” link, `src/layouts/Layout.astro:36`; `.sr-only`, `src/styles/base.css:38`.

**Reproduction:** load a page and press Tab once. The skip link receives focus but does not appear.

**Measured result:** focused link remains 1 × 1 CSS pixel with `clip: rect(0px, 0px, 0px, 0px)`. It has no focus-specific reveal rule. The shared element occurs on all 53 routes.

**Criterion:** WCAG [2.4.7 Focus Visible](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html), AA.

**Fix:** give this link a focused state that removes clipping, restores usable dimensions and places it above the header with a visible focus indicator. Keep “Skip to content” unchanged. Also repair its missing targets on the four policy pages listed below.

Evidence: [focused-page capture](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/01-skip-focus.jpg). Its absence is corroborated by the focused element's dimensions and clipping, not inferred from the screenshot alone.

### 3. The pathway link retains the tint-background contrast failure

**Location:** `/courses/lean-six-sigma-green-belt/`, “See the whole Lean Six Sigma pathway ›” in “Where it fits”; `src/pages/courses/[slug].astro:117`.

**Measured result:** live rendered styles are `#2E6CB5` text on the containing section's `#E3EBF4`, 15px, weight 600. WCAG relative-luminance calculation gives **4.443462:1**, below **4.5:1**. At 15px this is normal text, including at weight 600. The eyebrow fix does not fix the adjacent link.

**Criterion:** WCAG [1.4.3 Contrast (Minimum)](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html), AA.

**Fix:** darken links on the tint ground. Existing navy `#1F3268` produces approximately 10.18:1. Audit hover and focus states after changing the shared selector. The course template repeats this construction, but the confirmed measurement here is the Green Belt instance. No string change is necessary.

Evidence: [rendered pathway link](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/16-course-pathway-contrast.jpg). The precise ratio uses live rendered foreground/background colours, not anti-aliased JPEG edge pixels.

## Confirmed functional and layout defects

These are observed failures, not additional asserted WCAG violations.

| Priority | Location | Observed value or failure | Concrete fix |
|---|---|---|---|
| High | Home hero “Explore belt pathways” and three method cards; `src/pages/index.astro:31-33,82` | Four links target three missing routes: `/courses/lean-six-sigma/`, `/courses/lean-service-design/`, `/courses/lean-business-analysis/`. Actual browser navigation produces 404 locally and on the deployed preview. | Point the links to the existing corresponding `/methods/…/` pages, or the existing catalogue anchors if catalogue browsing is the intended destination. Validate the destination after clicking. |
| High before launch | `/contact/`, form; `src/pages/contact.astro:22-46` | Empty submission does nothing. Form prevents submission; no endpoint, field names or required fields are configured. The page explicitly says the form is not wired. | Connect the endpoint, supply names and validation, and implement accessible success/error feedback. Obtain approved missing feedback strings rather than inventing them. |
| Medium | Shared desktop header just above the 820px breakpoint; `src/styles/base.css:171,174,241`, `src/layouts/Layout.astro:60` | At 821px, document width is 990px: 169px overflow. At 884px, overflow is 106px. Header CTA spans approximately x=891.65 to 990.64 and is entirely outside the 884px viewport. | Move the CSS and JS menu breakpoint together to a width at which desktop navigation actually fits, or compact the navigation before that point. Test both sides of the new breakpoint. Do not conceal the problem with overflow clipping. |
| Medium | Desktop About dropdown; `src/layouts/Layout.astro:91-95,109-113` | From a submenu link, first Escape closes then reopens the panel when focus returns to the chevron and its focus handler fires. A second Escape closes it. | Order focus restoration and closure so focus does not reopen the menu, or suppress reopening during dismissal. Verify one Escape leaves it closed and focused on its trigger. |
| Medium | Skip link on `/accessibility-statement/`, `/privacy-policy/`, `/terms/`, `/course-cancellation-policy/`; each page's main element near line 9 | Four `#main` targets do not exist. | Add `id="main"` to each existing main element. This is a broken skip-link mechanism; a whole-page 2.4.1 failure is not established because main landmarks and headings also exist. |
| Medium | `/insights/`, category buttons; `src/pages/insights/index.astro:22-26` | “Lean Six Sigma” does not change results or `aria-pressed` after Enter, Space or a mouse click. All remains selected. | Implement filtering and selection state when content is available, or remove/disable the unavailable interaction. This is not a keyboard-only failure because mouse operation also does nothing. |

The 821/884px defect is established as a responsive layout bug. It is not being relabelled as a confirmed 200%-zoom or WCAG reflow failure without that test. Likewise, the double-Escape defect violates the brief's expected interaction; two-step dismissal is not by itself proof of a WCAG 1.4.13 failure.

Evidence: [deployed 404](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/14-deployed-pathway-404.jpg), [884px header](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/11-home-884-confirmed.jpg), [Escape state](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/03-escape-reopens-menu.jpg), [inert filters](/Users/herman/.codex/visualizations/2026/09/09/01a08714-03db-73d2-9095-5945aaf471de/lmi-eqt-417-audit/09-insights-inert-filters.jpg).

## Section 3: three contrast verdicts

### Cyan icon accent: darken it for meaningful explainer details

Two actual raster samples from the rendered method cards were below 3:1:

| Sample in `12-methods-contrast.jpg` | Foreground pixel | Background pixel | Measured ratio |
|---|---|---|---|
| Special-cause circle, (357,581) | RGB 92,171,212 | RGB 228,235,243 at (180,545) | 2.12:1 |
| Flow arrow, (728,606) | RGB 97,164,209 | Same background | 2.26:1 |

Live styles independently give **2.24:1** for `#35A8DC` on `#E3EBF4`, and **2.70:1** on white. The Browser screenshot interface returned JPEG bytes, even when originally saved with a `.png` filename. The report copies use `.jpg`. Raster samples are approximate because of compression and antialiasing; 2.24 is a style-derived ratio, not a claimed exact raw-pixel measurement.

**Verdict:** darken cyan where it carries an essential point, arrow, defect or distinction. For example, `#007FA3` provides approximately 3.82:1 on the tint and 4.60:1 on white. This is an illustrative candidate, not an applied token change.

**Classification:** the low contrast is confirmed. A blanket WCAG failure across current icons is not: the cards also provide meaningful headings and explanatory text, so the graphic can be redundant to understanding the link/content. [WCAG 1.4.11](https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html) applies to graphical parts required to understand content. In the requested AESQ-style process explainers, meaningful relationships must remain readable without relying on this pale cyan alone. Use dark outlines, labels and arrows as redundant cues.

### Text over illustration blocks: current placeholders pass; future art is untested

Current `.illus` uses navy `#1F3268` on `#C2D4E7`, approximately **8.09:1**. A sampled rendered label pixel, RGB 41,54,86 at (1137,422), against RGB 199,212,229 at (780,380), measured approximately **7.96:1** in the first capture.

**Verdict:** current placeholder text passes. That does not certify text over future watercolour artwork. Keep explanatory labels as HTML beside the illustration or on a solid quiet label panel. Require at least 4.5:1 for normal text, 3:1 for large text, measured at the weakest relevant background. Do not place small labels across variable pale washes.

There are 41 illustration placeholders across 53 routes. Their accessible names accurately announce that they are placeholders; there is no finished image to describe yet. Before launch, replace production notes with actual artwork and appropriate alternatives. Do not simply hide placeholder notes from assistive technology while leaving them visible to everyone else.

### Unused `.signal`: delete the unused selector now

The class has **zero rendered instances across 53 routes**. Its white-on-`#E8484C` style computes to **3.84:1**, below 4.5:1 for its small text. There is no live rendered instance from which to take a pixel sample.

**Verdict:** remove the unused `.signal` selector, `src/styles/base.css:141`. Preserve separately used red tokens and `.signal-quiet`. If the filled badge is later required, introduce it with a passing colour pair and test it then. For reference, white on `#C9363E` computes to approximately 5.15:1. This is preventive maintenance, not a live accessibility violation.

## Art direction: closely match the uploaded AESQ references

**Judgment, following the user's explicit direction:** the target is the illustrated explainer language, not merely a similar blue palette. The site's current clean SVG marks and empty illustration blocks do not deliver that finish.

Use textured navy and mid-blue watercolour forms, slightly irregular dark outlines, pale blue process panels, recognisable people and tools, cyan directional accents and restrained red risk markers. Build connected sequences that show a process, its failure points and its improved outcome. The reference's repeated panels and continuous arrows do more explanatory work than isolated decorative hero pictures.

Carry that treatment through the hero, course illustrations and process diagrams as one consistent family. Match texture, contour weight, character proportions, panel geometry and narrative density closely. Apply it to Lean Methods Institute subjects and existing approved copy; do not transplant AESQ branding or aerospace-specific claims. Red in these illustrations should retain the reference's warning emphasis. Small essential cyan details need the contrast correction above.

For responsive delivery, a dense poster-sized diagram should become legible sequential panels rather than a uniformly shrunken image. Keep text separate from raster art so it can reflow and remain accessible. No artwork or copy was generated in this audit.

## Other recommendations, not confirmed violations

- **Navigation semantics:** the dropdowns use menu/menuitem roles but operate primarily as ordinary website navigation. Prefer disclosure buttons with normal links unless implementing the full menu keyboard pattern. This aligns with the [W3C disclosure-navigation example](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/). Do not call missing menu-pattern arrows a confirmed WCAG violation without assessing the available equivalent keyboard operation.
- **Heading hierarchy:** all pages have exactly one H1, but there are level jumps. Examples include course H1 to “What you will be able to do” H3, related-course H4s, and footer H4 headings. Correct structural levels while preserving visual styling and wording. A skipped number alone is not sufficient evidence of a WCAG violation.
- **Belt semantics:** `aria-pressed` buttons expose selection and work with the keyboard. A radio-group pattern could express exclusive choice more directly, but this is not a confirmed failure of the existing pattern. SVG names duplicate visible belt names in some button names; remove redundant image naming where the text already labels the button.
- **Search metadata:** all 53 titles and descriptions are present and unique; no title uses `| LMI`. No canonicals, Open Graph/Twitter metadata or JSON-LD were found. Add production canonicals and useful social previews before launch. Organization and Course structured data can be useful when it accurately reflects approved visible provider/course information; do not invent prices, dates or offers to complete a schema.
- **Discovery:** deployed `/sitemap.xml` returns 404. `/robots.txt` returns Cloudflare content-signal explanatory comments, with no useful site crawl or sitemap directives in the inspected response. Add a production sitemap and explicit intended crawl behaviour. `/type-compare/` returns 404 as expected. The full internal-link scan found the four broken route links and four skip fragments above; this is not a security exposure scan.

## What was actually tested

| Area | Coverage and result |
|---|---|
| Local execution | Dependency installation completed; production build succeeded, 53 routes, 4.33 seconds reported. Wrangler served the build locally. Local home HTML was byte-for-byte identical to the permanent preview's home HTML. |
| Keyboard navigation | Natural Tab sequence through Courses, focus remaining inside its open dropdown, transition out, About focus and Escape; mobile menu and accordion. Defects above were reproduced. This does not certify every possible key combination. |
| Belt ladder | All four buttons reached by Tab and activated with Enter/Space. Detail text and fill updated to 25%, 50%, 75%, 100%; selected state changed. Visible focus observed. |
| Sector tabs | Right/Down selected Government from Corporate; Left/Up returned to Corporate. Panel content, selected state, roving tab stop and panel relationships updated. The brief's suspected click-only implementation is not present. Home/End did not change selection; those keys are optional in the APG pattern. |
| Course chips | Keyboard activation updates the hash and scrolls to the matching category. These are anchor links, not content filters. |
| Contact labels | All six controls have associated labels. Name/email/organisation autocomplete values are present. Submission wiring is incomplete, as reported. No real enquiry was sent. |
| Semantics | Live DOM on all 53 routes: one H1 each; tab controls/panels checked; no missing image alt attributes found. This was DOM/accessible-tree inspection, not a VoiceOver or NVDA speech-output test. |
| Responsive | All 53 routes at 768, 820 and 1024: 159 document/body width checks, no horizontal document overflow at those exact widths. Representative screenshots inspected. Additional 821/884 tests exposed the header defect. Home also exercised at 1440 and 390. Width checks alone do not prove every element is visually correct. |
| Long cards | “By application” fits. The longest current course-card title is 35 characters, “AI-Enabled Improvement Practitioner”, rather than the brief's claimed 72. It wraps without overflow in the tested 1024px catalogue. No invented 72-character copy was inserted. |
| Contrast | Raster measurements on rendered icons and placeholder label; live computed colours and text sizes on representative templates. This is not a lossless pixel census of every state on all 53 pages. |
| Actual browser zoom | Not tested. Viewport resizing and an ineffective zoom shortcut were not counted as 200% zoom. |
| Reduced motion | Guard rules inspected in source; preference emulation and resulting animation behaviour not tested. |
| Lighthouse | Not run on any of the three requested routes. No scores or Core Web Vitals claims are supplied. |

## Performance and code-health evidence

The built client contains **915,238 bytes of HTML across 53 pages**. The home page is 42,990 bytes raw / 9,420 bytes offline gzip; catalogue 33,524 / 6,472; Green Belt 22,344 / 5,948. Two CSS assets total 39,221 raw bytes. These are build measurements, not network transfer or Lighthouse results.

Font assets include 39 WOFF2 files totalling 549,812 bytes and 39 WOFF files totalling 637,384 bytes. This does **not** mean each page downloads them all. Observed server requests across the browsing session loaded six Latin WOFF2 faces, totalling 119,320 bytes: Montserrat 500/600/700, Source Serif 4 normal 400/500, and italic 500. The home quote actually uses italic 500. The brief's assumption that all imported font files are paid for on every page is therefore too broad.

The 400 italic import appears unused in the inspected site source and is a cleanup candidate. Review Latin-only imports if the approved language coverage permits them, then measure network effects. The unused `.signal` selector and an unused Illus import in the methods index are minor cleanup opportunities. No production dependency was established as safely removable simply because application source did not import it directly. No broad dependency refactor is recommended from this audit.

## Evidence and outstanding work

Screenshots and JSON traces accompany this report. `local-route-audit.json` contains all 53 live-page metadata/heading observations; `local-layout-audit.json` contains the 159 width checks. Pixel sample coordinates refer to the named captures. Original screenshot byte format was preserved and given the correct JPEG extension in this report folder.

The remaining acceptance checks are actual 200% browser zoom, reduced-motion behaviour under an emulated preference, and Lighthouse for `/`, `/courses/` and a course page. They remain outstanding pending the supplemental-tooling answer. No claim that the whole requested audit is complete is made.

## The three fixes I would do first

1. **Prevent hidden keyboard focus behind the mobile menu.** A keyboard user loses both location and access to the focused action while the overlay remains open.
2. **Repair the four home-page links to missing course-family routes.** These break prominent entry paths into the training offer for every input method.
3. **Reveal the focused skip link and repair its four missing targets.** This is a small shared correction with benefit across all 53 pages. The 4.44:1 pathway-link colour fix should follow immediately.
