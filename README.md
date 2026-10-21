## About

Restaurant Adviser is a browser tool for one person, the owner of the list, that answers "where should I eat tonight?" with a single pick from their own saved restaurants, based on whether they've been, their budget, their craving and how far they'll walk.

## How to use it

**Tonight tab**
1. Choose **Been before** (New, Been before or Either), a **Budget** maximum, a **Craving**, and optionally the **Minutes I'll walk**.
2. Press **Pick one for me**. Allow location when the browser asks, so it can work out distances. If you say no, the pick still works without distance.
3. Use **Pick again** for the next-best place, **Not tonight** to hide a place until you start over, **I'm going** to mark it as been, and **Start over** to clear tonight's choices. Your list is never touched.
It will select it from the list that you have saved 

**Live link:** https://tuttijonson.github.io/restaurant-adviser/


## Reflection: AI output I did not accept as-is

**What the AI gave me.** I asked why the "Add a place" panel on My list was hard to use, because I had to scroll the whole list to reach the Save to the list button. The AI worked out that the panel is sticky and taller than a laptop window, so its bottom was cut off. Its first plan fixed this by adding `max-height` and `overflow-y: auto` to the panel, and also adding `max-height: none` to the phone rules.

**What I changed.** I rejected that plan. I told it to keep laptop and phone separate and not to touch the phone. The fix now sits in one `@media (min-width: 721px)` block, so it only applies on laptop-sized screens, and the phone rules are unchanged.

**How I knew it needed changing.** The phone layout already worked, because on a phone the panel sits below the list and the page scrolls normally. Editing the phone rules would have risked breaking something that was not broken.

**The commit:** [b30e35c](https://github.com/TuttiJonson/restaurant-adviser/commit/b30e35c) (the three added lines in `styles.css`).

That fix also exposed a typo in `script.js`, a stray `.` after a function's opening brace, which stopped the page from working. I fixed it in [edc9708](https://github.com/TuttiJonson/restaurant-adviser/commit/edc9708).
