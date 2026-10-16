# Design practice

We are developing our own website design approach: clear content, deliberate typography and spacing, purposeful imagery, and usable interactions. This repository is a place to apply, inspect, and refine those decisions using our own design baseline. The Squarespace-style photography portfolio is a practice example, not a prescription for every future website or an installable Squarespace theme.

## Websites

- ChatGPT Site: https://shore-photography-template.codefolio-work.chatgpt.site
- GitHub Pages: https://pythonidaer.github.io/design-practice/

## Design rules

[WEBSITE_DESIGN_BASELINE.md](WEBSITE_DESIGN_BASELINE.md) preserves the full original 16-section baseline, with focused additions for plain numbering and spacing around focus outlines. This is the complete copyable prompt, not a shortened summary.

- Use 1, 2, 3 for visible sequences; do not decorate them with leading zeros.
- Reserve space for focus outlines and their offsets so they do not overlap images, text, or neighboring controls.
- Preserve visible keyboard focus; correct the layout instead of hiding the indicator.
- Record project decisions and verification limits in [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md).
- Keep creative freedom. The baseline prevents automatic choices; it does not impose one permanent theme.

Read [AGENTS.md](AGENTS.md) before changing the website.

## Reference features and adaptations

[MUSCULOSKELETAL_DESIGN_ADAPTATIONS.md](MUSCULOSKELETAL_DESIGN_ADAPTATIONS.md) defines the features we adapted for Shore, their final timing and styling, and the reference features we identified separately. The adapted features are the primary record; Johnny accepted the current result provisionally.

## Preview

Serve the `dist` directory with any static web server. No build or dependency installation is needed.

## GitHub Pages deployment

GitHub Pages currently publishes the `main` branch from the repository root. `index.html` is the Shore homepage and loads shared styles, scripts, and images from `dist/`. `.nojekyll` serves the static files directly. The README remains project documentation on GitHub.

After editing `dist/index.html`, regenerate the root homepage:

```sh
python3 scripts/sync-pages.py
```

Commit the generated `index.html` and served asset copies with the source changes. The generator copies `dist/style.css` to `dist/navigation-contact.css` and `dist/app.js` to `dist/navigation-v5.js`; those are the assets currently referenced by the page.

The optional workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml) can instead publish `dist/` directly if Pages Source is deliberately switched to GitHub Actions. Keep the current branch-based setup unless making that switch intentionally.

The repository is public. Design instructions are in [WEBSITE_DESIGN_BASELINE.md](WEBSITE_DESIGN_BASELINE.md).

## Current example

- Responsive photography portfolio with downloaded sample images.
- Water and land filters and full-size photograph dialogs.
- Sticky frosted header, opaque mobile dropdown, and animated hamburger/X.
- Scroll-triggered blur-and-rise reveals, staggered heading words, and delayed supporting content.
- Black-and-white Contact action using the enquiry button geometry.
- Enquiry preview only; nothing is submitted or saved.
- Actual saved Johnny UI SVGs and profile.
- Plain visible numbering: 1, 2, 3.

The studio and project copy are fictional. Image source URLs are recorded in DESIGN_DECISIONS.md. Browser visual checks remain pending; source checks and deployment do not establish visual correctness.
