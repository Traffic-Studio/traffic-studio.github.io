window.TRAFFIC_CONTENT =
{
  "_help": "Edit the text between the quotes. Keep the commas and quotes as they are. Links: site.discussion applies to every app unless an app sets its own Discussion link. Deep links: each app page has its own address, e.g. index.html#intersection-layout (the short name, lower-case, spaces as hyphens). Images: put files in the images/ folder and type the filename (e.g. \"images/intersection-1.png\"), or leave \"\" to keep the drop zone empty.",
  "site": {
    "title": "Traffic Studio",
    "tagline": "More models · fewer assumptions · Reality still not included",
    "discussion": "https://github.com/orgs/Traffic-Studio/discussions",
    "discussionRepo": "Traffic-Studio/Discussion",
    "discussionRepoId": "R_kgDOUZEuvg",
    "discussionCategory": "General",
    "discussionCategoryId": "DIC_kwDOUZEuvs4DFgrV",
    "updated": "2026-10-04",
    "overviewEyebrow": "Maybe six applications",
    "overviewIntro": "A family of browser-based tools for traffic analysis. Because producing a result is easy. Deciding whether to believe it is the interesting part."
  },
  "about": {
    "_help": "The About box (the ? button, top right). Follows the Traffic Studio About dialog standard: description, License, Built with, Keyboard shortcuts, Conventions. The 'Designed by Johan Irvenå …' line is fixed by the standard and picked at random each time the box opens; it is not edited here. Footer: version, projectSchema and build are shown as 'version … · project schema v… · build …'; leave a value \"\" to hide that part. Deviation from the standard: the homepage has no build step or studio.config.json, so these values live here and must be updated by hand when you publish.",
    "wordmarkAccent": "T",
    "wordmark": "STUDIO",
    "productName": "Traffic Studio",
    "description": "Traffic Studio is the home of a family of local-first browser tools for traffic analysis. This page lists each Studio with its current release, quick start, FAQ, news and discussion. The page itself does not run any analysis; each Studio is a separate single HTML file you download and open.",
    "license": [
      "MIT License. The full licence text is in the LICENSE file of each repository.",
      "The software is provided “as is”, without warranty of any kind."
    ],
    "builtWith": [
      {
        "name": "IBM Plex Sans, IBM Plex Serif",
        "detail": "Typefaces · SIL Open Font License 1.1"
      },
      {
        "name": "Azeret Mono",
        "detail": "Typeface · SIL Open Font License 1.1"
      },
      {
        "name": "Google Fonts",
        "detail": "Font delivery · contacted when the page loads"
      },
      {
        "name": "giscus",
        "detail": "Discussion threads from GitHub Discussions · contacted when an app page is opened"
      }
    ],
    "shortcuts": [
      {
        "keys": "Esc",
        "action": "Close the About box, the palette or an enlarged screenshot"
      },
      {
        "keys": "Tab",
        "action": "Move between links and controls"
      }
    ],
    "conventions": [
      "Dates are written YYYY-MM-DD.",
      "The chosen palette (warm or hot paper) is remembered in this browser only.",
      "Each app page has its own address, e.g. index.html#intersection-layout."
    ],
    "sections": [],
    "version": "1.0",
    "projectSchema": "",
    "build": "2026-10-04"
  },
  "news": [
    {
      "date": "2026-10-04",
      "app": "",
      "title": "Site launched",
      "text": "Finally."
    },
    {
      "date": "2026-10-04",
      "app": "Intersection Layout",
      "title": "Intersection Layout Studio v1.2.0",
      "text": "Added editable curved approaches and roundabout-mouth geometry, including improved splitter and free-right-turn integration."
    }
  ],
  "actions": [
    "Download",
    "Documentation",
    "Quick start",
    "FAQ",
    "Discussion",
    "Report a bug"
  ],
  "apps": [
    {
      "num": "01",
      "name": "Intersection Layout Studio",
      "short": "Intersection Layout",
      "domain": "Geometry · Traffic flows · Results",
      "description": "Visualize intersections, traffic flows, and results.",
      "version": "v1.2.0",
      "released": "2026-10-04",
      "size": "1577 kB",
      "changelog": [
        "Added editable curved approaches and roundabout-mouth geometry, including improved splitter and free-right-turn integration.",
        "Added roundabout circulating-flow results and a Roundabout mode in the Flow diagram.",
        "Added Mixed controls so each approach can independently use give way, stop, traffic signal or no regulation.",
        "Improved markings and result overlays on curved geometry, including give-way teeth, queue bands and saturation gauges, plus clearer geometry-refusal feedback.",
        "Replaced the built-in example with Annetorpsvägen × Elinelundsvägen, including roundabout/signal layouts, AM/PM flows and externally supplied results."
      ],
      "file": "intersection-layout-studio-1.2.0.html",
      "previous": [],
      "links": {
        "Download": "https://github.com/Traffic-Studio/Intersection-Layout-Studio/releases/download/v1.2.0/intersection-layout-studio-1.2.0.html",
        "Documentation": "",
        "Quick start": "",
        "FAQ": "",
        "Discussion": "https://github.com/orgs/Traffic-Studio/discussions/categories/intersection-layout-studio",
        "Report a bug": "https://github.com/Traffic-Studio/Intersection-Layout-Studio/issues"
      },
      "images": [
        "images/IS-pic1.jpg",
        "images/IS-pic2.png",
        "images/IS-pic3.png",
        "images/IS-pic4.png",
        "images/IS-pic5.png",
        "images/IS-pic6.png",
        "images/IS-pic7.png"
      ],
      "captions": [
        "Interface",
        "Roundabout",
        "Traffic signal",
        "Results",
        "Compare",
        "Traffic flows diagram",
        "Traffic flows"
      ],
      "showExample": false,
      "exampleTitle": "Example",
      "example": [
        "open in any browser",
        "data stays on your machine"
      ],
      "exampleImages": [],
      "exampleCaptions": [],
      "quickStart": [
        "Download the single HTML file.",
        "Open it in a browser.",
        "Create your favourite intersection.",
        "Fill in with all information you have about it."
      ],
      "faq": [
        {
          "q": "Is this thing working?",
          "a": "WYSIWYG"
        }
      ]
    }
  ]
};
