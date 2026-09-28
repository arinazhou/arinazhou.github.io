# Arina Zhou — Portfolio

Live at: **https://arinazhou.github.io**

Clean, compact, recruiter-friendly personal portfolio (light + dark mode). Static HTML/CSS/JS, no build step.

## Preview locally

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Structure

- `index.html` — all page content
- `styles.css` — all styling
- `script.js` — footer year
- `assets/resume.pdf` — résumé, linked from the nav and contact section
- `assets/img/` — web-optimized photos (source HEIC originals live in `pics/`)
- `assets/video/` — the haptic app demo video + poster frame

## Updating content

Just edit `index.html` directly — sections are commented (`HERO`, `EXPERIENCE`, `PROJECTS`, `SKILLS + EDUCATION`, `ABOUT`).

## Photo/video placement rules (for future updates)

- Real photos only go with the work they belong to. Work without a photo stays text-only; don't borrow unrelated images or add placeholder visuals.
- Media sits inside its Experience entry: the haptic demo video beside the iSchool role, and the Chicago fieldwork photos as a 4-up strip under the Windy City Bird Lab role.
- The only non-work personal photos are of Arina's budgie (hero portrait, About section).

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
