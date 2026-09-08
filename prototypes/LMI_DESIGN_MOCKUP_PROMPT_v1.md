# LMI_DESIGN_MOCKUP_PROMPT_v1

_Paste everything below the line into Claude Design. It is self-contained: Claude Design has no vault or repo access, so every value it needs is stated here._

_Source authority: `GOS/Branding/Guidelines/BRAND_SYSTEM.md` (v7.1) and `~/REPOS/lmi-website/prototypes/LMI_DESIGN_LEARNINGS_v1.md` (governing block: EQUIBT COHERENCE REALIGNMENT, 13 July 2026). Where those two files disagree, this prompt resolves it and the resolution is flagged in Section 9._

---

## THE BRIEF

Design four web page mockups for Lean Methods Institute, an Australian Lean Six Sigma and Lean training business. Desktop first at 1440px, with a 390px mobile view of the home hero and the course page pricing block.

The four artboards:

1. **Home** (rebuild of an existing page, see Section 5)
2. **Courses hub** (`/courses/`, currently a stub)
3. **Course page template** (`/courses/lean-six-sigma/`, currently a stub, 13 course pages will inherit it)
4. **Certifications** (`/certifications/`, currently a stub)

This is a real build in Astro heading to production. Design to the system below exactly. Do not improve it, do not introduce a hue, a typeface or a component that is not listed.

---

## 1. WHAT THE BUSINESS IS

Lean Methods Institute trains Lean Six Sigma, Lean Service Design and Lean Business Analysis for Australian and New Zealand corporate and government teams, mostly as in-house cohorts, since 2009. Tagline: **"We build lean, AI-capable teams."**

The single differentiator is AI integration: every belt teaches where AI helps the work and where it must not touch it. Second differentiator: certification is genuinely independent. AUSQ, a separate body, certifies the Lean Six Sigma belts. The institute trains, someone else certifies. Most competitors mark their own homework.

It is the specialist training division of EQUIBT Group, a B2B advisory firm. The two sites must read as one family.

**The buyer:** an L&D or transformation lead in a bank, a government department, a health service or a utility. Conservative, risk-averse, sits in procurement conversations. Also a secondary self-serve buyer: an individual practitioner paying for their own belt with a card.

---

## 2. COLOUR: A TWO-COLOUR SYSTEM

Charcoal structure, crimson accent. Nothing else.

| Role | Hex | Where it goes |
|---|---|---|
| Structural ink | `#22242A` | Headings, structure, and every line of the hand-drawn line-art |
| Accent (the only one) | `#A51C30` | Buttons, text links and their underline, chevrons, eyebrow text and dot, one accent sub-shape per icon, active belt state, sparing inline keyword emphasis |
| Accent hover | `#87121F` | Button and link hover |
| Body text | `#161616` | All body copy |
| Ground, primary | `#FFFFFF` | Base. Hero and footer are always white. |
| Ground, cool | `#F5F5F5` | The alternating ground |
| Ground, inset | `#E6E8EB` | Chips, card insets |
| Dark moment | `#1A1B1E` | One section per page maximum |
| Hairline | `rgba(34,36,42,0.14)` | 1px card borders and containers |
| Belt colours | `#E8B833` / `#2E7D52` / `#1C1C1C` | Yellow, Green, Black. Identity only, never decoration. |
| Logo wordmark | `#2C3E50` | Inside the supplied logo file only |

**Rules that are not negotiable:**

- Headings are charcoal. Never crimson.
- Navy and cobalt blue are banned. They belong to EQUIBT and reading them here breaks the family split.
- Crimson eyebrows are for light grounds only. On the dark section, use an off-white or pale crimson tint so the eyebrow stays legible.
- Grounds alternate: white, light grey, white. Never two adjacent sections on the same ground. The ground change is the separator, so no hairline dividers between sections.

---

## 3. TYPE

Two faces. Montserrat and Lora, both on Google Fonts.

| Role | Face | Spec |
|---|---|---|
| H1 | Montserrat 700 | `clamp(36px, 4vw, 54px)`, line-height 1.04, letter-spacing -0.015em |
| H2 | Montserrat 700 | `clamp(26px, 2.4vw, 33px)`, line-height 1.12, sentence case |
| H3 | Montserrat 700 | 20-22px, sentence case |
| Hero lede | Lora 500 | 22px |
| Body | Lora 500 | 19px, colour `#161616`, line-height 1.6 |
| Captions, testimonial attribution | Lora italic | 16px |
| Eyebrows, labels, chips | Montserrat 700 | 11-12px, all caps, letter-spacing 0.14em |
| Navigation | Montserrat 500 | 14px, sentence case |
| Buttons | Montserrat 600 | 15px |

Body copy is never thin and never mid-grey. Lora 400 or grey body renders fuzzy and is rejected.

---

## 4. LAYOUT, COMPONENTS, MOTION

**Grid.** Content max width 1180px. Hero and wide rows 1320px. 40px gutters. Section padding roughly 88px top and bottom on desktop.

**Nav.** Sticky, white, about 80px tall, 1px hairline underneath. Logo left. Links: Courses (with dropdown), Methods, Certifications, Resources, Insights, About. Persistent crimson "Get in touch" button right.

**Cards.** Clean 1px hairline boxes, about 16px radius, no shadow. Each carries its own line-art icon. Hover: border darkens, card lifts 2px. That is all.

**Chevron links.** Text plus a `›`. On hover the crimson underline draws left to right under the text only, then the chevron nudges right.

**Icons.** Hand-drawn line-art: charcoal `#22242A` stroke, about 2px, round caps, architectural and clean rather than scrappy, with exactly one crimson `#A51C30` accent sub-shape in each. This is a deliberate craft signature, not a wobble. Precision still has to read, because precision is what the business teaches.

**Belt badges.** A true superellipse squircle drawn as an SVG path, not a CSS `border-radius`. Thick stroked outline in the belt colour, white or transparent fill, two-letter monogram inside (YB, GB, BB, MBB). Identical shape and stroke weight across all four. The active badge fills solid in its belt colour; the rest stay outlines.

**Motion.** One fade plus an 8px rise per section, 350ms, once, never repeating on scroll back. Respects reduced motion. The belt ladder is the one place motion may show off, because there it also does wayfinding.

**Hard NOs. Each of these was built by mistake once already and rejected:**

- No `01 / 02 / 03` numbering on cards.
- No coloured or accent bar across the top of a card, and no left rule.
- No gradient wash on a featured card. Mark a featured card with a flat crimson hairline border and a barely-there flat crimson tint.
- No fake squircle from `border-radius`.
- No tint change on card hover.
- No carousels of any kind, especially not a logo marquee or a testimonial slider.
- No parallax, no scroll-jacking, no load-in animation theatre, no bouncing or pulsing CTAs.
- No full-screen hero image you have to scroll past to reach information.
- No dark hero. Hero and footer are white, always.
- No stock photography, no purple or blue gradients, no emoji, no icon-font icons, no AI raster illustration.
- No more than one dark section per page.

---

## 5. ARTBOARD 1: HOME

A version of this page is already built. Rebuild it to the system above rather than starting fresh: same sections, same order, corrected type and colour.

Sections, top to bottom:

1. **Hero.** White. Two columns. Left: eyebrow, H1 "We build lean, AI-capable teams.", a Lora 22px lede, one crimson primary button and one chevron link. Right: the belt ladder.
2. **Belt ladder, the signature motif.** A vertical climb, Yellow Belt at the foot to Master Black Belt at the top, drawn as **stepped stairs**: discrete treads, each belt one step up, badges sitting on the treads. Never a single sloped or diagonal line, and the connector must never cut through card content. Each rung carries the belt badge, the belt name and a one-line outcome. The selected rung expands to show duration and credential, takes a crimson ring, and lights a crimson spine fill from the foot up to it. Default selection: Green Belt.
3. **AI differentiator.** Light grey. Verb-first H2, three proof columns on hairlines, one per belt level. This block sits second on purpose: it is the uncontested position.
4. **Our difference.** Four cards. Headers lead with the outcome, not the mechanism: "Decisions your team can defend", "Skills that hold up in live work", "Faster analysis without losing rigour". Never "Evidence-first". Tiles may bleed off the right edge and cascade in a stepped right-indent down the stack to balance a heading-left column.
5. **What we teach.** Four offer cards: Lean Six Sigma belts, Lean Service Design, Lean Business Analysis, In-house training. Each with its line-art icon, an outcome-first name, format chips and a chevron link.
6. **Contextualised training.** A sector selector: tabs in a left rail, each with a leading line-art icon (crimson when active, charcoal when not). Sectors: Corporate, Government, Financial Services, Healthcare. Each panel shows "Common challenges" and "Context we include in training".
7. **In-house callout.** A real session photograph, left, carrying a crimson eyebrow tag and a verb-first text overlay. Copy and a crimson CTA right. CTA wording: "Enquire about in-house training".
8. **Proof, two walls.** First: "Where our graduates work", roughly 12 to 15 anonymised monochrome descriptor tiles, static. Second: "Organisations we've trained", a separate monochrome logo wall of about 15 marks on white. Use neutral placeholder marks. Never a carousel, and never a real or recognisable client logo.
9. **Testimonial.** One, in Lora italic, with a real photograph and an attribution by role and sector, never by name.
10. **Dark CTA panel.** The one dark moment, `#1A1B1E`. Copy left, a "Belt Level Selector" tool card right. White or crimson button on the dark field, eyebrow in a light tint.
11. **EQUIBT handover.** Eyebrow "PART OF EQUIBT GROUP", an H2, a narrative paragraph (this is EQUIBT's specialist training division, same Lean and AI methods, taught to your team), the EQUIBT wordmark, and a chevron link "Explore advisory at EQUIBT ›". A story-framed block, not a thin two-line card.
12. **Footer.** White, top hairline, Montserrat links. Line: "Lean Methods Institute, a specialist training division of EQUIBT Group." Two-column link grid on phones.

---

## 6. ARTBOARD 2: COURSES HUB

The index of everything taught. Content-first: the list starts immediately, no hero image to scroll past.

1. **Page head.** White, tight. Eyebrow, H1, one line of Lora lede. No image.
2. **Filter row.** Filter by method (Lean Six Sigma, Lean Service Design, Lean Business Analysis), by belt level, and by format (in-house, public, self-paced). Real controls, not decorative chips.
3. **The Lean Six Sigma belt row.** Four course cards, one per belt, each carrying its belt badge top-left, the outcome-first name, duration, format chips, an "AUSQ certified" credential chip, the price including GST, and a chevron link.
4. **Other methods.** Course cards for Lean Service Design and Lean Business Analysis in the same card grammar.
5. **In-house band.** Light grey. In-house is the main commercial route, so it needs its own block: what changes when it is delivered in-house, and an "Enquire about in-house training" CTA.
6. **Not sure where to start.** A link block to the Belt Level Selector tool.
7. **Dark CTA panel**, then footer.

Pricing is public and visible on the card. There is no "contact us for price" on a standard belt course.

---

## 7. ARTBOARD 3: COURSE PAGE TEMPLATE

Design it as a template. Thirteen pages will inherit it. Use Lean Six Sigma Green Belt as the worked example.

1. **Hero.** White, two columns. Left: belt badge, eyebrow, H1, a Lora lede on the outcome. Right: a sticky enrolment card, hairline, carrying price including GST, next dates, duration, format, the AUSQ certified chip, a crimson "Enrol" button and a secondary "Enquire about in-house" chevron link. The card stays visible as the page scrolls.
2. **What you will be able to do.** Outcomes, verb-first, four to six of them. Not a syllabus dump.
3. **AI in this course.** Structural on every course page. What AI does in the work, and where it must not touch it.
4. **What is covered.** The module list, chunked, with a framework diagram breaking up the text.
5. **How you are assessed.** The four gates: training, knowledge test, application, coaching. This is the credibility block: assessment is project evidence from real work, never a quiz.
6. **Your credential.** What AUSQ certification means and that AUSQ is independent, with a link to Certifications.
7. **Who it is for and prerequisites.** Two short columns.
8. **Dates and pricing table.** Public dates, price including GST, per participant.
9. **One testimonial**, Lora italic, attributed by role and sector.
10. **Dark CTA panel**, then footer.

Mobile view required for the enrolment card: it collapses to a sticky bottom bar carrying price and the Enrol button.

---

## 8. ARTBOARD 4: CERTIFICATIONS

The trust page. Its whole job is to make the independence argument visible instead of buried.

1. **Page head.** White. Eyebrow, H1, a lede stating plainly that the institute trains and a separate body certifies.
2. **The separation diagram.** The centrepiece: a clean line-art diagram showing trainer and certifier as two distinct parties, with the assessment flowing between them. This is the argument, so give it room.
3. **The four gates.** Training, knowledge test, application, coaching. Four hairline cards with line-art icons. A person who fails a gate does not hold the credential, and the page should say so.
4. **The two ladders.** Improvement capability (White, Yellow, Green, Black, Master Black) and Lean system capability (Lean Foundation, Lean Practitioner), plus the Lean Executive Champion sponsor role, which sits on neither ladder. Reuse the stepped-stairs belt ladder for the first, a simpler two-step for the second.
5. **Verify a credential.** Light grey. A single-field ID lookup returning one clean result. Built for an employer or a procurement officer, not a scrollable 18,000-row register. Mention the shareable digital badge that can be added to a LinkedIn profile.
6. **What each credential means to an employer.** A comparison table, plain language, one row per level.
7. **Dark CTA panel**, then footer.

---

## 9. RESOLVED CONFLICTS AND OPEN CALLS

Flag these in the delivery notes rather than silently picking.

1. **Heading colour.** One source says charcoal `#22242A`, another says `#2C3E50`. This prompt uses `#22242A` for all headings and structure, and keeps `#2C3E50` inside the logo file only. Show one home hero variant at `#2C3E50` so the difference can be judged side by side.
2. **Hero motif.** The default is the hand-drawn line-art belt ladder, for family coherence with EQUIBT. A treated, art-directed photograph is the alternative where a genuinely strong real session photo exists. Design the line-art version as primary and note where a photograph would swap in.
3. **Photography.** Three zones use real photography and only real photography: faculty, in-house delivery proof, and the lead testimonial. Those make a truth claim about a real person or a real session, so they can never be AI generated. Everywhere else stays line-art. Use clearly marked placeholders.

---

## 10. VOICE, FOR EVERY WORD ON THE PAGE

- Australian English.
- Firm "we". Never name the founder.
- Verb-first active headlines. Every heading starts with a verb where the grammar allows.
- Short sentences. Plain words. No hedging.
- No em dashes or en dashes anywhere. Colon, comma or hyphen.
- No emoji.
- Never write the abbreviation "LMI" in anything a visitor sees. Always "Lean Methods Institute".
- Never name a client. Anonymised descriptors only, by sector and size.
- No years or dates in client-work copy. "Since 2009" in the founding line is allowed.
- Banned words: game-changer, unlock, leverage, unpack, journey, dive in, fast-paced world.
- Primary CTA wording is "Get in touch", never "Book a discovery call". In-house CTA is "Enquire about in-house training".
- Tone: expert, accessible, energising. A touch warmer than the advisory parent brand, still credible to a procurement officer.

---

## 11. WHAT TO HAND BACK

Four artboards, plus the two mobile views, plus the one heading-colour variant. For each artboard, a short note listing every place a decision was made that the prompt did not cover, and every placeholder that needs real content before build.

Do not write production code. These are design mockups for sign-off, and a separate build agent implements them in Astro.
