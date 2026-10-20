---
name: Oly's Recs
version: alpha
description: A one-page tool that picks a single restaurant off a personal saved list. Dry, graphic and assured: heavy tightly-tracked headings, a lot of white, hairline rules, flat color blocks, and no softness anywhere.
colors:
  primary: "#141414"
  on-primary: "#FFFFFF"
  secondary: "#6B6B6B"
  tertiary: "#C83A22"
  on-tertiary: "#FFFFFF"
  neutral: "#FFFFFF"
  accent: "#FFCE3D"
  on-accent: "#141414"
  action: "#2742D9"
  on-action: "#FFFFFF"
  action-hover: "#1B2E9B"
  line: "#E4E2DD"
  line-soft: "#EFEDE8"
  field: "#D6D3CC"
  surface-muted: "#EFEDE8"
  notice: "#FFF2CF"
  on-notice: "#5C4708"
  danger: "#B8321C"
  dot: "#B8B5AE"
  tile-greek: "#2742D9"
  tile-latin: "#C83A22"
  tile-middle-eastern: "#6A45D6"
  tile-american: "#0B6457"
  on-tile: "#FFFFFF"
typography:
  h1:
    fontFamily: Archivo
    fontSize: 3.375rem
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -0.04em
  h2:
    fontFamily: Archivo
    fontSize: 2.5rem
    fontWeight: 800
    lineHeight: 1.02
    letterSpacing: -0.035em
  place-name:
    fontFamily: Archivo
    fontSize: 1.1875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: -0.02em
  body-md:
    fontFamily: Archivo
    fontSize: 1rem
    fontWeight: 400
    lineHeight: 1.55
  meta:
    fontFamily: Archivo
    fontSize: 0.875rem
    fontWeight: 500
    lineHeight: 1.45
  label-caps:
    fontFamily: Archivo
    fontSize: 0.6875rem
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: 0.14em
  mono:
    fontFamily: DM Mono
    fontSize: 0.875rem
    fontWeight: 400
    lineHeight: 1.45
  mono-xs:
    fontFamily: DM Mono
    fontSize: 0.6875rem
    fontWeight: 400
    lineHeight: 1.3
rounded:
  none: 0px
  sm: 6px
  md: 8px
  pill: 30px
spacing:
  xs: 6px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 36px
  xxl: 40px
components:
  logo:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    rounded: "{rounded.none}"
    padding: 9px 13px
  nav-tab:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    height: 44px
  nav-tab-active:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    height: 44px
  hero-band:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    borderColor: "{colors.primary}"
    padding: 40px 24px 36px
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.on-action}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 0 24px
  button-primary-hover:
    backgroundColor: "{colors.action-hover}"
    textColor: "{colors.on-action}"
  button-secondary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 0 24px
  button-secondary-hover:
    backgroundColor: "{colors.line-soft}"
    textColor: "{colors.primary}"
  button-tertiary:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.field}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 0 20px
  button-accent:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: 48px
  button-disabled:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.field}"
    rounded: "{rounded.sm}"
  chip:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.pill}"
    height: 44px
    padding: 9px 15px
  chip-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.pill}"
  bracket-button:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    height: 58px
  bracket-button-selected:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.sm}"
  link:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.action}"
    typography: "{typography.meta}"
  link-hover:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.action-hover}"
  input:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.field}"
    rounded: "{rounded.sm}"
    height: 48px
    padding: 0 14px
  input-focus:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    outlineColor: "{colors.action}"
  input-error:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.danger}"
    rounded: "{rounded.sm}"
  field-label:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.label-caps}"
  field-hint:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    typography: "{typography.meta}"
  field-error:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.danger}"
    typography: "{typography.meta}"
  panel:
    backgroundColor: "{colors.neutral}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
  panel-header:
    backgroundColor: "{colors.tertiary}"
    textColor: "{colors.on-tertiary}"
    padding: 16px 20px
  color-tile:
    backgroundColor: "{colors.tile-greek}"
    textColor: "{colors.on-tile}"
    typography: "{typography.mono-xs}"
    rounded: "{rounded.none}"
    size: 200px
  list-row:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    borderColor: "{colors.line}"
    padding: 16px 0
  reason:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.body-md}"
  result-name:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.primary}"
    typography: "{typography.h2}"
  message-empty:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.field}"
    rounded: "{rounded.md}"
  message-notice:
    backgroundColor: "{colors.notice}"
    textColor: "{colors.on-notice}"
    borderColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: 14px 16px
  footnote:
    backgroundColor: "{colors.neutral}"
    textColor: "{colors.secondary}"
    borderColor: "{colors.line}"
    typography: "{typography.meta}"
---

# DESIGN: Oly's Recs

All styles in the build follow this file. Plain HTML, CSS and JavaScript only. No framework, no CDN. Exact wording of every message lives in PRD.md, so this file describes only how each one looks.

## Overview

One person opens this page. They are hungry, usually standing somewhere, often with someone waiting on them, and they have about twenty restaurants saved that they have mostly never been to. In the first five seconds they need to understand that this is not a list to browse. It answers a question. They see one heading asking what they feel like, four rows of tappable choices, and one button. After that they need one name, not a ranking.

Everything in the design serves that: say what it wants, get an answer, stop.

The direction is editorial rather than appy: a listings site or a magazine page, not a dashboard. Heavy tightly-tracked headings, a lot of white, hairline rules between rows, flat color blocks standing in for photographs. There are no ratings and no reviews, so there is no star language and no social proof.

All the personality sits in one loud yellow band and the color tiles. Everything around them stays quiet, which stops the color from tipping into childish. The page does not try to charm. There is one user and nothing to sell.

The layout reference is the four screenshots in [design/](design/). They are a guide, not a pixel spec, and where they disagree with this file, this file wins. In particular, the Tonight screenshots still show number chips (craving 95, distance 88, waiting 92), and the My list screenshots show a short Maps link. The page has no scores and no chips, and the link example is a full link such as `https://www.google.com/maps/place/Name/@42.3812,-71.0998,17z`.

## Colors

High-contrast neutrals, one brand accent, one action color, and one loud background. Each color has exactly one job.

- **Primary `#141414`:** ink. All body text, every heading, and every heavy border. The 1.5px ink border gives the page structure, since there are no shadows.
- **On-primary `#FFFFFF`:** text on ink, used by selected chips and brackets.
- **Secondary `#6B6B6B`:** everything that supports rather than leads: meta lines, labels, hints, footnotes, inactive nav. About 5.3:1 on white.
- **Tertiary `#C83A22`:** the brand red. The logo block, panel header strips, and the "Not yet" marker on a place that has never been visited. Never used for a primary action. It marks identity, not interaction.
- **Neutral `#FFFFFF`:** the page. Deliberately pure white rather than warm off-white, so the yellow band and the tiles read as the only color.
- **Accent `#FFCE3D`:** butter. The full-bleed hero band behind the form, and secondary buttons that want attention without competing with the primary. It does most of the design's emotional work on its own.
- **Action `#2742D9`:** cobalt. Primary buttons, links, and the focus ring. The only color a user should associate with "this does something." Its hover is `#1B2E9B`.
- **Line `#E4E2DD`:** 1px dividers between list rows.
- **Line-soft `#EFEDE8`:** 1px dividers inside panels, where the rule should read quieter than the panel's own border.
- **Field `#D6D3CC`:** 1px input borders and tertiary button borders. Lighter than ink so a form does not read as heavy as the content around it.
- **Surface-muted `#EFEDE8`:** loading placeholders and empty-state blocks.
- **Notice `#FFF2CF` on `#5C4708`:** the one informational banner, used when location is unavailable.
- **Danger `#B8321C`:** field-level validation only. Never a background, never a button. About 6:1 on white.
- **Dot `#B8B5AE`:** the middle dot between values in a meta line.

**Tile colors** are a fixed cuisine mapping, so a place is the same color everywhere: Greek `#2742D9`, Latin `#C83A22`, Middle Eastern `#6A45D6`, American `#0B6457`. A place's tile uses the color of its first tag. A tag I add myself takes the next color in that same four-color order, counted from when I created it, and keeps it. No other colors are invented. Tile labels are white at all four.

White on the red is about 5.2:1, and white on cobalt about 7.3:1. Where two things must be told apart, they differ in lightness as well as hue, and an error always has words, so color alone never carries meaning.

## Typography

Two families.

**Archivo** carries everything a person reads as language: headings, place names, body, buttons, labels. It is a grotesque with real weight at 800, which is what makes the headings land.

**DM Mono** carries only things that are measured: distances, drive times, coordinates, dollar ranges, tile labels. Keeping numbers in mono makes the page feel like an instrument rather than a brochure. Never set a sentence in it.

**Loading the fonts.** Nothing is loaded from Google Fonts or any other CDN. The font files (woff2: Archivo at weights 400, 500, 700 and 800, DM Mono at 400) are saved in the repo and loaded with `@font-face` from a local path. If a file fails to load, the fallback is `"Helvetica Neue", Helvetica, sans-serif` for Archivo and `ui-monospace, Menlo, monospace` for DM Mono. Those fallbacks are a safety net, not the design.

| Token | Where it goes |
| --- | --- |
| h1 | The question at the top of the hero band. 34px on a phone. |
| h2 | The name of the place that was picked. 32px on a phone. |
| place-name | Names in list rows. 18px on a phone. |
| body-md | The one-line reason, and any explanatory paragraph. |
| meta | Dot-separated meta lines, hints, footnotes. |
| label-caps | Section labels above each row of controls. |
| mono | Distances and drive times. |
| mono-xs | Dollar ranges inside bracket buttons, cuisine labels on tiles. |

Headings are always left-aligned. Tracking is negative on anything above 19px and strongly positive on label-caps. That contrast between tight headlines and wide small caps is a large part of the identity.

## Layout

The page is 1232px wide at most, centred, with 24px of side padding on desktop and 18px on a phone. There are two tabs and nothing else in the header.

**Tonight**, in the order a visitor sees it:

1. The yellow band. It is full-bleed, bordered 1.5px ink along the bottom, and holds the question and the entire form. Nothing competes with it. The form is four labelled rows (been before, budget, craving, minutes I'll drive), then one cobalt button. On desktop the first two rows sit side by side and the second two sit side by side below them, so the whole form is four lines deep and visible without scrolling.
2. Immediately under the band, the result: a 200px flat color tile on the left, and to its right the place name at h2, a mono meta line, one sentence of reason, and the place's short description in meta size and secondary color (nothing if it has none). Four buttons follow (I'm going, Pick again, Not tonight, Start over), then a quiet line counting what was hidden.
3. Below a hairline rule, the footnote admitting that distances are straight-line estimates.

**My list** reads the same way: heading, then a plain list of rows on the left and a sticky "Add a place" panel on the right, stuck at top: 24px. Each row is a 56px tile, the name, a meta line of tags, bracket and whether it has been visited, a short description under it in secondary, the distance in mono, then Been and Delete.

**On a phone** everything becomes one column in the same order. The band keeps its full-bleed yellow but drops to 24px of vertical padding. Control rows stack rather than pair. Bracket and drive buttons stretch to equal width across the row, and craving chips wrap. The result tile becomes a 150px-tall full-width block with the cuisine label at its bottom edge. The four result buttons become two rows of two. On My list, each row's Been and Delete buttons move below the row, and the add panel falls to the bottom of the page.

Minimum touch target is 44px on anything clickable, at every width.

## Elevation & Depth

There is none, and that is a decision rather than an omission.

No box-shadow, no blur, no layering, no frosted panels, no scrim. Depth comes entirely from a 1.5px ink border and from flat blocks of color sitting against white. A panel reads as raised because it is outlined, not because it floats.

The one thing that behaves like a layer is the sticky right-hand panel on My list, and even that stays flat as it moves.

If you reach for a shadow to separate two things, use a border or more space instead.

## Shapes

Four radii, and the choice between them is meaningful.

- **none, 0px:** color tiles and the logo block. These are the only things with hard corners, which is what makes them read as blocks of ink rather than interface.
- **sm, 6px:** buttons and inputs. Just enough to say "pressable."
- **md, 8px:** panels and notice banners.
- **pill, 30px:** chips only. Round enough that a chip is never mistaken for a button.

Never exceed 8px on a card. Icons are inline stroke SVG at stroke-width 2 to 2.5, never filled, never emoji.

## Components

### Buttons

- **button-primary:** cobalt with white text, 1.5px ink border, 6px radius, 48px tall. At most one per section: "Pick one for me" in the band, "I'm going" in the result, "Save to the list" in the add panel.
- **button-primary-hover:** darkens to `#1B2E9B`. No movement, no shadow.
- **button-secondary:** white with ink text, same border and radius. "Pick again", "Been".
- **button-secondary-hover:** fills to `#EFEDE8`.
- **button-tertiary:** white with a field border and secondary text, for actions that should be available but unappealing: "Not tonight", "Start over", "Delete".
- **button-accent:** butter with ink text, for a secondary call that still wants to be seen, such as "Add" beside the new-tag field.
- **button-disabled:** muted surface, secondary text, field border. No pointer cursor. Used for "Pick one for me", "Pick again" and "Not tonight" when there is nothing to pick from.
- **chip / chip-selected:** pill, 44px, white-on-ink flipping to ink-on-white when chosen. Selection is carried by inversion, not by hue.
- **bracket-button / bracket-button-selected:** 58px tall, two stacked lines: the symbol in 15px bold, the dollar range beneath it in mono-xs. The range travels with the control, so the form needs no separate legend.

### Links

- **link:** cobalt, underlined by default, at meta size. Used sparingly: the nav tabs and the occasional inline reference.
- **link-hover:** darkens to `#1B2E9B`. The underline stays.

Nav tabs are links, not buttons. The active one is ink with a 3px ink underline. The inactive one is secondary with no underline. Every clickable thing is a real `<button>` or `<a href>`, never a div with a click handler.

### Form fields

- **field-label:** label-caps in secondary, above the input. Every input has a real `<label>`, visible or visually hidden.
- **input:** white, 1px field border, 6px radius, 48px tall, 14px side padding. Coordinate inputs use mono. Everything else uses body. Text is at least 16px so phones do not zoom. The short description field is a normal single-line input with a 160-character limit.
- **input-focus:** a 3px cobalt outline at 2px offset. Set once, on controls only, so nothing ever draws a line through a sentence:

```css
button:focus-visible,
a:focus-visible,
input:focus-visible {
  outline: 3px solid #2742D9;
  outline-offset: 2px;
}
```

- **input-error:** border thickens to 2px and turns danger.
- **field-hint:** secondary, at meta size, directly under the input: "Right-click the spot in Google Maps and copy the two numbers."
- **field-error:** danger, at meta size and 600 weight, directly under the input and above any hint. Says what to do, not what went wrong.

### Messages

One entry per state in PRD.md. Wording is in PRD.md. This describes the look.

- **message-empty** (Tonight, My list and "nothing left tonight"): a muted block on surface-muted with a field border, 8px radius, a heading in place-name or h2 size, one sentence in secondary, and, on Tonight only, one primary button ("Go to My list" or "Start over"). On My list the add form beside it is the call to action, so that version has no button. Never a blank page.
- **message-no-match:** a headline at h2 size ("Nothing fits tonight."), then one sentence in body-md naming the constraint that emptied the result ("Nothing under $20 within 10 min."). The form above stays editable. A quiet "Start over" (button-tertiary) sits below it, so hidden places can always be cleared. There are no loosening buttons in version 1.
- **message-loading:** surface-muted blocks in the shape of the result (tile and two lines), plus a bordered row reading "Finding where you are..." in meta. There is no spinner and no skip button. If no position comes back after 10 seconds, the page moves to the location-denied state.
- **message-notice** (location denied or unavailable, and also saved data that can't be read): a notice banner with an ink border, above the result or above the list. For location, the result still appears and the meta line reads "distance unknown".
- **message-prompt** (after Start over): one quiet line in secondary where the result was.
- **message-logged** (after "I'm going"): one line in meta size, weight 600, in ink, with a 3px ink bar at its left. It takes the place of the quiet "N hidden tonight" line directly under the result buttons, so nothing moves. No alert() box, no toast, no overlay.
- **footnote:** secondary text above a hairline rule at the bottom of every view. Distances are straight-line estimates, there are no opening hours, call ahead. It stays honest about what the tool cannot do.

### Other

- **panel:** 1.5px ink border, 8px radius, `overflow: hidden`, with a solid tertiary header strip carrying the title in 800 weight white.
- **color-tile:** a flat square in the cuisine color, with the first tag in mono-xs white at its bottom edge. No photo, no gradient, no rounding. 200px on desktop, 150px tall on a phone, 48 to 56px in list rows.
- **list-row:** tile, name, meta, the short description in meta size and secondary color (clamped to two lines, absent if the place has none), mono value on the right, then actions, above a 1px line rule. "Not yet" is shown in tertiary and "Been" in ink. The mono value is the distance ("3.1 km"). It is left blank until the first pick has given a position, and reads "no coords" in secondary for a place with no saved location. A blank value keeps its space, so rows don't shift when it fills in.
- **Meta row:** values separated by a `#B8B5AE` middle dot: `about 3.1 km · ~4 min drive · $$`.

## Do's and Don'ts

**Do**

- Keep the yellow band full-bleed and loud. It carries the whole identity.
- Keep numbers in DM Mono and language in Archivo. The split is the point.
- Use inversion, not hue, to show that a chip is selected.
- Let the empty, loading and error states be real screens with real sentences.
- Write buttons as verbs: "Pick one for me", "I'm going", "Been", "Start over".
- Keep the one-line reason naming the factors that decided it: "Matches Greek, and it's about 8 min away."
- Say in the footnote what the tool cannot do.
- Self-host the fonts.
- Use placeholder names like "Restaurant A" in mockups only. The shipped page holds only my own real restaurants.

**Don't**

- No gradients of any kind, including subtle background washes.
- No box-shadow, blur, glassmorphism or frosted panels.
- No large-radius rounded cards with soft grey borders.
- No emoji. Icons are inline stroke SVG at stroke-width 2 to 2.5.
- No photographs or stock imagery. Color tiles stand in everywhere.
- No purple-to-blue anything.
- No centred hero text.
- No star ratings, review counts or social proof. This tool has no strangers in it.
- No scores, no number chips and no percentages anywhere on the result.
- No fonts, scripts or styles loaded from outside the repo.
- Don't soften the yellow into a tint, and don't add a second loud color to keep it company.
