window.addEventListener('scroll', function() {
  const scrollTop = window.scrollY;
  const maxScroll = document.body.scrollHeight - window.innerHeight;
  const progress = scrollTop / maxScroll;
  const minOpacity = 0;
  const maxOpacity = 0.6;
  const opacity = minOpacity + maxOpacity * progress;
  const bg = document.querySelector('.top-image');
  bg.style.setProperty('--bg-opacity', opacity);
});
