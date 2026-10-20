# PRD: Restaurant Adviser

Due: Wednesday, October 21, 2026.

## Goal

Turn my saved restaurant list into a proactive tool. Given tonight's mood, it returns one saved restaurant with a short reason, so I stop scrolling a long list. Version 1 holds my own 20 restaurants.

## Audience and key action

Audience: only me. No other users, no accounts.

Key action: set what I feel like tonight (been before or new, budget, craving, optional minutes I will drive), press "Pick one for me", and get one restaurant with a short reason.

## Features

Version 1 is one page with two tabs. Everything is plain HTML, CSS and JavaScript and runs in the browser.

Where the data lives:
- My starting restaurants are an array of objects at the top of `script.js`. There is no separate .json or .csv file, no database and no server.
- The first time a browser opens the page, the array is copied into the page's state and saved to localStorage (key `restaurantAdviser.places`; tags in `restaurantAdviser.tags`) as JSON.
- After that, every change (new place, Been, Delete, new tag) is saved to localStorage and stays in that one browser. A different device or browser has its own copy.
- Changing the array later does not change a browser that already has a saved list, unless I clear that site's data in the browser.
- The array is public on GitHub Pages, and I have agreed to that.
- Hidden places, tonight's form choices, and my position are never saved.

### Tab 1: Tonight

1. Form:
   - Been before: New / Been before / Either.
   - Budget: four brackets as a maximum, with the range printed under each: $ under $20, $$ $20-50, $$$ $50-100, $$$$ $100+. Per person, in dollars.
   - Craving: chips built from the tags on my list, plus "Anything".
   - Minutes I'll drive: 10 / 20 / 30 / Any. Optional.
   - "Pick one for me" button.
2. Result: one restaurant with its color tile (first tag as a label), a one-line reason (for example "Matches Greek, and it's about 8 min away."), the place's short description if it has one, and "about X km, ~Y min drive". No scores and no chips are shown anywhere. Drive time is straight-line distance at an assumed 30 km/h, labeled "about".
3. Buttons on the result:
   - Pick again: shows the next-best place. Places already shown this round are not repeated.
   - Not tonight: hides the place from every pick until Start over. A quiet line shows "N hidden tonight".
   - I'm going: marks the place as been (no date is kept). The pick stays on screen, and the "N hidden tonight" line is replaced by a one-line confirmation, "Logged: Restaurant A." No alert() box. Pressing Pick again, Not tonight or Start over brings the hidden-count line back.
4. Start over: clears the form, the result and the hidden places. The saved list is never touched.

How the pick is worked out:
- Hard cuts first: been before, budget, and drive minutes (only if filled in).
- Then each remaining place gets a score: craving match +3 (a tag matches the chosen craving; 0 for everyone if "Anything"), closeness up to +2 (only if my position and the place's coordinates are both known), and not been yet +1 (only when Been before is "Either"; it is already settled when I choose New or Been before). The not-been bonus uses the been flag, not dates, and is what lets the list drain: each time I mark a place as been, it loses the bonus.
- Highest score wins. If places tie, one of the tied places is chosen at random, so the pick varies. This matters most when Craving is "Anything" and my position is unknown and I've picked Been before, because then every place ties.
- Alternatives: if my craving has no place left that fits (after the hard cuts, and not counting places already shown this round), the page tries an alternative tag instead and says so in the reason, for example "No Italian fits tonight, so here's a Greek alternative." The pairs are: Italian to Greek, Vietnamese to Chinese, Greek and Middle Eastern to each other, Latin and Spanish to each other, American and Seafood to each other. Tags I add myself have no alternative. If the alternative has nothing either, the page picks from what fits and the reason starts "No Italian fits tonight."
- There is no waiting or staleness factor in version 1. Nothing in the scoring depends on the order I added places.
- The weights are plain constants in the code so I can adjust them after trying real places.
- My position comes from the browser (`navigator.geolocation`) when I press the button. Distance is calculated in JavaScript from the saved coordinates.

### Tab 2: My list

1. The list shows plain data per place: name, tags, bracket, visited or not, a one-line short description (if it has one), and distance. No chart, stat tiles or sort chips. The distance uses the position my browser gave at my last "Pick one for me" press. That position is kept only while the page is open and is never saved. Until I've pressed the button once and allowed location, the distance is blank. A place saved without coordinates reads "no coords".
2. Each row has "Been" (marks the place as been; once marked, the button reads "Undo been" so a slip can be taken back) and "Delete" (the first press changes the button to "Sure? Delete", and the second press deletes, so a place can't be lost by one tap).
3. Add a place form:
   - Name.
   - Google Maps link and/or coordinates. The page reads coordinates out of a pasted full Maps link with no network call. Rule: take the **last** `!3d<lat>!4d<lng>` pair in the link, because that is the place named in the link. A link can hold an earlier pair for a different place (the one I searched before), and the `@lat,lng` part is only where the map was centred, often a few hundred metres off. If there is no `!3d!4d` pair, fall back to `@lat,lng`. If the link has none, I can type latitude and longitude, or save without a location.
   - Bracket (four buttons with ranges under them).
   - Tags: four starting chips (Greek, Latin, Middle Eastern, American), plus tags I type. Each new tag becomes a chip on this form and on Tonight's craving row. At least one tag per place.
   - Short description (optional, one line, up to 160 characters, enforced by the field so it needs no error message).
   - Save to the list.

## Content and data

| Item | Status | From whom |
| --- | --- | --- |
| Proposal, project rules, two mockups | Have | Me |
| Four starting tags: Greek, Latin, Middle Eastern, American | Have | Me |
| 19 of my 20 restaurants: name, tag, price range, link, short description (all 19 now have one) | Have | Me |
| The 20th restaurant | Missing | Me |
| A bracket for each place | Have. Worked out from the middle of my price range (a boundary goes up), except KAVA and Matsunori, which I set to $$, and Spring Shanghai, which I set to $ | Me |
| Coordinates for those places | Have for 19, read from the last `!3d!4d` pair in each link | Me, from Google Maps |
| Which places I've been to | Have: not been to Row 34, Jafra, Pammy's, All'Antico Vinaio, Sunny Girl. I've been to the other 14. No dates are kept | Me |
| Whether pasted Maps links contain coordinates | Verified for full links. Short `maps.app.goo.gl` links have none | Me |
| Look values and the tile-color rule | Have, in DESIGN.md | Me |
| Font files: Archivo (400, 500, 700, 800) and DM Mono (400), as woff2, saved in the repo | Missing | Me, downloaded from the fonts' official source (no CDN) |

No invented data ships. The starting array holds only my own real restaurants. Each place has an optional short description, which the page shows. I left out the meal note ("Dinner").

## Look

See DESIGN.md.

## States

The JavaScript decides which state the page is in from its data: the saved places, tonight's form choices, the hidden places, and the position. The look of each state comes from DESIGN.md. No state uses an alert() box.

### Empty

When: I delete my last place, or the saved data can't be read. The list is empty, so there is nothing to pick from. A first visit is not empty, because my starting array fills the list.

- Tonight: the form is shown but "Pick one for me" is disabled. The result slot says "Your list is empty." and "Add your first restaurant to get a pick." with a button, "Go to My list".
- My list: where the rows would be, it says "No places yet. Use the form to add your first one." The add form is ready to use.
- Also empty, on Tonight: "Nothing left tonight." with a "Start over" button, once every place that fits has been shown or hidden.
- If the saved data can't be read from localStorage, the page treats the list as empty and says "Your saved list couldn't be read, so you're starting empty." above the list. It does not crash.

### Invalid input

The tool refuses these. Each message appears directly under the field it belongs to (on Tonight, in the result slot), begins "Fix this:", and nothing I typed is cleared. The page keeps working.

My list, add form:
- No name (or only spaces): "Fix this: add a name."
- A name already on the list (ignoring capitals): "Fix this: that name is already on your list."
- No bracket picked: "Fix this: pick a bracket."
- No tag picked: "Fix this: pick at least one tag."
- A link with no coordinates, and none typed: "Fix this: that link has no coordinates. Type them below or leave both empty." (If both are left empty, the place is saved without a location.)
- Coordinates that aren't two numbers, or are out of range (latitude -90 to 90, longitude -180 to 180): "Fix this: coordinates must look like 42.3812, -71.0998."
- If a link has coordinates and I also type some, the typed ones win.
- New tag empty: "Fix this: type a tag first." New tag already exists: "Fix this: that tag already exists."

Tonight:
- No place fits the form. This is a refused result, not a typing error. The result slot says "Nothing fits tonight." and names the choice that emptied it, for example "Nothing under $20 within 10 min." The form stays editable, and a "Start over" button sits below the message so hidden places can always be cleared.
- "Pick one for me", "Pick again" and "Not tonight" do nothing while there are no places to pick from. They are disabled, not silent.

### In use (ideal)

There is at least one place and the form fits at least one of them.

- Tonight: one pick appears with its tile, name, meta line ("about 3.1 km · ~4 min drive · $$"), a one-line reason, its short description if it has one, the buttons (I'm going, Pick again, Not tonight, Start over), and the line "N hidden tonight" (or, right after "I'm going", the "Logged: ..." confirmation). No score, no chips.
- My list: the saved places, one row each, with its short description (if it has one), a visited or "Not yet" label, a distance (blank until my first pick, "no coords" if the place has none), and Been and Delete. A new place appears at the top; "Been" changes its label at once.
- Partial: my location is denied, or a place has no coordinates. The page shows "Location is off, so distance is skipped." above the result, and a place without coordinates reads "distance unknown". The pick is still given.
- Loading: after "Pick one for me", the button reads "Finding you..." and the result slot says "Finding where you are" until my position comes back, fails, or 10 seconds pass (then the page moves to the partial state above).

### After a reset

"Start over" returns Tonight to its starting look and leaves the list as it is.

- The result and the hidden places are cleared, and the slot says "Pick one for me to get started."
- The form returns to Been before = Either, Budget = $$$$, Craving = Anything, Minutes = Any.
- Any "Fix this" message is gone.
- My list is untouched, and so is the page's data in localStorage.
- Start over is the only reset in version 1. There is no "Clear my list" (see Later), so my typed-in places can't be lost by a reset.

## Checks

1. Add a place with a pasted link or typed coordinates, and see invalid input refused with a message that keeps the page working.
2. Fill the form and get one pick with its reason and distance.
3. Use Pick again and Not tonight and see places not repeat.
4. Mark a place as been and see it drop out of the picks when "New" is chosen.
5. Press Start over and see the list is still there.

## Out of scope

- A server, accounts or logins.
- Any outside API, including geocoding and routing.
- Real driving routes or opening hours.
- Any framework, library, or CDN. Plain HTML, CSS and JavaScript only.

## Later

- A permanent "never again" with a way to restore places.
- A saved pass counter per place.
- A rejection list showing what was cut and why.
- "Close behind" runner-ups.
- Month chart, search, sort chips, stat tiles.
- City dropdown and "Who told you".
- Full address search and importing a Google saved list.
- Renaming and removing tags.
- Party size.
- A "Clear my list" button.
- Meal notes (lunch, dinner) on each place.
- A waiting factor that pushes long-ignored places up the ranking (needs visit dates).
- Syncing the list between my phone and laptop (needs a server).
