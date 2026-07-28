# Completed Intelligibility

A mobile-first digital reading edition of the current revised manuscript, organised in eight parts and thirty-two chapters.

## Read locally

Open `index.html` in a browser. It forwards to the preserved self-contained reader in `Ordinary Miracle.html` and keeps any chapter fragment in the URL.

The reader does not require a build step, package manager, framework, external font service, analytics, advertising or tracking.

## Reading features

- Complete table of contents and stable chapter fragments (`#chapter-1` through `#chapter-32`)
- Previous, next and contents navigation
- Reading progress and compact mobile controls
- System, light and dark appearance modes
- Three text sizes and two reading widths
- Local return-to-position support with a Continue Reading action
- Graceful storage fallback when browser storage is unavailable
- Keyboard-accessible native controls, visible focus styles, reduced-motion support and print styles
- Fully readable manuscript when JavaScript is unavailable

Reading position and appearance preferences are stored only in the reader's browser where storage is permitted. No information is transmitted by this site.

## Publishing

The repository is a plain static site. `.github/workflows/pages.yml` deploys the repository root to GitHub Pages after changes reach `main`. The repository's Pages source must be set to **GitHub Actions** in Settings → Pages before the first deployment.

The root `index.html` is intentionally a small entry point. The original manuscript reader remains in `Ordinary Miracle.html`, unchanged, so its content can be compared directly with the pre-publication version.

## Source integrity

The manuscript file is treated as the source of truth. Publishing changes should not silently alter its prose, paragraph boundaries, chapter order or quotations. Any future editorial change should be reviewed separately from interface and deployment changes.
