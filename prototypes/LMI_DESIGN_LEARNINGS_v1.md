# LMI DESIGN LEARNINGS v1

_Linear: EQT-293. Author: Skye (visual direction). Locked: Herman sign-off 2026-06-11._

_**Status: LOCKED.** This is the canonical design authority for the LMI build, the LMI equivalent of `prototypes/DESIGN_LEARNINGS_v6x.md` in the EQUIBT repo. **It lives here, in the `lmi-website` repo at `prototypes/`, so the build agent can read it; this is the single source of truth.** Reference it before any LMI visual work. It supersedes the draft `LMI_DESIGN_DIRECTION_v1.md` (archived in the GOS vault, 2026-06-11). Proof and exploration artefacts live in the GOS vault at `Docs/LMI/LMI_Website/`: `LMI_HOME_REFERENCE_v1.html` (Option B home, real fonts, working belt ladder, hybrid photography), `LMI_DESIGN_DIRECTION_OPTIONS_v1.html`, `LMI_ACTION_COLOUR_OPTIONS_v1.html`._

---

## REVERSAL — colour + type (Herman, 2026-06-12, AB-test EQT-299 result) — THIS BLOCK GOVERNS

**Decided after Herman reviewed the rendered A/B home variants (Codex A vs Claude B), feedback in the GOS vault at `Docs/LMI/LMI-ABTest-01-Feebback.pptx`, resolved in `Docs/LMI/LMI_ABTEST_01_RESOLUTION_v1.md`. This block overrides ALL colour and typography language below. Where older text says "Cobalt single accent", "crimson removed", "crimson/red banned from buttons and titles", or "Montserrat + Lora", read it as superseded by this.**

**Colour — CRIMSON-LED, cobalt minor.** Trigger: too much blue in the rendered variants. Reference is Herman's live Squarespace LMI site (charcoal headings, crimson accents, NOT crimson headings).
- **Accent = Crimson `#A51C30`** (promoted from logo-mark-only). Used on: logo mark, primary buttons (e.g. Get Started / Get in touch), text links + their underline, eyebrows (text + dot), and sparing inline keyword emphasis. Crimson buttons are now ON-brand; the earlier "red buttons got poor feedback" ban is lifted for LMI.
- **Structure / headings / body = charcoal-navy.** Dark Slate `#2C3E50` for headings and structure; Ink `#161616` / `#2C2C2C` for body. Headings are charcoal, never crimson.
- **Cobalt `#103E8C` = minor.** Demoted from the single accent to rare secondary use, if used at all.
- **Grounds = grey / charcoal, like EQUIBT.** Swap the blue/Pale-Sky section fills for white + grey/charcoal grounds. Reserve saturated colour for accents, not panels.

**Type — ALL-MONTSERRAT.** LMI runs Montserrat for headings AND body. **No Lora.** This is a deliberate LMI exception to the portfolio Montserrat + Lora lock; LMI differentiates from EQUIBT on colour + photography, not shared fonts. Scaffold fix (EQT-277): swap `@fontsource/lato` + `@fontsource/source-serif-4` to `@fontsource/montserrat` only; do not add Lora; update the `--font-*` tokens accordingly.

**Variant verdict:** build on **Claude B** for every section; lift the **proof strip from Codex A**. See the resolution doc for per-section changes (belt trainline redraw, animated highlight boxes, photography over OE graphics, remove Certizio + LeanMethods.org, drop the EN/中文 line, footer policy pages, naming fixes).

---

## DIRECTION CHANGE — visual idiom (Herman, 2026-06-11, later same day)

**The idiom moves from "line-art-led / hand-drawn signature" to a structured, formal, precise system. Hybrid: hand-drawn is retained in ONE place only, the belt / credential badges. Everything else, framework diagrams, program and sector icons, layout, components, is clean architectural line, no wobble.**

Why: Lean Six Sigma is about precision, standardisation and removing variation. A deliberately hand-drawn wobble quietly contradicts the discipline LMI teaches, and reads as informal to the conservative corporate and government buyer. A structured, formal system is on-message and de-risked. The signature shifts from "the hand-drawn idiom" to **the belt ladder + the disciplined Cobalt-on-Pale-Sky system + the Framework Teaching Layer diagram pairs**, with the hand-drawn belt badges as the single warmth/craft token.

**Hero image:** a treated / art-directed AI-generated image with realistic people, graded (Cobalt duotone or a structure overlay) so it reads as deliberate brand craft, not stock. Aspirational, never a "this is our real classroom" claim. A genuine session photo is preferred if available; treated AI is the fallback. The three real-photo trust zones below still hold (faculty, in-house proof, testimonial = genuine, never AI).

This block governs. Where older language below still says "line-art led" or "hand-drawn idiom" as the system signature, read it as superseded by this: structured system, hand-drawn only in the belt badges.

---

## Decisions locked this session (Herman, 2026-06-11)

1. **Action colour = Cobalt `#103E8C`** (hover `#0c2f6b`). Ocean Blue `#0072CE` was trialled and rejected as too bright/cool against the warm ground; Petrol Teal before it was rejected as dull/old. Crimson and red are banned from buttons and titles: a past project got poor user feedback on red buttons.
2. **Section ground = Pale Sky `#E9EEF6`** (a cool light, faintly cobalt-tinted), replacing the original warm beige, which fought the deep blue. Alternates with white.
3. **Highlight tint = Warm wash `#F3ECDD`**, used only on the in-house / callout / key-stat pocket: a single contained patch of warmth where the brand talks to people. (Sage mist was considered and rejected: a new green hue that collides with the Green Belt colour.)
4. **Single accent = Cobalt. Crimson leaves the system entirely** (Herman, "minimise the colours, cleaner with a single colour"). LMI mirrors EQUIBT's single-accent structure: navy line-art + ONE accent + neutrals. Cobalt does everything: buttons, links, chevrons, nav hover, eyebrow text + dot, the active-belt highlight and spine fill, and the one accent per line-art glyph. **Crimson `#A51C30` is removed as a system colour** and survives only inside the actual LMI logo mark (the red square). Not on eyebrows, not on highlights, not in glyphs.
5. **Eyebrow = Cobalt text + Cobalt dot** (the EQUIBT eyebrow idiom, held to one colour). Headings stay near-black ink.
6. **Home hero rhythm = Option B, the belt ladder is the hero** (vertical climb, Yellow at the foot to Master Black at the top). Option A (editorial hero + horizontal belt spine) is retained as the Programs-hub treatment, not wasted.
7. **Photography / imagery** (revised by the Direction Change above). Structured system, not line-art-led. Hero = treated/art-directed AI with realistic people (graded, aspirational). Real captioned photos appear in three trust zones only (faculty, in-house proof, testimonial); those stay genuine, never AI.

**Cascade corrections applied on sign-off (2026-06-11):**
- `LMI_Site_Architecture_v1.html` corrected: the "Crimson doubles as the site-wide conversion colour (all buttons)" note is removed (Cobalt is the conversion colour), and every "Book a discovery call" CTA is now "Get in touch". A header banner on that file points back here as the colour authority.
- `BRAND_SYSTEM.md` (both the Frameworks V12 copy and the Branding/Guidelines v7.0 copy) bumped: the stale LMI palettes (slate-blue / lean-green / amber TBC, and Crimson-hero / Petrol-Teal) are replaced with the Cobalt single-accent system below, pointing here as the source of truth. _Note: two BRAND_SYSTEM.md copies still exist in the vault; consolidation flagged separately._

---

## The brief in one line

Simple to understand, simple to navigate, modern, trustworthy. Not dated, not generic AI-website slop. Motion that projects capability and taste, never decoration. LMI is the training sibling of EQUIBT: shared DNA, deliberate divergence, a touch warmer and more human.

---

## Principles

1. **Editorial calm.** Air, large clean type, restraint. Layout serves the message.
2. **Structured and formal, one family with EQUIBT by type and colour discipline.** Shares the Montserrat + Lora pairing and the single-accent discipline with EQUIBT, but the idiom is precise and structured (see Direction Change), not hand-drawn. Hand-drawn survives only in the belt badges.
3. **Warmth where it earns it, not everywhere.** LMI sells learning to people, so it carries warmth, but the base is cool and credible (Cobalt + Pale Sky). The human warmth lives in three contained places: the Warm-wash callout pocket, the treated hero image, and the captioned trust-zone photography. Trustworthy not stiff, approachable not cheap.
4. **The belt ladder is the signature.** It is the hero motif and the wayfinding spine of the Lean Six Sigma hub, the LMI equivalent of the EQUIBT DMAICO trainline. With the structured-system shift, the signature is the belt ladder + the Cobalt-on-Pale-Sky discipline + the Framework Teaching Layer diagram pairs; the hand-drawn belt badges are the one warmth token.
5. **Evidence, not claims.** Every metric tied to the action that produced it. No floating stat boxes.
6. **Ordered, precise rhythm.** A clear structured grid, deliberate hierarchy, generous whitespace. Precision over decoration (on-message for Lean). One dark moment maximum per page.

---

## Type

Same two families as EQUIBT v6x, on purpose.

> SUPERSEDED by the 2026-06-12 reversal: LMI is ALL-MONTSERRAT, no Lora. Read the four bullets below with Lora replaced by Montserrat throughout.
- **Headings: Montserrat 700**, letter-spacing -0.015em (one notch tighter than EQUIBT's -0.012em so LMI reads as the more energetic sibling). Charcoal `#2C3E50` / `#161616`, never crimson (crimson is the accent, not the heading colour).
- **Body: Montserrat 400/500, ~17px**, line-height 1.5, near-black `#161616` / `#2C2C2C`. (Was Lora 500 19px; Lora dropped 2026-06-12.)
- **Captions / evidence / belt descriptors / testimonial attribution: Montserrat italic or medium.** Functional labels (eyebrows, kickers, belt names, nav, chips) Montserrat. No Lora anywhere.
- **One typeface: Montserrat.** No second or third face.

**Type scale (home reference):** H1 `clamp(36px, 4vw, 54px)` / 1.04; section H2 `clamp(26px, 2.4vw, 33px)` / 1.12; lead 18px; body 15-16px; chip/label 10-11px uppercase.

---

## Palette and colour roles

| Role | Colour | Hex | Use |
|---|---|---|---|
> SUPERSEDED 2026-06-12: crimson is now the accent, cobalt is minor, grounds are grey/charcoal not Pale Sky. The two accent rows below are corrected; treat the Pale-Sky ground rows as grey/charcoal per the governing reversal block.
| Single accent | Crimson | `#A51C30` | The accent (promoted 2026-06-12). Buttons, nav CTA, text links + underline, chevrons, nav hover, credential chip, eyebrow text + dot, active-belt highlight, sparing inline keyword emphasis, the logo mark. Crimson buttons are on-brand. |
| Minor / secondary | Cobalt | `#103E8C` | Demoted 2026-06-12 from single accent to rare secondary use, if used at all. Hover `#0c2f6b`. |
| Structure / headings | Dark Slate | `#2C3E50` | Headings and structural text (charcoal-navy). Not crimson. |
| Dark moment | Ink Navy | `#0B1F3A` | The one dark card per page (the CTA on home). Harmonises with Cobalt. |
| Ground (primary) | White | `#FFFFFF` | Alternating base. Hero and footer are always white. |
| Ground (cool) | Pale Sky | `#E9EEF6` | The alternating ground (AI differentiator, certifications, proof). A cool light, faintly cobalt-tinted. Replaced the original warm beige, which fought the deep blue. |
| Ground (inset) | Pale Sky deep | `#E2E7EE` | Belt chips, card insets, chips. |
| Highlight tint | Warm wash | `#F3ECDD` | The one warm pocket: in-house section, callouts, key-stat panels. Contained warmth where the brand talks to people. Not a general ground. |
| Line-art ink | Navy | `#26245C` | All hand-drawn SVG, inherited from EQUIBT for family resemblance. |
| Text | Ink | `#161616` | Titles and body. |
| Hairline | — | `rgba(38,36,92,0.13)` | 1px containers and dividers (matches EQUIBT `--hairline`). |
| Belt swatches | Yellow / Green / Black | `#E8B833` / `#2E7D52` / `#1C1C1C` | Belt identity only. The belt colours identify; Cobalt selects. |

**Rule:** grounds alternate white and Pale Sky; the colour change is the separator. Warm wash is the single deliberate exception, scoped to the in-house / callout / key-stat pocket only. No other wash fills, no foreign hues (Sage mist was rejected for colliding with the Green Belt green).

---

## Layout rhythm

- Content max-width ~1240px; hero/wide rows ~1320px; 40px gutters.
- Section padding ~88px top/bottom desktop.
- **Asymmetric.** Hero is a two-column split, copy left, the belt ladder right. Icons sit on one calm left axis. Content rests on hairlines.
- **Hairline containers:** 1px hairline, ~14-16px radius, no drop shadow. Card hover = border darken toward Cobalt + a small 2px lift, no heavy shadow.
- **One dark moment maximum** per page (home: the CTA, ink-navy `#0a2540`).
- Dividers only where two consecutive same-colour sections meet; otherwise the alternating ground is the separator.

---

## Components defined (home reference)

- **Nav.** Sticky, translucent white, 1px hairline. Audience toggle (For teams / For individuals, Cobalt active), Programs dropdown, persistent Cobalt **"Get in touch"** CTA. Logo: the real LMI logo mark (transparent `LMI-LOGO-702_MAIN-R1_TRANSPARENT.svg`, dark-slate wordmark + crimson square) inlined in the nav, sized ~34px high; never 701.

**CTA wording — "Get in touch", not "Book a discovery call" (Herman, 2026-06-11).** Reverses the architecture's locked "Book a discovery call". Reason: there is no one on the ground to staff live discovery calls, so a "book a call" CTA over-promises and the first impression is a call that never happens. "Get in touch" is async (form / email, answered when capacity allows) and happens to match EQUIBT's CTA, so the group reads consistently. Self-serve carries the individual learner with no call needed: Explore programs, View dates, the Belt Level Selector, Stripe enrolment. In-House keeps "Enquire about in-house training" (also async).

- **Belt ladder (signature).** Vertical, Yellow foot to Master Black top. Each rung: belt chip (identity colour) + name + one-line outcome; selected rung expands a detail line (duration, credential), takes a **Cobalt** ring, and lights a **Cobalt** spine fill from the foot to the selected rung. Proximity (nearby rungs ease up by cursor distance), hover-selects-and-persists, keyboard accessible, reduced-motion safe. This is the one place motion shows off because it also does wayfinding.
- **Course card / program tile.** Outcome-first name + Lora description + delivery-format chips + credential chip (AUSQ-certified in Cobalt) + "View programs ›" chevron link. Hover lifts and darkens the border. The program/belt badge (below) sits top-left of the card.
- **Belt / credential badge (component).** A hand-drawn squircle outline (the LMI line-art wobble, not a geometric rounded rectangle) with a bold two-letter monogram inside, outline only, no fill. This is the LMI line-art idiom in token form, and it is the compact label that complements the belt ladder, not a competitor to it. Reuse it as the belt chip in the ladder, the badge on course cards, in tables, and in training PPTs. Source artwork: `GOS vault Docs/LMI/ARTWORK/LMI ARTWORK BAR/` (`.ai` source `LMI-BAR-88.ai`, with `ICON-*` badges, `BAR-*` badge+label lockups, and `Session-15/30/45/60` filled duration variants). **Web needs SVG exports from the `.ai` source; the supplied PNGs are 88px and will not scale crisply.** Affinity recolour + SVG export is Herman's draw (per the Affinity workflow); Claude specs and integrates.

  **Badge colour by layer (locked discipline):**
  - *Corporate Layer (website):* single accent. Real Lean Six Sigma belts keep their belt identity colour (Yellow / Green / Black, charcoal `#1C1C1C` not grey). Every non-belt badge renders in **Cobalt `#103E8C`** or navy ink, one accent, no colour-per-course.
  - *Framework Teaching Layer (PPTs, training collateral):* colour is allowed and aids retention, but it must come from the locked teaching-layer palette (Petrol Teal, Amber, Slate, Crimson, Forest, Deep Navy), enterprise tones, **not** the current ad-hoc bright cyan / indigo (pastels are banned by the v7.1 addendum).
  - *Artwork fixes flagged 2026-06-11:* Black Belt currently renders mid-grey (reads as a "grey belt"), fix to charcoal `#1C1C1C`; the blues in the batch are bright cyan `~#1BA8E8` and indigo, **neither is the locked Cobalt `#103E8C`**, so none of the current blues are web-ready. Full per-code colour map pending Herman's two-letter code legend.
- **AI differentiator (signature block).** Sits immediately after the hero on Pale Sky. Verb-first headline, three proof columns (Yellow / Green / Black) on hairlines. The uncontested position, given the home's prime second slot.
- **In-house callout (warm-wash pocket + hybrid photography).** The one Warm wash `#F3ECDD` section. Two-column: a real session photo with a Cobalt eyebrow tag + verb-first text overlay (AICD model) left, copy + Cobalt CTA right. Bilingual delivery line (EN / 中文) carried here, not as a banner.
- **Certification strip.** Three hairline marks (AUSQ, LeanMethods.org, Certizio) + one line each. Cobalt square bullet. Links to "How LMI certification works ›".
- **Sector tiles.** Four EQUIBT line-art icons (Corporate = Capability glyph, Government + Financial Services = exact EQUIBT sector lifts, Healthcare = Assure glyph interim), navy stroke + one Cobalt accent per glyph. The "for services" wedge.
- **Proof.** Italic-Lora testimonial + a two-figure evidence strip + a static monochrome client logo wall (5 across, neutral "Client mark" placeholders until real logos are cleared; client names stay anonymised on the public surface). **Never a carousel.**
- **CTA panel (dark moment).** Ink-navy. Copy left, a soft "Belt Level Selector" tool card right. White button on dark; eyebrow text and dot are a light cobalt tint on the dark field.
- **Footer.** White, top hairline, Montserrat links. "Lean Methods Institute, a specialist training division of EQUIBT Group." Two-column link grid at phone widths.

---

## Motion rules

- **Section reveal:** one fade + ~8px rise per section, ~350ms, once, no stagger. Respects `prefers-reduced-motion`.
- **Belt ladder:** proximity ease toward Cobalt and scale by cursor distance (smooth, not snapping); hover selects and persists; click and keyboard select; default Green Belt. Cobalt spine fill animates to the selected rung.
- **Hover affordances:** chevron links underline left-to-right under the text only (Cobalt), then the Cobalt chevron nudges right. Cards: border darken + small lift.
- **Hard no:** autoplay carousels, parallax, scroll-jacking, AOS-on-everything, load-in theatre, looping background video, bouncing or pulsing CTAs. Everything smooth at 60fps and fully usable with motion reduced.

---

## Visual idiom (hybrid: structured + one hand-drawn token)

The system is structured and formal. Clean architectural line, precise grid, deliberate hierarchy. This is on-message for Lean (precision, standardisation, low variation) and de-risks the corporate/government buyer.

- **Structured everywhere:** framework diagrams (clean architectural monoline per the v7.1 addendum), program and sector icons, components, layout, the belt ladder structure.
- **Hand-drawn retained in ONE place:** the belt / credential badges keep the hand-drawn squircle wobble. They are the single warmth/craft token and the existing artwork Herman uses in training PPTs. Nowhere else carries the wobble.
- **Signature** (replacing "hand-drawn idiom"): the belt ladder + the disciplined Cobalt-on-Pale-Sky system + the Framework Teaching Layer diagram pairs. This is more ownable for a Lean brand than a hand-drawn line.

## Photography / imagery (structured system)

The hero carries the humanity; the system stays structured around it. **Dosage rule: structure leads, imagery is the proof/atmosphere accent, never the main event.**

- **Hero = treated / art-directed AI** with realistic people. Graded (Cobalt duotone or a structure overlay) so it reads as deliberate brand craft, not generic AI stock. Aspirational, never a "this is our real classroom" claim. Must be genuinely high quality; a single mediocre AI hero makes the whole site read cold and fake, so the bar is high. A genuine session photo is preferred where available; treated AI is the fallback.

Two kinds of imagery, with different rules:

- **Real photography — the three trust zones only:** Faculty, In-house delivery proof, and the lead testimonial. These make an implicit truth claim ("our real instructor / our real session / our real client"), so they must be genuine LMI sessions, never a stock library and **never AI-generated**. A fake face presented as a real person is a credibility landmine with corporate and government buyers. Always a Cobalt eyebrow tag + verb-first text overlay (AICD model) or an italic caption, so a photo can never read as generic.
- **AI-generated imagery — aspirational / non-claim contexts (Herman, 2026-06-11):** high-quality AI imagery is allowed for the treated hero (realistic people, graded, aspirational) and for conceptual, atmospheric or textural use (section art, mood imagery). It must be genuinely high quality, on-palette/treated, and aspirational, never posing as a specific real session, instructor or client. **Hard line: AI imagery never substitutes for a real face/session/client in the three trust zones** (faculty, in-house proof, testimonial stay genuine).

Everywhere else stays line-art. Warmth without slop. This is the deliberate divergence from EQUIBT's no-photo line-art, justified because LMI sells human learning.

---

## Structural role model: NN/g (Resources, Insights, Knowledge Base)

Nielsen Norman Group (nngroup.com) is the reference for how a research-led training authority structures content. It is the right model because the parallel is exact: NN/g teaches UX from research, LMI teaches Lean from practice. Patterns to adopt, drawn from their articles index:

1. **Content-first index, no hero burying the list.** The Insights / Resources / Knowledge Base index leads straight with the content list, minimal chrome, no full-bleed hero image you scroll past. (Reinforces the existing anti-slop rule.)
2. **Topic taxonomy with a curated shortlist + expand.** Browse-by-topic shows a handful of curated topics with a "see all topics" expand, not a wall of tags. LMI topics: Lean Six Sigma, Lean Agile, AI in Lean, Lean Service Design, Lean Business Analysis, plus belt level. Tag every resource; show a curated few, expandable.
3. **Scannable card metadata (adopt verbatim).** Every item carries: clear title, date, content-type + read-time label ("Article: 6 min read", "5 min video", "Tool", "Template"), and a one-sentence plain-English summary. This is the LMI Insights / KB / FAQ card pattern.
4. **Filters by recency, popularity and type.** Most Recent / Most Popular / Videos / Articles. LMI: filter by type (article, tool, video, FAQ, template) and topic.
5. **A curated "Start here" block** above the feed (NN/g's "Popular Articles"). LMI: hand-pick the entry set, e.g. What is Lean Six Sigma, the belt pathway, and the three calculators.
6. **High-scent titles: value-first, number-led where it fits.** "10 Usability Heuristics", "Why You Only Need to Test with 5 Users", "Usability 101". Pairs with LMI's verb-first rule: lead with the value or the number, never a vague title.
7. **Read-time + content-type labels** set expectation and cut friction. Adopt on every resource.
8. **Writing for the web (substance, not just layout).** NN/g's own canon governs LMI content: inverted pyramid (key point first), scannable subheads, short paragraphs, plain language, front-loaded links. Sits naturally with the locked Lora body + short marketing blocks.
9. **Free templates and tools as lead magnets.** NN/g gives away templates (e.g. a heuristic-eval template). LMI's equivalent is the Resources/Tools page: the Catapult simulator, the sample-size calculator, the process-sigma calculator (EQT-301 / EQT-302 / EQT-303), plus downloadable templates. Ungated for reach, email-gated where the magnet is strong.
10. **Artwork validates the line-art decision.** NN/g uses almost no decorative imagery on index pages, and where it uses visuals they are diagrams that teach (journey maps, frameworks), not stock. This backs LMI's line-art-led idiom and the Framework Teaching Layer: diagrams that teach over photography that decorates.

---

## Framework diagram style (NN/g-informed teaching diagrams)

NN/g's framework diagrams (e.g. their Journey Map 101) are the reference for how LMI illustrates a whole tool. Principle: **one clean diagram explains one tool, simply.** Structure carries the teaching; decoration is absent.

**The blank-template + worked-example pairing (adopt this, it does double duty).** NN/g publishes each framework twice: a pure line-art **blank template** (fill-in-the-blanks) and a **worked example** (the same frame filled, lightly colour-zoned). This is both a teaching device (show the empty frame, then show it filled) and LMI's lead-magnet device: the blank template is the **download** (the DMAIC toolkit, EQT-305), the worked example is the **guide content** (the 101 set, EQT-306). Build every core framework as this pair.

**Elements (the shared grammar):** heavy, clean outline boxes on a clear grid; bold Montserrat zone headings; numbered steps; speech-bubble callouts for the learner/quote voice; an experience or value curve threaded through where the framework has a flow; a reusable **persona glyph** (the circle + person line mark) for the "who"; and labelled zones, typically top (who / scenario / goal), middle (the phases or steps), bottom (opportunities / ownership / outputs).

**Palette discipline (where LMI diverges from NN/g):** the blank template is **navy line-art only** (one Cobalt accent on web). The worked example uses the **Framework Teaching Layer palette** (Petrol Teal, Amber, Slate, Crimson, Forest, Deep Navy) as restrained zone tints, **enterprise tones, not NN/g's pastels** (the v7.1 addendum bans pastels). Never the bright cyan/indigo.

**Apply to:** DMAIC, SIPOC, VSM, 5S, 8 Wastes (DOWNTIME), A3, fishbone/Ishikawa, FMEA, and a Lean customer-journey map, across the guides, the cheat-sheet posters, the downloadable templates, and the training PPTs. The belt badge component is the type/topic marker on these.

**Production:** Affinity draw (Herman) + Claude clean/integrate + SVG export; render-check at actual display size before sign-off (the EQT-272 lesson). These are direction specs, not hand-authored production art.

---

## NN/g anti-patterns to avoid (mitigations baked in)

> **This list is the single source of truth and a ship-gate checklist.** It lives only here (versioned in git); other docs point to it, never restate it. Owner: Skye (design) + Claire (strategy). Append new patterns as found; review at the design-learnings cadence. **Definition of done:** no LMI page issue moves to In Review until it has been checked against this list (enforced via the repo `AGENTS.md` and vault `CLAUDE_CODE.md`).

NN/g is the structural role model, but its execution has faults LMI must not copy. Each has a locked mitigation (design and IA).

1. **Austere, dated, visually inconsistent** (B/W, unchanged for years, polished diagrams next to raw screenshots). → LMI keeps NN/g's structure and scannability but carries disciplined warmth and consistency: single Cobalt accent, Pale Sky grounds, the Warm-wash pocket, one treated hero, and **every diagram in one house style (Framework Teaching Layer), never a raw screenshot in content.**
2. **Wall-of-text articles, weak chunking.** → The article/guide template is designed for scanning: a summary box + key-takeaways at the top, an "in this article" jump-nav, short Lora blocks, a subhead every screen, and a framework diagram every screen or two to break the text.
3. **Passive conversion, value buried** (free template hidden at the bottom, weak inline plug). → Every resource carries a clear primary CTA plus a contextual offer near the top and the bottom (the matching course/belt + a related tool/template), a sticky CTA, and the gated magnet surfaced high. The funnel is designed into the page template.
4. **Taxonomy/findability overload, weak search.** → Faceted filter (type + topic + belt level), real on-site search, a curated "Start here", and a short curated shortlist with expand, never a full-taxonomy dump. (Carried in `LMI_SITE_ARCHITECTURE_v2.md`.)
5. **Static, desktop-text-first, no living-product feel, no capture.** → Lead with the interactive tools NN/g lacks (calculators, selectors), mobile-first, restrained modern motion, and use the strong magnets to capture (light gate on bundles/reports, the AI Readiness result) feeding nurture. The tools are LMI's living product.

Second batch (noticed 2026-06-11, the certification area):

6. **Self-certification, no independent separation** (NN/g trains, certifies and runs the registry itself; "marking your own homework"). → LMI's moat is the opposite: AUSQ is the genuinely independent certifier for LSS. Foreground trainer-certifier separation on the Certifications page, don't bury it. (Strategy: see `LMI_SITE_ARCHITECTURE_v2.md`.)
7. **Weak, non-employer-friendly verification** (18k-row paginated registry, search by name/ID only, no clean single-credential confirm). → Certizio verify is a one-step ID lookup → single clean result, plus shareable verifiable digital badges (LinkedIn-addable URL), not a scroll table. Built for the employer/procurement officer.
8. **Pricing / cost opacity** (buy-walls, prices hidden deep in funnels). → Public per-participant pricing + Stripe self-serve on standard courses; a clear free-vs-paid line across the Resource Center; no "contact us for price" on a standard belt course.
9. **Authority by assertion, thin outcome evidence.** → Evidence tied to the action (a locked principle), real anonymised client-type outcomes, captioned AICD-style testimonial, employer trust signals placed where the decision happens. Show the result, don't assert the reputation.
10. **Content freshness ambiguity** (1994/2000 articles beside 2026 ones, no "reviewed" signal). → Visible "last reviewed" date + a review cadence on evergreen guides, updated in place. Freshness is a trust signal, doubly so for the AI differentiator.

---

## Anti-slop checklist (reject all of these)

Generic stock photography; stocky purple/blue gradients; autoplay carousels and logo marquees; full-screen hero images you scroll past to reach information; parallax; load-in animation theatre; bouncing or pulsing CTAs; emoji or generic icon-font icons; AI-raster illustration; dense small grey text; the default Squarespace/template look; big-image heroes that bury the content. _(2026-06-12: "red or crimson buttons" removed from this reject list, crimson buttons are now the LMI accent.)_

---

## Lineage: what is inherited from EQUIBT v6x, what diverges

This direction is a translation of the EQUIBT v6x system, cross-checked against the real `equibt_home_prototype_v6x.html` CSS, not just the learnings doc.

**Inherited, with matching values:** Montserrat (500/600/700) + Lora pairing; headings letter-spacing -0.012em base; navy line-art ink `#26245C`; hairline `rgba(38,36,92,0.13)`; content widths `--max 1180` / `--wide 1320`; the 1px hairline container (≈16px radius, no shadow, no hover-lift); the minimal section reveal (one fade + ~8px rise, 350ms, once); the chevron-link mechanic (underline left-to-right under the text only, then the chevron nudges); the static logo grid (never a carousel); evidence-tied-to-action; one dark moment per page; the rule-17 / trainline proximity mechanic (hover-selects-and-persists, keyboard) which the belt ladder reuses.

**Deliberate divergences (driven by Herman's rulings, not invention):**
- **Accent count is the same (one), the colour and discipline differ.** EQUIBT runs ONE accent (terracotta) used freely on eyebrow text, links, glyph accents and the trainline. LMI also runs ONE accent, but it is **Cobalt**, and crimson is pulled out of the system entirely (it lives only in the logo mark). EQUIBT colours headings navy; LMI keeps headings near-black so they do not compete with the cobalt action colour. This is the "minimise colour, single colour" ruling.
- EQUIBT's single warm ground is `#F5F3EE`. LMI's ground is **cool Pale Sky `#E9EEF6`**, because the Cobalt action colour needed a cool base; warmth is contained to the Warm-wash pocket. EQUIBT stays warm throughout; LMI is cool base + warm pocket.
- Body Lora **19px** (LMI) vs **22px** (EQUIBT): LMI runs shorter marketing blocks.
- Hero H1 is larger on LMI (`clamp(36-54)`) because Option B leads with the hero; EQUIBT H1 is `clamp(40-46)`.
- The signature motif is the **belt ladder** (LMI) vs the DMAICO **trainline** (EQUIBT): same mechanic, different object.

**Sourcing (updated after the file-level grounding pass):** the first pass was built from `DESIGN_LEARNINGS_v6x.md` plus the brief, reference sites, architecture and BRAND_SYSTEM, with hand-drawn placeholder glyphs. The reference has since been re-grounded against the real EQUIBT repo (`~/REPOS/equibt-website`): tokens lifted from `src/styles/tokens.css` and `base.css` (navy `#26245C`, hairline `0.13`, `--max`/`--wide`), and the line-art now reuses the **actual EQUIBT icon SVG paths** from `src/components/icons/` — Government and Financial Services are exact sector lifts; the program tiles reuse Roadmap (Lean Six Sigma), Automation (AI-Enabled), Loop (Lean Service Design) and Network (Lean BA); Corporate reuses Capability and Healthcare reuses Assure as an interim. The terracotta accent in each is swapped for Cobalt. Bespoke LSS/Healthcare glyphs remain an Affinity-redraw item (the LMI equivalent of EQUIBT EQT-274/275). The individual `explorations/` HTML files were not needed; the production components are the source of truth.

---

## Inherited locks (hold from EQUIBT v6x and the brief)

Hero and footer pure white, dark text, light nav. Never a dark hero. Firm "we" voice, never name Herman. Verb-first active headlines. No em or en dashes (colon or comma). Pricing: public per-participant pricing (incl GST) on course pages; in-house and by-application programs priced on enquiry. (EQUIBT's no-public-pricing lock does not carry to LMI: Stripe self-serve enrolment requires visible prices.) Anonymised client-type descriptors. No dates/years in case-study and client-work copy; the founding line ("since 2009") and the LeanMethods.org Q4 2026 launch date are allowed. AI integration is structural on every page. AUSQ certifies LSS belts only and is the genuine independent certifier. LeanMethods.org is LMI's own recognition standard for non-LSS, holding page only until Q4 2026. ASPAC + bilingual (EN / 中文) is an LMI capability; no UK partners or referral relationships named anywhere. Australian English.

---

## Open / next

- Build sequence: this direction governs the Astro build (EQT-293 unblocks the page build issues). Direction only here, no repo.
- Affinity hero + CTA artwork swaps in later at the marked seams, same as EQUIBT; interim line-art holds.
- Clear the five client logos before the proof wall goes live (placeholders hold until then).
- Confirm the AUSQ RTO cessation year referenced in the copy doc (flagged inline) before that copy ships.

_End v1. Locked 2026-06-11._
