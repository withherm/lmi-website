# BRIEF: JUDGE THE WATERCOLOUR DIRECTION AS BUILT

For a frontier model that can see images and open a web page. 11 September 2026,
EQT-417.

---

## 1. What you are looking at

Lean Methods Institute is a Lean Six Sigma and Lean training business selling to
corporate and government buyers in Australia and New Zealand. The credibility
argument on the site is rigour: independent certification, real projects,
measured results. The visual system has to carry that and still feel like it was
made by a person.

The direction being aimed at is a hand-painted explainer register: watercolour
washes, drawn outlines, flat blue fills, white keylines. The site is currently an
approximation of that built entirely in CSS and SVG. Real illustration is a
separate, later job.

**Live preview:** `PREVIEW_URL_HERE`

Look at the home page, `/methods/`, `/certifications/` and `/in-house/`, at
desktop width and at phone width.

## 2. What has already been built

- **Drawn outlines.** Every container carries a 3px outline drawn as an SVG path
  with a gentle undulation, used as a `border-image`. One weight, one radius.
- **Washed fills.** Solid navy surfaces carry a screen-blended wash so the fill
  is not flat. Pale blue object fills carry a multiply-blended pooling.
- **A band of paint.** Where a group of objects belongs together, the blue is a
  band behind them with a displaced, brushy edge, deliberately offset from the
  content grid so it never lines up with a container edge. One band per page.
- **Two-pass ink on the icons.** Each icon draws twice, the second pass thinner
  and lighter through different noise, so the contour carries weight variation.
- **Paper grain on the pale areas** at 10% multiply.

## 3. What has already been tested and rejected

Do not spend the round re-proposing these. Each was built, looked at, and
dropped for a stated reason.

- **Page-wide paper texture.** Grain fine enough to read as paper is invisible
  at 1:1 on a screen. Grain coarse enough to see reads as noise over the type.
  Tested at four strengths.
- **A screen-blended wash on pale blue.** It desaturated the blue and broke the
  palette. The pale fills now multiply instead.
- **Displacement filters on thin outlines.** They move a rasterised line by a
  quantised amount, so a 3px border comes out in steps with visible breaks.
  That is why the outline is a path now.
- **A repeating tiled edge.** The repeat is readable as scalloping. The edge
  stretches instead.
- **Broad full-bleed tint sections.** Two earlier reviewers both objected, and
  the blue moved into the objects and the band.

## 4. The direction reference

You will be given still frames from a commissioned explainer film. They are
**direction reference only**. They are never a style-training input, they are
never uploaded to a generator, and nothing that reproduces them ships. Use them
to say what the site is missing, not as something to copy.

## 5. What to judge

Three questions, in order of how much we care.

1. **Where does the site still read as CSS approximating watercolour rather
   than as commissioned work?** Be specific: name the element, the page, and
   what gives it away.
2. **What would close the most ground for the least work?** We have already
   concluded that the remaining gap is real illustration. If you agree, say so
   in one line and move on. What we want from you is what else is available
   before that, and whether any of it is worth doing.
3. **What is now over-done?** A hand-drawn treatment applied to everything stops
   reading as a hand and starts reading as a filter. Name anything that should
   go back to being plain.

Then, secondary: composition, hierarchy, colour balance, and whether the
credibility argument survives the softer visual register. A softer look on a
page arguing for rigour is a real risk and we want it named if you see it.

## 6. How to answer

Ranked, most important first. For each finding: what, where, why it matters,
and the specific change. A finding we cannot act on is not a finding.

Separate what you verified by looking from what you are inferring. Say which is
which.

If you think the direction itself is wrong for this buyer, say that first and
argue it. We would rather hear it now than after the illustration budget is
spent.

Australian English. No em dashes or en dashes. Do not use the abbreviation
"LMI", write Lean Methods Institute. AUSQ may be named. Do not name any client.
Do not invent figures of any kind.
