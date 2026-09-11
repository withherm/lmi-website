# BRIEF: TEST THE STYLE DESCRIPTION BEFORE WE SPEND ON IT

For a frontier model that can generate images. 11 September 2026, EQT-417.

**This is a test with outputs, not a critique.** Every claim you make must be
backed by an image you generated. If you cannot show it, do not assert it.

---

## 1. What this is for

Lean Methods Institute is a Lean Six Sigma and Lean training business selling to
corporate and government buyers in Australia and New Zealand. Its new website is
built and the visual system is finished. What remains is roughly twenty
illustrations plus a recurring cast of six figures, all of which have to look
like one commissioned set rather than twenty separate generations.

The house style has been written out in words. It has never been tested against
a real generator. Before any money or days go into production, we need to know
whether the words actually produce the picture they describe.

## 2. Hard constraints, no exceptions

**Do not ask for, accept, or use any reference image of the art style we are
aiming at.** The whole point of the written description is that the style is
grown from words and then from our own corrected output. Style references from a
third party's commissioned work are a derivative-work argument and a
reputational risk with these buyers. Text prompts only.

**The palette is closed.** Paste this line into every prompt:

```
Palette strictly limited to: deep navy #1F3268, mid blue #2E6CB5, cyan #35A8DC,
pale blue #C2D4E7, pale blue tint #E3EBF4, off-white #F4F4F2, warm white paper
#FFFFFF. No other colours. No red, no orange, no green, no purple.
```

**No text of any kind inside an image.** Every label on the site is live HTML or
a real SVG text node, for accessibility, for translation, and because delivery
runs in English and Chinese.

**There are two registers and they must not blend.** People are painted. Objects
and diagrams are flat-filled and drawn. A prompt belongs to one or the other.

---

## 3. The written style, exactly as it stands

**Register A, people.**

> Watercolour illustration on a plain off-white ground with no background texture. Soft mottled washes with visible brush variation inside each garment, no gradients and no airbrush. Skin left as a pale warm neutral, almost unpainted. The face is properly drawn with eyes, hair and an expression in economical fine dark linework. Hair and shoes carry the darkest values. The figure stands on nothing, no ground shadow and no baseline. Full length, mid distance. No text, no lettering, no numbers, no logos anywhere in the image.

**Register B, objects and diagrams.**

> Flat editorial illustration on a plain off-white ground. Flat blue value fills with a faint mottled wash inside each shape, no gradients. Outline strokes in deep navy with a rough slightly wobbling hand-drawn edge, never a clean geometric line. Separate parts of an object divided by thin white keylines, never dark ones. Generous empty ground around the subject. No text, no lettering, no numbers, no logos anywhere in the image.

**The four seeds.** Each is the register's style block, then the scene, then the
palette line.

- **A, Register A.** A person seated at a desk looking at a large monitor showing an abstract flow diagram of connected rectangles. A second person stands beside them, one hand resting on the desk, looking at the same screen. Three-quarter view from behind and to the side.
- **B, Register A.** Four people standing in a loose semicircle facing a large paper-covered wall, one of them reaching up to place a small square note on it. Seen from behind the group.
- **C, Register B.** A simple industrial object on an empty paper ground: a stack of three shallow trays, slightly separated, seen from a low three-quarter angle. No people. Deep shadow replaced by a single flat pale-blue wash.
- **D, Register B.** Close crop of two hands on a desk, one holding a pen above a sheet of paper carrying an abstract line chart. No face in frame.

---

## 4. Run it

Generate each seed at five variations. Twenty images. Then answer, with the
images as evidence:

1. **Which phrases did the generator ignore?** Name them. For each, show the
   image and say what it produced instead. We expect failures on "skin left as a
   pale warm neutral, almost unpainted", on "white keylines, never dark ones",
   and on "the figure stands on nothing". Confirm or correct that expectation.
2. **Did the palette hold?** Sample the actual pixel values. How far off is the
   navy, and does anything outside the list appear.
3. **Did text appear anyway?** Count how many of the twenty carry lettering.
4. **Are the two registers actually distinguishable** in the output, or did the
   generator produce one house look for all four seeds.
5. **What did it add that nobody asked for?** Drop shadows, gradients,
   backgrounds, ground planes, extra props.

## 5. Then improve it

Rewrite both style blocks. For every change, state the failure it fixes. Then
re-run all four seeds at five variations on the new wording and show the
before-and-after side by side.

Do not make the blocks longer for the sake of it. If a phrase is carrying
nothing, say so and cut it. A short block the generator obeys beats a long one
it averages out.

## 6. Then answer the question that matters

We intend to pick five images from this pool, correct them by hand in Affinity,
and build a reusable style from those five. Every later asset inherits from
them.

**On the evidence in front of you: can five corrected images from this wording
carry twenty scenes and six recurring figures as one coherent set?** If not, say
what the written description is structurally missing, not what we should tweak.

---

## 7. Deliverable

Keep it tight. In this order:

1. Verdict in three sentences.
2. Per-seed findings, evidence first.
3. The rewritten Register A and Register B blocks, clean, ready to paste.
4. A table of each change against the failure it fixes.
5. Before and after images.
6. Anything you think is wrong with the approach itself, stated plainly.

Australian English. No em dashes or en dashes. Do not use the abbreviation
"LMI", write Lean Methods Institute. Do not invent figures of any kind.
