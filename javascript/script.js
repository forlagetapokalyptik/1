const topImage = document.querySelector('.top-image');
const computedStyle = window.getComputedStyle(topImage);
const originalBackgroundImage = computedStyle.backgroundImage;

function easeInOutCubic(t) {
  return t < 0.5
    ? 4 * t * t * t
    : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function updateOverlay() {
  const scrollY = window.scrollY;
  const maxScroll = 500;   // hvor langt man skal scrolle før overlay = 0
  const maxOpacity = 0.85; // hvor kraftig overlay er i toppen (prøv 0.8-0.9)

  let progress = Math.min(scrollY / maxScroll, 1);
  let easedProgress = easeInOutCubic(progress);
  let overlayOpacity = maxOpacity * (1 - easedProgress);

  topImage.style.backgroundImage =
    `linear-gradient(to bottom, rgba(255,255,255,${overlayOpacity}), rgba(255,255,255,0)), ${originalBackgroundImage}`;
}

// Kør én gang med det samme (så det virker fra start)
updateOverlay();

// Kør hver gang man scroller
window.addEventListener('scroll', updateOverlay);
