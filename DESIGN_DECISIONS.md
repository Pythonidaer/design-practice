# Shore template decisions

New independent ChatGPT Site. No production Design Lab files were changed. Audience: visitors reviewing a landscape photographer’s work. Primary task: browse series, then prepare an enquiry. This is a Squarespace-style visual mockup, not an installable Squarespace theme.

The supplied Website Design Baseline 1.1 governs this project. The repository baseline was also read from the existing production checkout. Its full text is preserved in WEBSITE_DESIGN_BASELINE.md. The user-supplied section 16 additionally requires project identification, preservation of rules, and honest source access reporting; those requirements apply here without changing the production repository.

| Decision | Reason | Alternative | Check |
| --- | --- | --- | --- |
| Helvetica Neue / Helvetica headings and body, weight and scale for hierarchy | Photography stays primary; readable neutral portfolio typography | A specifically licensed display face | Check wrapping at 375, 768, 1440 px; pending visual QA |
| White paper, navy text, pale blue studio section | Color relates to water photographs; dark contact area distinguishes the task | Monochrome with a photographic accent | Check contrast and hierarchy; pending visual QA |
| 24/32/40/64/80/100 px spacing, fluid side gutter, 1800px outer limit | Shared edges and readable rhythm | Fixed gutters at breakpoints | Check narrow and large screens; pending visual QA |
| Wide water study, then two land studies | Image aspect ratios and subject grouping determine layout | Uniform portfolio tiles | Confirm image crops and mobile order; pending visual QA |
| Actual saved Johnny UI SVGs | Preserve approved geometry | Another explicitly selected family | SVGs and profile copied together from production checkout |
| Right-hand document-positioned drawer | Trigger and drawer share right alignment; use prior tested starting approach | Native modal drawer with fixed positioning | One-second reversible CSS transition, focus containment, Escape/backdrop, independent scrolling implemented; Safari rotation and browser chrome checks pending |
| Preview enquiry, no sending backend | A mockup must describe actual capability | Working email service with explicit configuration | Required fields and text-only safe preview implemented; no transmission |
| Fictional studio and illustrative process | Avoid invented claims | Verified real studio content | Clearly identified in page copy and footer |

Images are downloaded sample Unsplash photographs. Original image endpoints and attribution source:
- https://images.unsplash.com/photo-1473116763249-2faaef81ccda
- https://images.unsplash.com/photo-1518837695005-2083093ee35b
- https://images.unsplash.com/photo-1464822759023-fed622ff2c3b
- https://images.unsplash.com/photo-1441974231531-c6227db76b6e

Verification: JS syntax passed. All four JPEGs decoded with Pillow. No browser control skill available; no rendered mobile/desktop or interaction checks claimed. No baseline preferences were changed based on unverified behavior.

## Full-height drawer correction
User reported incomplete vertical coverage. Replaced the viewport-height surface with a document-height surface starting at document top. Drawer content has its own viewport-height scrolling region at the preserved scroll offset. Opaque background and backdrop now span the same full document height. One-second right-side transition retained. JavaScript syntax and markup checks pass; Safari visual confirmation remains pending.

## Dialog focus spacing correction
The supplied screenshot confirmed that the close button focus outline overlapped the photograph. Both dialogs now have a dedicated controls row with 16px of space before the content. The 3px outline and 5px offset are preserved, leaving 8px clearance from the following image. Markup and source checks passed; revised appearance has not been browser-verified.

## GitHub Pages homepage
The live root was rendering the README through Jekyll because the source homepage lived in dist/. Added a generated root index.html that presents Shore directly, using shared dist/ assets and .nojekyll. scripts/sync-pages.py owns root-entry generation. Photograph dialog asset URLs resolve relative to the loaded script, so both root and dist entry points work. README remains repository documentation. Source and HTTP delivery checks do not establish visual correctness.
