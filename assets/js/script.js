/* ═══════════════════════════════════════════════════════════
   MUNEEB PORTFOLIO — SCRIPTS
═══════════════════════════════════════════════════════════ */

"use strict";

/* ─── Loader ─── */
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    setTimeout(() => loader.classList.add("hidden"), 800);
  }
  initAll();
});

function initAll() {
  initCustomCursor();
  initNavbar();
  initTypingEffect();
  initParticleCanvas();
  initAOS();
  initSkillBars();
  initCounters();
  initProjectFilters();
  initTestimonialSlider();
  initContactForm();
  initBackToTop();
  initFooterYear();
  initProfileImages();
}

/* ─── Custom Cursor ─── */
function initCustomCursor() {
  const dot  = document.getElementById("cursorDot");
  const ring = document.getElementById("cursorRing");
  if (!dot || !ring) return;

  let mx = 0, my = 0;
  let rx = 0, ry = 0;

  document.addEventListener("mousemove", (e) => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.left  = mx + "px";
    dot.style.top   = my + "px";
  });

  function animateRing() {
    rx += (mx - rx) * 0.12;
    ry += (my - ry) * 0.12;
    ring.style.left = rx + "px";
    ring.style.top  = ry + "px";
    requestAnimationFrame(animateRing);
  }
  animateRing();

  // Scale on hover over interactive elements
  const interactives = document.querySelectorAll(
    "a, button, .project-card, .skill-category-card, .info-item, .tech-icon-item"
  );
  interactives.forEach((el) => {
    el.addEventListener("mouseenter", () => {
      dot.style.transform  = "translate(-50%,-50%) scale(2)";
      ring.style.transform = "translate(-50%,-50%) scale(1.5)";
      ring.style.borderColor = "rgba(124,58,237,0.8)";
    });
    el.addEventListener("mouseleave", () => {
      dot.style.transform  = "translate(-50%,-50%) scale(1)";
      ring.style.transform = "translate(-50%,-50%) scale(1)";
      ring.style.borderColor = "rgba(124,58,237,0.5)";
    });
  });
}

/* ─── Navbar ─── */
function initNavbar() {
  const navbar    = document.getElementById("navbar");
  const navToggle = document.getElementById("navToggle");
  const navLinks  = document.getElementById("navLinks");
  const links     = document.querySelectorAll(".nav-link");

  // Scroll state
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 60) {
          navbar.classList.add("scrolled");
        } else {
          navbar.classList.remove("scrolled");
        }
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  // Mobile toggle
  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
      const spans = navToggle.querySelectorAll("span");
      navLinks.classList.contains("open")
        ? animateBurger(spans, true)
        : animateBurger(spans, false);
    });
  }

  // Close nav on link click
  links.forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("open");
      animateBurger(navToggle.querySelectorAll("span"), false);
    });
  });

  function animateBurger(spans, open) {
    if (open) {
      spans[0].style.transform = "rotate(45deg) translate(5px,5px)";
      spans[1].style.opacity   = "0";
      spans[2].style.transform = "rotate(-45deg) translate(5px,-5px)";
    } else {
      spans[0].style.transform = "";
      spans[1].style.opacity   = "";
      spans[2].style.transform = "";
    }
  }

  // Active link on scroll
  function updateActiveLink() {
    const sections = document.querySelectorAll("section[id]");
    let current = "";
    sections.forEach((sec) => {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.getAttribute("id");
      }
    });
    links.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === "#" + current);
    });
  }
}

/* ─── Typing Effect ─── */
function initTypingEffect() {
  const el = document.getElementById("typedRoles");
  if (!el) return;

  const roles = [
    "Full-Stack Developer",
    "UI/UX Enthusiast",
    "Problem Solver",
    "Open Source Contributor",
    "Software Engineer",
  ];

  let roleIdx = 0;
  let charIdx = 0;
  let deleting = false;
  const typingSpeed  = 90;
  const deletingSpeed = 50;
  const pauseTime    = 1800;

  function type() {
    const currentRole = roles[roleIdx];
    if (!deleting) {
      el.textContent = currentRole.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === currentRole.length) {
        deleting = true;
        setTimeout(type, pauseTime);
        return;
      }
    } else {
      el.textContent = currentRole.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx  = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(type, deleting ? deletingSpeed : typingSpeed);
  }

  type();
}

/* ─── Particle Canvas ─── */
function initParticleCanvas() {
  const canvas = document.getElementById("particleCanvas");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");
  let W, H, particles;

  function resize() {
    W = canvas.width  = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  function createParticles() {
    const count = Math.floor((W * H) / 12000);
    particles = [];
    for (let i = 0; i < count; i++) {
      particles.push({
        x:  Math.random() * W,
        y:  Math.random() * H,
        r:  Math.random() * 1.5 + 0.5,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);

    // Connections
    particles.forEach((p, i) => {
      particles.slice(i + 1).forEach((q) => {
        const dx   = p.x - q.x;
        const dy   = p.y - q.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(124,58,237,${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth   = 0.5;
          ctx.stroke();
        }
      });
    });

    // Dots
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0 || p.x > W) p.vx *= -1;
      if (p.y < 0 || p.y > H) p.vy *= -1;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(167,139,250,${p.opacity})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  resize();
  createParticles();
  draw();

  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => { resize(); createParticles(); }, 200);
  });
}

/* ─── AOS (Animate On Scroll) — manual lightweight ─── */
function initAOS() {
  const elements = document.querySelectorAll("[data-aos]");
  const threshold = 0.15;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("aos-animate");
        }
      });
    },
    { threshold }
  );

  elements.forEach((el) => observer.observe(el));
}

/* ─── Skill Bars Animation ─── */
function initSkillBars() {
  const bars = document.querySelectorAll(".skill-bar-fill");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const bar = entry.target;
          const width = bar.getAttribute("data-width");
          bar.style.width = width + "%";
          bar.classList.add("animated");
          observer.unobserve(bar);
        }
      });
    },
    { threshold: 0.5 }
  );

  bars.forEach((bar) => observer.observe(bar));
}

/* ─── Counters ─── */
function initCounters() {
  const counters = document.querySelectorAll(".counter-num");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el     = entry.target;
          const target = parseInt(el.getAttribute("data-target"), 10);
          let current  = 0;
          const step   = Math.ceil(target / 40);
          const timer  = setInterval(() => {
            current += step;
            if (current >= target) {
              el.textContent = target;
              clearInterval(timer);
            } else {
              el.textContent = current;
            }
          }, 40);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.8 }
  );

  counters.forEach((el) => observer.observe(el));
}

/* ─── Project Filters ─── */
function initProjectFilters() {
  const filterBtns = document.querySelectorAll(".filter-btn");
  const cards      = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");

      cards.forEach((card) => {
        const category = card.getAttribute("data-category");
        const show     = filter === "all" || category === filter;
        card.style.transition = "opacity 0.3s ease, transform 0.3s ease";
        if (show) {
          card.classList.remove("hidden");
          card.style.opacity   = "1";
          card.style.transform = "scale(1)";
        } else {
          card.style.opacity   = "0";
          card.style.transform = "scale(0.9)";
          setTimeout(() => card.classList.add("hidden"), 300);
        }
      });
    });
  });
}

/* ─── Testimonial Slider ─── */
function initTestimonialSlider() {
  const track    = document.getElementById("testimonialTrack");
  const dots     = document.querySelectorAll(".testi-dot");
  const prevBtn  = document.getElementById("testiPrev");
  const nextBtn  = document.getElementById("testiNext");
  if (!track) return;

  let current = 0;
  const total = dots.length;
  let autoTimer;

  function goTo(idx) {
    current = (idx + total) % total;
    track.style.transform = `translateX(-${current * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle("active", i === current));
  }

  function startAuto() {
    autoTimer = setInterval(() => goTo(current + 1), 5000);
  }

  function stopAuto() {
    clearInterval(autoTimer);
  }

  prevBtn && prevBtn.addEventListener("click", () => { stopAuto(); goTo(current - 1); startAuto(); });
  nextBtn && nextBtn.addEventListener("click", () => { stopAuto(); goTo(current + 1); startAuto(); });
  dots.forEach((dot, i) =>
    dot.addEventListener("click", () => { stopAuto(); goTo(i); startAuto(); })
  );

  startAuto();
}

/* ─── Profile Image Error Handling ─── */
function initProfileImages() {
  const heroImg  = document.getElementById("heroProfileImg");
  const aboutImg = document.getElementById("aboutProfileImg");
  const heroPH   = document.getElementById("profilePlaceholderHero");
  const aboutPH  = document.getElementById("profilePlaceholderAbout");

  function handleImgError(img, placeholder) {
    if (!img || !placeholder) return;
    img.addEventListener("error", () => {
      img.style.display = "none";
      placeholder.style.display = "flex";
    });
    // If already broken (cached 404)
    if (img.complete && img.naturalWidth === 0) {
      img.style.display = "none";
      placeholder.style.display = "flex";
    }
  }

  handleImgError(heroImg, heroPH);
  handleImgError(aboutImg, aboutPH);
}

/* ─── Contact Form ─── */
function initContactForm() {
  const form    = document.getElementById("contactForm");
  const success = document.getElementById("formSuccess");
  if (!form) return;

  // Show inline validation error
  function showError(input, message) {
    let err = input.parentElement.querySelector(".field-error");
    if (!err) {
      err = document.createElement("span");
      err.className = "field-error";
      err.style.cssText =
        "display:block;font-size:0.75rem;color:#ef4444;margin-top:0.3rem;";
      input.parentElement.after(err);
    }
    err.textContent = message;
    input.style.borderColor = "#ef4444";
  }

  function clearError(input) {
    const wrapper = input.closest(".form-group");
    if (wrapper) {
      const err = wrapper.querySelector(".field-error");
      if (err) err.textContent = "";
    }
    input.style.borderColor = "";
  }

  function validateForm() {
    let valid = true;
    const fields = [
      { el: form.elements.name,    label: "Name",    minLen: 2 },
      { el: form.elements.email,   label: "Email",   email: true },
      { el: form.elements.subject, label: "Subject", minLen: 3 },
      { el: form.elements.message, label: "Message", minLen: 10 },
    ];

    fields.forEach(({ el, label, minLen, email }) => {
      clearError(el);
      const val = el.value.trim();
      if (!val) {
        showError(el, `${label} is required.`);
        valid = false;
      } else if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        showError(el, "Please enter a valid email address.");
        valid = false;
      } else if (minLen && val.length < minLen) {
        showError(el, `${label} must be at least ${minLen} characters.`);
        valid = false;
      }
    });

    return valid;
  }

  // Clear errors on input
  Array.from(form.elements).forEach((el) => {
    if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
      el.addEventListener("input", () => clearError(el));
    }
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const btn  = form.querySelector("button[type='submit'] span");
    const icon = form.querySelector("button[type='submit'] i");

    if (btn)  btn.textContent  = "Sending…";
    if (icon) icon.className   = "fa-solid fa-spinner fa-spin";

    // TODO: Replace the timeout below with a real API call (e.g., EmailJS,
    // Formspree, or a backend endpoint) to actually deliver the message.
    setTimeout(() => {
      form.reset();
      if (success) success.classList.add("visible");
      if (btn)  btn.textContent = "Send Message";
      if (icon) icon.className  = "fa-solid fa-paper-plane";
      setTimeout(() => success && success.classList.remove("visible"), 5000);
    }, 1500);
  });
}

/* ─── Back to Top ─── */
function initBackToTop() {
  const btn = document.getElementById("backToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400);
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ─── Footer Year ─── */
function initFooterYear() {
  const el = document.getElementById("year");
  if (el) el.textContent = new Date().getFullYear();
}
