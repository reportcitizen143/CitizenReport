# How to maintain Citizen Report

Everything here can be done from **github.com in a browser** — no laptop setup,
no terminal. Open the file, click the ✏️ pencil, edit, then **Commit changes**.
The site rebuilds and goes live on its own in about a minute.

> One rule: **never delete a comma or a `}`.** The safest way to add anything is
> to copy an existing block and change the words inside it.

---

## 1. Publish a new issue

**File:** `src/data/issues.js`

Copy the whole block below, paste it at the **top** of the list (just after
`export const issues = [`), and change the words.

```js
  {
    id: 'CR-005',
    title: {
      te: 'తెలుగులో సమస్య పేరు',
      en: 'Issue title in English',
    },
    location: {
      te: 'ఎక్కడ ఉంది',
      en: 'Where it is',
    },
    description: {
      te: 'రెండు మూడు వాక్యాలలో సమస్య గురించి సాధారణ మాటల్లో.',
      en: 'Two or three plain sentences about the problem.',
    },
    status: 'pending',
    reportedDate: '2026-10-05',
    authorityId: 'AUTH-001',
    evidence: {
      image: '/images/issues/CR-005.jpg',
      youtube: null,
      instagram: null,
      twitter: null,
    },
    resolution: null,
  },
```

**The rules**

| Field          | What to put                                                      |
| -------------- | ---------------------------------------------------------------- |
| `id`           | A new number nobody else used. `CR-005`, `CR-006`…               |
| `title`        | Short. It has to fit one line on a phone.                        |
| `location`     | How a local person would say it, not a survey number.            |
| `description`  | Plain words. No official language.                               |
| `status`       | `'pending'`, `'in-progress'` or `'resolved'` — nothing else.     |
| `reportedDate` | Year-Month-Day, like `'2026-10-05'`. Always this order.          |
| `authorityId`  | An id from `src/data/authorities.js` (see section 3).            |
| `evidence`     | Anything you do not have → write `null`. Do not delete the line. |

**About the photo.** Upload it to `public/images/issues/` on GitHub
(_Add file → Upload files_). Name it after the issue, e.g. `CR-005.jpg`.
Then write the path as `/images/issues/CR-005.jpg`.
No photo yet? Write `image: null` — the site shows a neat placeholder instead
of a broken picture.

---

## 2. Mark an issue as resolved

**File:** `src/data/issues.js`

Find the issue and change one word:

```js
    status: 'pending',      ←  change this
    status: 'resolved',     ←  to this
```

That is enough. The badge, the colour and the filter all update by themselves.

To also show the before/after photos, replace `resolution: null,` with:

```js
    resolution: {
      resolvedDate: '2026-10-12',
      description: {
        te: 'ఏమి జరిగిందో ఒక వాక్యంలో.',
        en: 'One sentence about what was fixed.',
      },
      image: '/images/issues/CR-005-resolved.jpg',
    },
```

---

## 3. Add or fix an authority

**File:** `src/data/authorities.js`

This is kept separate on purpose: a government email address changes far more
often than the issue does. Fix it here once and every issue pointing at that
office is corrected instantly.

```js
  {
    id: 'AUTH-005',
    name: { te: 'కార్యాలయం పేరు', en: 'Office name' },
    email: 'real.address@gov.in',
    cc: [],
    office: { te: 'ఏ ప్రాంతం', en: 'Which area' },
    phone: null,
  },
```

To keep someone else in the loop on every complaint to this office:

```js
    cc: ['collector@gov.in', 'mro@gov.in'],
```

> ⚠️ The addresses shipped with the project end in `example.gov.in`. They are
> placeholders. **Replace them with real addresses before you share the site.**

---

## 4. Change the wording of the complaint email

**File:** `src/data/emailTemplates.js`

There are two templates — one Telugu, one English. Change a sentence there and
**every** issue's email changes with it.

Anything inside `${...}` is filled in automatically — `${title}`, `${location}`,
`${description}`, `${issueId}`, `${reportedDate}`, `${signature}`, `${link}`.
Move them around freely, but keep the `${` and `}` exactly as they are.

---

## 5. Change a button or a label on screen

**File:** `src/i18n/strings.js`

Every fixed word in the interface is there, Telugu and English side by side.

Write the Telugu the way you would say it out loud to a neighbour. No official
words. No English words written in Telugu letters unless everybody already uses
them that way.

---

## 6. Change the site name, tagline or social links

**File:** `src/config/siteConfig.js`

Name, tagline, home-page headline, the signature at the bottom of every email,
and your YouTube / Instagram / X links. To hide a social icon, set it to `null`.

The home page background photo goes in `public/images/hero.jpg`.

---

## 7. Check your work before you publish

If you have the project on a computer:

```bash
npm run check:data
```

It reads every data file and tells you in plain sentences what is wrong — a
repeated id, a status that does not exist, an authority that was never defined,
a date typed the wrong way round, a missing translation.

If you are editing on github.com, the same check runs automatically on every
change. Open the **Actions** tab: a green ✓ means the site went live, a red ✗
means something needs fixing and the message says what.

---

## Things that will break the site

1. **A missing comma** between two `{ ... }` blocks.
2. **A missing `}`** — every `{` needs its partner.
3. **The wrong kind of quote.** Use `'` — never `'` or `"` from a word processor.
4. **A `'` inside Telugu or English text.** Write `it is`, not `it's`.
5. **Two issues with the same `id`.**
6. **A date like `05-10-2026`.** It must be `2026-10-05`.

If something does break, GitHub keeps every earlier version. Open the file's
**History**, find the version from before your change, and restore it.
Nothing is ever lost.
