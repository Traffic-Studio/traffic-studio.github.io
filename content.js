window.TRAFFIC_CONTENT =
{
  "_help": "Edit the text between the quotes. Keep the commas and quotes as they are. Links: site.discussion applies to every app unless an app sets its own Discussion link. Deep links: each app page has its own address, e.g. index.html#intersection-layout (the short name, lower-case, spaces as hyphens). Images: put files in the images/ folder and type the filename (e.g. \"images/intersection-1.png\"), or leave \"\" to keep the drop zone empty.",
  "site": {
    "title": "Traffic Studio",
    "tagline": "More models · fewer assumptions · Reality still not included",
    "discussion": "https://github.com/orgs/Traffic-Studio/discussions",
    "discussionRepo": "Traffic-Studio/Discussions",
    "discussionRepoId": "R_kgDOUZEuvg",
    "discussionCategory": "General",
    "discussionCategoryId": "DIC_kwDOUZEuvs4DFgrV",
    "updated": "2026-10-07",
    "overviewEyebrow": "Maybe six applications",
    "overviewIntro": "A family of browser-based tools for traffic analysis. Because producing a result is easy. Deciding whether to believe it is the interesting part."
  },
  "about": {
    "_help": "The About box opened from the ? button in the top-right corner. It follows the Traffic Studio About dialog standard: description, License, Built with, Keyboard shortcuts and Conventions. The 'Designed by Johan Irvenå …' line is fixed by the standard and selected at random each time the box opens; it is not edited here. The footer shows version, project schema and build as 'version … · project schema v… · build …'. Leave any value as \"\" to hide that part. Unlike the Studio applications, the homepage has no build step or studio.config.json, so these values are maintained here and should be updated manually when publishing. Yes, manually.",
    "wordmarkAccent": "T",
    "wordmark": "STUDIO",
    "productName": "Traffic Studio",
    "description": "Traffic Studio is the home of a growing family of browser-based tools for traffic analysis, visualisation and presentation. From here you can explore each Studio, find the latest release, read the documentation and quick-start guides, check the FAQ and news, or join the discussion. The homepage itself performs no analysis; it mainly keeps everything in one place and tries to look organised while doing so. Each Studio is a separate application that you download and run in your browser.",
    "license": [
      "Released under the MIT License. The full licence text is included in the repository for each Studio.",
      "The software is provided “as is”, without warranty of any kind. Confidence may vary."
    ],
    "builtWith": [
      {
        "name": "GitHub Pages",
        "detail": "Hosting"
      },
      {
        "name": "giscus",
        "detail": "GitHub Discussions integration"
      }
    ],
    "shortcuts": [
      {
        "keys": "Esc",
        "action": "Close the About box, palette or enlarged screenshot"
      },
      {
        "keys": "Tab",
        "action": "Move between links and controls, as tradition demands"
      }
    ],
    "conventions": [
      "Dates are written as YYYY-MM-DD, because ambiguity is overrated.",
      "The selected palette is stored in this browser only.",
      "Each app page has its own address, for example index.html#intersection-layout.",
      "Version numbers are intended to increase over time."
    ],
    "sections": [],
    "version": "1.0",
    "projectSchema": "",
    "build": "2026-10-04"
  },
  "news": [
    {
      "date": "2026-10-07",
      "app": "Network Assignment",
      "title": "Network Assignment Studio v2.20.1",
      "text": "First public release of Network Assignment Studio: draw road networks, manage O-D demand, run AON, Incremental and UE/MSA assignments, compare scenarios and saved runs, and calibrate against observed counts."
    },
    {
      "date": "2026-10-04",
      "app": "Intersection Layout",
      "title": "Intersection Layout Studio v1.2.0",
      "text": "Added editable curved approaches and roundabout-mouth geometry, including improved splitter and free-right-turn integration."
    },
    {
      "date": "2026-10-04",
      "app": "",
      "title": "Site launched",
      "text": "The Traffic Studio homepage is now up and running — apparently we have a website now."
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
        "Improved markings and result overlays on curved geometry, including give-way teeth, queue bands and saturation gauges, plus clearer geometry-refusal feedback."
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
        "images/ILS-pic1.jpg",
        "images/ILS-pic2.png",
        "images/ILS-pic3.png",
        "images/ILS-pic4.png",
        "images/ILS-pic5.png",
        "images/ILS-pic6.png",
        "images/ILS-pic7.png"
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
    },
    {
      "num": "02",
      "name": "Network Assignment Studio",
      "short": "Network Assignment",
      "domain": "Road networks · O-D demand · Assignment",
      "description": "Build road networks, manage O-D demand, run traffic assignments and compare scenarios. A result is a starting point, not a verdict.",
      "version": "v2.20.1",
      "released": "2026-10-07",
      "size": "3125 kB",
      "changelog": [
        "First public release of Network Assignment Studio: draw road networks, manage O-D demand, run AON, Incremental and UE/MSA assignments, compare scenarios and saved runs, and calibrate against observed counts.",
        "Download one HTML file and open it directly in a Chromium-based browser. Core startup works offline; basemaps, routing and TomTom services are optional and require explicit use.",
        "Explore model Select Link results and imported TomTom results, with separate request/matched geometry, volume display modes, From/To/Via Trip Statistics filters, desire-line labels and aggregate CSV export.",
        "Use Open, Save and Save As, movable Select Link panels, and saved TomTom date/time drafts. Project schema remains 10 and project file version remains 5.",
      ],
      "file": "network-assignment-studio-2.20.1.html",
      "previous": [],
      "links": {
        "Download": "https://github.com/Traffic-Studio/Network-Assignment-Studio/releases/download/v2.20.1/network-assignment-studio-2.20.1.html",
        "Documentation": "",
        "Quick start": "",
        "FAQ": "",
        "Discussion": "https://github.com/orgs/Traffic-Studio/discussions/categories/network-assignment-studio",
        "Report a bug": "https://github.com/Traffic-Studio/Network-Assignment-Studio/issues"
      },
      "images": [
        "images/NAS-pic1.png",
        "images/NAS-pic2.png",
        "images/NAS-pic3.png",
        "images/NAS-pic4.png",
        "images/NAS-pic5.png",
        "images/NAS-pic6.png",
        "images/NAS-pic7.png"
      ],
      "captions": [
        "Interface",
        "TomTom import",
        "Assignment",
        "Roundabout",
        "Desire lines",
        "Import OD",
        "Select link"
      ],
      "showExample": false,
      "exampleTitle": "Example",
      "example": [
        "open in a Chromium-based browser",
        "build a network, assign demand and inspect the result"
      ],
      "exampleImages": [],
      "exampleCaptions": [],
      "quickStart": [
        "Download the single HTML file when a release is available.",
        "Open it in a Chromium-based browser.",
        "Draw a road network and define zones.",
        "Create or import an O-D matrix and choose assignment settings.",
        "Run an assignment, inspect the results and compare scenarios.",
        "Save the project to continue your work later."
      ],
      "faq": [
        {
          "q": "Is this thing working?",
          "a": "NAS runs traffic assignments and provides tools for calibration and comparison. Check the network, demand and assumptions before deciding how much to trust the result."
        },
        {
          "q": "Which assignment methods are available?",
          "a": "All-or-nothing (AON), Incremental and UE/MSA assignment."
        },
        {
          "q": "Does it need an internet connection?",
          "a": "The downloaded application runs in your browser. Background maps, routing and TomTom features use optional online services; their availability depends on the provider and any required access credentials."
        }
      ]
    }
  ]
};
