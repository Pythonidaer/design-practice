# Musculoskeletal reference and Shore adaptations

Updated: 2026-10-15  
Project: Pythonidaer/design-practice, branch `main`  
Reference: https://www.musculoskeletal.ai/what-we-do.html  
Published Shore site: https://pythonidaer.github.io/design-practice/

This document separates **what we adapted for Shore** from **what we identified in the reference**. The adaptations are the primary record. Johnny accepted the current result as “works for now”; it remains open to refinement. These are project decisions, not automatic rules for every future website.

## 1. Features adapted for Shore

### 1.1 Sticky, frosted header

**Definition:** A sticky header stays in normal document flow until it reaches the top of the viewport, then remains there while the page scrolls. A frosted background blurs content behind a translucent surface; it does not blur the header text.

- Header height: **68px**.
- Position: `sticky; top: 0`.
- Background: Shore paper color, initially **78% opaque**.
- Backdrop: **14px blur**, **160% saturation**.
- After scrolling **more than 8px**, the background becomes **92% opaque** and gains a subtle bottom border.
- Background and border transition: **250ms**.
- Shore keeps its light palette and existing brand.

**Why:** Keep navigation available and readable as photographs pass underneath.

### 1.2 Reference-style mobile navigation

**Definition:** A navigation disclosure expands a list of links below its trigger. It is not a modal dialog or a full-height side drawer.

- Mobile/tablet breakpoint: **1080px and below**.
- Above that breakpoint, the same links appear horizontally in the header.
- A **40px circular button** contains three **16px-wide, 1.5px-thick** lines.
- Opening transforms the first and third lines into an X over **250ms**; the middle line fades over **200ms**.
- The dropdown spans the header width, directly below the header.
- Entrance: opacity **0 → 1**, vertical translation **−8px → 0**, over **220ms**.
- Its height follows the links, capped at the available viewport height; long menus can scroll vertically.
- One shared link list serves desktop and mobile.

**Why:** Match the reference's quick, simple menu interaction.

**Replaced:** The document-height right-side drawer, backdrop, independent close button, background scroll locking, modal focus trap, and duplicate mobile link list.

**Intentional exception:** The animated CSS hamburger replaces the saved Johnny UI menu/close SVGs for this component. Other existing icons remain in place.

### 1.3 Solid dropdown background

**Definition:** An opaque surface completely covers the content behind it.

- Dropdown background: solid Shore paper color, **#FAFBFC**.
- No backdrop blur on the dropdown itself.
- Keep the subtle bottom border.
- The sticky header retains its separate frosted treatment.

**Why:** Johnny found the translucent dropdown hard to read. The reference dropdown also uses a solid background.

**Supersedes:** Our first frosted-dropdown experiment. Do not reintroduce transparency into the menu when reusing this adaptation.

### 1.4 Monochrome Contact action

**Definition:** A navigation link styled as a prominent button; selecting it still navigates to the contact section.

- Black background, white text.
- Square corners.
- **13px vertical / 24px horizontal padding**.
- **17px** inherited type, **1.6** line height, **48px minimum height**.
- Full-width on mobile, with an **8px** top gap.
- Compact button within desktop navigation.
- Hover background: **#292929**.
- Retains visible keyboard focus.

**Why:** Borrow the reference's prominent contact action while matching the form button's typography, padding, minimum height, and square shape.

**Difference from the reference:** Shore uses black and white and square corners instead of copying the reference's rounded light button. The enquiry form's existing button colors were not changed by this adaptation.

### 1.5 Word-by-word heading reveal

**Definition:** A staggered reveal starts successive words slightly later, creating a continuous entrance rather than showing the whole heading at once.

Each heading word starts with:

- Opacity: **0**.
- Downward translation: **80% of its own height**.
- X-axis rotation: **−20 degrees**.
- Blur: **5px**.

It resolves to full opacity, no translation/rotation, and no blur over **1 second**. Each subsequent word starts **30ms** later.

- Perspective: **900px**.
- Transform origin: bottom center.
- Existing intentional line breaks are preserved.
- The heading keeps an accessible name; decorative word spans are hidden from assistive technology.

**Applied to:** Main page headings, including the hero headline and section headings.

### 1.6 Block blur-and-rise reveal

**Definition:** An entire content group fades in, moves upward, and sharpens together.

- Opacity: **0 → 1**.
- Translation: **26px below → normal position**.
- Blur: **4px → 0**.
- Duration: **900ms**.

**Applied to:** The introductory label, supporting introduction/link, hero figure, section descriptions, filters, individual photograph projects, studio supporting content, and contact form group.

**Why:** Adapt the reference's motion to Shore's existing photography composition without adding reference-style cards or changing the layout.

### 1.7 Two-stage introduction, adapted for mobile

**Definition:** Separate timing gives the headline priority before supporting information appears.

1. **First stage:** “Independent landscape photography” and the word-staggered headline.
2. **Second stage:** The supporting description and “View selected work” link reveal together. The hero photograph and its caption reveal together as a separate figure group.

Second-stage settings:

- **900ms delay**, then a **900ms** fade/blur/rise animation.
- Explicit CSS keyframes with `animation-fill-mode: both` hold each group invisible during its delay and retain the final state afterward.
- The description/link and figure each start when they enter the viewport.
- On desktop, groups visible together can begin close together.
- On mobile, content below the fold waits until it enters view; it does not finish revealing while the visitor is still reading the headline.

**Important correction:** We initially used a 180ms introduction delay, then a shared headline trigger. Both are superseded. The current supporting groups use their own viewport triggers and the longer 900ms delay.

### 1.8 Scroll triggers and easing

**Scroll-trigger definition:** An IntersectionObserver detects when a component enters the visible browser area and starts its reveal.

- Intersection threshold: **0.12** (12%).
- Root margin: **0px 0px −60px 0px**.
- Each reveal plays **once**, then the observer stops watching that element.
- Elements already scrolled past are also resolved to their visible state.
- Focus entering a reveal group makes it visible.
- On very tall elements, both the threshold and available viewport affect when the observer fires.

**Easing definition:** An easing curve controls how animation speed changes over time.

| Role | Curve | Result |
| --- | --- | --- |
| Content reveal | `cubic-bezier(0.165, 0.84, 0.44, 1)` | Fast start, gentle settling |
| Header and menu interaction | `cubic-bezier(0.2, 0.7, 0.3, 1)` | Quick, controlled response |

The reference also defines `cubic-bezier(0.22, 1, 0.36, 1)` for softer motion. Shore retains that token, but it is not the primary menu or reveal curve.

### 1.9 Interaction and accessibility behavior

- Real menu button with an accessible name and `aria-expanded` state.
- Closed mobile links are inert and hidden.
- Escape closes the menu and returns focus to the trigger.
- Choosing a link closes the menu.
- Outside clicks or focus moving outside the header close it.
- Crossing the desktop/mobile breakpoint resets the open state.
- The menu is nonmodal: no focus trap, backdrop, or page scroll lock.
- Reduced-motion preferences remove reveal movement/delays and menu transitions.
- Without the reveal enhancement, page content remains visible.
- Dialog focus clearance and plain visible numbering are preserved from earlier work.

## 2. Features identified in the reference

These observations come from the rendered page and the shared CSS/JavaScript inspected during this session. Shared styles do not prove a feature appears on the supplied URL.

### 2.1 Present on the supplied research page

| Feature | Definition / observed treatment | Shore decision |
| --- | --- | --- |
| Dark neutral palette | Background #0E0F12, elevated surface #16181C, foreground #F4F6F8 | Keep Shore's light photography palette |
| Blue accent | #4C82F7 used for restrained marks/details | Do not copy the blue theme |
| System typography | Apple system / Segoe UI / Arial fallback stack | Preserve Shore's Helvetica-based typography |
| Tight display headings | Medium weight, negative letter spacing, compact line height | Keep Shore typography; adapt motion |
| Eyebrow labels | Small uppercase monospace labels with a short blue rule | Preserve Shore's existing label design |
| Research panels | Wide stacked surfaces, 24px radius, subtle borders, two-column content | Do not add cards around Shore photographs |
| Sticky header | 68px height, translucent blur, scroll-dependent opacity/border | Adapted |
| Mobile disclosure | Circular hamburger/X and a quick dropdown | Adapted |
| Solid menu surface | Opaque dropdown beneath the header | Adapted after readability feedback |
| Prominent contact action | Light filled action on dark navigation | Adapted as black/white form-style button |
| Heading reveal | Word staggering, opacity, blur, upward motion, slight rotation | Adapted |
| Block rise | Whole-group opacity/blur/upward motion | Adapted |
| One-shot viewport reveals | IntersectionObserver starts each entrance once | Adapted |

### 2.2 Defined in shared assets, not established as present on that page

| Feature | Meaning / reference settings | Shore decision |
| --- | --- | --- |
| Scroll-down cue | Mouse outline with a blue mark moving downward and fading on a 1.9s loop | Not added |
| Media scale reveal | Image/media starts at 108% scale and settles to 100% over 1.2s | Not added |
| Linked-card lift | Hover translates linked cards up 5px with a shadow | Not added |
| Statistic treatment | Large tabular numerals and supporting labels | Not added; no count-up animation found in inspected JavaScript |
| Numbered research index | Compact numbered rows and arrow hover feedback | Not added; Shore keeps plain 1, 2, 3 numbering |
| Marquee | Repeating horizontal track with edge fading; pauses on hover/focus | Not added |
| Ambient gradients | Static radial color fields behind a hero | Not added |
| Hero load sequence | Shared CSS defines early 50/150ms starts and later 900/1000ms starts | Informed Shore's two-stage timing; not copied as a complete section |

## 3. Publishing corrections that support these features

These are delivery fixes, not visual design rules.

- Branch-based GitHub Pages from `main` / repository root is the single automatic publisher.
- The optional custom Pages workflow is manual-only; it previously competed with the branch publisher and produced a different root layout.
- The reported mobile screenshot showed legacy menu markup beside newer styling. Mixed assets were a plausible cause; the screenshot alone did not identify the exact browser/CDN cache involved.
- The current page loads `dist/navigation-contact.css` and `dist/navigation-v5.js`.
- Canonical editable sources remain `dist/style.css`, `dist/app.js`, and `dist/index.html`.
- Run `python3 scripts/sync-pages.py` after source changes. It refreshes the served asset copies and root `index.html`.
- Commit canonical sources and generated outputs together. When changing served asset names, update the generator and entry points together.
- The served filenames are version labels, not automatic content hashes. Future changes may require another filename version to avoid stale cached assets.

## 4. Status and reuse

Johnny accepted this version provisionally: **“This works for now.”**

Deployment, source checks, and desktop browser computed-style checks were completed during implementation. These do not establish exhaustive mobile Safari animation, rotation, keyboard, or browser-toolbar testing. Earlier pending notes in DESIGN_DECISIONS.md are historical; this file describes the final adapted behavior at this checkpoint.

For future work, preserve these distinctions:

- Frosted **header**, opaque **dropdown**.
- Fast **navigation**, slower **content reveals**.
- Supporting content waits for **its own viewport entry on mobile**.
- Black/white **Contact action**, using the existing form button's geometry.
- Borrow behavior intentionally; keep the project's own typography, colors, imagery, and layout.

The complete original baseline remains in [WEBSITE_DESIGN_BASELINE.md](WEBSITE_DESIGN_BASELINE.md). This feature record does not replace or silently rewrite it.
