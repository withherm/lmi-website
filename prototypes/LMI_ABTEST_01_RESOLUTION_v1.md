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
_Resolves EQT-299. Authored Cowork, 2026-06-12. Vault copy: `Docs/LMI/LMI_ABTEST_01_RESOLUTION_v1.md`._
