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
- `assets/img/` — web-optimized photos (source HEIC originals live in `pics/`)
- `assets/video/` — the haptic app demo video + poster frame

## Updating content

Just edit `index.html` directly — sections are commented (`HERO`, `WORK`, `EXPERIENCE`, `TOOLBOX`, `ABOUT`, `EDUCATION`, `CONTACT`).

## Photo/video placement rules (for future updates)

- Real photos only go on the project they actually belong to. A project with no photo keeps its designed CSS placeholder (wave visual, browser mockup, or dashed "PERSONAL PHOTO" block) rather than borrowing an unrelated image.
- A project with multiple photos and no public repo to link to (currently: Chicago Bird Migration) gets a horizontal scrollable gallery (`.project-gallery` / `.gallery-scroll`) instead of one static image.
- The only non-work personal photos are of Arina's budgie (hero portrait, About section) — everything else currently on the site is Chicago Bird Migration fieldwork.

Still using placeholders: Nighthawk visual (spectrogram/benchmark chart), AI Engineering Assistant card (real Streamlit screenshot), and two About-collage slots (personal photo, volleyball/life).

## Converting new photos/video

New iPhone photos come in as HEIC/MOV, which don't render everywhere. Convert before adding to `assets/`:

```bash
# Photos: HEIC -> web JPG, resized + compressed
sips -s format jpeg -s formatOptions 78 -Z 1200 pics/IMG_XXXX.HEIC --out assets/img/name.jpg

# Video: HEVC -> H.264 (HEVC doesn't play in most non-Apple browsers)
avconvert --source "pics/video.mov" --preset PresetAppleM4V1080pHD --output assets/video/name.mp4 --replace
# Poster frame from a video:
qlmanage -t -s 900 -o /tmp pics/video.mov   # produces /tmp/video.mov.png
sips -s format jpeg -s formatOptions 80 /tmp/video.mov.png --out assets/video/name-poster.jpg
```

## Deploying updates

This repo is deployed via **GitHub Pages** from the `master` branch. Any push to `master` goes live within a minute or two:

```bash
git add -A
git commit -m "update portfolio"
git push
```

## Notes

- The Chicago Bird Migration research repo is currently private on GitHub — the card links to email instead of code. Make `chicago-acoustic-species-composition` public and add its link back in if you want it linkable.
- Phone number is intentionally left off the public site to avoid spam; it's only on the résumé PDF.
