/* Mobile Dropdown Logic */
function toggleMobileDropdown(id) {
  document.getElementById(id).classList.toggle('open');
}

/* Theme Management */
const html = document.documentElement;
const themeBtn = document.getElementById('theme-toggle');
const iconSun = document.getElementById('icon-sun');
const iconMoon = document.getElementById('icon-moon');

function setTheme(t) {
  html.setAttribute('data-theme', t);
  localStorage.setItem('sbei-theme', t);
  if (t === 'light') { if(iconSun) iconSun.style.display = 'block'; if(iconMoon) iconMoon.style.display = 'none'; }
  else { if(iconSun) iconSun.style.display = 'none'; if(iconMoon) iconMoon.style.display = 'block'; }
}

const savedTheme = localStorage.getItem('sbei-theme') || 'dark';
setTheme(savedTheme);
if (themeBtn) {
  themeBtn.addEventListener('click', () => setTheme(html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
}

/* Navbar Scroll States */
const navbar = document.getElementById('navbar');
const backTop = document.getElementById('back-top');
window.addEventListener('scroll', () => {
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
  if (backTop) backTop.classList.toggle('visible', window.scrollY > 400);
}, { passive: true });

/* Mobile Drawer */
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
function closeMobile() { 
  if (mobileMenu) mobileMenu.classList.remove('open'); 
  if (hamburger) hamburger.setAttribute('aria-expanded', 'false'); 
}
if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    const open = mobileMenu.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open.toString());
  });
}

/* Scroll Observer Reveal */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
}, { threshold: 0.1 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

/* Hero Circuit Animation Trigger */
setTimeout(() => {
  document.querySelectorAll('.circuit-path').forEach(p => p.classList.add('animated'));
}, 400);

/* FAQ Accordion Controller */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* Form Feedback Simulation */
function submitForm() {
  const fname = document.getElementById('fname').value.trim();
  const email = document.getElementById('email').value.trim();
  if (!fname || !email) { alert('Please enter your name and email.'); return; }
  const btn = document.querySelector('.contact-form button');
  if (btn) {
    btn.textContent = '✓ Request Sent Successfully';
    btn.style.background = '#10B981';
    btn.disabled = true;
  }
}