/* ===== SCRIPT.JS ===== */

/* ----- Typed Text Effect ----- */
const typedEl = document.getElementById('typedText');
const phrases = [
  'Flutter Developer',
  'Mobile App Developer',
  'Cross-Platform Expert',
  'UI/UX Enthusiast',
];
let phraseIdx = 0, charIdx = 0, isDeleting = false;

function type() {
  const current = phrases[phraseIdx];
  typedEl.textContent = isDeleting
    ? current.slice(0, charIdx--)
    : current.slice(0, charIdx++);

  let delay = isDeleting ? 60 : 100;

  if (!isDeleting && charIdx === current.length + 1) {
    delay = 1800;
    isDeleting = true;
  } else if (isDeleting && charIdx < 0) {
    isDeleting = false;
    charIdx = 0;
    phraseIdx = (phraseIdx + 1) % phrases.length;
    delay = 400;
  }
  setTimeout(type, delay);
}
type();

/* ----- Navbar Scroll ----- */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
  updateActiveLink();
});

/* ----- Hamburger Menu ----- */
const hamburger = document.getElementById('hamburger');
const navLinks  = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  if (navLinks.classList.contains('open')) {
    spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
    spans[1].style.opacity   = '0';
    spans[2].style.transform = 'rotate(-45deg) translate(5px, -5px)';
  } else {
    spans.forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  }
});

// Close nav when a link is clicked
navLinks.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => { s.style.transform = ''; s.style.opacity = ''; });
  });
});

/* ----- Active Nav Link ----- */
const sections = document.querySelectorAll('section[id]');

function updateActiveLink() {
  const scrollY = window.scrollY + 100;
  sections.forEach(sec => {
    const top    = sec.offsetTop;
    const height = sec.offsetHeight;
    const id     = sec.getAttribute('id');
    const link   = document.querySelector(`.nav-link[href="#${id}"]`);
    if (link) {
      link.classList.toggle('active', scrollY >= top && scrollY < top + height);
    }
  });
}

/* ----- Intersection Observer: Scroll Animations ----- */
const observerOpts = { threshold: 0.15 };

// Timeline items
const timelineObserver = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, observerOpts);
document.querySelectorAll('.timeline-item').forEach(el => timelineObserver.observe(el));

// Skill bars
const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
document.querySelectorAll('.skills-column').forEach(col => skillObserver.observe(col));

/* ----- Counter Animation ----- */
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('.stat-number').forEach(el => {
        const target = +el.dataset.target;
        let current = 0;
        const step  = Math.ceil(target / 40);
        const interval = setInterval(() => {
          current = Math.min(current + step, target);
          el.textContent = current;
          if (current >= target) clearInterval(interval);
        }, 40);
      });
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });
const statsEl = document.querySelector('.about-stats');
if (statsEl) counterObserver.observe(statsEl);

/* ----- Hero Particles ----- */
const particleContainer = document.getElementById('particles');
if (particleContainer) {
  const count = 25;
  for (let i = 0; i < count; i++) {
    const p = document.createElement('div');
    p.classList.add('particle');
    p.style.left     = Math.random() * 100 + '%';
    p.style.width    = Math.random() * 3 + 2 + 'px';
    p.style.height   = p.style.width;
    p.style.opacity  = Math.random() * 0.5 + 0.1;
    p.style.animationDuration  = Math.random() * 15 + 10 + 's';
    p.style.animationDelay     = Math.random() * 10 + 's';
    // Alternate accent colors
    p.style.background = i % 2 === 0 ? '#6c63ff' : '#00d4ff';
    particleContainer.appendChild(p);
  }
}

/* ----- Contact Form ----- */
const form    = document.getElementById('contactForm');
const success = document.getElementById('formSuccess');

if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending…';

    // Simulate async send (replace with real endpoint / EmailJS / Formspree)
    setTimeout(() => {
      btn.disabled = false;
      btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
      form.reset();
      success.style.display = 'block';
      setTimeout(() => (success.style.display = 'none'), 5000);
    }, 1500);
  });
}

/* ----- Smooth scroll for all anchor links ----- */
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
