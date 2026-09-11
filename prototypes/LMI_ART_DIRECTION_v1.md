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

## 3b. The box grammar

Read off the reference frames, the container system there is four rules:

1. **Outlines are a drawn line in the palette, not a grey UI hairline.** About
   2px, generously rounded, clearly present without being dark.
2. **A solid fill carries brush variation.** The navy capsules are not flat.
3. **Parts of an object are separated by white keylines.** A coloured block
   inside a container has white around it and the container's own line outside
   that. Never a dark divider.
4. **Small capsules are filled, not outlined.** The outline treatment belongs
   to containers.

Implemented as:

- `--edge-blue: #A9C0DC` at 2px on white grounds, `--steel-blue` on tinted
  ones. Measured on the real card grid: pale blue is 1.34:1 on white and
  disappears at page scale, steel blue turns the page into a blue grid, and
  the value between them reads as a line without shouting.
- `--radius-card` 16px to 20px, and the icon banner inset 9px with its own
  13px radius so white separates it from the container edge.
- The visible line is an `::after`, not the element's border. The real border
  is transparent and only reserves the space, so the displacement filter never
  touches type. Two ways this breaks: `overflow:hidden` on the container clips
  the wobble back to a straight line, and a child block that reaches the
  padding edge hides the line behind it.
- `#wash` on every solid navy surface: capsule heads, the dark CTA panel, the
  selected sector tab, the pressed filter. Screen never darkens, so white type
  on the fill is untouched while the fill breaks up.
- Internal rules move from grey to pale blue: gate states, the enrolment rows,
  the data tables.
- Form controls and chips take `--steel-blue` rather than the card edge value,
  because WCAG 1.4.11 wants 3:1 on a control boundary and the card edge is
  1.86:1. Measured: 3.70:1 on white, 3.36:1 on off-white.

Cost measured, not assumed: 54 filtered boxes on the home page add about 0.7ms
per frame to a 20-frame scroll (340ms against 326ms with the filters off). The
filters rasterise once and do not re-run on scroll.

## 3c. Weight, and the washed band

**Edge weight is 3px, not 2.** Tested 2, 2.5, 3 and 3.5 on the real card grid.
At 2 the line reads tentative. At 3 it reads as a decision. 3.5 starts to
crowd a small card. Containers take 3px; chips, tabs and form controls stay at
2px, because a 3px line on a 32px-high chip is a box, not an outline.

**The background is a band of paint, not a fill on the section.** Three things
make it read as paint, and all three are needed:

1. The band edge runs through `#soft`, a long-wavelength displacement at scale
   9, so it breaks the way a brush leaves paper. Tested against a hard edge,
   which reads as a CSS section every time, and against gentler settings; below
   about 6 the edge still reads as a rule.
2. The fill pools through `#pool`, multiply so the blue holds its value. An
   earlier screen-blend wash lightened the blue and broke the palette, which is
   why this one darkens instead.
3. The band is offset from the content grid, stopping about 5% short on one
   side, so it never lines up with a container edge. Alignment is what gives a
   section fill away.

One band per page, not one per section. The rest of the page ground stays
plain. An object standing on a band goes white: tint on wash is two values of
the same blue and the object stops separating from its ground.

**Page-wide paper grain was tested and dropped.** At 1:1 on a screen, grain
fine enough to read as paper is invisible, and grain coarse enough to see reads
as noise over the type. Both were measured at four strengths. The watercolour
that actually carries is in the shapes: the band, the pooled object fills, and
the washed navy.

**One bug worth remembering.** `feTurbulence` is a generator, so with no
explicit filter region the default `-10%/120%` paints noise *outside* the
element. That shipped in the previous commit as a faint grey halo around every
washed surface. All four filters now clamp their region.

## 3d. Why the drawn edge is a path, not a filter

The displaced border shipped a real defect, and Herman caught it: the line came
out in short segments with steps and gaps between them, which reads as breakage
rather than as a hand.

The cause is mechanical. `feDisplacementMap` moves a **rasterised** line by an
amount taken from an 8-bit channel, so on a 3px border the offset snaps between
whole pixels and the line tears. Measured at 4x on a card edge: the current
setting, the same with `stitchTiles`, a longer wavelength, a smaller amplitude
and `type="turbulence"` all step. This is not a tuning problem. A thin line and
a displacement filter do not go together.

**A path is continuous by construction.** `src/styles/edges.css` is generated by
`prototypes/tools/gen_edges.py` and carries the outline as an SVG path used as a
`border-image`:

- The undulation is two sine components per straight run, amplitude 1.0px, two
  cycles, tapering to zero at both ends so each run meets the corner arc
  cleanly. Measured against 0.7, 1.3 and a one-cycle version.
- `border-image-repeat: stretch`, not `round`. Round repeats the tile and the
  repeat is readable as scalloping; stretch scales only along the run, so the
  amplitude stays true at every box size and the wavelength grows with the box.
  That is what a drawn line does.
- `border-image-slice: 24` with `border-image-width: 24px` renders the corners
  at 1:1, undistorted. The cost is that a container shorter than about 55px has
  no room for a straight run, so small controls keep their plain 2px border.
- Three colours are generated from the same path: the default edge, steel for
  objects on a tinted fill, and mid blue for hover and the featured card.

One radius for every drawn container, so a single source serves them all.
`--radius-capsule` is gone.

The file is 14KB raw and 2.3KB gzipped, and it removes a filter from every
card, so scrolling got slightly cheaper as well: 339ms against 365ms over 20
frames on the home page.

`#soft` and `#pool` keep using displacement, and that is fine. They act on large
filled shapes, where quantised movement is invisible. Only thin lines tear.

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
