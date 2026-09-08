# LMI_DESIGN_MOCKUP_PROMPT_v2

_Supersedes v1 (8 September 2026). v1 specified the charcoal and crimson hand-drawn line-art system locked on 13 July. Herman has reversed that: Lean Methods Institute adopts a watercolour-illustration blue system, referenced from the AESQ "Defect Prevention" explainer. Section 12 lists everything this reversal cascades to. Paste everything below the line into Claude Design._

---

## THE BRIEF

Design four web page mockups for Lean Methods Institute, an Australian Lean Six Sigma and Lean training business. Desktop first at 1440px, plus a 390px mobile view of the home hero and the course page pricing block.

The four artboards:

1. **Home** (a version exists and is being rebuilt to this system)
2. **Courses hub** (`/courses/`, currently a stub)
3. **Course page template** (`/courses/lean-six-sigma/`, currently a stub, 13 course pages inherit it)
4. **Certifications** (`/certifications/`, currently a stub)

This is a live Astro build heading to production. Design to the system below exactly. Do not introduce a hue, a typeface or a component that is not listed.

---

## 1. WHAT THE BUSINESS IS

Lean Methods Institute trains Lean Six Sigma, Lean Service Design and Lean Business Analysis for Australian and New Zealand corporate and government teams, mostly as in-house cohorts, since 2009. Tagline: **"We build lean, AI-capable teams."**

First differentiator: AI integration. Every belt teaches where AI helps the work and where it must not touch it. Second differentiator: certification is genuinely independent. AUSQ, a separate body, certifies the Lean Six Sigma belts. The institute trains, someone else certifies. Most competitors mark their own homework.

It is the specialist training division of EQUIBT Group, a B2B advisory firm.

**The buyer:** an L&D or transformation lead in a bank, a government department, a health service or a utility. Conservative, risk-averse, sits in procurement conversations. A secondary self-serve buyer pays for their own belt with a card.

---

## 2. THE VISUAL REFERENCE

The whole system is drawn from the AESQ "Defect Prevention: Key Quality Tools for Zero Defects" explainer: an aerospace quality-standards piece built from watercolour-textured illustration in a blue family, with capsule cards, illustrated people and a flow running left to right.

It is the right reference for three reasons. It teaches a technical process without dumbing it down. It reads as credible to exactly the conservative engineering and quality buyer this business sells to. And it carries warmth without a single stock photograph.

Study it closely. The system below is a description of it, not a loose interpretation.

---

## 3. COLOUR

A blue system with one reserved signal red.

| Role | Name | Hex | Where it goes |
|---|---|---|---|
| Structure, card headers, headings | Deep Navy | `#1F3268` | Capsule card headers, H1 and H2, dark sections, primary silhouettes |
| Darkest ink | Ink Navy | `#152451` | Authority silhouettes, deepest garment fills, the darkest note in an illustration |
| Primary fill, action | Mid Blue | `#2E6CB5` | Buttons, illustration mid-tones, machine bodies, active states |
| Secondary fill | Steel Blue | `#5B87C0` | Garments, folders, secondary illustration shapes |
| Accent | Cyan | `#35A8DC` | Small accent marks, connector triangles, one bright note per illustration, icon highlights |
| Wash, flow | Pale Blue | `#C2D4E7` | The large flow arrow behind a sequence, grid panels, pale zones |
| Tint ground | Pale Blue Tint | `#E3EBF4` | A third page ground |
| Neutral, secondary figures | Grey | `#9A9A9A` | Background people, de-emphasised elements |
| Neutral dark | Charcoal Grey | `#4A4A4A` | Darker neutral garments, contrast against navy |
| Ground, primary | White | `#FFFFFF` | Base. Hero and footer are always white. |
| Ground, alternate | Off-White | `#F4F4F2` | The alternating ground, matches the reference paper |
| Body text | Near-Black | `#161616` | All body copy |
| Signal Red | Signal Red | `#E8484C` | Risk and failure states only |
| Hairline | — | `rgba(31,50,104,0.14)` | 1px card borders |

**Rules:**

- **Signal Red is for risk, failure and exclusion only.** High risk bars, warning triangles, cross marks, a control that has failed. It is never a button, never a heading, never a link, never decoration. In the reference it appears perhaps six times in four minutes, and that restraint is what makes it work.
- Headings are Deep Navy. Body is near-black.
- Grounds cycle white, off-white, pale blue tint. Never two adjacent sections on the same ground. The ground change separates sections, so no hairline dividers between them.
- Navy is now structural rather than a punctuation moment, so the old "one dark section per page" rule is replaced: at most **two** full Deep Navy sections per page, and never two in a row.

---

## 4. THE ILLUSTRATION SYSTEM

This is the heart of it. Get this right and the rest follows.

**Medium.** Every filled shape carries a watercolour or gouache wash: visible paper grain, uneven pigment density, slightly darker pooling toward the edges. Shapes are flat colour rather than gradient-shaded, and the texture supplies all the variation. Washes end in a soft deckled edge, not a clean vector cut, most visibly along the bottom hem of a garment.

**Contour.** Figures and objects are not outlined in a dark stroke. Faces, hands and interior folds are drawn with a fine **white or pale blue** contour line sitting on top of the fill. Facial features (eyes, brows, mouth) are drawn in fine black or dark navy. Hair is a solid textured shape. Where two figures or objects overlap, a white keyline separates them.

**Figures.** Stylised, slightly elongated, three-quarter or profile view, in business dress. Faces are simple and warm: a few confident lines, never rendered or shaded. Skin is left as the paper ground and defined only by contour. Visibly varied in age, gender and ethnicity, as the reference is. Some figures are pure Ink Navy silhouette, used for authority or background roles.

**Objects and machines.** Built from flat textured shapes with white keylines separating the parts, no perspective shading. The jet engine in the reference is the model: concentric bands of navy, mid blue and pale blue, each separated by white.

**Cards, the capsule.** Rounded rectangles with a generous radius, roughly half the header height. A Deep Navy header cap carrying all-caps white type, over a white or pale body. Small labels inside are stadium-shaped pills. This capsule is the signature component and it should appear on every page.

**Flow.** A large Pale Blue arrow or band runs behind a sequence, left to right, carrying the eye. Small solid Cyan triangles connect one card to the next. Where a timeline or narrative runs, a long ribbon curve threads through it, as the double-helix does along the bottom of the reference.

**Speech bubbles.** Rounded capsules, pale fill, dark type, a small tail. Used for the learner or practitioner voice.

**Hard limits on illustration:**

- Illustration earns its place by teaching or by carrying a proof moment. It is never wallpaper and never a decorative header band.
- No perspective, no drop shadows, no 3D, no gradient meshes.
- No outlined-in-black cartoon style. The contour is white or pale blue, always.
- Never a smiling stock-style group shot with no informational job.
- This must read as commissioned illustration. Generic AI-generated raster art will fail on inspection and undermine a page that argues for rigour.

---

## 5. TYPE

Two faces, unchanged. Montserrat and Lora, both on Google Fonts.

| Role | Face | Spec |
|---|---|---|
| H1 | Montserrat 700 | `clamp(36px, 4vw, 54px)`, line-height 1.04, letter-spacing -0.015em, Deep Navy |
| H2 | Montserrat 700 | `clamp(26px, 2.4vw, 33px)`, line-height 1.12, sentence case, Deep Navy |
| H3 | Montserrat 700 | 20-22px, sentence case |
| Capsule card header | Montserrat 700 | 14-16px, all caps, white on Deep Navy |
| Hero lede | Lora 500 | 22px |
| Body | Lora 500 | 19px, `#161616`, line-height 1.6 |
| Captions, testimonial attribution | Lora italic | 16px |
| Eyebrows, labels, pills | Montserrat 700 | 11-12px, all caps, letter-spacing 0.14em |
| Navigation | Montserrat 500 | 14px, sentence case |
| Buttons | Montserrat 600 | 15px |

Body copy is never thin and never mid-grey. Lora 400 or grey body renders fuzzy and is rejected.

---

## 6. LAYOUT, UI, MOTION

**Grid.** Content max width 1180px, hero and wide rows 1320px, 40px gutters, section padding roughly 88px top and bottom.

**Nav.** Sticky, white, about 80px tall, 1px hairline beneath. Logo left. Links: Courses (with dropdown), Methods, Certifications, Resources, Insights, About. Persistent primary button right, wording "Get in touch".

**Buttons.** Primary is Mid Blue `#2E6CB5`, hover Deep Navy `#1F3268`, white label. Secondary is a Deep Navy outline on white. See Section 11, open call 1: also produce one variant with crimson buttons.

**Content cards.** Two grammars, used deliberately. The **capsule** (navy header cap) is for anything sequential or procedural: process steps, the four gates, module lists. The **hairline box** (1px border, roughly 16px radius, no shadow, hover darkens the border and lifts 2px) is for anything browsable: course cards, resource cards, sector panels. Do not mix them within one section.

**Chevron links.** Text plus a `›`. On hover a Mid Blue underline draws left to right under the text only, then the chevron nudges right.

**Motion.** One fade plus an 8px rise per section, 350ms, once, never repeating on scroll back. Respects reduced motion. The belt ladder is the one place motion may show off, because there it also does wayfinding.

**Hard NOs, all still in force:**

- No `01 / 02 / 03` numbering on cards.
- No coloured bar across the top of a hairline card, and no left rule. (The navy header cap on a capsule is not a top bar. It is the component.)
- No gradient wash on a featured card. Mark a featured card with a flat hairline border in Mid Blue and a barely-there flat tint.
- No fake squircle from `border-radius` on the belt badges.
- No tint change on card hover.
- No carousels, especially not a logo marquee or a testimonial slider.
- No parallax, no scroll-jacking, no load-in animation theatre, no bouncing or pulsing CTAs.
- No full-screen hero image you scroll past to reach information.
- No dark hero. Hero and footer are white, always.
- No stock photography, no purple gradients, no emoji, no icon-font icons, no dense small grey text.

---

## 7. ARTBOARD 1: HOME

Sections, top to bottom:

1. **Hero.** White. Two columns. Left: eyebrow, H1 "We build lean, AI-capable teams.", a Lora 22px lede, a Mid Blue primary button and one chevron link. Right: the belt ladder rendered in the watercolour system.
2. **Belt ladder, the signature motif.** A vertical climb, Yellow Belt at the foot to Master Black Belt at the top, drawn as **stepped stairs**: discrete treads, each belt one step up, badges on the treads. Never a single sloped or diagonal line, and the connector must never cut through card content. Each rung carries the belt badge, the belt name and a one-line outcome. The selected rung expands to show duration and credential, and a Mid Blue spine fills from the foot up to it. Default selection: Green Belt. Belt identity colours (Yellow `#E8B833`, Green `#2E7D52`, Black `#1C1C1C`) survive on the badges only, painted in the same watercolour texture.
3. **AI differentiator.** Off-white. Verb-first H2, three capsule cards, one per belt level, each stating what AI does in the work and where it must not touch it. This block sits second on purpose. Give it one illustration: a practitioner at work with a tool, not a robot and not a brain.
4. **Our difference.** Four hairline cards. Headers lead with the outcome, not the mechanism: "Decisions your team can defend", "Skills that hold up in live work", "Faster analysis without losing rigour". Never "Evidence-first".
5. **What we teach.** Four cards: Lean Six Sigma belts, Lean Service Design, Lean Business Analysis, In-house training. Each with its own illustrated motif, an outcome-first name, format pills and a chevron link.
6. **How a cohort runs.** New section, and the best home for the reference's flow composition: a Pale Blue arrow running left to right behind five capsule cards, from scoping through to certification, with Cyan connector triangles. This is the page's proof that the business knows how to run the work.
7. **Contextualised training.** Sector selector, tabs in a left rail, each with a small illustrated motif. Sectors: Corporate, Government, Financial Services, Healthcare. Each panel shows "Common challenges" and "Context we include in training".
8. **In-house callout.** Pale blue tint ground. Illustrated scene of a session in progress on one side, copy and CTA on the other. CTA wording: "Enquire about in-house training".
9. **Proof, two walls.** First "Where our graduates work", roughly 12 to 15 anonymised monochrome descriptor tiles, static. Second "Organisations we've trained", a separate logo wall of about 15 marks on white, rendered in a single navy tone. Placeholder marks only. Never a carousel, and never a real or recognisable client logo.
10. **Testimonial.** One, in Lora italic, attributed by role and sector, never by name. See Section 11, open call 3, on photography.
11. **Dark CTA panel.** Deep Navy. Copy left, a "Belt Level Selector" tool card right. White or Cyan button on the dark field.
12. **EQUIBT handover.** Eyebrow "PART OF EQUIBT GROUP", an H2, a narrative paragraph (this is EQUIBT's specialist training division, same Lean and AI methods, taught to your team), the EQUIBT wordmark, and a chevron link "Explore advisory at EQUIBT ›". Story-framed, not a thin two-line card.
13. **Footer.** White, top hairline, Montserrat links. Line: "Lean Methods Institute, a specialist training division of EQUIBT Group." Two-column link grid on phones.

---

## 8. ARTBOARD 2: COURSES HUB

Content-first. The list starts immediately, no hero image to scroll past.

1. **Page head.** White, tight. Eyebrow, H1, one line of Lora lede. No illustration here: the content is the point.
2. **Filter row.** Filter by method, by belt level, and by format (in-house, public, self-paced). Real controls, not decorative pills.
3. **The Lean Six Sigma belt row.** Four hairline course cards, one per belt, each carrying its belt badge top-left, the outcome-first name, duration, format pills, an "AUSQ certified" credential pill, the price including GST, and a chevron link.
4. **Other methods.** Course cards for Lean Service Design and Lean Business Analysis in the same grammar.
5. **In-house band.** Off-white, with one illustrated scene. In-house is the main commercial route, so it earns its own block: what changes when it is delivered in-house, and an "Enquire about in-house training" CTA.
6. **Not sure where to start.** A link block to the Belt Level Selector tool.
7. **Dark CTA panel**, then footer.

Pricing is public and visible on the card. There is no "contact us for price" on a standard belt course.

---

## 9. ARTBOARD 3: COURSE PAGE TEMPLATE

Design it as a template. Thirteen pages inherit it. Use Lean Six Sigma Green Belt as the worked example.

1. **Hero.** White, two columns. Left: belt badge, eyebrow, H1, a Lora lede on the outcome. Right: a sticky enrolment card, hairline, carrying price including GST, next dates, duration, format, the AUSQ certified pill, a primary "Enrol" button and a secondary "Enquire about in-house" chevron link. It stays visible as the page scrolls.
2. **What you will be able to do.** Outcomes, verb-first, four to six of them. Not a syllabus dump.
3. **AI in this course.** Structural on every course page. What AI does in the work, and where it must not touch it.
4. **What is covered.** The module list as capsule cards, with one teaching illustration breaking up the text.
5. **How you are assessed.** The four gates: training, knowledge test, application, coaching. This is the credibility block. Assessment is project evidence from real work, never a quiz. Use the capsule and flow-arrow composition here.
6. **Your credential.** What AUSQ certification means and that AUSQ is independent, linking to Certifications.
7. **Who it is for and prerequisites.** Two short columns.
8. **Dates and pricing table.** Public dates, price including GST, per participant.
9. **One testimonial**, Lora italic, attributed by role and sector.
10. **Dark CTA panel**, then footer.

Mobile view required for the enrolment card: it collapses to a sticky bottom bar carrying price and the Enrol button.

---

## 10. ARTBOARD 4: CERTIFICATIONS

The trust page. Its job is to make the independence argument visible instead of buried.

1. **Page head.** White. Eyebrow, H1, a lede stating plainly that the institute trains and a separate body certifies.
2. **The separation diagram.** The centrepiece, and the single best use of the reference style on the whole site. Trainer and certifier as two distinct illustrated parties, the assessment flowing between them on a Pale Blue arrow. Give it full width and real room.
3. **The four gates.** Training, knowledge test, application, coaching, as four capsule cards. A person who fails a gate does not hold the credential, and the page should say so. Signal Red is legitimate here on the failure state, and this is one of the few places on the site it appears.
4. **The two ladders.** Improvement capability (White, Yellow, Green, Black, Master Black) and Lean system capability (Lean Foundation, Lean Practitioner), plus the Lean Executive Champion sponsor role, which sits on neither ladder. Reuse the stepped-stairs ladder for the first, a simpler two-step for the second.
5. **Verify a credential.** Off-white. A single-field ID lookup returning one clean result. Built for an employer or procurement officer, not a scrollable 18,000-row register. Mention the shareable digital badge that can be added to a LinkedIn profile.
6. **What each credential means to an employer.** A comparison table, plain language, one row per level.
7. **Dark CTA panel**, then footer.

---

## 11. OPEN CALLS: PRODUCE THESE VARIANTS

Do not silently choose. Design the default, then supply the variant.

1. **Button colour.** Crimson `#A51C30` was the tested action colour under the previous system and is the colour of the square in the logo mark. The default here is Mid Blue. **Also produce one home hero and one enrolment card with crimson buttons**, so the two can be judged side by side. The question is whether the site loses its only warm note, and whether an all-blue page has anything that pulls the eye to the action.
2. **The logo mark.** The logo is a crimson square with a `#2C3E50` wordmark. On an all-blue page that crimson square is now the only crimson element, and it sits uncomfortably close to Signal Red. Show the nav three ways: logo unchanged, logo square in Deep Navy, and logo square in Mid Blue. Do not redraw the mark, only recolour the square.
3. **Photography.** Three zones previously used real photography and only real photography: faculty, in-house delivery proof, and the lead testimonial. The reference system has no photography at all. Show the testimonial and the in-house block both ways, once with a real photograph and once fully illustrated, and note which you think holds more credibility with a procurement buyer.
4. **Illustration density.** Show the home page at two densities: one illustration per major section, and roughly half that. The reference is dense because it is a four-minute explainer, and a web page that dense becomes decorative.

---

## 12. VOICE, FOR EVERY WORD ON THE PAGE

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
- Tone: expert, accessible, energising. Credible to a procurement officer.

---

## 13. WHAT TO HAND BACK

Four artboards, two mobile views, and the four variant sets from Section 11. For each artboard, a short note listing every decision made that this prompt did not cover, and every placeholder that needs real content before build.

Do not write production code. These are design mockups for sign-off, and a separate build agent implements them in Astro.
