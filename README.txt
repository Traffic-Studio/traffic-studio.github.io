Traffic Studio homepage
=======================

Upload the whole contents of this folder to your web host, keeping the
structure as it is:

  index.html        the page
  content.js        all text, versions, links, news (edit this)
  image-slot.js     screenshot drop zones
  support.js        page runtime
  images/           your screenshot files
  HOW-TO-EDIT.md    how to edit content.js

Notes
-----
- Open the site at index.html; the root address works if this is the top folder.
- The in-page Discussion panel only loads over http:// or https://,
  not when the file is opened directly from disk.
- To try it locally, run this in a terminal in this folder:
      python -m http.server 8000
  then open http://localhost:8000/
- Each app has its own address, e.g. index.html#intersection
