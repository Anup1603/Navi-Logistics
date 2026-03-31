# Upgrade Plan

This file captures the next recommended upgrade pass for the Navi Logistics site.

The goal is to improve reliability, trust, and finish quality without introducing unnecessary complexity.

## Priority Summary

1. Fix the contact form backend so success and failure states are honest and safe.
2. Remove or implement placeholder UI on News and Blog so every visible control does something real.
3. Clean up sitemap and structured-data issues that can hurt SEO quality.
4. Improve the contact-page map presentation on mobile and tablet so it feels easier to use.
5. Improve content/search behavior on News and Blog using the centralized content model.
6. Replace fragile or generic assets/content with more brand-owned data over time.

## Phase 1: Contact Form Reliability And Safety

### Objective

Make the contact form production-safe so users do not receive a false success response and submitted content is handled more safely.

### Problems To Fix

- The API can return success even when email delivery fails.
- User-submitted values are inserted into HTML email content without escaping.
- The email subject/body contains encoding artifacts that should be cleaned up.

### Planned Changes

- Update `src/app/api/contact/route.ts`
- Add an HTML-escaping helper for all user-provided values used in the email template.
- Escape message content before newline-to-`<br>` conversion.
- Return a proper error response if `sendMail` fails.
- Keep validation behavior for required fields and phone/email checks.
- Clean up email subject/body text so special characters render correctly.

### Validation

- Submit a valid form and confirm success response still works.
- Simulate an email failure and confirm the API returns an error.
- Confirm escaped input does not render as raw HTML in the email body.

## Phase 2: News And Blog Placeholder UI Cleanup

### Objective

Remove the “looks functional but is not” problem from the News and Blog pages.

### Problems To Fix

- Search inputs are visual only.
- Subscribe/newsletter forms are visual only.
- Load More buttons are visual only.

### Planned Changes

- Update `src/app/news/page.tsx`
- Update `src/app/blog/page.tsx`

### Recommended Approach

Implement lightweight client-side filtering first, using the centralized content already stored in `src/content/siteData.ts`.

### Detailed Scope

- Convert the News and Blog listing pages into interactive filtered experiences.
- Make category badges actually filter items.
- Make search inputs filter by title, excerpt, category, and possibly author for blog.
- Replace “Load More” with one of these:
  - remove it entirely if all content is shown
  - or make it actually reveal more items in batches
- For newsletter forms:
  - either remove them for now
  - or replace them with a simple CTA to the contact page until a real subscription backend exists

### Validation

- Search updates results immediately.
- Category chips update the visible cards.
- No visible buttons or controls remain non-functional.

## Phase 3: Sitemap And Structured Data Cleanup

### Objective

Make SEO-related output more accurate and less misleading.

### Problems To Fix

- The sitemap currently uses `new Date()` for every page.
- The sitemap includes fragment URLs such as `/services#3pl`.
- Structured data still includes a `SearchAction` even though no search route exists.

### Planned Changes

- Update `src/app/sitemap.ts`
- Update `src/components/JsonLd.tsx`
- Review `src/app/layout.tsx` if metadata needs to be aligned at the same time

### Detailed Scope

- Remove service anchor URLs from the sitemap output.
- Use stable `lastModified` values instead of generating a fresh timestamp on every build.
- Remove the `SearchAction` JSON-LD block unless a real search page is added.
- Confirm Open Graph and canonical references still point to real assets/routes.

### Validation

- Sitemap returns only real page URLs.
- Structured data no longer advertises non-existent search functionality.
- Metadata still passes the current review checks.

## Phase 4: Better Content Discovery On News And Blog

## Phase 4: Contact Page Map Responsiveness

### Objective

Increase the visual size and usability of the embedded map on mobile and tablet layouts.

### Problem To Fix

- The current map container uses a wide aspect ratio that makes the embedded map feel too short on smaller screens.

### Planned Changes

- Update `src/app/contact/page.tsx`

### Recommended Approach

Use responsive sizing for the map container so it is taller on mobile and tablet, while keeping a balanced desktop presentation.

### Detailed Scope

- Replace the current fixed map aspect ratio with breakpoint-based sizing.
- Make the map noticeably taller on mobile screens.
- Keep tablet height larger than the current layout so the embed feels more useful.
- Preserve rounded corners and the existing visual style.
- Confirm the map does not create awkward overflow or excessive vertical space on desktop.

### Validation

- The map looks clearly larger on mobile.
- The map feels more balanced on tablet.
- Desktop layout still looks intentional and not oversized.

## Phase 5: Better Content Discovery On News And Blog

### Objective

Use the new route-based article model more effectively so content feels easier to browse.

### Planned Changes

- Update `src/app/news/page.tsx`
- Update `src/app/blog/page.tsx`
- Optionally update `src/app/news/[slug]/page.tsx`
- Optionally update `src/app/blog/[slug]/page.tsx`

### Detailed Scope

- Improve related-post selection by matching category first.
- Optionally add featured/standard sorting rules from central data.
- Optionally add simple empty states for no search results.
- Keep all logic powered by `src/content/siteData.ts`.

### Validation

- Related items feel relevant.
- Empty states are clear and visually consistent.
- Centralized content remains the single source of truth.

## Phase 5: Content And Asset Quality

## Phase 6: Content And Asset Quality

### Objective

Raise trust and brand quality over time.

### Planned Changes

- Replace remote stock images with local brand-owned images in `public/`
- Replace any generic business content with real company content
- Review social/profile links and structured business details for consistency

### Validation

- Fewer third-party dependencies for critical visuals
- More trustworthy branding and business identity across pages

## File Impact Forecast

Likely files for the next implementation pass:

- `src/app/api/contact/route.ts`
- `src/app/news/page.tsx`
- `src/app/blog/page.tsx`
- `src/app/contact/page.tsx`
- `src/app/sitemap.ts`
- `src/components/JsonLd.tsx`
- `src/content/siteData.ts`
- Possibly `src/app/news/[slug]/page.tsx`
- Possibly `src/app/blog/[slug]/page.tsx`

## Recommended Execution Order

1. Contact API safety and failure handling
2. News/Blog placeholder UI cleanup and functional filtering
3. Sitemap cleanup
4. JSON-LD cleanup
5. Contact-page map responsiveness
6. Content discovery improvements
7. Asset/content quality pass

## Review And Verification Plan

After implementation, run:

```bash
npm.cmd run typecheck
npm.cmd run review:quick
```

Then manually verify:

- Contact form success and failure flows
- News search and category filtering
- Blog search and category filtering
- Article detail page links and navigation
- Contact-page map size on mobile and tablet
- Mobile/tablet navigation behavior
- Footer and legal links

## Approval Note

This is the proposed implementation plan only.

No application behavior changes should begin until this plan is approved.
