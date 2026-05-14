/* ============================================================
   components.js — Header, Footer, Shared UI
   ============================================================ */

const IMG_BASE = 'https://keithassociatesug.com/lechwesafari.com/wp-content/uploads/2026/05/';
const LOGO = IMG_BASE + 'logo-web.png';
const WA_NUMBER = '+256760288509';

function getRelPath(depth = 0) {
  return depth === 0 ? '' : '../'.repeat(depth);
}

function renderHeader(depth = 0) {
  const r = getRelPath(depth);
  document.getElementById('header-placeholder').innerHTML = `
<nav class="nav" id="mainNav">
  <div class="container">
    <div class="nav-inner">
      <a href="${r}index.html" class="nav-logo">
        <img src="${LOGO}" alt="Lechwe Safari">
      </a>
      <ul class="nav-links">
        <li><a href="${r}index.html">Home</a></li>
        <li><a href="${r}about.html">About Us</a></li>
        <li class="nav-dropdown">
          <a href="#">Africa Safaris &amp; Tours</a>
          <ul class="dropdown-menu">
            <li><a href="${r}uganda-safaris.html">🇺🇬 Uganda Safaris</a></li>
            <li><a href="${r}rwanda-safaris.html">🇷🇼 Rwanda Safaris</a></li>
            <li><a href="${r}kenya-safaris.html">🇰🇪 Kenya Safaris</a></li>
            <li><a href="${r}tanzania-safaris.html">🇹🇿 Tanzania Safaris</a></li>
          </ul>
        </li>
        <li><a href="${r}blog.html">Travel Blog</a></li>
        <li><a href="${r}contact.html" class="nav-cta btn btn-gold">Book Now</a></li>
      </ul>
      <div class="hamburger" id="hamburger" onclick="toggleMobileMenu()">
        <span></span><span></span><span></span>
      </div>
    </div>
  </div>
</nav>
<div class="mobile-menu" id="mobileMenu">
  <a href="${r}index.html">Home</a>
  <div class="mob-section">Africa Safaris &amp; Tours</div>
  <a href="${r}uganda-safaris.html" class="sub-link">🇺🇬 Uganda Safaris</a>
  <a href="${r}rwanda-safaris.html" class="sub-link">🇷🇼 Rwanda Safaris</a>
  <a href="${r}kenya-safaris.html" class="sub-link">🇰🇪 Kenya Safaris</a>
  <a href="${r}tanzania-safaris.html" class="sub-link">🇹🇿 Tanzania Safaris</a>
  <a href="${r}about.html">About Us</a>
  <a href="${r}blog.html">Travel Blog</a>
  <a href="${r}contact.html" style="color:var(--gold);font-weight:700;">Book Now ›</a>
</div>`;
}

function renderFooter(depth = 0) {
  const r = getRelPath(depth);
  document.getElementById('footer-placeholder').innerHTML = `
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${LOGO}" alt="Lechwe Safari">
        <p>Lechwe Safari is a professional safari and travel company dedicated to creating unforgettable wildlife, adventure, and cultural experiences across East Africa.</p>
      </div>
      <div>
        <h4>Quick Links</h4>
        <ul>
          <li><a href="${r}index.html">Home</a></li>
          <li><a href="${r}about.html">About Us</a></li>
          <li><a href="${r}contact.html">Book Now</a></li>
          <li><a href="${r}blog.html">Travel Blog</a></li>
        </ul>
      </div>
      <div>
        <h4>Our Destinations</h4>
        <ul>
          <li><a href="${r}uganda-safaris.html">Uganda Safaris</a></li>
          <li><a href="${r}rwanda-safaris.html">Rwanda Safaris</a></li>
          <li><a href="${r}kenya-safaris.html">Kenya Safaris</a></li>
          <li><a href="${r}tanzania-safaris.html">Tanzania Safaris</a></li>
        </ul>
      </div>
      <div>
        <h4>Contact Us</h4>
        <ul>
          <li style="font-size:0.9rem;margin-bottom:0.5rem;">📍 Kampala, Uganda</li>
          <li style="font-size:0.9rem;margin-bottom:0.5rem;">📧 TBD</li>
          <li style="font-size:0.9rem;margin-bottom:0.5rem;">📞 +256 760 288509</li>
          <li style="font-size:0.9rem;">💬 WhatsApp Available</li>
        </ul>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="footer-bottom">
      <p>© ${new Date().getFullYear()} Lechwe Safari. All rights reserved. | Kampala, Uganda</p>
      <div class="footer-social">
        <a href="#" class="social-link" title="Facebook">f</a>
        <a href="#" class="social-link" title="Instagram">in</a>
        <a href="#" class="social-link" title="Twitter">X</a>
      </div>
    </div>
  </div>
</footer>`;
}

function renderWhatsApp() {
  document.body.insertAdjacentHTML('beforeend', `
    <a href="https://wa.me/${WA_NUMBER}?text=Hello%20Lechwe%20Safari!%20I%27m%20interested%20in%20booking%20a%20safari."
       class="whatsapp-float" target="_blank" rel="noopener" title="Chat on WhatsApp">
      <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
    <button class="back-top" id="backTop" onclick="window.scrollTo({top:0,behavior:'smooth'})" title="Back to top">↑</button>
  `);
}

function toggleMobileMenu() {
  document.getElementById('hamburger').classList.toggle('open');
  document.getElementById('mobileMenu').classList.toggle('open');
  document.body.style.overflow = document.getElementById('mobileMenu').classList.contains('open') ? 'hidden' : '';
}

function initNav() {
  const nav = document.getElementById('mainNav');
  const backTop = document.getElementById('backTop');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
    backTop?.classList.toggle('visible', window.scrollY > 400);
  });
}

function initPage(depth = 0) {
  renderHeader(depth);
  renderFooter(depth);
  renderWhatsApp();
  initNav();
}
