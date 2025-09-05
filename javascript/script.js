// Hent top-baggrund
const topImage = document.querySelector('.top-image');

// Easing funktion for glidende effekt
function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

// Scroll-effekt
window.addEventListener('scroll', () => {
  const scrollY = window.scrollY;
  const maxScroll = 500;   // hvor langt man skal scrolle før overlay = 0
  const maxOpacity = 0.6;  // hvor kraftig overlay er i toppen

  // Normaliser scroll til 0–1
  let progress = Math.min(scrollY / maxScroll, 1);

  // Glidende easing
  let easedProgress = easeInOutCubic(progress);

  // Beregn opacity (falder når man scroller ned)
  let overlayOpacity = maxOpacity * (1 - easedProgress);

  // Opdater baggrund
  topImage.style.backgroundImage =
    `linear-gradient(to bottom, rgba(255,255,255,${overlayOpacity}), rgba(255,255,255,0)), url('../billeder/hjemmeside-baggrund-top1.png')`;
});
