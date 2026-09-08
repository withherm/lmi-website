# LMI_ILLUSTRATION_PRODUCTION_v1

_Companion to `LMI_DESIGN_MOCKUP_PROMPT_v2.md`. How the watercolour illustration set actually gets made, and the two rules that stop it becoming a liability. 8 September 2026._

---

## 1. Tool split

| Job | Tool | Why |
|---|---|---|
| The locked house style | **Recraft V4** | The only one of the three that turns reference images into a persistent, reusable `styleId`. Upload 1 to 10 references, get an ID, reuse it on every future asset without re-uploading. That ID is the brand style, and it can be shared across a team. Nothing else on the list holds a style across sessions. |
| The recurring cast of people | **Nano Banana Pro** | Built for character consistency from a reference sheet, and strong at "keep this person, change the pose". This is what gets the same six figures appearing across fourteen pages instead of six strangers per page. |
| Anything | ~~GPT Image~~ | Drop it. Good prompt adherence, no persistent style handle, and a recognisable house look that fights the one being built. It adds a third source of drift for no gain. |

Recraft keeps raster and vector styles in separate families: a raster `styleId` does not carry across to vector output, so anything that must ship as SVG needs its own vector style built from the same references.

---

## 2. The reference pack problem, read this before generating anything

The AESQ "Defect Prevention" explainer is a specific organisation's commissioned illustration work. AESQ is an aerospace quality standards body. Its audience and this business's audience are the same people: quality and operational excellence practitioners in engineering-led organisations, several of whom have sat through that exact video.

Feeding those frames into a style trainer and shipping the output as brand illustration carries two exposures. The legal one is that style is not itself protected, but output generated directly from another party's frames as references is a derivative-work argument nobody wants to have. The reputational one is worse and more likely: someone in a procurement conversation recognises it, and the credibility argument the site is built on takes the hit.

**The clean route, and it costs about a day:**

1. Use the AESQ stills as a **direction brief only**. Do not upload them as style references.
2. Write the style out in words. Section 4 of the mockup prompt already does this: watercolour wash with paper grain, deckled edges, white and pale-blue contour lines on top of the fill, faces as a few fine black lines, skin left as bare paper, no dark outlines, flat shapes with white keylines separating parts.
3. Generate 15 to 20 candidate seeds from that written description alone, on the LMI palette. Iterate the words, not the references.
4. Pick the 5 strongest, correct them by hand in Affinity until they are exactly right.
5. **Those five corrected images are the reference pack.** Build the Recraft `styleId` from them.

The style is then grown from work that is yours. Chain of title is clean, the look is owned rather than borrowed, and it will drift away from AESQ naturally as it gets corrected, which is what you want.

---

## 3. Building the style

- Similar references sharpen the match, diverse references widen the range. For a brand set you want **narrow**: five seeds that are close to each other, not five that show off variety.
- Build two IDs from the same corrected seeds: one raster for illustration, one vector for anything that can ship as SVG.
- Record both IDs in the repo. A style ID that lives in one person's browser session is a single point of failure.
- Regenerate the whole set if the style ID ever changes. A site with two generations of style on it looks broken in a way nobody can name.

---

## 4. The cast

Build a character sheet of **six figures** in Nano Banana Pro: a facilitator, and five learners varied in age, gender and ethnicity, as the reference does. Front, three-quarter and profile for each, plus two working poses (holding a clipboard, presenting at a board).

These six people recur across the whole site. That recurrence is most of what makes an illustrated site read as commissioned rather than assembled.

---

## 5. Correction, non-negotiable on every asset

Nothing ships straight out of a generator. Every asset gets opened in Affinity and checked against this list.

- **Palette lock.** Generators will not land on `#1F3268`, `#2E6CB5`, `#35A8DC` and `#C2D4E7` reliably. Recolour on import, every time. A near-miss navy is more damaging than an obviously different one because it reads as a printing fault.
- **Hands and fingers.** The usual failure. Redraw rather than accept.
- **Contour lines.** They must be white or pale blue and sit on top of the fill. Generators default to dark outlines, which is the single biggest tell.
- **Text inside images.** Remove all of it. Any label in a diagram is live HTML or a real SVG text node, never baked into a raster. This matters for accessibility, for translation, and for the bilingual EN and 中文 delivery line.
- **Artefacts.** Extra limbs, melted lanyards, nonsense on a clipboard, garbled equipment. A Lean Six Sigma buyer looking at a badly drawn control chart is the worst possible outcome on a page arguing for rigour.
- **Signal Red audit.** Red appears only on risk and failure states. Generators love to sprinkle red. Strip every instance that is not a risk signal.

---

## 6. What is never generated

This rule already exists in the design learnings and it binds harder now that the whole site is generated art.

**Generated imagery never depicts a real claim.** No AI faculty member, no AI "our real session", no AI client, no AI testimonial face. Those three trust zones are genuine photography or they are illustrated so plainly that nobody could mistake them for a photograph of a real person. A fabricated face presented as a real instructor is a credibility landmine with corporate and government buyers, and it is the one mistake that would cost more than the whole site is worth.

Everywhere else, illustration is conceptual and aspirational, and no visitor is being asked to believe it is a photograph.

---

## 7. Output and page weight

Watercolour texture is raster by nature, so most of this set ships as WebP with alpha, not SVG. Budget for it.

- Every asset exported at 2x, then compressed. Target under 120KB per illustration, under 250KB for a hero.
- Lazy-load everything below the fold.
- The flow arrows, connector triangles, capsule cards and belt badges are **not** illustration. They are CSS and SVG. Do not let a generator draw a UI component.
- Estimate the volume honestly before starting: roughly 30 to 40 assets across the four page templates, and each one gets hand-corrected.

---

## 8. Test before subscribing

Do not buy an annual plan to find out whether this works.

Build one raster style ID from five corrected seeds, then generate exactly four things: the home hero motif, two card glyphs, and one figure from the cast in three poses. Correct them in Affinity, drop them into the existing home page, and look at it at actual size on a real screen.

That is a few hours and a small credit spend, and it answers the only question that matters: does this style survive contact with a real page, or does it read as generated. Judge it there, then commit.
