# LMI ART DIRECTION v1

Moving the site off flat vector and toward the AESQ explainer register. Written
against EQT-417, after the external review (ChatGPT) and the empirical audit
(Codex) both landed on the same two notes: the drawing is too mechanical, and
pale blue is spread under whole sections instead of concentrated in the objects.

_Status: implemented on `eqt-417-design-coherence`. AESQ frames are direction
reference only. They are never a style-training input and are never committed._

---

## 1. The drawn line

Three SVG filters live in `Layout.astro` and are reused everywhere.

| Filter | Purpose | Settings |
|---|---|---|
| `ink1` | primary contour wobble | `feTurbulence` fractalNoise, baseFrequency `0.035`, 3 octaves, seed 7, displacement scale **1.2** |
| `ink2` | second ink pass, offset | same, seed 29, displacement scale **1.9** |
| `paper` | grain overlay | fractalNoise `0.85`, 4 octaves, desaturated |

**Displacement scale was measured, not guessed.** A test harness compared 0.6,
1.2, 2.0, a coarser frequency, and a blur variant at icon size:

- **0.6** is invisible at 64px. No point paying the filter cost.
- **1.2** is the sweet spot: the contour is irregular, the shape still reads.
- **2.0** melts. Baselines go visibly wavy and corners degrade.
- Coarse frequency reads as a warp, not a drawn line.
- Blur loses the crispness the icon set depends on.

**Two passes beat one.** A single displaced pass gives wobble but uniform
weight, which still reads machine-made. `Icon.astro` renders the path set twice,
the second through `ink2` at `.42` opacity and thinner stroke (`.hd-2`). That
produces weight variation along the contour, which is what the eye reads as a
hand.

**Paper grain, not a wash.** A mottled colour wash was tested and rejected: it
desaturated the pale blue and broke the palette. Grain at 10% `multiply` on
`.illus` and `.card-icon` holds the blue at value while warming the surface.

Carriers: every icon, every belt badge squircle, the separation diagram shapes,
and the cohort flow arrowheads. Text never goes through a displacement filter.

## 2. Where blue is allowed

**The page ground stays plain.** Off-white and white alternate; pale blue no
longer runs full bleed under a section. Eight full-bleed `.g-tint` sections were
converted (home sectors, certifications verify, about group, resources start
here, courses filter bar, in-house index, in-house sector, course detail).

**Blue moved inside the objects:**

- `.panel` and `.card-tint`: pale blue ground, pale blue edge, for object panels
  (the sector panel, the credential check card, the group cards, related courses)
- `.ic-plate`: pale blue plate behind a card icon
- `.sep-diagram`: the separation diagram is now a pale blue process panel with
  **white nodes on top of it**. White internal keylines, blue ground, drawn edges.
- The cohort flow band stays a pale blue connecting band. That was already right.

Net effect: colour reads as belonging to the thing being explained rather than
to the page furniture.

## 3. The separation diagram

Redrawn in the reference grammar and split into two layouts:

- **Horizontal** (`.sep-h`, above 760px): unchanged geometry, but shapes now go
  through `ink1`, the capsule heads are drawn as paths with a rounded top rather
  than a stacked rect, and the return arrow moved from cyan to mid blue so the
  two arrows share one weight and one family.
- **Vertical** (`.sep-v`, at or below 760px): 360x460, both nodes stacked, the
  evidence arrow between them and the credential return running down the right,
  across, and back up into the training node. At 320px the smallest label lands
  around 11px, which holds.

Both carry the same `aria-label`; only one is in the accessibility tree at a
time because the other is `display:none`.

## 4. What this does not fix

The site is still a grid of hairline rectangles, and that is the largest
remaining mechanical signal. Filters change the line, not the composition. The
next real step is illustrated artwork in the four marked slots plus a bespoke
icon redraw, per `LMI_IMAGE_PROMPTS_v1.md` and `LMI_ILLUSTRATION_PRODUCTION_v1.md`.
Do not expect CSS to close that gap.

## 5. Verification run

- `astro build` clean.
- Reflow at 320 CSS px checked on 8 representative routes, no horizontal
  overflow.
- Before and after captured at 1440 from two builds (previous commit vs working
  tree) for home, certifications and in-house.

_End v1._
