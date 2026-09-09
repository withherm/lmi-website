# LMI_IMAGE_PROMPTS_v1

_Every generated image on leanmethods.com.au, as a runnable prompt. Companion to `LMI_ILLUSTRATION_PRODUCTION_v1.md`, which explains the pipeline and the legal position. This file is the working sheet. 9 September 2026, EQT-417._

---

## Read this before you generate anything

**Do not upload the AESQ frames as style references.** They are a specific organisation's commissioned work, that organisation sets aerospace quality standards, and its audience is your audience. Output generated directly from those frames is a derivative-work argument you do not want, and the reputational hit if a procurement contact recognises it is worse than the legal one. Stage 1 below builds the style from words alone. That is the whole point of it.

**Four slots are never generated.** They are marked NEVER GENERATE in section 5. A fabricated face presented as a real instructor, a real cohort or a real person being quoted is the single mistake that would cost more than this site is worth.

**Every prompt below assumes the palette.** Paste this line into any prompt that lost it:

`Palette strictly limited to: deep navy #1F3268, mid blue #2E6CB5, cyan #35A8DC, pale blue #C2D4E7, pale blue tint #E3EBF4, off-white #F4F4F2, warm white paper #FFFFFF. No other colours. No red, no orange, no green, no purple.`

Signal Red `#E8484C` appears on risk and failure states only, and never inside an illustration. Strip every red pixel a generator gives you.

---

## 1. Stage one: style seeds, Recraft V4, no reference images

Run each of the four prompts below at **5 variations**, giving you 20 candidates. Text prompt only. Do not attach anything.

**Corrected against the source, 9 September 2026.** An earlier version of this
file described the style from memory and got it wrong in three ways. It is not
deckled-edged, the ground carries no paper grain, and the faces are not three
abstract lines. Corrected below against `AESQ-SAMPLE/`.

**The reference runs two registers, and they are different.** Do not blend them.

**Register A, people.** Soft mottled watercolour washes with visible brush
variation inside each garment. Navy, mid blue, steel blue, warm grey and black.
Skin is left as a pale warm neutral, close to unpainted. Faces are properly
drawn: eyes, glasses, hair, an expression. Economical linework, but not
abstract and not featureless. Hair and shoes carry the darkest values and
anchor each figure. Figures stand on nothing, there is no ground shadow and no
baseline, they sit directly on the off-white. Full length, mid distance, no
crops. Cyan appears once per figure at most, as a small accent on a shoe or a
tie.

**Register B, objects and diagrams.** Flat blue value fills with a faint
mottle, not smooth vector. Outline strokes in deep navy with a rough,
slightly wobbling hand-drawn edge. Parts of an object are separated by white
keylines, never dark ones. Capsule containers are rounded rectangles with a
drawn navy edge, sometimes filled pale blue behind a fine white grid. Cyan
marks the one element under attention. Red appears only on risk and failure.

**The ground in both registers is plain off-white with no texture.**

**Style block for Register A prompts:**

> Watercolour illustration on a plain off-white ground with no background texture. Soft mottled washes with visible brush variation inside each garment, no gradients and no airbrush. Skin left as a pale warm neutral, almost unpainted. The face is properly drawn with eyes, hair and an expression in economical fine dark linework. Hair and shoes carry the darkest values. The figure stands on nothing, no ground shadow and no baseline. Full length, mid distance. No text, no lettering, no numbers, no logos anywhere in the image.

**Style block for Register B prompts:**

> Flat editorial illustration on a plain off-white ground. Flat blue value fills with a faint mottled wash inside each shape, no gradients. Outline strokes in deep navy with a rough slightly wobbling hand-drawn edge, never a clean geometric line. Separate parts of an object divided by thin white keylines, never dark ones. Generous empty ground around the subject. No text, no lettering, no numbers, no logos anywhere in the image.

**Seed A, a person and a screen** (Register A)
> [Register A style block] A person seated at a desk looking at a large monitor showing an abstract flow diagram of connected rectangles. A second person stands beside them, one hand resting on the desk, looking at the same screen. Three-quarter view from behind and to the side. [palette line]

**Seed B, a group at a wall** (Register A)
> [Register A style block] Four people standing in a loose semicircle facing a large paper-covered wall, one of them reaching up to place a small square note on it. Seen from behind the group. [palette line]

**Seed C, a single object study** (Register B)
> [Register B style block] A simple industrial object on an empty paper ground: a stack of three shallow trays, slightly separated, seen from a low three-quarter angle. No people. Deep shadow replaced by a single flat pale-blue wash. [palette line]

**Seed D, a hand and a document** (Register B)
> [Register B style block] Close crop of two hands on a desk, one holding a pen above a sheet of paper carrying an abstract line chart. No face in frame. [palette line]

**Then:** pick the 5 strongest across all four seeds, open each in Affinity, correct it against section 6 until it is exactly right, and **those five corrected files are your reference pack.** Nothing else goes in.

---

## 2. Stage two: build the style IDs

Upload the five corrected seeds to Recraft and create **two** style IDs from the same set:

| ID | Build | Used for |
|---|---|---|
| `LMI-WC-RASTER-v1` | Raster style | Every illustration in section 5 |
| `LMI-WC-VECTOR-v1` | Vector style | Anything that must ship as SVG |

A raster style ID does not carry across to vector output in Recraft, which is why there are two. **Record both IDs in `prototypes/LMI_ILLUSTRATION_PRODUCTION_v1.md` the moment you have them.** A style ID that lives only in a browser session is a single point of failure, and if it is ever lost the entire set has to be regenerated to stay consistent.

From here on, every prompt in section 5 runs **with `LMI-WC-RASTER-v1` applied**. Do not repeat the style block once the ID exists, it fights the ID.

---

## 3. Stage three: the cast, Nano Banana Pro

Six recurring figures. The recurrence is most of what makes an illustrated site read as commissioned rather than assembled.

**Character sheet prompt**, run once per figure:

> Character reference sheet, watercolour illustration style, on a plain warm white ground. The same person shown five times in a row: front view, three-quarter left, profile, holding a clipboard at chest height, and standing at a board with one arm raised. Consistent clothing, hair and proportions across all five. Skin left as bare paper. Face described with three or four fine black lines, no shading. Business casual clothing in deep navy #1F3268, mid blue #2E6CB5 and pale blue #C2D4E7 only. No text, no lettering, no logos.

Append one of these, and nothing else:

| Figure | Append |
|---|---|
| F1, facilitator | `The person is in their fifties, short grey hair, wearing a plain navy shirt with sleeves rolled.` |
| F2 | `The person is in their late twenties, East Asian, shoulder-length dark hair tied back, wearing a mid blue shirt.` |
| F3 | `The person is in their thirties, South Asian, short dark hair and a close beard, wearing a pale blue open collar shirt.` |
| F4 | `The person is in their forties, Black, closely cropped hair, wearing a navy jumper over a collared shirt.` |
| F5 | `The person is in their fifties, white, greying bob, wearing a pale blue blouse.` |
| F6 | `The person is in their early twenties, Pacific Islander, dark curly hair, wearing a mid blue polo shirt.` |

**Then, for every figure you need in a new pose**, upload that figure's corrected sheet and prompt:

> Same person as the reference, same clothing, same hair, same proportions. New pose: [pose]. Watercolour illustration, skin left as bare paper, face in three or four fine black lines. Plain warm white ground. No text, no logos.

Nano Banana Pro is doing one job here: keeping the person the same while the pose changes. Do not ask it to invent scenes, that is Recraft's job with the style ID.

---

## 4. How the two tools split

| Job | Tool | Why |
|---|---|---|
| The house style, and every scene | Recraft V4, `LMI-WC-RASTER-v1` | The only one of the three that holds a style across sessions as a reusable ID |
| Keeping the same six people across fourteen pages | Nano Banana Pro | Built for character consistency from a reference sheet |
| Anything | ~~GPT Image~~ | No persistent style handle and a recognisable house look that fights this one. A third source of drift for no gain. |

Where a scene needs a specific cast member, generate the figure in Nano Banana Pro first, then composite into the Recraft scene in Affinity. Do not try to get Recraft to match a face.

---

## 5. Every slot on the site

Aspect ratios are taken from the live `.illus` blocks. Generate at 2x the render width, then compress. Target under 120KB per illustration and under 250KB for a hero.

### 5.1 Home

**`home-difference`** · `src/pages/index.astro:118` · 820x340, ship 1640x680
> A person seated at a desk in three-quarter view looking at a large monitor. The screen shows an abstract flow of connected rectangles joined by thin lines. A second person stands to their right, slightly behind, one hand on the back of the chair, looking at the same screen. Neither face is turned to the viewer. Warm white ground with generous empty paper on the left third.

Cast: F1 standing, F3 seated. Composite the faces.

**`home-sector-corporate`** · sector panel, swaps with the tab · 380x118, ship 760x236
> A row of three simple desks seen from above and slightly to the side, with two figures walking between them carrying papers. Loose, abstract, no detail on the desks. Wide horizontal composition with empty paper at both ends.

**`home-sector-government`** · same slot
> Two figures standing either side of a tall filing cabinet, one handing a folder across. A simple columned facade suggested in pale blue wash behind them, no architectural detail. Wide horizontal composition.

**`home-sector-financial`** · same slot
> Three figures seated in a row at a long bench desk, each with a small screen, seen in profile from the side. A single abstract line chart floats above the middle screen. Wide horizontal composition.

**`home-sector-healthcare`** · same slot
> Two figures in soft uniforms walking a corridor, one carrying a clipboard, the other gesturing ahead. The corridor described by two long pale-blue washes only. Wide horizontal composition.

### 5.2 Methods, seven family motifs

**`method-*`** · `src/pages/methods/[family].astro:72` · 720x260, ship 1440x520. All seven are **objects and diagrams, no people**, so the family pages stay calm behind the course cards.

| File | Prompt after the style ID |
|---|---|
| `method-lean-six-sigma` | A run chart drawn as a loose hand-inked line across a wide sheet, with one point on the line circled in cyan. Two faint horizontal control lines above and below. Nothing else on the paper. |
| `method-zero-defects` | A row of five identical simple machined parts on a pale-blue wash bench, seen from above. The third one has a small cyan mark on it. A magnifier lies beside the row, not over it. |
| `method-ai-enabled` | A single flowing line crossing the sheet left to right, rising and falling, with a small cyan starburst above its highest point. Below the line, four faint vertical tick marks. |
| `method-lean-service-design` | A looping path drawn across the sheet with five small round nodes on it at uneven intervals, one node filled cyan. The loop crosses itself once. |
| `method-lean-business-analysis` | Three stacked rectangles of decreasing width on the left, and a single clean rectangle on the right, joined by one thin line. A cyan tick beside the right rectangle. |
| `method-lean-agile` | An open circular arrow, nearly a full circle with a gap at the top right, and inside it three small stacked cards at slight angles. The arrowhead is cyan. |
| `method-lean-operations` | Four simple boxes in a row joined by short arrows, with the second and third boxes overlapping slightly. A cyan cross sits above the overlap. |

### 5.3 Course page

**`course-review`** · `src/pages/courses/[slug].astro:75` · 340x280, ship 680x560
> A person seated at a desk seen in three-quarter view from behind, looking at a screen showing an abstract chart. A second person stands beside them pointing at one part of the screen. Vertical composition, generous empty paper above.

Cast: F2 seated, F5 standing.

### 5.4 In-house, four sector scenes

**`inhouse-*`** · `src/pages/in-house/[sector].astro:28` · 720x280, ship 1440x560. Same four sectors as 5.1 but wider and with the cohort present.

| File | Prompt after the style ID |
|---|---|
| `inhouse-corporate` | Five figures standing in a loose group in front of a large paper-covered wall in an open office. One is placing a small square note on the wall. Seen from behind and to the side. |
| `inhouse-government` | Five figures around a long table, papers spread between them, one standing at the head with an arm extended toward a simple board. Seen from the side. |
| `inhouse-financial-services` | Five figures at a long bench desk in a row, two turned toward each other in conversation, three facing small screens. Seen from a raised three-quarter angle. |
| `inhouse-healthcare` | Five figures standing in a corridor in a loose half circle, one holding a clipboard, another gesturing at a simple wall-mounted board. Soft uniforms. |

Cast: F1 leading in all four, plus four of F2 to F6 rotated so the same four are not always together.

### 5.5 Approach

**`approach-cohort`** · `src/pages/approach.astro:26` · 560x300, ship 1120x600
> Four figures standing at a large board covered in small square notes arranged in loose columns. One reaching up to move a note, one writing, two watching. Seen from behind and slightly to the left. Generous empty paper on the right.

Cast: F1, F4, F6, and one other.

### 5.6 NEVER GENERATE

These four slots are photography, or they are left as a marked placeholder until real photography exists. There is no prompt for them and there will not be one.

| Slot | File | Why |
|---|---|---|
| Faculty member | `src/pages/about.astro:52` | A fabricated face presented as a real instructor |
| Person being quoted | `src/pages/index.astro:277` | A fabricated face attached to a real testimonial |
| A real session in progress | `src/pages/about.astro:18` and `src/pages/index.astro:248` | Presented as a photograph of something that happened |
| A real in-house cohort | `src/pages/in-house/index.astro:25` | Same, and it implies a specific client |

If you want something in these slots before the photography exists, the answer is an illustration so plainly drawn that nobody could mistake it for a photograph, with a caption saying it is an illustration. Not a generated photograph.

---

## 6. Correction checklist, every asset, no exceptions

Nothing ships straight out of a generator. Open it in Affinity and go down this list.

- **Palette lock.** Recolour on import, every time. Generators will not land on `#1F3268`, `#2E6CB5`, `#35A8DC` and `#C2D4E7` reliably, and a near-miss navy is worse than an obviously different one because it reads as a printing fault.
- **Hands and fingers.** The usual failure. Redraw rather than accept.
- **Keylines and outlines.** Inside an object, parts are separated by white keylines, never dark ones. The outer contour of a drawn object is deep navy with a rough hand-drawn edge. Generators default to a clean uniform dark outline everywhere, and that is the single biggest tell.
- **Text inside the image.** Remove all of it. Any label in a diagram is live HTML or a real SVG text node, never baked into a raster. This matters for accessibility, for translation, and for the bilingual English and Chinese delivery line.
- **Artefacts.** Extra limbs, melted lanyards, nonsense on a clipboard, garbled equipment. A Lean Six Sigma buyer looking at a badly drawn control chart is the worst possible outcome on a page arguing for rigour.
- **Red.** Strip every instance. Red is a risk signal in this system and nothing else.
- **Faces.** Properly drawn but economical: eyes, hair, an expression, in fine dark line. Not abstract, not featureless. If a face has enough photographic detail to look like a specific real person, redraw it flatter.

---

## 7. Before you buy a subscription

Do not commit to an annual plan to find out whether this works.

Build one raster style ID from five corrected seeds, then generate exactly four things: `home-difference`, two of the seven method motifs, and one cast figure in three poses. Correct them, drop them into the live pages, and look at them at actual size on a real screen.

That is a few hours and a small credit spend, and it answers the only question that matters: does this style survive contact with a real page, or does it read as generated. Judge it there, then commit.

---

## 8. Volume

Twenty generated assets in total: 1 home difference, 4 home sector strips, 7 method motifs, 1 course review, 4 in-house scenes, 1 approach, plus 2 spare. Six cast figures on top of that, each needing a sheet and two or three poses.

Every one of them gets hand-corrected. Budget the correction time, not the generation time. Generation is minutes and correction is the day.
