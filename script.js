const footerYear = document.querySelector("#footer-year");
if (footerYear) {
  footerYear.textContent = `© ${new Date().getFullYear()} Arina Zhou`;
}

const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 }
);

revealEls.forEach(el => observer.observe(el));

// Smooth anchor scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", e => {
    const id = link.getAttribute("href");
    if (!id || id === "#") return;
    const target = document.querySelector(id);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

// Tiny bird follows scroll progress across the bottom edge
const bird = document.querySelector(".scroll-bird");

function updateBird() {
  if (!bird) return;

  const scrollable = document.documentElement.scrollHeight - window.innerHeight;
  const progress = scrollable > 0 ? window.scrollY / scrollable : 0;
  const usableWidth = Math.max(window.innerWidth - 100, 0);

  bird.style.transform =
    `translateX(${progress * usableWidth}px) translateY(${Math.sin(progress * 12) * 5}px) rotate(${progress * 8 - 4}deg)`;
}

window.addEventListener("scroll", updateBird, { passive: true });
window.addEventListener("resize", updateBird);
updateBird();