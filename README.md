# Design practice

We are developing our own website design approach: clear content, deliberate typography and spacing, purposeful imagery, and usable interactions. This repository is a place to apply, inspect, and refine those decisions using our own design baseline. The Squarespace-style photography portfolio is a practice example, not a prescription for every future website or an installable Squarespace theme.

## Websites

- ChatGPT Site: https://shore-photography-template.codefolio-work.chatgpt.site
- GitHub Pages address after Pages is enabled: https://pythonidaer.github.io/design-practice/

## Design rules

[WEBSITE_DESIGN_BASELINE.md](WEBSITE_DESIGN_BASELINE.md) preserves the full original 16-section baseline, with focused additions for plain numbering and spacing around focus outlines. This is the complete copyable prompt, not a shortened summary.

- Use 1, 2, 3 for visible sequences; do not decorate them with leading zeros.
- Reserve space for focus outlines and their offsets so they do not overlap images, text, or neighboring controls.
- Preserve visible keyboard focus; correct the layout instead of hiding the indicator.
- Record project decisions and verification limits in [DESIGN_DECISIONS.md](DESIGN_DECISIONS.md).
- Keep creative freedom. The baseline prevents automatic choices; it does not impose one permanent theme.

Read [AGENTS.md](AGENTS.md) before changing the website.

## Preview

Serve the `dist` directory with any static web server. No build or dependency installation is needed.

## GitHub Pages deployment

The workflow in [.github/workflows/pages.yml](.github/workflows/pages.yml) publishes `dist/` on changes to website files on `main`, or when run manually.

One-time repository setup: open Settings → Pages → Build and deployment → Source, and select **GitHub Actions**. Then run **Deploy design practice to GitHub Pages** from the Actions tab if the initial run happened before Pages was enabled.

Settings: https://github.com/Pythonidaer/design-practice/settings/pages

The repository stays private. Pages availability depends on the repository owner's GitHub plan and organization policy; a Pages publication may be publicly accessible independently of repository visibility. Do not put private content or secrets in `dist/`.

## Current example

- Responsive photography portfolio with downloaded sample images.
- Water and land filters and full-size photograph dialogs.
- Right-side navigation drawer with independent scrolling and keyboard support.
- Enquiry preview only; nothing is submitted or saved.
- Actual saved Johnny UI SVGs and profile.
- Plain visible numbering: 1, 2, 3.

The studio and project copy are fictional. Image source URLs are recorded in DESIGN_DECISIONS.md. Browser visual checks remain pending; source checks and deployment do not establish visual correctness.
