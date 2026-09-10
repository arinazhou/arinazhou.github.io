# Arina Zhou — Portfolio

Live at: **https://arinazhou.github.io**

Editorial, warm, recruiter-friendly personal portfolio. Static HTML/CSS/JS, no build step.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` — all page content
- `styles.css` — all styling
- `script.js` — scroll reveal animations, smooth anchor scroll, scroll-following bird, footer year
- `assets/resume.pdf` — résumé, linked from the nav and contact section

## Updating content

Just edit `index.html` directly — sections are commented (`HERO`, `WORK`, `EXPERIENCE`, `TOOLBOX`, `ABOUT`, `EDUCATION`, `CONTACT`).

## Adding real photos

Several sections still use styled placeholder blocks in place of real images:
- Hero portrait (`.portrait-placeholder`)
- Nighthawk visual (`.dark-visual` — swap for a spectrogram, benchmark chart, or pipeline diagram)
- AI Engineering Assistant card (`.warm-image` — swap for a real Streamlit screenshot)
- Chicago Bird Migration card (`.sage-image` — swap for a map or field visual)
- About section collage (`.about-big`, `.about-small` × 2 — fieldwork/bird/volleyball photos)
- Mini project photo card (`.mini-photo-placeholder`)

To replace a placeholder, drop your image in `assets/` and swap the placeholder `<div>` for:

```html
<img src="assets/your-photo.jpg" alt="Description of the photo">
```

## Deploying updates

This repo is deployed via **GitHub Pages** from the `main` branch. Any push to `main` goes live within a minute or two:

```bash
git add -A
git commit -m "update portfolio"
git push
```

## Notes

- The Chicago Bird Migration research repo is currently private on GitHub — the card links to email instead of code. Make `chicago-acoustic-species-composition` public and add its link back in if you want it linkable.
- Phone number is intentionally left off the public site to avoid spam; it's only on the résumé PDF.
