# Editing site content

This site uses Markdown files for publications, talks, and blog posts. Edit the files below, commit, and push; GitHub Pages will rebuild the site.

## Publications

Publication entries live in `_publications/`.

Use one file per item. The filename can be any clear date/title pattern, for example:

```text
_publications/2026-05-01-my-new-paper.md
```

Example:

```markdown
---
title: "My New Paper"
collection: publications
permalink: /publication/my-new-paper
excerpt: "One sentence summary."
date: 2026-05-01
venue: "Conference or Journal Name"
category: conferences
paperurl: "/files/my-new-paper.pdf"
cited_by: 0
citation: 'A. Author and S. Gadgil, "My New Paper," Conference or Journal Name, 2026.'
---

Short description for the publication page.
```

Supported categories are:

- `manuscripts` for journal articles
- `conferences` for conference papers
- `patents` for patents
- `theses` for master's or bachelor's theses

Put PDFs in `files/` and link them as `/files/filename.pdf`.

## Theses

When you add your master's or bachelor's thesis PDF, place it in `files/`, then add a publication entry with `category: theses`.

Example:

```markdown
---
title: "Master's Thesis Title"
collection: publications
permalink: /publication/masters-thesis
excerpt: "Short thesis summary."
date: 2025-05-01
venue: "Institute Name"
category: theses
paperurl: "/files/masters-thesis.pdf"
citation: 'S. Gadgil, "Master's Thesis Title," Master&apos;s thesis, Institute Name, 2025.'
---

Short thesis description.
```

## Talks

Talk entries live in `_talks/`.

Example:

```markdown
---
title: "Talk title"
collection: talks
type: "Talk"
permalink: /talks/talk-title
venue: "Venue name"
date: 2026-04-10
location: "City, State/Country"
---

Talk description. Add images in `_talks/` or link to files in `/files/`.
```

## Blog Posts

Blog posts live in `_posts/`. Their filenames must start with a date:

```text
_posts/2026-04-10-my-post-title.md
```

Example:

```markdown
---
title: "My Post Title"
date: 2026-04-10
permalink: /posts/2026/04/my-post-title/
tags:
  - robotics
  - research
---

Write the post here.
```
