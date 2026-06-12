# LMI AB-Test 01 — Resolution & Rebuild Spec (v1)

**STOP — this file is the complete, self-contained spec for the LMI home rebuild (Linear EQT-299). Do not hunt for other prompts. Do not open the GOS vault (you have no access to it, and you do not need it). Read this file plus `prototypes/LMI_DESIGN_LEARNINGS_v1.md` (its 2026-06-12 reversal block governs). Touch only the LMI home page, the footer/policy pages, and the scaffold font config named below. Show your plan before writing code (plan-gate). Do not generate images. Do not self-mark the Linear issue Done.**

Context: two home variants were built under EQT-299 (Codex = A, Claude = B). Herman reviewed the renders and chose. The two design-system reversals in §2 are ALREADY committed to `main` (`prototypes/LMI_DESIGN_LEARNINGS_v1.md` + the brand system) — read them, don't re-litigate them.

---

## 1. Verdict — which variant wins per section

| Slide | Section | Winner |
|---|---|---|
| Hero | Hero | **Claude B** |
| Our Difference | **Claude B** |
| The 4 offers | **Claude B** |
| Belt trainline | **Claude B** |
| Highlights | **Claude B** |
| Org / credential block | **Claude B** |
| Sector contextualisation | **Claude B** |
| Proof strip | **Codex A** |
| Bottom trainline | **Claude B** |

Direction: **build on Claude B**, lift the proof strip from Codex A.

---

## 2. Two locked reversals (ALREADY on main — apply, do not revert)

### 2.1 Colour — CRIMSON-LED, cobalt minor
Reference = Herman's live LMI site (charcoal headings, crimson accents, NOT crimson headings).

- **Accent = Crimson `#A51C30`**: logo mark, primary buttons (Get Started / Get in touch), text links + their underline, eyebrows (text + dot), sparing inline keyword emphasis. Crimson buttons are on-brand.
- **Structure / headings / body = charcoal-navy.** Dark Slate `#2C3E50` headings/structure, Ink `#161616` / `#2C2C2C` body. Headings never crimson.
- **Cobalt `#103E8C` = minor.** Rare secondary use, if at all. No longer the default accent.
- **Grounds = white + grey/charcoal** (like EQUIBT). No blue/Pale-Sky section fills. Saturated colour is for accents, not panels.

### 2.2 Type — ALL-MONTSERRAT (no Lora)
- Montserrat for headings AND body. No Lora anywhere. Deliberate LMI exception to the portfolio Montserrat + Lora.
- **Scaffold fix (do this first):** the scaffold ships `@fontsource/lato` + `@fontsource/source-serif-4`. Swap to `@fontsource/montserrat` only — `package.json` deps, the font imports, and the `--font-*` tokens in `tokens.css`. Do NOT add Lora. (The original EQT-299 brief said Montserrat + Lora; that is now wrong for LMI — this overrides it.)

---

## 3. Site-wide changes (apply across the home build)

- **Photography, not OE-method graphics.** Add folder/photo realism for tangibility. Swap OE-method imagery for LMI-branded photography. (Do not generate images; use existing assets or leave captioned placeholders.)
- **Explainer / methodology videos as a content type.** Reserve slots for short explainer videos (hero-adjacent and a methods section) so the site teaches the methodologies.
- **Animated highlight-box effect:** reuse the animated reveal from the EQUIBT flagship card. ALL highlight boxes use the same effect.
- **Belt trainline redraw:**
  - Straight line, not EQUIBT's wobble.
  - Small step-up per belt level to show progression.
  - Bigger dots, sized to carry the belt badge (badges are recognisable — use them).
  - Selected station = solid belt colour (Yellow `#E8B833` / Green `#2E7D52` / Black `#1C1C1C`), NOT blue.
- **Remove "Delivered in English and 中文 across the Asia-Pacific"** — AU audience.
- **Remove Certizio** — not ready.
- **Remove any LeanMethods.org mention** — do not name it, do not say "not ready yet".
- **Beef up the two-org prose** — currently too thin.

## 4. Per-section detail

- **Hero:** Claude B layout. Crimson-led colour, charcoal H1, all-Montserrat.
- **Our Difference:** Claude B. Rename heading "the difference" → **"Our difference"**.
- **4 offers:** Claude B, but the lines and cards are too weak for four important offers — strengthen weight/contrast/containment so they read as headline offers, not list items.
- **Belt trainline:** see redraw rules in §3.
- **Highlights:** Claude B. More top/bottom padding. Animated highlight-box effect. Drop the bilingual line.
- **Org / credential block:** Claude B. Remove Certizio and LeanMethods.org. Expand the two-org prose.
- **Sector contextualisation:** Claude B, but reuse the **EQUIBT industry-hub format**. Explain how each LMI program contextualises for the sector.
- **Proof strip:** Codex A. Rename "Proof" → **"Where our graduates work"**.

## 5. Footer / policy pages — apply to BOTH Home and About footers

Policy set (4 pages): Course Cancellation Policy, Privacy Policy, Terms, Accessibility Statement. Plus a backlink to EQUIBT.com and social logos. These sit in the global footer so they appear on Home and About (and every shared-footer page). Stub bodies are fine if copy isn't ready; **links must not 404**.

---

## 6. Sequencing

1. Fix scaffold fonts to Montserrat-only (§2.2).
2. Rebuild the LMI home on Claude B per §3-§4, proof strip from Codex A.
3. Add the footer policy pages (§5).
4. Plan-gate first. Then provide screenshots for Herman to eyeball — don't trust self-checks.
5. Open PR, comment the URL on EQT-299, move EQT-299 to In Review. Herman merges and sets Done after live verify.

---

## 7. Round 2 — Herman's review of the first build (2026-06-12)

The first build was close but missed several things. Apply all of the below. Note: two of these (numbering, card top-bars) were already EQUIBT hard rules that were missing from `LMI_DESIGN_LEARNINGS_v1.md`; they are now written into its anti-slop checklist. Re-read that section.

1. **Hero — remove the belt ladder.** The hero currently shows the vertical belt ladder beside the copy. Remove it; replace with a plain image slot (captioned placeholder). Not every visitor wants Lean Six Sigma, so the hero must not lead with the belt ladder. The belt ladder belongs ONLY in the Belt Pathway section.
2. **Our Difference — kill the 01/02/03 numbering (hard NO)** and redesign it. It's boring with too much white space. Differentiate the points by icon + heading + copy, tighten the spacing, make it visually engaging. No numerals.
3. **Four offers — remove the crimson top-bars (hard NO).** Cards are clean hairline boxes. Add a creative icon per card (Lean Six Sigma belts, Lean Service Design, Lean Business Analysis, In-house). Accent via icon and link, never a top-stripe.
4. **Belt pathway — make it an ascending stair.** It still renders as a flat horizontal row. Step each station up from the one before (Yellow at the foot to Master Black at the top). Remove the outer circle ring around each belt badge — show just the rounded-square badge, no enclosing circle. Make the badge outline strokes THICKER, matching Herman's supplied badge artwork. Apply to both trainlines.
5. **Highlights — redesign, it's boring.** Right now it's three text cards that look like every other section. Differentiate it visually (distinct layout + the animated highlight-box reveal from the EQUIBT flagship card). It must not read as a repeat of the sections above it.
6. **Body text — Montserrat 500, near-black `#161616`.** Current body is thin/light-grey and renders fuzzy. Thicken and darken it site-wide.
7. **Eyebrows on dark sections — fix contrast.** The crimson eyebrow is unreadable on the dark navy band. On dark grounds use a light tint (off-white / pale crimson) so the eyebrow reads. Crimson eyebrows are for light grounds only.
8. **Contextualised training — rebuild as the EQUIBT industry-hub SELECTOR.** This was the original ask and it's currently static cards. Build the interactive sector selector (tabs per sector, like EQUIBT /industries). For each sector show **Common challenges** (a list) and **"Context we include in training"** (the LMI analogue of EQUIBT's "Where to start"). Both are currently missing.
9. **Proof / "Where our graduates work" — add the client logo wall.** It currently shows only sector tag chips. Add the monochrome client logo wall (neutral placeholder marks until real logos are cleared; client names anonymised). Static grid, never a carousel.
10. **Add an EQUIBT handover block above the footer.** Reciprocal of the LMI handover that sits on EQUIBT pages: a short "Lean Methods Institute is the training division of EQUIBT" block with a link to equibt.com, placed above the footer. Currently missing.

Re-screenshot the hero, the Our Difference section, the four offers, both trainlines, Highlights, the contextualised-training selector, the proof/logo-wall, and the EQUIBT handover. Still no PR until Herman approves round 2.

---

## 8. Round 3 — Herman's review of the round-2 build (2026-06-12)

Round 2 landed 8 of 10. Signed off: Our Difference (numbering gone), four offers (hairline boxes + distinct icons), body weight, Highlights distinctiveness, the sector-selector structure, both trainlines ascending, badges as rounded squares. Apply the fixes below. Touch only the listed sections — do not regress the rest.

1. **Section rhythm / dead space.** Two adjacent white sections (hero + Our Difference) read flat with large empty quadrants. **Do NOT add hairline dividers.** Adopt EQUIBT's alternating-ground pattern (`section white` / `section beige` equivalent): no two adjacent light sections share a ground. Set Our Difference to the pale-grey ground, flip Four Offers to white, continue alternating down the page; the dark navy sections (Highlights, Proof) stay as punctuation. Tighten section heights so heading and content sit in one balanced composition — no empty bands.

2. **Our Difference — restructure + reword.**
   - Layout: the three tiles bleed off the RIGHT page edge and cascade — top tile furthest left, each tile below indented progressively further right, stepping rightward down the stack. This fills the left dead space.
   - **Remove the gradient wash** on the featured tile. If marking one tile as featured, use a flat crimson hairline border + barely-there flat crimson tint. No gradient (reads SaaS, not practitioner-authority).
   - Headers are too generic (Practitioner-led / AI-enabled / Evidence-first). Reword to **benefit/outcome, not what-we-do**. Draft options (pick one each; Zoe can refine):
     - Practitioner-led → "Skills that hold up in live work" / "Capability that survives the messy reality" / "Methods that work under pressure"
     - AI-enabled → "Faster analysis without losing rigour" / "AI that speeds the work, not the method" / "AI built in without weakening the discipline"
     - Evidence-first → "Decisions your team can defend" / "Improvements that repeat, not one-offs" / "Results you can trace to the action"

3. **Belt badges — true squircles.** Herman's supplied belt icons are squircle (superellipse) shapes, NOT rounded rectangles. Use the supplied squircle assets for ALL belt badges (YB/GB/BB/MBB): consistent outer squircle, belt letter/stroke inside, same outside shape and inside stroke across all four. Do not redraw as rounded-rects.

4. **Belt pathway — actual stepped stairs, not a diagonal line.** The current rising straight line is wrong. Build discrete stair treads (reference: a 5-level "stairs with arrow steps" diagram) — each belt one step up, badges sitting on the steps. The connecting form must read as a staircase, not one sloped line, and must not cut through card content. Apply to both trainlines; the compact bottom one already reads cleanly — match its tidiness.

5. **Contextualised training selector — add sector icons.** Like EQUIBT `/industries`, each sector tab in the left rail carries an icon. Reference: `src/components/icons/Icon.astro` as used in EQUIBT `src/pages/industries/index.astro` (each sector object has an `icon:` field). Add an icon to Corporate services, Government, Financial services, Healthcare and education.

6. **Proof — TWO separate walls (Herman's call).**
   - Wall A "Where our graduates work": keep, make it **BIGGER** (~12–15 tiles, stronger presence). Anonymised monochrome descriptors, static grid.
   - Wall B "Organisations we've trained" (clients): NEW, separate wall modelled on EQUIBT's client logo wall — reference `about.astro` §7 (`.about-logo-marks`, 15 monochrome logo marks, white ground). Ships with placeholder/monochrome logo slots now; real cleared logos drop in later. **Anonymisation rule: no named or recognisable client logos until cleared.**

7. **EQUIBT handover — rebuild, it's weak.** Model on EQUIBT's story-framed handover: reference `src/pages/about.astro` lines 168–178 (`.about-lmi`, eyebrow "OUR TRAINING DIVISION", real H2, a narrative paragraph on why the division exists, the logo, a text link). Build the reciprocal: eyebrow "PART OF EQUIBT GROUP", an H2, a narrative paragraph (LMI is EQUIBT's specialist training division; the same Lean + AI methods, taught to your team), the EQUIBT wordmark, and a text link to equibt.com. Replace the current thin two-line card.

Re-screenshot: full page (to show the alternating grounds), Our Difference, both trainlines, the sector selector, both proof walls, the EQUIBT handover. Anti-slop pass holds (no numbering, no top-bars, no gradient featured-card, no carousel, body Montserrat 500 `#161616`, dark-ground eyebrows light-tinted) — evidence-based screenshots, not self-cert. Keep on `codex/eqt-299-lmi-rebuild`. No PR, no Linear updates until Herman approves round 3.

---
_Resolves EQT-299. Authored Cowork, 2026-06-12 (rounds 2 and 3 appended same day). Vault copy: `Docs/LMI/LMI_ABTEST_01_RESOLUTION_v1.md`._
