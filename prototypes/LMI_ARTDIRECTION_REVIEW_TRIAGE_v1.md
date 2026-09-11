# TRIAGE: WATERCOLOUR DIRECTION REVIEW

11 September 2026, EQT-417. Review ran against build `1d3490c7`, commit `d227998`.

Verdict on the review itself: the six findings are sound, the self-correction
after seeing the AESQ stills is the most useful thing in it, and the ranking is
roughly right. Four items accepted and shipped, one accepted as a benchmark,
one deferred to assets, and one recommendation partially rejected with reason.

---

## Already resolved in a newer build

The review's build predates the drawn-edge audit fixes. Two defects it did not
see, both now fixed at `953976d`: form-control boundaries were rendering at
1.29:1 rather than the intended 3:1, and 41 of 134 drawn containers were losing
their `background-clip` to a later `background` shorthand, which put a white rim
outside the drawn line. Neither is an art-direction question, but the second was
visible on the credential card the review looked at.

---

## Finding 1: procedural mottling to original painted assets

**Defer to assets.** Agreed, and it is the same conclusion the run sheet already
reached: CSS cannot close this gap. A reusable kit of painted washes and header
shapes is a genuinely useful intermediate deliverable and a smaller job than the
full illustration set, so it is worth splitting out.

**Not doing the interim simplification.** The review suggests simplifying the
washes on large utility panels until the assets exist. The pooling filter was
measured against three alternatives and is the one that holds the blue at value.
Weakening it now would make the site blander for a few days and then be thrown
away. Leave it until the painted assets replace it wholesale.

**Dependency:** stage 1 of the artwork run sheet. Nothing blocks it but Herman's
time at the generator.

## Finding 2: line-treatment hierarchy

**Accept now, in part. Shipped.** The drawn edge now belongs to containers only:
`.card`, `.capsule`, `.rung-inner`, `.enrol`, `.sector-panel`, `.sep-diagram`.
Removed from the graduate labels, the logo marks, the EQUIBT mark and the icon
plates, which were carrying a second frame that said nothing.

**Partially rejected: "retire one weight, one radius".** Keeping one weight and
one radius for interface containers is what makes the system coherent and cheap
to maintain, and it is why a single generated source serves the whole site. What
was wrong was applying that container treatment to things that are not
containers. So the hierarchy is now two levels, drawn container and plain
surface, rather than a spectrum of line treatments. A spectrum belongs in the
illustration assets, not in CSS, where it would be unmaintainable and would drift.

**Not reducing waviness further.** The amplitude was measured against three
alternatives on the real card grid. Removing the treatment from labels and
plates is what fixes the repetition the review noticed, not flattening the line.

## Finding 3: illustrations with a role in the composition

**Accept now, in part. Shipped.** The icon-plate outline is gone from the
in-house sector cards, so the plate is now a plain tinted square inside an
outlined card, which is the reference's nesting.

**Defer to assets: the method thumbnails.** The review is right that a small
geometric icon centred in a large pale panel is weak. The fix is the seven method
motifs from the prompt pack, which are already specified. Resizing the panel in
the meantime treats the symptom.

**Agreed and noted for the illustration phase:** scenes that explain actual work,
and objects that overlap boundaries rather than sitting inside them.

## Finding 4: the band as a connection

**Test in benchmark.** Agreed in principle and agreed on the test section. The
cohort flow is the one place on the site with a real sequence, and it currently
has a pale connecting arrow behind it rather than a band, so the two ideas need
reconciling rather than stacking.

**Not changing the sector bands yet.** Reducing band height so it passes behind
part of a group is a real idea and needs to be seen, not reasoned about. One
section, Herman's eye, then propagate or drop.

## Finding 5: credibility hierarchy

**Accept now, in part. Shipped.** Fifteen empty logo placeholders are hidden
behind a flag. They took a screen of space and demonstrated nothing, on a page
whose argument is measured evidence, and the caption admitted they were
placeholders. One line to restore when logos are cleared.

**Shipped:** graduate sector labels are now plain, no frame.

**Blocked on you, not on design.** An anonymised project example with problem,
method, measurement and assessment is the single strongest thing that could go
on that page. It needs real numbers from a real engagement and a client who has
cleared it. Nothing gets invented.

## Finding 6: structural inconsistencies

**Accept now. All three shipped, all three confirmed factual.**

- The headline said six methods; there are seven families. The meta description
  also listed six and omitted Lean Operations. Both corrected.
- A family with one course read "1 programmes". The family detail page already
  handled the plural correctly; the index did not. Corrected.
- Lean Executive Champion sat inside the right-hand ladder while its own copy
  says it belongs to neither. Moved below both ladders, where the copy is true.

Also fixed while in there: the longest graduate label was clipping at 1440.

---

## What I am not doing, and why

The review's boundaries list is correct and I am holding to all of it. No page
grain, no screen-blended pale fills, no displacement on thin outlines, no tiled
edges, no full-bleed tint sections. The AESQ stills stay direction reference and
never go near a generator.

One thing the review could not check and neither should anyone reading it: none
of this was verified at phone width by the reviewer. I have re-run the layout
checks at 320, 390, 768, 1024 and 1440 after these changes.

---

## Next

The benchmark section. Cohort flow, one section, desktop and phone, Herman's
approval before anything propagates. That is the right gate and I would rather
build it once the painted assets exist than fake them in CSS first.
