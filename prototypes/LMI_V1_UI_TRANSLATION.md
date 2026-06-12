# LMI v1 — UI Component Translation

How every LMI home pattern is built under the locked v1 direction. The LMI equivalent of EQUIBT's `prototypes/explorations/EQUIBT_V6X_UI_TRANSLATION.md`. Reference for the Codex brief; home page first, the rest of the site inherits.

_Authority order: where this doc and the built home (`src/pages/index.astro`, `src/styles/home.css`, `src/styles/base.css`) disagree, the build + `prototypes/LMI_DESIGN_LEARNINGS_v1.md` win. The design-learnings REVERSAL block (colour/type) and BUILD DECISIONS block (components, rounds 2-3) govern this doc. Per-round detail: `LMI_ABTEST_01_RESOLUTION_v1.md` §1-6 (resolution), §7 (round 2), §8 (round 3)._

## The governing principle

LMI inherits EQUIBT v6x's DNA — open editorial layout on 1px hairlines, a box must be earned, one accent used with discipline — and diverges deliberately on **colour and photography, not fonts or structure**. The AB-test (EQT-299) settled the look: build on the **Claude B** variant for every section, lift the proof strip from **Codex A**.

Two reversals govern everything below (both committed to `main`):

1. **Crimson-led, cobalt minor.** Accent = **Crimson `#A51C30`** (logo, primary buttons, text links + underline, eyebrows, sparing inline emphasis). Structure / headings = **charcoal-navy** (Dark Slate `#2C3E50` / Ink `#161616`); headings are never crimson. Cobalt `#103E8C` is demoted to rare minor use. Grounds are **white + grey/charcoal**, no blue fills. This reverses the 2026-06-11 cobalt-single-accent system.
2. **All-Montserrat.** Montserrat for headings AND body, **no Lora**. A deliberate LMI exception to the portfolio Montserrat + Lora lock; LMI differentiates on colour + photography, not shared fonts. Scaffold fix (EQT-277): swap `@fontsource/lato` + `@fontsource/source-serif-4` for `@fontsource/montserrat` only.

## Global rules

| Element | Treatment |
|---|---|
| Section grounds | **White and pale-grey only, strictly alternating** — no two adjacent light sections share a ground. Dark navy sections are punctuation (max sparing use). **No hairline dividers between sections**; the ground change does the separation. (Root cause of the round-2 dead-space miss: heading-left / content-right layouts left large empty quadrants. Tighten section heights; heading + content form one balanced composition.) |
| Accent | Crimson `#A51C30` only. Lives in the eyebrow (text + dot), text links + underline, the icon accent, and primary buttons. Never on headings. |
| Eyebrows | Crimson dot + ALL-CAPS Montserrat on **light** grounds. On **dark** grounds switch to a light tint (off-white / pale crimson-tint) — crimson eyebrow text fails contrast on dark navy. |
| Body copy | **Montserrat 500, near-black `#161616`.** Never Montserrat 400 / mid-grey — it renders fuzzy. |
| Cards | Clean 1px hairline boxes (~16px radius, no shadow). Hover = border-darken + small lift. **No coloured top-bar, no left-rule, no numbering.** Accent lives in the icon/link, never on the card edge. **No gradient on a featured/active card** — mark it with a flat crimson hairline border + barely-there flat crimson tint. |
| Buttons | Crimson solid primary (e.g. "Get in touch") + the crimson `›` chevron text link (underline draws left-to-right under the text, then the chevron nudges). CTA wording = "Get in touch" (async), never "Book a discovery call" (no one is staffed for calls). |
| Motion | One minimal section reveal (fade + ~8px rise, once, reduced-motion safe). No carousels, no parallax, no load-in theatre. |

## Component-by-component (LMI home)

| Component | Treatment |
|---|---|
| **Hero** | Claude B layout: editorial copy left (crimson eyebrow `LEAN X AI TRAINING`, charcoal H1 "We build lean, AI-capable teams.", body, crimson "Explore courses" button + "Get in touch" chevron, explainer-video slot) + a **plain captioned image slot** right. **No belt ladder in the hero** (round 2): not every visitor wants Lean Six Sigma, so the hero must not lead with the belt signal. The belt ladder lives ONLY in the Belt Pathway section. Image slot = captioned placeholder until art-directed LMI photography is cleared (do not generate images). |
| **Our Difference** | Renamed from "the difference" → "Our difference". Icon + heading + copy points, **no `01/02/03` numbering**. Layout: tiles **bleed off the right page edge and cascade** (top tile furthest left, each below stepped progressively right) to balance the heading-left column and kill dead space. Headers are **benefit/outcome, not what-we-do** (e.g. "Decisions your team can defend", not "Evidence-first"). Featured tile = flat crimson hairline + faint flat tint, **never a gradient wash**. |
| **Four offers** | Clean 1px hairline cards, **no crimson top-bars**, a distinct line-art icon per card (Lean Six Sigma belts, Lean Service Design, Lean Business Analysis, In-house). Accent via icon + link only. Strong enough weight/containment to read as headline offers, not list items. |
| **Belt pathway** | The LMI signature motif, reusing EQUIBT's rule-17/trainline mechanic (proximity, hover-persist, keyboard, touch, default Green). Rendered as an **ascending stepped staircase** (discrete treads, each belt one step up Yellow → Master Black), NOT a flat row and NOT a single sloped diagonal line; the connector must not cut through card content. Badges = **true squircle (superellipse, SVG path / clip-path, not `border-radius`)**, drawn as a **thick line-art stroke** in the belt colour, white/transparent fill, belt letter inside, identical shape + stroke weight across all four (YB/GB/BB/MBB). No outer circle ring. Selected-state convention: the active belt fills solid in its belt colour; the rest stay thick-stroked outlines. Yellow = Participate/awareness, not "start a project". Two trainlines on the page (main detailed + compact "next step"). |
| **Highlights** | Distinct flagship layout (NOT another card row): a dark navy section as punctuation, the animated highlight-box reveal from the EQUIBT flagship card, light-tint eyebrow for contrast. Generous top/bottom padding. |
| **Contextualised training** | The **EQUIBT industry-hub selector** (interactive sector tabs, left rail), not static cards. Each sector tab carries a leading **line-art icon** (crimson active / charcoal inactive). Per sector: **"Common challenges"** (list) + **"Context we include in training"** (the LMI analogue of EQUIBT's "Where to start"). Sectors: Corporate services, Government, Financial services, Healthcare and education. |
| **Proof — two walls** | (1) **"Where our graduates work"**: a large anonymised monochrome descriptor grid (~12-15 tiles), static, never a carousel. (2) **"Organisations we've trained" (CLIENTS)**: a separate monochrome client-logo wall modelled on EQUIBT's about-page wall (`.about-logo-marks`, ~15 marks, white ground). **Placeholder/monochrome marks until real logos are cleared; no named or recognisable client logos until then** (anonymisation rule). The proof strip styling is lifted from Codex A. |
| **EQUIBT handover** | A story-framed block above the footer (reciprocal of the "OUR TRAINING DIVISION" block EQUIBT runs on its pages): eyebrow `PART OF EQUIBT GROUP`, an H2, a narrative paragraph (LMI is EQUIBT's specialist training division; the same Lean + AI methods, taught to your team, so the capability stays in-house), the EQUIBT wordmark, a chevron text link "Explore advisory at EQUIBT ›" → equibt.com. Not a thin two-line card. |
| **Footer** | Pure white. Global footer carries the four policy links (Course Cancellation Policy, Privacy Policy, Terms, Accessibility Statement — stub bodies fine, links must not 404), a backlink to EQUIBT.com, social logos, and the ABN line. Shared across Home and About. Removed: Certizio, LeanMethods.org, the EN / 中文 line. |

## Lineage — inherited vs diverged

**Inherited from EQUIBT v6x:** Montserrat headings; the 1px hairline container (~16px radius, no shadow); the minimal section reveal; the chevron-link mechanic; the static logo grid (never a carousel); evidence-tied-to-action; one dark moment per page; the rule-17 / trainline proximity mechanic (the belt ladder reuses it); the alternating-ground section rhythm.

**Deliberate divergences (Herman's rulings):**
- Accent is **Crimson** (EQUIBT = terracotta). LMI keeps headings charcoal so they don't compete with the crimson accent.
- Body is **Montserrat** (EQUIBT = Lora). No Lora anywhere on LMI.
- Grounds are **white + grey/charcoal** (EQUIBT = warm beige). No blue/Pale-Sky fills (the cobalt era is reversed).
- The signature object is the **belt ladder / belt pathway** (EQUIBT = the DMAICO trainline): same mechanic, different object.

## Inherited locks (hold from EQUIBT v6x and the brief)

Hero and footer pure white, dark text, light nav; never a dark hero. Firm "we" voice, never name Herman. Verb-first active headlines. No em or en dashes (colon or comma). Anonymised client-type descriptors; no named or recognisable client logos until cleared. AI integration is structural on every page. CTA = "Get in touch". Australian English. Public per-participant pricing (incl GST) on course pages (Stripe self-serve needs visible prices); in-house priced on enquiry.

---
_LMI build reference. Authored Cowork, 2026-06-12, from the AB-test 01 resolution (EQT-299). Mirrors EQUIBT's `EQUIBT_V6X_UI_TRANSLATION.md`. Lives in the `lmi-website` repo so the build agent can read it; this is the single source of truth for component translation._
