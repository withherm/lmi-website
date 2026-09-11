# LMI ARTWORK RUN SHEET v1

Full illustration set, including the human cast. This is the order of
operations, not the full prompt library: the slot-by-slot prompts stay in
`LMI_IMAGE_PROMPTS_v1.md` section 5, the pipeline reasoning stays in
`LMI_ILLUSTRATION_PRODUCTION_v1.md`. Work from this sheet, open those two only
when a stage tells you to. 10 September 2026, EQT-417.

---

## Correction to the existing pack, apply before generating

`LMI_IMAGE_PROMPTS_v1.md` section 3 still carries the pre-correction face
description: "skin left as bare paper", "face described with three or four fine
black lines". That was written from memory and was wrong. Section 1 was
corrected against the actual frames on 9 September and section 3 was not.

**Use the Register A wording for every cast prompt.** Faces are properly drawn:
eyes, hair, glasses where relevant, an expression, in economical fine dark
linework. Skin is a pale warm neutral, close to unpainted but not blank paper.
Hair and shoes carry the darkest values. If you build the cast off the old
wording you get six faceless figures that will not sit next to anything else on
the site.

---

## The two constants

Paste the palette line into anything that loses it:

```
Palette strictly limited to: deep navy #1F3268, mid blue #2E6CB5, cyan #35A8DC,
pale blue #C2D4E7, pale blue tint #E3EBF4, off-white #F4F4F2, warm white paper
#FFFFFF. No other colours. No red, no orange, no green, no purple.
```

Signal Red `#E8484C` never appears inside an illustration. It is a UI state
colour only.

**No AESQ frame is ever uploaded to any tool.** Direction reference only.

---

## Stage 0. The gate. Do this first, do not skip it

Four assets, then stop and look. Home hero motif, two method motifs, one cast
figure in three poses. Drop them into the live home and methods pages at actual
size on a real screen, at 1440 and on a phone.

You are answering one question: does this read as commissioned illustration, or
does it read as generated. If it reads as generated, the fix is the written
style description, not more assets. Iterate the words and run the gate again.

Do not buy an annual plan before the gate passes. Do not start stage 3 before
the gate passes.

---

## Stage 1. Style seeds, Recraft V4, text only

Four seed prompts, five variations each, twenty candidates. No reference images
attached, none.

Prompts: `LMI_IMAGE_PROMPTS_v1.md` section 1, seeds A to D. A and B are Register
A (people), C and D are Register B (objects and diagrams). Do not blend the two
registers in one prompt.

Pick the five strongest across all four seeds. Bias narrow, not varied: five
images close to each other build a tighter style than five that show range.

## Stage 2. Correct the five in Affinity

These five are the only reference pack that will ever exist, so they get the
full correction pass, not a quick tidy. Section 6 checklist, every item.

Palette lock first. Generators will not land on `#1F3268` reliably and a
near-miss navy reads as a printing fault, which is worse than an obviously
different colour. Recolour on import, every time.

## Stage 3. Build and record both style IDs

Same five files, two IDs:

| ID | Family | Used for |
|---|---|---|
| `LMI-WC-RASTER-v1` | Raster | Every scene and motif |
| `LMI-WC-VECTOR-v1` | Vector | Anything shipping as SVG |

Raster style does not carry to vector output in Recraft, hence two.

**Write both IDs into `LMI_ILLUSTRATION_PRODUCTION_v1.md` the moment you have
them and commit.** If an ID is lost the whole set has to be regenerated to stay
consistent, and a site carrying two generations of style looks broken in a way
nobody can name.

From here the style block is never pasted again. It fights the ID.

## Stage 4. The cast, Nano Banana Pro, six figures

One character sheet per figure, six runs. Use the corrected face wording above,
plus the per-figure append line from `LMI_IMAGE_PROMPTS_v1.md` section 3.

Correct all six sheets in Affinity before generating a single pose from them. A
flaw in a sheet propagates into every scene that figure appears in.

For a new pose: upload that figure's corrected sheet, ask for the same person,
same clothing, same hair, same proportions, new pose. Nano Banana does one job,
holding the person constant. It does not invent scenes.

## Stage 5. Scenes and motifs, in this order

Order is deliberate: cheapest and lowest risk first, so a style problem surfaces
before you have spent days on figure work.

1. **Seven method motifs** (section 5.2). Abstract, no people, no hands. These
   also carry into every course page header, so seven assets cover the largest
   surface on the site.
2. **Home hero and home slots** (section 5.1).
3. **Course page motif** (section 5.3).
4. **Approach** (section 5.5).
5. **Four sector scenes** (section 5.4). Five figures each, composited from
   corrected cast sheets. Highest cost, do them last.

Where a scene needs a named cast member: generate the figure in Nano Banana,
then composite into the Recraft scene in Affinity. Do not ask Recraft to match a
face, it cannot.

## Stage 6. Correction pass, every single asset

No asset ships out of a generator. Full list in `LMI_IMAGE_PROMPTS_v1.md`
section 6. The six that catch the most:

- **Palette lock.** Recolour to the exact hex values.
- **Hands and fingers.** The standard failure. Redraw, do not accept.
- **Contour lines white or pale blue, on top of the fill.** Generators default
  to dark outlines. This is the single biggest tell.
- **Strip every character of text.** Every label on the site is live HTML or a
  real SVG text node. Nothing baked into a raster. This is accessibility,
  translation, and the English and 中文 delivery line.
- **Artefacts.** Extra limbs, garbled equipment, a nonsense control chart. A
  Lean Six Sigma buyer reading a badly drawn control chart is the worst outcome
  available on a page arguing for rigour.
- **Red audit.** Strip every red pixel.

## Stage 7. Export and ship

Watercolour is raster by nature, so most of this ships as WebP with alpha.

- 2x export, then compress. Under 120KB per illustration, under 250KB per hero.
- Lazy-load everything below the fold.
- Flow arrows, connector triangles, capsule cards and belt badges are **not**
  illustration. They are CSS and SVG and they already exist. Do not let a
  generator draw a UI component.

---

## Never generated, four slots

| Slot | File |
|---|---|
| Faculty member | `src/pages/about.astro:52` |
| Person being quoted | `src/pages/index.astro:277` |
| A real session in progress | `src/pages/about.astro:18`, `src/pages/index.astro:248` |
| A real in-house cohort | `src/pages/in-house/index.astro:25` |

Real photography, or an illustration so plainly stylised nobody could mistake it
for a photograph of a real person. A fabricated face presented as a real
instructor is the one mistake that costs more than the site is worth. These four
are a separate decision and they block About and the home proof section whether
or not the illustration set exists.

---

## Volume, so the estimate is honest

Twenty generated assets, counted slot by slot in `LMI_IMAGE_PROMPTS_v1.md`
section 8: one home difference, four home sector strips, seven method motifs,
one course review, four in-house scenes, one approach, two spare. Six cast
figures on top of that, each needing a sheet and two or three poses.

Every one is hand-corrected, so budget the correction time, not the generation
time. Generation is minutes and correction is the day. Stage the work: methods
first, sector scenes last, and the site stays shippable at every point between.

(An earlier draft of this sheet said 30 to 40. That was my estimate rather than
a count. Twenty plus the cast is the count.)

_End v1._
