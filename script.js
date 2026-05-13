// NAV — sombreado no scrool
window.addEventListener('scroll', function () {
  var nav = document.getElementById('navbar');
  if (window.scrollY > 20) {
    nav.classList.add('scrolled');
  } else {
    nav.classList.remove('scrolled');
  }
});

// Menu mobile
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}
 
// Animação de entrada ao rolar
var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.1 });
 
document.querySelectorAll('.reveal').forEach(function (el) {
  observer.observe(el);
});
 
// Lightbox da galeria
function openLightbox(el) {
  var src = el.querySelector('img').src;
  document.getElementById('lb-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
  document.body.style.overflow = 'hidden';
}
 
function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
  document.body.style.overflow = '';
}
 
document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape') closeLightbox();
});