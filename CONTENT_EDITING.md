# Website Editing Guide

This is the local guide for updating the website. Edit the files described here, commit, and push; GitHub Pages will rebuild the site.

Keep filenames lowercase and simple. Use hyphens instead of spaces:

```text
good: lithium-battery-paper.pdf
bad: Lithium Battery Paper Final v3.pdf
```

## Assets

Static files live in these folders:

- `images/` for images used in cards, pages, art, and profile sections
- `files/` for PDFs, slides, thesis files, BibTeX, and other downloads

Recommended image sizes:

- Card teaser images: `500 x 300 px` or any `5:3` ratio
- Art gallery images: at least `1000 px` wide, ideally `4:3` or `1:1`
- Full-width/page images: `1200 px` wide or larger
- Profile image: square, at least `400 x 400 px`

Recommended formats:

- Use `.jpg` for photos and artwork.
- Use `.png` for screenshots, diagrams, logos, or images with text.
- Keep images under about `1 MB` when possible.

For card pages, put the image in `images/` and reference only the filename:

```yaml
header:
  teaser: project-image.jpg
```

For direct image links in page content or data files, use:

```text
/images/image-name.jpg
```

For PDFs and downloads, use:

```text
/files/file-name.pdf
```

## Publications

Publication entries live in `_publications/`. Use one Markdown file per publication, patent, or thesis.

Example filename:

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
citation: 'A. Author and S. Gadgil, "My New Paper," Conference or Journal Name, 2026.'
---

Short description for the publication page.
```

Supported publication categories:

- `manuscripts` for journal articles
- `conferences` for conference papers
- `patents` for patents
- `theses` for master's or bachelor's theses

Put paper PDFs in `files/` and link them with `paperurl`.

## Theses

Add theses as publication entries in `_publications/` with `category: theses`.

Put the thesis PDF in `files/`.

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
citation: 'S. Gadgil, "Master&apos;s Thesis Title," Master&apos;s thesis, Institute Name, 2025.'
---

Short thesis description.
```

## Talks

Talk entries live in `_talks/`. Use one Markdown file per talk.

Example filename:

```text
_talks/2026-04-10-talk-title.md
```

Example:

```markdown
---
title: "Talk Title"
collection: talks
type: "Talk"
permalink: /talks/talk-title
venue: "Venue Name"
date: 2026-04-10
location: "City, State/Country"
excerpt: "One sentence summary of the talk."
header:
  teaser: talk-title-card.jpg
---

Talk description. You can add images, links, or slides here.

[Download slides](/files/talk-title-slides.pdf)
```

Put slides in `files/`. Put talk card images in `images/`.

## Portfolio

Portfolio entries live in `_portfolio/`. Use one Markdown file per project.

Good for:

- Robotics projects
- CAD/design projects
- Prototypes
- Software demos
- Research systems

Example filename:

```text
_portfolio/robotic-battery-disassembly.md
```

Example:

```markdown
---
title: "Robotic Battery Disassembly"
excerpt: "A semi-autonomous system for lithium-ion battery recycling."
collection: portfolio
permalink: /portfolio/robotic-battery-disassembly
header:
  teaser: robotic-battery-disassembly.jpg
---

## Summary

Short project overview.

## My Role

What you personally built or contributed.

## Tools

- ROS 2
- Python
- CAD
- Computer vision

## Result

What worked, what you learned, links to videos/code/papers.
```

## Art

Art entries live in `_data/art.yml`. Add one block per artwork.

Example:

```yaml
- title: "Artwork Title"
  image: "/images/artwork-title.jpg"
  year: "2026"
  medium: "Ink and digital color"
  description: "Short note about the piece."
```

Use `image: "/images/file-name.jpg"` here because the Art page reads from data instead of a Markdown page.

## Blog Posts

Blog posts live in `_posts/`. Their filenames must start with a date.

Blog posts are shown as cards on the Blog Posts page. Add a teaser image to make the card look good.

Example filename:

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
header:
  teaser: my-post-card.jpg
---

Write the post here.

## Section Heading

Add images like this:

![Description of image](/images/image-name.jpg)
```

Put blog card images in `images/`. The `header.teaser` value should be only the filename, not `/images/...`.

## CV

The main CV page is `_pages/cv.md`.

If you use the JSON CV page, edit `_data/cv.json`, but the Markdown CV is usually easier to maintain.

## Navigation

Top navigation is controlled by `_data/navigation.yml`.

Each item looks like this:

```yaml
- title: "Publications"
  url: /publications/
```

Remove an item from this file to remove it from the top menu.

## Site Settings

Site-wide settings live in `_config.yml`.

Common things to update:

- `title`
- `description`
- `author` details
- social/profile links
- `url` and `baseurl`
- fallback card teaser image

After changing `_config.yml`, restart the local Jekyll server if one is running.

## Search Engine Optimization

Important SEO settings are in `_config.yml`:

- `title`
- `name`
- `description`
- `url`
- `baseurl`
- `google_site_verification`
- `social.links`

The generated sitemap is:

```text
https://shreyash007.github.io/shreyashgadgil.github.io/sitemap.xml
```

After publishing:

1. Add the website to Google Search Console.
2. Use Google's HTML tag verification method.
3. Copy only the verification token into `google_site_verification` in `_config.yml`.
4. Push the change and complete verification.
5. Submit the sitemap URL shown above.
6. Use URL Inspection to request indexing for the homepage.

Google indexing is not immediate. Keep the homepage, publication titles, profile links, and descriptions accurate and use the same name across your website, Google Scholar, ORCID, GitHub, and LinkedIn.
