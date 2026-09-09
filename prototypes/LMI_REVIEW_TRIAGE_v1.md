# Triage of the external review

_10 September 2026, EQT-417. Every claim below checked against the code at `636571e`, not taken on trust._

**Verdict: the review is good and it earned its keep.** It respected every constraint, it did not name a client, it did not invent a figure, it did not write replacement copy, and it argued with our position on four of the six known issues instead of restating them. Most of it is verifiably true.

---

## Confirmed. These are real.

### 1. We claim every credential is independently assured, and one is not

`src/pages/in-house/index.astro`: **"Every credential is independently assured."** Said three times on that page.

`src/data/courses.ts`, Zero Defects Practitioner: `certifier: "Certifying body to be confirmed"`.

That is a flat contradiction, and it sits on the exact claim the whole site is built to earn. A quality lead who notices it will discount everything else on the certifications page. **Highest cost item in the review.**

### 2. We say there is no participation certificate, then sell one

`certifications.astro`: **"There is no participation certificate."**

`courses.ts`, White Belt: **"A completion certificate is issued at the end. There is no assessment and no project at this level."**

A completion certificate awarded with no assessment is a participation certificate. Either the absolute claim narrows to the belts it governs, or White Belt stops calling it a certificate.

### 3. The Green Belt purchase panel implies five days buys the credential

`duration: "5 days"` sits directly beside `A$4,345 per participant` in the enrolment card. The assessment section says the credential needs "one workplace improvement project, typically within six months".

Both true, but the buyer reads the panel. Nothing in the panel says the credential arrives up to six months later.

### 4. Every course CTA is a dead end

`src/pages/courses/[slug].astro` lines 47, 48 and 168: `ctaPrimary` and `ctaSecondary` both `href="/contact/"`.

So on all 21 course pages, **"View dates and enrol"** shows no dates and enrols nobody, and **"Download course overview"** downloads nothing. The homepage in-house card labelled **"View programs"** also goes to `/contact/`, not to `/in-house/`.

### 5. Two practitioner courses are indistinguishable on the facts shown

Lean Practitioner: 3 days, A$2,650. AI-Enabled Improvement Practitioner: 3 days, A$2,650. Both promise improvement work with AI. Nothing on the pages tells a buyer which to pick.

### 6. Lean Practitioner has two incompatible scopes

`certifications.astro` positions it as designing and running a management system. Its course page sells "one group Lean improvement initiative, typically within two months". Those are not the same capability.

---

## The review missed one, and it is worse than what it found

**The contact form will silently discard every enquiry, even after the endpoint is wired.**

Six fields, `name`, `email`, `org`, `people`, `interest`, `problem`. All six have an `id`. **None has a `name` attribute.** A form submission sends name and value pairs, so with no names it sends nothing at all.

Right now `onsubmit="return false"` masks it. The day someone connects the endpoint, the form will appear to work and deliver empty enquiries. Nobody finds that until a buyer says they contacted us and we have no record.

Every CTA on the site terminates at this form.

---

## Where the review is right and I was wrong

**The flow band.** My brief told the reviewer the site does not yet have "the flow band running behind the cards". It does. `.flow-arrow` is in `home.css` and renders on the homepage cohort sequence, hidden below 1024. The reviewer caught my error from the live site. That was a factual mistake in the brief I wrote.

**The form disclaimer.** I searched for "not connected", found nothing, and nearly filed the reviewer's claim as unsupported. The site does say it, in different words: "Form is not wired to a backend yet. Endpoint to be connected before launch." My search was too narrow. Separately, that line is developer copy shipped on a public URL and must not survive to production.

---

## Where I would push back

**The type recommendation.** It argues Source Serif 4 should go because the reference is sans-serif. That reasons from the reference, not from the reader. A four-minute video and a page of course detail are different reading tasks, and the serif was chosen because Lora was thinning at 16px in tables and card bodies, which is where most of this site's text lives. The reviewer does not claim the serif fails, only that it differs from the source.

That said, my brief invited this by describing close visual resemblance as the target. If resemblance really is the goal, the objection is fair. If legibility at 16px is the goal, hold the serif. Worth deciding which it is.

**"Improvement that survives a change of minister."** The reviewer reads this as a guarantee. It appears twice, and only one is a promise. In `site.ts` `challenges` it is the customer's stated problem, which is accurate and should stay. As the `h1` it is a claim we make. Only the `h1` is arguable.

**Title tails.** The reviewer deprioritised these. Agreed, and they are already fixed.

---

## What it settled

Four of the six open questions, with reasons:

| Question | Its answer |
|---|---|
| In-house in the top nav | **Yes, promote it.** Matching EQUIBT's nav appearance does not require matching its commercial priorities. |
| Zero Defects or Right First Time | **Keep Zero Defects.** Right First Time softens the regulated-quality intent and resolves nothing. |
| White Belt on the belt ladder | **Keep it off.** A free awareness course would dilute the cohort decision. |
| Resource Centre roadmap | **Against it.** Honesty about an empty destination does not fulfil the promise made before the click. A small useful library beats a labelled roadmap. |

---

## Order I would fix in

1. **The form `name` attributes.** A bug, not a decision. Ten minutes.
2. **The independent assurance contradiction.** Needs your facts on what AUSQ actually assesses and what the Zero Defects route is. Cannot be written until that is settled.
3. **The CTA destinations.** Either build the dates and overview, or relabel to what the destination actually does and carry the course into the enquiry.
4. **The participation certificate contradiction and the Green Belt timing.** Copy, once 2 is settled.
5. **In-house to the top nav.** Structural, cheap, and now has two independent arguments behind it.
6. **The two practitioner courses and the Lean Practitioner scope.** Needs a product decision before a copy fix.

Items 2, 4 and 6 all wait on the same thing: writing down what each credential actually requires and who assesses it. That is the single unblock.
