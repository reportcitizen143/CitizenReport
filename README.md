# Citizen Report

> **మన ఊరి సమస్య — మన స్వరం**

A lightweight, frontend-only civic-awareness site. It shows documented local
issues and prepares a complaint email to the correct authority.

**What it promises:** make the issue visible, reach the right office, help
citizens act together, record what happened next.

**What it does not promise:** that the problem gets fixed. That is in the hands
of the authorities. The site never sends an email on anyone's behalf — it opens
the visitor's own email app with everything filled in, and the visitor decides.

---

## How it works

```
  Browse issues  →  Open one  →  Tap "Send email"  →  Your mail app opens,
                                                       already filled in
                                                            ↓
                                                    You read it and press Send
```

No login. No database. No backend. No tracking.

---

## Running it

```bash
npm install     # once
npm run dev     # local preview at http://localhost:5173
npm run build   # production build into dist/
npm run check:data   # check the data files for mistakes
```

Requires Node 20 or newer.

---

## The one architectural rule

> **Components hold the interface. `src/data/` holds everything that changes.**

Adding the hundredth issue must not require touching a single component. If you
ever find yourself editing a `.jsx` file to publish an issue, something has gone
wrong — the data files should have been enough.

```
src/
├── data/                  ← you edit these
│   ├── issues.js            every issue, newest first
│   ├── authorities.js       who receives each complaint
│   ├── emailTemplates.js    the wording of the email
│   └── statuses.js          the stages an issue moves through
│
├── config/
│   └── siteConfig.js      ← name, tagline, social links, signature
│
├── i18n/                    Telugu + English, and the language switch
│   ├── strings.js           every fixed label in the interface
│   ├── LanguageProvider.jsx
│   ├── useLanguage.js
│   └── language-context.js
│
├── utils/                   pure logic, no interface
│   ├── emailGenerator.js    issue  →  ready-to-send email
│   ├── issueHelpers.js      lookups, filters, date formatting
│   ├── localize.js          picks te / en out of a content value
│   └── clipboard.js
│
├── components/              the building blocks
├── pages/                   Home, Issues, IssueDetails, About, NotFound
└── App.jsx                  the routes
```

`src/utils/emailGenerator.js` is the heart of the product: it takes an issue and
returns plain data (`to`, `subject`, `body`, `mailtoUrl`). It touches nothing on
screen, so the email can be previewed, copied, tested — and, in V2, sent by a
backend instead — without changing a single component.

---

## Maintaining it

Everything below is a one-file edit. See **[CONTENT_GUIDE.md](CONTENT_GUIDE.md)**
for step-by-step instructions you can follow directly on github.com.

| What you want to do                    | File to edit                           |
| -------------------------------------- | -------------------------------------- |
| Publish a new issue                    | `src/data/issues.js`                   |
| Mark an issue resolved                 | `src/data/issues.js` → change `status` |
| An office's email changed              | `src/data/authorities.js`              |
| Reword the complaint email             | `src/data/emailTemplates.js`           |
| Change a button or label               | `src/i18n/strings.js`                  |
| Change the name, tagline, social links | `src/config/siteConfig.js`             |

After any edit, run `npm run check:data`. It catches duplicated ids, unknown
statuses, missing translations and mistyped dates, and says so in plain English.

---

## Languages

Telugu is the default; English is one tap away, and the switch is in the same
top-right corner on every screen. The choice is remembered in the browser.

Any piece of content may be written as `{ te: '...', en: '...' }` or as a plain
string when it is the same in both languages.

Adding a third language later: add its code to `languages` in
`src/i18n/strings.js`, add that key to each entry there, and add it to the
content in `src/data/`. No component changes.

---

## Deploying

The build is fully static — it runs on GitHub Pages, Netlify, Vercel, or any
web host. The included workflow at `.github/workflows/deploy.yml` publishes to
GitHub Pages on every push to `main`.

To turn it on: **Settings → Pages → Build and deployment → Source: GitHub Actions.**

The app uses `HashRouter`, so URLs look like `…/#/issue/CR-001`. That is
deliberate: it works on a static host with no rewrite rules, in any sub-folder.

---

## Deliberately not in V1

No login, no database, no backend, no user submissions, no automatic sending,
no analytics, no maps, no admin dashboard. Those belong in V2 — once people
actually use the Send Email flow. The architecture above is built so that
adding a backend later replaces `src/data/` and `emailGenerator.js` without
touching the interface.
