# AGENTS.md

Oly's Recs picks one restaurant from my own saved list for tonight. The plan is in PRD.md and the look is in DESIGN.md. Read both before you write anything.

## Rules

1. **Plain HTML, CSS and JavaScript only.** No frameworks, no libraries, no CDNs, no servers, no databases, and no outside APIs. Everything runs in the browser from the data in `script.js` and what I do on the page. Fonts are saved in the repo and loaded with `@font-face`, never from a link. If you add any of these, take it out.

2. **State and calculations stay in JavaScript.** The restaurants are an array at the top of `script.js`, and my changes are saved to localStorage. The pick, the score and the distances are worked out in JavaScript from that state. Do not hard-code results into the HTML, and do not add a separate .json or .csv file for the data. Show changes on the page, never with `alert()`.

3. **Styles follow DESIGN.md.** Use its colors, type, spacing, corner radius and component rules exactly. Do not add a shadow, a gradient, an emoji, or a new color. If DESIGN.md and what you would like to do disagree, DESIGN.md wins.

4. **Lowercase filenames, and no unnecessary files.** Name every file you create in lowercase (`index.html`, `styles.css`, `script.js`, `fonts/`). Keep the project to the files it needs. Do not add config files, build tools, `package.json`, test files or folders I did not ask for. The documents I named myself (README.md, PRD.md, DESIGN.md, AGENTS.md, PROPOSAL.md) keep their names.

5. **Stop and ask before adding anything that is not in PRD.md.** That includes new features, new fields, new buttons and new states. Tell me what you want to add and why, then wait for my answer. If I say yes, update PRD.md first and then build it.
