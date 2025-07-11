function scrollToSection(selector) {
  document.querySelector(selector).scrollIntoView({ behavior: 'smooth' });
}

// Optional: Add flash effect on button click
document.querySelectorAll('button.cta').forEach(btn => {
  btn.addEventListener('click', () => {
    const flash = document.createElement('div');
    flash.className = 'flash-effect';
    document.body.appendChild(flash);
    setTimeout(() => flash.remove(), 300);
  });
});
// --- Scroll animation for elements with .scroll-reveal ---
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      observer.unobserve(entry.target);
    }
  });
});

document.querySelectorAll('.scroll-reveal').forEach(el => {
  observer.observe(el);
});
