# Icon sourcing brief: replacing the hand-built icon set

**Status:** ready to run. Blocked only on Icons8 MCP auth.
**Run where:** Claude Code on the MacBook, after `/mcp` authenticates `icons8mcp`.
**Issue:** EQT-417.

---

## Why

The drawn container edge is settled: smooth path, even 3px weight, texture in
the stroke. The icons are now the weakest surface on the site. The fault is not
the style, it is the metaphor. The Lean Six Sigma belts icon reads as a scribble
rather than a control chart. A stock library fixes metaphors better than a
hand-drawn path does.

## What is being bought, and what is not

Buy the **geometry only**. The render system stays exactly as it is.

Every icon on the site is drawn by two CSS classes in `src/styles/base.css`:

```css
.hd{fill:none;stroke:var(--deep-navy);stroke-width:3.2;stroke-linecap:round;stroke-linejoin:round;}
.hd-acc{fill:none;stroke:var(--cyan);stroke-width:3.4;stroke-linecap:round;stroke-linejoin:round;}
```

That system is why a colour change is two rules and not twenty files, why icons
invert to white on `.g-dark` and inside a selected tab, and why they carry the
paper grain. A fixed-colour asset breaks all three.

So: **SVG only. PNG is not usable here.** `get_icon_svg` is the paid tool
($15/month). If the account does not have it, stop and do not substitute PNGs.

## Import procedure, per icon

1. Take the SVG from `get_icon_svg`.
2. Strip every `fill`, `stroke`, `stroke-width` and `style` attribute from the
   paths. Keep `d`, keep the `viewBox`.
3. Give every path `class="hd"`.
4. Promote exactly **one** element to `class="hd-acc"`: the single thing the
   icon is about. Not a decorative flourish. On a chart icon that is the plotted
   point, not the axes.
5. Drop into the matching branch of `src/components/icons/Icon.astro`.
6. Do not add a second ink pass. `.hd-2` exists for the current set and should
   be removed as each icon is replaced.

## Pack

Candidate is `carbon_copy` (Outline Hand Drawn, ~3,890 icons, recommended size
100). It is the only outline pack in the library whose manner matches a painted
explainer. Confirm coverage across the full concept list below **before**
locking, not on the first icon: two of roughly forty concepts are always missing
from any given pack. Write the lock to `icons8.json` at the repo root once
chosen. One pack, no exceptions, including for a single later addition.

## The full concept list, 22 icons

Coverage must be checked against all of these at once.

**Method families (7)** - these are the load-bearing ones, they head the cards
on `/methods/` and repeat across every course page:
lean-six-sigma, lean-operations, lean-service-design, lean-business-analysis,
lean-agile, zero-defects, ai-enabled

**Sectors (4):** government, healthcare, financial-services, corporate

**Delivery and proof (5):** in-house, assessed, diff-live-work, diff-evidence,
diff-ai-analysis

**Resources (6):** res-guides, res-templates, res-tools, res-reports,
res-glossary, res-knowledge-base

## Metaphor notes, where the obvious search term is wrong

- `lean-six-sigma` wants a control chart with a plotted point, not a belt, not a
  sigma glyph, not a martial arts figure.
- `assessed` wants an independent mark on completed work, not a graduation cap.
- `diff-live-work` wants work in progress on a real process, not a classroom.
- `diff-evidence` wants a measured result, not a magnifying glass.
- `ai-enabled` wants a plain machine-assistance metaphor. No brain, no robot, no
  glowing node graph.
- `res-knowledge-base` and `res-glossary` will collide. Pick the pair that reads
  as different things at 44px, which is `.ic-sm`, the smallest size in use.

## Sizes in use

`.ic` 64px, `.ic-lg` 96px, `.ic-sm` 44px. Check every pick at 44px before
committing it. A pack drawn for 100px loses interior detail at 44.

## Verification

- All 22 render at 44, 64 and 96.
- Inversion holds: every icon still legible inside `.g-dark` and on a tab with
  `aria-selected="true"`.
- No icon carries a hard-coded colour. Grep the component for `#` and for
  `stroke="` and expect zero hits outside the class attributes.
- No horizontal overflow at 320, 390, 768, 1024, 1440 across all 53 routes.
