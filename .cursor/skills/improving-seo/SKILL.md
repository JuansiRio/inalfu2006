---
name: improving-seo
description: Audits and improves on-page technical SEO, meta tags, Open Graph and Twitter cards, structured data, heading hierarchy, images, and internal linking for static HTML sites and similar frontends. Use when the user asks for SEO, search visibility, meta descriptions, social previews, sitemaps, robots, or ranking improvements for a web page.
---

# Improving page SEO

## When to apply

Use this skill when improving **discoverability and snippet quality** in search and social shares—not for black-hat tactics or guaranteed rankings.

## Workflow

1. **Identify page type**: landing, article, product, docs, SPA (client-rendered pages may need SSR/prerender or dynamic rendering for full crawler coverage—mention if relevant).
2. **Read the current `<head>` and main landmark structure** (`<main>`, headings, key content).
3. **Apply changes in small, verifiable steps**; match existing code style and language of the site (`lang` on `<html>`).

## Head and metadata

- **`<title>`**: Unique per page; primary topic first; roughly 50–60 characters displayed in SERPs (no stuffing).
- **Meta description**: One clear value proposition; ~150–160 characters typical; honest summary of the page.
- **Canonical** (`<link rel="canonical" href="...">`): When the same content is reachable via multiple URLs; use absolute URLs on production.
- **Open Graph**: `og:title`, `og:description`, `og:url`, `og:type`, `og:image` (absolute URL, sensible dimensions, optional `og:locale`).
- **Twitter Card**: `twitter:card` (usually `summary_large_image`), plus title/description/image aligned with OG.
- **Favicon / theme**: `link rel="icon"`; `theme-color` if it fits the design system.

## Structured data

- Add **JSON-LD** (`<script type="application/ld+json">`) when it matches real on-page content: `WebSite`, `WebPage`, `Event`, `Organization`, `FAQPage`, etc.
- Validate types against [Schema.org](https://schema.org); avoid marking up content that is not visible or accurate.

## Content and HTML structure

- **Single logical `<h1>`** per page (or per main independent region if the design truly requires it—prefer one).
- **Heading order**: Do not skip levels for styling; use CSS for appearance.
- **Descriptive link text**: Avoid "click here"; use keywords that match destination.
- **Stable fragment IDs** for in-page anchors; ensure targets exist (`id` on sections).

## Images and media

- **Alt text**: Describe meaning for important images; empty `alt=""` for decorative images.
- **Width/height** (or CSS aspect ratio) to reduce layout shift where possible.
- **Hero/large above-the-fold images**: Consider `fetchpriority="high"`; others often `loading="lazy"` when below the fold.

## Technical and UX signals

- **Fast LCP, low CLS**: Align with existing performance work; do not add heavy scripts for SEO alone.
- **Mobile viewport** and readable tap targets (helps UX and indirectly SEO).
- **Accessibility**: Logical focus order, skip links, labels—overlaps with quality signals.

## robots and discovery

- **`robots.txt`** and **`sitemap.xml`**: Recommend when the site has multiple URLs or is deployed to a real domain; use absolute URLs in sitemaps.
- **Noindex**: Use `meta name="robots" content="noindex"` only for pages that should not appear in search.

## Output to the user

After edits, briefly note:

- What was added or changed and why.
- Anything that still depends on **hosting** (canonical domain, HTTPS, redirects, CDN).

## Additional resources

- For a compact verification list, see [checklist.md](checklist.md).
