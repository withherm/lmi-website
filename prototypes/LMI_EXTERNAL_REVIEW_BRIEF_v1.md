# Review brief: leanmethods.com.au rebuild

_For an external AI reviewer. 9 September 2026. Prepared by Claude for Herman Chan, EQUIBT Group._

---

## 1. What you are reviewing

A rebuilt marketing and enrolment site for **Lean Methods Institute**, the training division of EQUIBT Group. Melbourne based, delivering Lean Six Sigma, Lean Service Design, Lean Business Analysis and Zero Defects training to corporate and government clients across Australia and New Zealand.

**Preview URL:** https://99fa9156-lmi-website.equibt.workers.dev
**Repo:** `withherm/lmi-website`, branch `eqt-417-design-coherence`
**Stack:** Astro 6 static output, Cloudflare Workers with static assets. 53 routes.

Start with the site, not the repo. The repo is there to answer "why is it like that", not to be read end to end.

**The seven pages that carry the argument:**

| Page | What it has to do |
|---|---|
| `/` | Establish that this is training that survives contact with real work |
| `/certifications/` | Prove the credential is independently assessed, not self-issued |
| `/methods/` | Let a buyer pick the right method for their problem |
| `/courses/` and `/courses/lean-six-sigma-green-belt/` | Convert a specific course intent |
| `/in-house/` and `/in-house/government/` | Sell the cohort engagement, which is most of the revenue |
| `/about/` and `/approach/` | Carry the trust argument |

---

## 2. Who has to be convinced

Three buyers, and the site currently tries to serve all three from the same pages.

1. **An operations or quality leader in a corporate or government organisation** buying an in-house cohort. Spends the most, decides slowest, needs to defend the spend internally. Cares about whether the training produces a documented, measured result.
2. **An individual practitioner** buying a public course to get a belt on their CV. Decides fast, price sensitive, wants dates and a clear path.
3. **A procurement or L&D function** doing a comparison. Never reads the argument, scans for certification body, duration, price, and whether the provider looks like it will still exist in three years.

**Aerospace and regulated manufacturing is a live segment.** The Zero Defects family is drafted against the AS13000 series. Several of those buyers work in quality assurance and will read this site sceptically and technically.

---

## 3. What we want from you

Four reviews, in this priority order. Be adversarial. Assume the site is worse than it looks.

### A. Copy

Every page. Judge it against one test: **would this survive a sceptical operations leader reading it in a procurement shortlist?**

Look for claims that sound good and prove nothing. Look for places where we assert a differentiator without evidence behind it. Look for hedging where we should be direct, and for confident phrasing where we have not earned it. Look for jargon that means one thing in engineering and another in finance or HR, because the audience spans both.

Tell us specifically where the copy is weakest, not where it is strongest.

### B. Visual design and page layout

Hierarchy, scan path, density, rhythm, whether the eye lands in the right place on each page. Whether a first-time visitor can tell within five seconds what is sold here and who it is for.

Mobile matters. Check 390 width. Roughly half the traffic to a site like this arrives on a phone from LinkedIn.

Be specific about the failures. "The hero is weak" is not usable. "The hero's right column competes with the headline for first fixation, so the value proposition is read second" is.

### C. Overall branding direction

The harder question, and the one we most want an outside view on.

Lean Methods Institute sits under EQUIBT Group. EQUIBT is B2B advisory, positioned around a category it calls Lean OS. Lean Methods Institute is training. They share a founder, a client base and now a navy.

Tell us whether the current direction reads as a coherent group or as two businesses wearing the same jumper. Tell us whether "We build lean, AI-capable teams" is a position or a slogan. Tell us whether the AI angle reads as a genuine differentiator or as 2026 table stakes that every competitor is also claiming.

### D. Anything in the repo that will bite

Accessibility, semantics, SEO, performance, structured data, anything that will cost us in six months. Lower priority than A to C, but flag it.

---

## 4. Already decided. Do not relitigate these.

Comment only if you think one is actively wrong and can say why in one paragraph.

| Decision | What it is |
|---|---|
| Colour system | Deep navy `#1F3268`, mid blue `#2E6CB5`, cyan `#35A8DC`, pale blue `#C2D4E7`. Logo square is EQUIBT Group navy `#26245C`. |
| Type | Montserrat headings, Source Serif 4 body. Locked ladder in `src/styles/tokens.css`, no size outside it. |
| Nav | Ported deliberately from the EQUIBT site so the two feel like one group. |
| Signal colour | Red is risk and failure states only. Green is cleared states only. Never a button, heading, link or decoration. |
| Stack | Astro plus Cloudflare Workers. Not up for discussion. |
| Illustrations | Not made yet. Every `.illus` block is a marked placeholder, not a design failure. Ignore them, but do comment on whether the slots are in the right places. |

---

## 5. Hard constraints. Breaking any of these makes the output unusable.

1. **Never write "LMI".** The name is always spelled out as Lean Methods Institute. AUSQ may be named.
2. **Never name a client.** Not in an example, not in a suggestion, not hypothetically.
3. **Do not mention CUBOROO, CUBOROO AU, or Emvisage.** They appear in `AGENTS.md` only because that file lists them as excluded. They are other businesses in the group and have nothing to do with this site.
4. **No em dashes or en dashes.** Colon, comma, or restructure the sentence.
5. **Australian English.** Organisation, programme, recognised, analyse.
6. **No emojis.**
7. **Critique copy, do not author replacement copy that ships.** House rule: all site copy is Claude-authored. Show us the problem and, where it helps, a short illustrative rewrite to make the point. We will write the version that ships.
8. **Do not invent figures.** No pass rates, no client counts, no ROI percentages, no participant numbers. If a claim on the site needs a number to be credible, say so and leave the number blank. Placeholders on the site currently read `DATE` and `In build` on purpose.
9. **Do not suggest generated photographs of people.** Four slots are marked as photography and stay that way. A fabricated face presented as a real instructor or a real cohort is the single worst mistake available here.

---

## 6. Known issues. Confirm, deepen, or dismiss. Do not just repeat them.

We already know about these. Telling us they exist adds nothing. Telling us we are wrong about them is worth a lot.

- **Naming.** The Zero Defects family is currently called Zero Defects, matching the AS13000 language aerospace buyers use. The architecture doc locks the name as "Right First Time". Which is correct for the buyer?
- **Navigation.** Top nav is Courses, Methods, Certifications, Resources, Insights, About. In-house delivery is inside the Courses dropdown, despite being most of the revenue. Should it be top level?
- **Title tails are inconsistent.** Across 21 courses, most `metaTitle` values end in the brand, three end in "AUSQ-Certified", one in a standards number, one in "Free Online Intro". What should the convention be?
- **Pricing is partly unconfirmed.** Green Belt and Black Belt fees are confirmed. The rest are pegged to duration. Zero Defects has none and shows a visible placeholder. Is showing a placeholder better or worse than showing nothing?
- **The home belt ladder starts at Yellow.** White Belt is free, one hour, and has a page, but is not on the ladder. Is that a missed entry point or correct restraint?
- **Resource Centre is mostly empty.** Six hubs, nine tools listed as "In build". Does publishing a visible roadmap build credibility or advertise that the site is unfinished?

---

## 7. How to give us the output

One document. Ruthless, specific, prioritised.

**For every finding, give us four things:**

1. The page or file, and where on it.
2. What is wrong, in one sentence.
3. Why it costs us, tied to one of the three buyers in section 2. Not "best practice".
4. What you would do instead, concretely.

**Order the whole thing by what it costs us, not by page order.** Put the finding that loses us the most revenue first. We would rather have eight findings that matter than forty that are true.

**Say what is working, briefly, and only where it is load-bearing.** We need to know what not to break.

**End with the one thing you would change if you could change only one thing.**

---

## 8. Reference files in the repo

| File | What it holds |
|---|---|
| `src/styles/tokens.css` | The locked type scale and the full colour system |
| `src/styles/base.css` | Card grammars, nav, buttons, signal states, icon strokes |
| `src/data/courses.ts` | All 21 courses, families, durations, fees, meta titles |
| `src/data/site.ts` | Sectors and resource hubs |
| `src/components/icons/Icon.astro` | The icon library and its accent rule |
| `prototypes/LMI_DESIGN_MOCKUP_PROMPT_v2.md` | The design system as briefed |
| `prototypes/LMI_ILLUSTRATION_PRODUCTION_v1.md` | Illustration pipeline and the rules around it |
| `prototypes/LMI_IMAGE_PROMPTS_v1.md` | Per-slot image prompts |
| `AGENTS.md` | Build rules. Contains the excluded-names list, see constraint 3. |
