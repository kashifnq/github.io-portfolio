# Dr. Kashif Naseer Qureshi, academic portfolio

A single page academic portfolio built with plain HTML, CSS and JavaScript. No build step, no framework, no dependencies. Drop it in a repository, switch on GitHub Pages, and it is live.

**Sections:** About, Research, Publications (searchable), Books, Projects, Teaching, Supervision, Editorial and review, Talks and workshops, News and awards, Gallery, Contact.

---

## Publish it in five minutes

1. Create a new repository on GitHub. If you name it `your-username.github.io`, the site lives at `https://your-username.github.io`. Any other name works too, it just adds the repo name to the URL.
2. Upload every file and folder from this bundle, keeping the structure intact.
3. Go to **Settings, Pages**.
4. Under *Build and deployment*, set **Source** to `Deploy from a branch`, **Branch** to `main` and folder to `/ (root)`. Save.
5. Wait about a minute, then open the URL GitHub shows you.

To upload from the command line instead:

```bash
git init
git add .
git commit -m "Portfolio site"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

---

## Files

```
index.html                  all page content and section text
assets/css/style.css        the whole visual system
assets/js/publications.js   the data you will edit most often
assets/js/main.js           search, filters, animation, no need to touch
assets/img/                 your photos and book covers go here
assets/Kashif-Naseer-Qureshi-CV.pdf   linked from the Download CV button
.nojekyll                   tells GitHub Pages to serve files as they are
```

---

## Add your images

Everything works without images, placeholders appear instead. Drop files into `assets/img/` with these exact names to replace them:

| Filename | Where it appears | Suggested size |
|---|---|---|
| `profile.jpg` | Hero portrait | 800 x 1000, portrait crop |
| `og-cover.jpg` | Link preview on LinkedIn, X, WhatsApp | 1200 x 630 |
| `book-cybersecurity-essentials.jpg` | Books section | 600 x 800 |
| `book-ioe-vigilance.jpg` | Books section | 600 x 800 |
| `book-aiot.jpg` | Books section | 600 x 800 |
| `book-ai-language-models.jpg` | Books section | 600 x 800 |
| `book-smart-healthcare.jpg` | Books section | 600 x 800 |
| `book-renewable-energy.jpg` | Books section | 600 x 800 |
| `gallery-1.jpg` to `gallery-4.jpg` | Gallery under News | 1200 x 900 |

Book covers can be downloaded from the Springer, Routledge and Elsevier pages already linked in the Books section. Keep each image under about 400 KB so pages load quickly.

---

## Add a publication

Open `assets/js/publications.js` and add one line at the top of the list. That is the only change needed, the counters, year chart, search and filters all update themselves.

```js
{ y:2026, type:"journal",
  title:"Title of the paper",
  authors:"K. N. Qureshi, A. Second, B. Third",
  venue:"Journal Name, vol. 1, no. 2, pp. 3-4",
  imf:"5.1",
  doi:"https://doi.org/10.xxxx/yyyy" },
```

- `type` is `journal`, `conference` or `chapter`.
- `imf` and `doi` are optional. Without a `doi` the title links to a Google Scholar search for that exact title, so every entry stays clickable.
- Add `award:true` to show an award badge.

To add a book, append an entry to the `BOOKS` list in the same file.

---

## Change the wording

All prose lives in `index.html` and is clearly labelled with comment headers such as `<!-- ABOUT -->`. Edit the text between the tags, nothing else is affected.

## Change the colours

Every colour is a variable at the top of `assets/css/style.css`:

```css
--signal: #2436D8;   /* links, active states, the network lines */
--beacon: #D98A00;   /* awards and packets in flight */
--relay:  #0E7C72;   /* impact factors and eyebrows */
```

Change those three values and the whole site follows.

---
## Add Book Placeholder

Books live in assets/js/publications.js, at the very bottom of the file in the BOOKS list.
To edit it on GitHub
1. Open your repo, click the assets folder, then js, then publications.js.
2. Click the pencil icon at the top right of the file view.
3. Scroll to the bottom. You'll see the last book entry (Artificial Intelligence-Based Renewable Energy Systems) followed by ];.
4. Add your new entry before that ];, and put a comma after the previous entry's closing brace.
5. Click Commit changes. The site rebuilds in about a minute.

## Notes

- The publication counts in the statistics strip are calculated from the data file at page load, so they can never drift out of date.
- The hero animation is a light canvas sketch of nodes, links and packets in transit. It is disabled automatically for visitors who ask for reduced motion.
- The layout is responsive down to a phone and prints cleanly to PDF.
