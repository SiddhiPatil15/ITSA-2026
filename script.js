/* ==========================================================================
   ITSA COMMUNITY WEBSITE - INTERACTIVE PARTICLES & SCRIPT ENGINE
   ========================================================================== */

(function() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let width, height;
  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resize);
  resize();

  const particles = [];
  const sparks = [];
  const colors = ['#FF9933', '#FFFFFF', '#138808', '#38BDF8'];

  // Ambient Embers Generation
  const particleCount = Math.min(Math.floor(window.innerWidth / 25), 45);
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 0.4,
      vy: -Math.random() * 0.6 - 0.2,
      alpha: Math.random() * 0.5 + 0.2
    });
  }

  // Interactive Cursor Spark Trail Listener
  window.addEventListener('mousemove', (e) => {
    if (Math.random() > 0.4) {
      sparks.push({
        x: e.clientX,
        y: e.clientY + (Math.random() * 10 - 5),
        radius: Math.random() * 2.5 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5 - 0.5,
        alpha: 0.85
      });
    }

    // Dynamic Card Mouse Spotlight Coordinates
    document.querySelectorAll('.teamCircle, .outerCard, .point, .indy-box, .contact-content').forEach(card => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // 60fps Render Loop
  function animate() {
    ctx.clearRect(0, 0, width, height);

    // Render Ambient Embers
    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.y < 0) p.y = height;
      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color;
      ctx.globalAlpha = p.alpha;
      ctx.shadowBlur = 10;
      ctx.shadowColor = p.color;
      ctx.fill();
    });

    // Render Cursor Sparks
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.x += s.vx;
      s.y += s.vy;
      s.alpha -= 0.025;
      s.radius *= 0.96;

      if (s.alpha <= 0 || s.radius <= 0.2) {
        sparks.splice(i, 1);
        continue;
      }

      ctx.beginPath();
      ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
      ctx.fillStyle = s.color;
      ctx.globalAlpha = Math.max(0, s.alpha);
      ctx.shadowBlur = 12;
      ctx.shadowColor = s.color;
      ctx.fill();
    }

    ctx.globalAlpha = 1;
    ctx.shadowBlur = 0;
    requestAnimationFrame(animate);
  }
  animate();
})();

// Mobile Navbar Toggle & Click Outside Handler
const menuToggle = document.getElementById('menu-toggle');
const navlinks = document.getElementById('navlinks');
if (menuToggle && navlinks) {
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation();
    navlinks.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!navlinks.contains(e.target) && !menuToggle.contains(e.target)) {
      navlinks.classList.remove('active');
    }
  });

  document.querySelectorAll('.navl').forEach(link => {
    link.addEventListener('click', () => {
      navlinks.classList.remove('active');
    });
  });
}

// Scroll Reveal Observer
const observerOptions = { threshold: 0.12, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));