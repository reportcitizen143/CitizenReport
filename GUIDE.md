# Citizen Report — the owner's guide

Everything you need to run this, in order: what the app does, what you do
week to week, and what to do when something goes wrong.

You do **not** need a laptop for the day-to-day work. Publishing an issue and
marking one resolved are done on github.com in a browser.

---

# Part 1 — What the app does

## The one thing it is for

```
  A citizen opens the site
          ↓
  Sees the issues in your area, with photos
          ↓
  Taps one
          ↓
  Taps "అధికారులకు మెయిల్ పంపండి"
          ↓
  Their own email app opens, already filled in
          ↓
  They read it and press Send
```

The site **never sends an email by itself**. It writes the complaint and hands
it to the citizen. They decide. That is the honest promise, and it is what
keeps the project credible.

## Features, screen by screen

**Every screen**

- Telugu by default, English one tap away, in the same top-right corner always.
- The choice is remembered on that phone — a person picks their language once.
- Large text, large buttons, one main action per screen.

**Home page**

- Your headline over a photo.
- Three lines saying what the site gives people.
- One big green button to the issue list.
- "How does this work?" — three numbered steps.
- A colour key explaining 🟡 pending, 🔵 in progress, 🟢 resolved.

**Issue list**

- Every issue, newest first, automatically.
- Filter buttons: All / Pending / In progress / Resolved.
- The filter is remembered in the web address, so a filtered list can be
  shared as a link and the back button works properly.
- Each row: photo, title, location, status colour.

**Issue page**

- Big photo with the status badge on it.
- Title, location, the date it was reported.
- The problem in plain words.
- **The big green email button** — the main action.
- _"See what the email says"_ — opens a preview of the exact email, so nobody
  has to trust a button blindly. A **Copy** button sits inside it.
- Evidence tiles: photo, YouTube, Instagram, X — only the ones that exist show up.
- Who the complaint goes to, with the office's email address shown openly.
- **Share on WhatsApp.**
- If resolved: a green panel with the before and after photos side by side.

**About page** — what the site does and, just as importantly, what it does not.

## Things that protect you

- **Missing photo?** A tidy placeholder appears instead of a broken image.
- **Telugu email too long?** Telugu takes about three times more space than
  English, and some mail apps cut long messages short. When that would happen,
  an amber box appears with a Copy button. Nothing gets silently truncated.
- **Typed something wrong in the data?** The automatic check refuses to publish
  and tells you what is wrong, in plain sentences.
- **Broke something?** GitHub keeps every earlier version. Nothing is ever lost.

## What it deliberately does not have

No login, no database, no backend, no analytics, no tracking, no ads, no user
submissions, no automatic sending. That is on purpose. The whole site is files
in this repository, which is why you can maintain it alone and for free.

---

# Part 2 — What you do

## One-time setup (you have done most of this)

| #   | Step                           | Where                                         | Done?        |
| --- | ------------------------------ | --------------------------------------------- | ------------ |
| 1   | Add the SSH key to the account | GitHub → Settings → SSH keys                  | ✅           |
| 2   | Push the code                  | `git push -u origin main`                     | ✅           |
| 3   | **Turn on Pages**              | Settings → Pages → Source: **GitHub Actions** | ⬜ ← do this |
| 4   | Put in real email addresses    | `src/data/authorities.js`                     | ⬜ ← do this |

> **Step 4 matters more than anything else on this page.** Every address in
> `authorities.js` currently ends in `example.gov.in`. Those are fake. Until you
> replace them with real offices, every complaint a citizen sends goes nowhere.

## Publishing a new issue — the routine

1. **Record the problem.** Photo or video, as you already do.
2. **Post it** on YouTube / Instagram / X, as you already do.
3. **Upload the photo** to GitHub: open `public/images/issues/` →
   _Add file_ → _Upload files_ → name it after the issue, e.g. `CR-005.jpg`.
4. **Add the issue**: open `src/data/issues.js` → ✏️ pencil → copy an existing
   block, paste it at the top, change the words → **Commit changes**.
5. **Wait about a minute.** Open the **Actions** tab. Green ✓ means it is live.

Full field-by-field instructions with copy-paste blocks:
**[CONTENT_GUIDE.md](CONTENT_GUIDE.md)**

## When an issue gets fixed

Open `src/data/issues.js`, find it, change one word:

```js
status: 'pending',   →   status: 'resolved',
```

Then upload the after-photo and add the `resolution` block
(see [CONTENT_GUIDE.md](CONTENT_GUIDE.md) section 2). The before/after panel
appears by itself. That before/after record is the most valuable thing this
project will build over time — it is proof that citizen pressure worked.

## If you are working on your laptop

```bash
npm install          # once
npm run dev          # preview at http://localhost:5173
npm run check:data   # check the data files before committing
npm run build        # production build
npm run format       # tidy up the code formatting
```

---

# Part 3 — When something goes wrong

## How to read a failure

Open the **Actions** tab on GitHub. Each commit shows a ✓ or an ✗.
Click the ✗, click the red step, and read the **last few lines** — the real
message is at the bottom. Then find it below.

---

### ✗ "Get Pages site failed" / "HttpError: Not Found"

**Means:** Pages has never been switched on for this repository.

**Fix:** Settings → Pages → _Build and deployment_ → Source: **GitHub Actions**.
Then Actions tab → click the failed run → **Re-run all jobs**.

This one cannot be fixed from the code. GitHub does not let a workflow switch
Pages on for itself using the normal token.

---

### ⚠️ "Node.js 20 is deprecated"

**Means:** the workflow was using older action versions.

**Fix:** already done — the workflow now uses `checkout@v7`, `setup-node@v7`,
`configure-pages@v6`, `upload-pages-artifact@v5`, `deploy-pages@v5`.

---

### ℹ️ "The ubuntu-latest label will migrate to Ubuntu 26"

**Means:** nothing is wrong. GitHub shows this notice on every repository.

**Fix:** none needed. Ignore it.

---

### ✗ "Check the data files" step failed

**Means:** something in `src/data/` is wrong. The message says exactly what —
a repeated id, a status that does not exist, an authority that was never
defined, a date typed the wrong way round.

**Fix:** open the file it names, correct the line it names, commit again.

The five things that cause almost every failure:

1. A missing comma between two `{ ... }` blocks.
2. A missing `}` — every `{` needs its partner.
3. Curly quotes `'` or `"` pasted from WhatsApp or Word. Only straight `'` works.
4. An apostrophe inside text — write `it is`, not `it's`.
5. A date written `05-10-2026` instead of `2026-10-05`.

---

### The site is blank, or looks broken after an edit

**Fix:** put it back the way it was. Open the file on GitHub → **History** →
click the version from before your change → **⋯** → _Revert_. Or copy the old
text and paste it back. Nothing is ever lost.

---

### My change is live but I still see the old page

**Means:** your phone cached it.

**Fix:** pull down to refresh, or open the site in a private/incognito tab.
Give it two minutes first — the Actions tab tells you the truth about whether
it actually deployed.

---

### The email button does nothing on someone's phone

**Means:** no email app is set up on that phone. This is common on shared phones.

**Fix:** they can tap _"See what the email says"_ → **Copy** → paste it into
Gmail by hand. Worth saying out loud in your videos.

---

### The email opens but the message is cut short

**Means:** that mail app has a length limit, and Telugu takes about three times
more space than English.

**Fix:** the site already spots this and shows an amber box with a **Copy**
button. Tell people to use it. If it happens constantly, shorten the
`description` in `issues.js`, or shorten the wording in `emailTemplates.js` —
one edit fixes it for every issue at once.

---

### `git push` says "Permission denied (publickey)"

**Means:** the SSH key is not reaching GitHub.

**Fix:**

```bash
ssh -T git@citizen-report
# want: "Hi reportcitizen143! You've successfully authenticated"
```

If it fails, the key was not added to the **reportcitizen143** account
(it is easy to add it to the wrong account by mistake). Re-copy it:

```bash
cat ~/.ssh/reportcitizen143.pub | pbcopy
```

and paste it at GitHub → Settings → SSH and GPG keys → New SSH key,
while signed in as **reportcitizen143**.

---

### A commit shows the wrong name on it

**Means:** the repo-local identity was not used.

**Fix:**

```bash
cd /Users/vivek/Documents/CitizenReport
git config user.name "reportcitizen143"
git config user.email "reportcitizen143@gmail.com"
```

This applies to this folder only. Your personal identity on other projects is
not affected.

---

## If you are truly stuck

Take a screenshot of the red step in the Actions tab, including the last few
lines of the message. That screenshot is almost always enough for anyone to
tell you the fix in one sentence.

---

# Quick reference

| I want to…                         | File                                                 |
| ---------------------------------- | ---------------------------------------------------- |
| Publish a new issue                | `src/data/issues.js`                                 |
| Mark one resolved                  | `src/data/issues.js` → `status`                      |
| Fix an office's email              | `src/data/authorities.js`                            |
| Reword the complaint email         | `src/data/emailTemplates.js`                         |
| Change a button or label           | `src/i18n/strings.js`                                |
| Change name, tagline, social links | `src/config/siteConfig.js`                           |
| Change the logo                    | replace `public/logo-mark.png` (square, emblem only) |
| Add an issue photo                 | upload to `public/images/issues/`                    |
| Change the home page photo         | upload as `public/images/hero.jpg`                   |

**You never need to edit anything in `src/components/` or `src/pages/` to
publish content.** If it feels like you do, something has gone wrong — the data
files were meant to be enough.
