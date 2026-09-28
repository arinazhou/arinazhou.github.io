const footerYear = document.querySelector("#footer-year");
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} Arina Zhou`;
}

// Lightbox shared by the featured viewer and the project cards
const lightbox = document.querySelector(".lightbox");
const lbImg = lightbox.querySelector("img");
const lbCaption = lightbox.querySelector("figcaption");
const lbPrev = lightbox.querySelector(".lb-prev");
const lbNext = lightbox.querySelector(".lb-next");
let items = [];
let index = 0;

function show(i) {
  index = (i + items.length) % items.length;
  lbImg.src = items[index].src;
  lbImg.alt = items[index].caption;
  lbCaption.textContent = items[index].caption;
  lbPrev.hidden = lbNext.hidden = items.length < 2;
}

function openGallery(list, start = 0) {
  items = list;
  show(start);
  lightbox.showModal();
}

lbPrev.addEventListener("click", () => show(index - 1));
lbNext.addEventListener("click", () => show(index + 1));
lightbox.querySelector(".lb-close").addEventListener("click", () => lightbox.close());
lightbox.addEventListener("click", e => { if (e.target === lightbox) lightbox.close(); });
document.addEventListener("keydown", e => {
  if (!lightbox.open || items.length < 2) return;
  if (e.key === "ArrowLeft") show(index - 1);
  if (e.key === "ArrowRight") show(index + 1);
});

// Featured viewer: thumbnails swap the main figure, clicking it opens the lightbox
document.querySelectorAll(".viewer").forEach(viewer => {
  const mainImg = viewer.querySelector(".viewer-main img");
  const caption = viewer.querySelector(".viewer-caption");
  const thumbs = [...viewer.querySelectorAll(".thumbs button")];
  const list = thumbs.map(t => ({ src: t.dataset.src, caption: t.dataset.caption }));

  thumbs.forEach((thumb, i) => {
    thumb.addEventListener("click", () => {
      thumbs.forEach(t => t.classList.toggle("active", t === thumb));
      mainImg.src = list[i].src;
      mainImg.alt = list[i].caption;
      caption.textContent = list[i].caption;
    });
  });

  viewer.querySelector(".viewer-main").addEventListener("click", () => {
    openGallery(list, thumbs.findIndex(t => t.classList.contains("active")));
  });
});

// Project cards: figures come from <template data-gallery-items="...">
document.querySelectorAll("[data-gallery-open]").forEach(button => {
  const template = document.querySelector(`template[data-gallery-items="${button.dataset.galleryOpen}"]`);
  const list = [...template.content.querySelectorAll("img")].map(img => ({
    src: img.getAttribute("src"),
    caption: img.getAttribute("alt"),
  }));
  button.addEventListener("click", () => openGallery(list));
});
