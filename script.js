/* ============================================================
   PORTFOLIO — ANNE-CÉCILE LE DAIN
   script.js — Navigation + interactions minimales
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* --- Navigation sticky avec background au scroll --- */
  const nav = document.querySelector('nav');
  if (nav) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });
  }

  /* --- Menu hamburger mobile --- */
  const toggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      const isOpen = navLinks.classList.contains('open');
      toggle.setAttribute('aria-expanded', isOpen);
    });

    // Fermer le menu quand on clique sur un lien
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navLinks.classList.remove('open');
        toggle.setAttribute('aria-expanded', false);
      });
    });
  }

  /* --- Smooth scroll sur les ancres internes --- */
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        const navHeight = nav ? nav.offsetHeight : 0;
        const top = target.getBoundingClientRect().top + window.scrollY - navHeight - 20;
        window.scrollTo({ top: top, behavior: 'smooth' });
      }
    });
  });

  /* --- Animation d'apparition au scroll (Intersection Observer) --- */
  const animElements = document.querySelectorAll(
    '.skill-card, .projet-card, .etude-section, .chiffre-item, .contact-lien, .avis-card'
  );

  if (animElements.length > 0 && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    animElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      observer.observe(el);
    });
  }

  /* --- Lightbox pour les images de projet --- */
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox-overlay';
  lightbox.setAttribute('role', 'dialog');
  lightbox.setAttribute('aria-modal', 'true');
  lightbox.setAttribute('aria-label', 'Image agrandie');

  const lightboxClose = document.createElement('button');
  lightboxClose.className = 'lightbox-close';
  lightboxClose.setAttribute('aria-label', 'Fermer');
  lightboxClose.innerHTML = '✕';

  const lightboxImg = document.createElement('img');
  lightboxImg.alt = '';

  lightbox.appendChild(lightboxClose);
  lightbox.appendChild(lightboxImg);
  document.body.appendChild(lightbox);

  function openLightbox(src, alt) {
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    document.body.style.overflow = 'hidden';
    lightbox.style.display = 'flex';
    lightbox.offsetHeight; // force reflow
    lightbox.classList.add('visible');
  }

  function closeLightbox() {
    lightbox.classList.remove('visible');
    document.body.style.overflow = '';
    setTimeout(function () {
      lightbox.style.display = 'none';
      lightboxImg.src = '';
    }, 250);
  }

  // Ouvrir au clic sur une image dans .visuel-projet
  document.querySelectorAll('.visuel-projet img').forEach(function (img) {
    img.addEventListener('click', function () {
      openLightbox(this.src, this.alt);
    });
  });

  // Fermer via le bouton ✕
  lightboxClose.addEventListener('click', function (e) {
    e.stopPropagation();
    closeLightbox();
  });

  // Fermer en cliquant sur le fond
  lightbox.addEventListener('click', function (e) {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  // Fermer avec la touche Échap
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && lightbox.classList.contains('visible')) {
      closeLightbox();
    }
  });

});
