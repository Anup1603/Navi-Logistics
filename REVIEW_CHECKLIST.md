# Review Checklist

Use this file as the repeatable review flow for the Navi Logistics site.

## 1. Automated Checks

Run these from the repo root:

```bash
npm run review:quick
```

Use the full pass before releases:

```bash
npm run review:full
```

If `next build` fails because `.next/trace` is locked, close any running dev server or pause OneDrive sync and rerun the command.

## 2. UI Review

- Check desktop and mobile navigation, especially the header, sticky sections, and page-to-page transitions.
- Verify every CTA does something real. Avoid `href="#"`, non-working search boxes, and placeholder newsletter forms.
- Confirm contrast on hero buttons and outline buttons over images.
- Replace stock imagery, testimonials, awards, and metrics with real business content before launch.
- Check every page for overflow, clipped cards, and anchor scrolling on smaller screens.

## 3. Content And SEO Review

- Confirm the metadata matches real assets and routes. Open Graph images, canonical URLs, sitemap entries, and JSON-LD should all resolve.
- Keep service areas, phone numbers, team details, and company history consistent across pages.
- Review sitemap output for real URLs only. Do not include fragment-only URLs such as `#section`.
- Update legal pages when privacy, cookies, or dispute terms change.
- Make sure setup docs reference real filenames such as `.env.example`.

## 4. Code Review

- Prefer server components for static pages and isolate client-only behavior to smaller interactive sections.
- Keep shared site data in one place when it appears on multiple pages.
- Escape or sanitize any user-provided content before injecting it into HTML email templates.
- Treat operational failures as real failures. Do not return success when email sending or another critical step fails.
- Remove unused imports, unused components, and placeholder shadcn files that are not part of the app.

## 5. File Structure Review

- Keep route-level content in `src/app`.
- Move repeated marketing data into shared data modules such as `src/content` or `src/data`.
- Keep UI primitives in `src/components/ui` and remove the ones the app does not use.
- Store brand-owned images in `public` instead of relying on third-party hero images.

## 6. Release Gate

Before a production deploy, confirm:

- `npm run review:full` passes.
- Contact form success and failure flows both behave correctly.
- The sitemap, robots file, and metadata reflect the current public site.
- Footer links, social links, and legal links all resolve correctly.
