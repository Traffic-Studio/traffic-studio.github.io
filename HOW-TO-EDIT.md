# Editing Traffic Studio without touching HTML

Everything you'd normally change lives in **content.js**. Leave the first line (`window.TRAFFIC_CONTENT =`) and the final `;` alone; everything between is the content. Open it in any text editor (Notepad, TextEdit, VS Code), change the words between the quotes, save, reload the page.

## What's where
- `site` — brand title, tagline, overview intro, and `discussion` (the GitHub Discussions URL, shared by every app unless an app sets its own `links.Discussion`). `discussionRepo`, `discussionRepoId`, `discussionCategory`, `discussionCategoryId` drive the in-page Discussion panel (giscus): each app gets its own thread, named after the app, in that category. One-time setup: enable Discussions on the repo and install the giscus app at https://github.com/apps/giscus for it.
- `site.updated` — date shown at the bottom of the right-hand rail. Change it whenever you publish.
- `news[]` — the News list on the overview page, shared by all apps. Each item has `date`, `title`, `text` and an optional `app` (an app's `short` name, e.g. `"Intersection"`; leave `""` for suite-wide news). Tagged items also appear in a News section on that app's page. Put the newest first; remove all items (`[]`) to hide the section. The `news.json ↓` link on the page downloads the same list as JSON for other tools.
- `actions` — the six action labels, in order. Same on every app.
- `apps[]` — one block per application. Copy a whole block (from `{` to `}`) and paste it after the last one to add a fifth app.
  - `name`, `short` (sidebar label), `domain` (small caps line), `description`
  - `version`, `released`, `size`, `file` — fill the release ticket
  - `changelog` — "What's new" lines shown on the ticket for the current version. Leave the list empty (`[]`) to hide the section.
  - `previous` — older releases, shown collapsed under the ticket. Each has `version`, `released`, `file`, `url` (the download link; `""` greys it out). Empty list (`[]`) hides the toggle.
  - `links` — paste the real URL for each action. Empty `""` shows the action greyed out. Quick start, FAQ and Discussion don't need a URL; they scroll to the section on the page.
  - `captions` — one caption per screenshot, in the same order as `images`
  - `showExample` — `true` shows the "Example" box under Quick start, `false` hides it for this app. It is also hidden automatically when `example` and `exampleImages` are both empty.
  - `exampleTitle` — heading of the box (default "Example")
  - `example` — the bullet lines in the box. Use `[]` for pictures only.
  - `exampleImages` — pictures shown in the box, e.g. `["images/IS-example1.png"]`. Put the files in the `images/` folder.
  - `exampleCaptions` — optional caption per picture, same order as `exampleImages`
  - `images` — one filename per screenshot, e.g. `"images/intersection-1.png"`. Put the files in the `images/` folder. **Add more screenshots** by adding more entries to this list (and matching entries to `captions`); the page lays them out automatically. Two is the minimum shown; leave `""` for an empty drop zone (you can also drag a picture straight onto the zone in the preview).
  - `quickStart` — list of steps, one per line
  - `faq` — question/answer pairs. With more than three, a filter box appears next to the heading.
  - Screenshots open full size when clicked.

## Rules that keep the file valid
- Keep every `"quote"` and `,` as they are. A missing comma is the usual reason nothing loads.
- Text needing a quote mark inside: write `\"` instead of `"`.
- Don't rename the keys on the left side of the colons.

## Linking to an app page
Each app has its own address: the page URL plus `#` and the app's `short` name in lower-case with hyphens, e.g. `…/index.html#network-assignment`. Use these in README files or emails.

## If nothing shows
A red notice on the page means content.js failed to load — almost always a missing comma or quote. Press F12 in the browser to see the exact line.

## Palette
The 🎨 button in the top-right corner of the top bar opens the palette: **Warm paper** (light) or **Hot paper** (dark). The choice is remembered in the browser.

## About box
The **?** button at the far right of the top bar opens the About box. Its content is the `about` block in content.js:
- `wordmarkAccent`, `wordmark`, `productName` — the header (accent letter, wordmark, full name).
- `description` — first paragraph: what the page/product is for, and what it does not do.
- `license` — one or more paragraphs.
- `builtWith` — third-party parts and services, each with `name` and `detail` (purpose, licence, when it is contacted).
- `shortcuts` — `keys` and `action` pairs.
- `conventions` — one line per convention or assumption.
- `sections` — optional extra sections, each `{ "title": "…", "text": "…" }`. Shown after Conventions. `[]` for none.
- `version`, `projectSchema`, `build` — the footer line `version … · project schema v… · build …`. Leave a value `""` to hide that part.

The line "Designed by Johan Irvenå — …" is set by the Traffic Studio About dialog standard: one of 20 fixed sentences, picked at random each time the box opens. It is in index.html, not content.js, and should not be changed.

**Deviation from the standard:** the standard says the footer should read version and build from `studio.config.json`. The homepage has no build step or config file, so the values are typed in content.js. Update them when you publish.
