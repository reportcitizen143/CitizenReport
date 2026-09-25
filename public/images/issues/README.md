# Issue photos

Put one photo per issue here and name it after the issue id:

    CR-001.jpg
    CR-002.jpg
    CR-004-resolved.jpg     ← the "after" photo for a resolved issue

Then point at it from `src/data/issues.js`:

    image: '/images/issues/CR-001.jpg'

**Keep files small.** Resize to about 1200px wide and save as JPG under ~300 KB,
so the page opens quickly on a slow mobile connection.

No photo yet? Write `image: null` — the site shows a tidy placeholder rather
than a broken picture.

The home page background photo goes one level up, at `public/images/hero.jpg`.
