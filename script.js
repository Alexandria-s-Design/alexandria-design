// ============================================
// ALEXANDRIA'S DESIGN - PROFESSIONAL WEBSITE
// JavaScript Interactivo
// ============================================

// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {

  // ============================================
  // NAVEGACIÓN MÓVIL
  // ============================================
  const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-menu a');

  // Toggle del menú móvil
  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');

      // Animar el icono hamburguesa
      this.classList.toggle('active');
    });
  }

  // Cerrar menú móvil al hacer clic en un enlace
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove('active');
        }
      }
    });
  });

  // Cerrar menú móvil al hacer clic fuera de él
  document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
      const isClickInsideNav = navMenu.contains(event.target);
      const isClickOnToggle = mobileMenuToggle && mobileMenuToggle.contains(event.target);

      if (!isClickInsideNav && !isClickOnToggle && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove('active');
        }
      }
    }
  });

  // ============================================
  // SMOOTH SCROLL
  // ============================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');

      // Ignorar enlaces que solo tienen "#"
      if (href === '#') {
        e.preventDefault();
        return;
      }

      const target = document.querySelector(href);

      if (target) {
        e.preventDefault();

        // Calcular la posición considerando la altura del navbar
        const navbarHeight = document.querySelector('.navbar')?.offsetHeight || 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // ============================================
  // NAVBAR AL HACER SCROLL
  // ============================================
  const navbar = document.querySelector('.navbar');
  let lastScrollTop = 0;
  const scrollThreshold = 100;

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Agregar sombra al navbar cuando se hace scroll
    if (scrollTop > 10) {
      navbar.style.boxShadow = '0 4px 6px -1px rgba(30, 58, 95, 0.1), 0 2px 4px -1px rgba(30, 58, 95, 0.06)';
    } else {
      navbar.style.boxShadow = '0 1px 2px 0 rgba(30, 58, 95, 0.05)';
    }
  });

  // ============================================
  // ANIMACIONES AL HACER SCROLL (Intersection Observer)
  // ============================================
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in-up');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Elementos a observar para animaciones
  const elementsToAnimate = document.querySelectorAll(`
    .sector-card,
    .servicio-card,
    .portfolio-card,
    .process-step,
    .team-member,
    .section-header
  `);

  elementsToAnimate.forEach(element => {
    observer.observe(element);
  });

  // ============================================
  // ESTADÍSTICAS ANIMADAS (Counter)
  // ============================================
  const stats = document.querySelectorAll('.stat-number');
  let statsAnimated = false;

  const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !statsAnimated) {
        statsAnimated = true;

        stats.forEach(stat => {
          const target = parseInt(stat.textContent);
          const duration = 2000; // 2 segundos
          const increment = target / (duration / 16); // 60fps
          let current = 0;

          const updateCounter = () => {
            current += increment;
            if (current < target) {
              stat.textContent = Math.floor(current);
              requestAnimationFrame(updateCounter);
            } else {
              stat.textContent = target;
            }
          };

          updateCounter();
        });
      }
    });
  }, { threshold: 0.5 });

  const featuredProject = document.querySelector('.featured-project');
  if (featuredProject) {
    statsObserver.observe(featuredProject);
  }

  // ============================================
  // INTERACCIÓN CON TARJETAS DE SECTORES
  // ============================================
  const sectorCards = document.querySelectorAll('.sector-card');

  sectorCards.forEach(card => {
    card.addEventListener('click', function() {
      // Remover clase activa de todas las tarjetas
      sectorCards.forEach(c => c.classList.remove('active'));

      // Agregar clase activa a la tarjeta clickeada
      this.classList.add('active');

      // Efecto de pulso
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = '';
      }, 200);
    });
  });

  // ============================================
  // INTERACCIÓN CON PROCESO METODOLOGÍA (ADDIE)
  // ============================================
  const processSteps = document.querySelectorAll('.process-step');

  processSteps.forEach((step, index) => {
    step.addEventListener('click', function() {
      // Remover clase activa de todos los pasos
      processSteps.forEach(s => s.classList.remove('active'));

      // Agregar clase activa al paso clickeado
      this.classList.add('active');

      // Efecto visual
      const circle = this.querySelector('.step-circle');
      circle.style.transform = 'scale(1.1)';
      setTimeout(() => {
        circle.style.transform = '';
      }, 300);

      // Log para debugging (remover en producción)
      console.log(`Step ${index + 1} clicked`);
    });
  });

  // ============================================
  // EFECTO PARALLAX SUAVE EN HERO
  // ============================================
  const hero = document.querySelector('.hero');

  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      const parallaxSpeed = 0.5;

      if (scrolled < hero.offsetHeight) {
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        hero.style.opacity = 1 - (scrolled / hero.offsetHeight);
      }
    });
  }

  // ============================================
  // TOOLTIPS PARA BADGES DE TRUST BAR
  // ============================================
  const trustBadges = document.querySelectorAll('.trust-badge');

  trustBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-3px)';
    });

    badge.addEventListener('mouseleave', function() {
      this.style.transform = '';
    });
  });

  // ============================================
  // FORMULARIO DE CONTACTO (Placeholder para futura implementación)
  // ============================================
  const ctaButtons = document.querySelectorAll('.hero-cta .btn, .cta-buttons .btn');

  ctaButtons.forEach(button => {
    button.addEventListener('click', function(e) {
      const text = this.textContent.trim();

      // Si el botón dice "Solicitar Consulta" o "Comenzar Proyecto"
      if (text.includes('Consulta') || text.includes('Proyecto')) {
        // Aquí se puede integrar un modal de contacto o redirigir a la sección de contacto
        console.log('CTA clicked:', text);

        // Efecto visual de feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
          this.style.transform = '';
        }, 200);
      }
    });
  });

  // ============================================
  // PORTFOLIO CARDS - EFECTO HOVER MEJORADO
  // ============================================
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  portfolioCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      const image = this.querySelector('.portfolio-image');
      if (image) {
        image.style.transform = 'scale(1.05)';
      }
    });

    card.addEventListener('mouseleave', function() {
      const image = this.querySelector('.portfolio-image');
      if (image) {
        image.style.transform = '';
      }
    });
  });

  // ============================================
  // LAZY LOADING DE IMÁGENES (para cuando se agreguen imágenes reales)
  // ============================================
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver(function(entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.classList.add('loaded');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => imageObserver.observe(img));
  }

  // ============================================
  // DETECCIÓN DE VIEWPORT PARA AJUSTES RESPONSIVE
  // ============================================
  let windowWidth = window.innerWidth;

  window.addEventListener('resize', function() {
    const newWidth = window.innerWidth;

    // Solo ejecutar si el tamaño realmente cambió (evitar resize en móviles por scroll)
    if (Math.abs(newWidth - windowWidth) > 50) {
      windowWidth = newWidth;

      // Cerrar menú móvil si se redimensiona a desktop
      if (windowWidth > 768 && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileMenuToggle) {
          mobileMenuToggle.classList.remove('active');
        }
      }
    }
  });

  // ============================================
  // ACCESIBILIDAD - MEJORAS DE TECLADO
  // ============================================

  // Permitir navegar con Enter en elementos clickeables
  const clickableElements = document.querySelectorAll('.sector-card, .process-step, .portfolio-card, .servicio-card');

  clickableElements.forEach(element => {
    element.setAttribute('tabindex', '0');

    element.addEventListener('keypress', function(e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.click();
      }
    });
  });

  // ============================================
  // INDICADOR DE SCROLL PROGRESS (Opcional)
  // ============================================
  const progressBar = document.createElement('div');
  progressBar.id = 'scroll-progress';
  progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #3182CE, #0694A2, #D97706);
    z-index: 9999;
    transition: width 0.1s ease-out;
  `;
  document.body.appendChild(progressBar);

  window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    progressBar.style.width = scrolled + '%';
  });

  // ============================================
  // CONSOLE LOG - INFORMACIÓN DEL PROTOTIPO
  // ============================================
  console.log('%c🎓 Alexandria\'s Design - Prototipo V2', 'color: #1E3A5F; font-size: 20px; font-weight: bold;');
  console.log('%cNueva Identidad Profesional Cargada ✓', 'color: #0694A2; font-size: 14px;');
  console.log('%cPaleta de Colores:', 'color: #3182CE; font-weight: bold;');
  console.log('  Academic Navy: #1E3A5F');
  console.log('  Instructional Blue: #3182CE');
  console.log('  Professional Teal: #0694A2');
  console.log('  Academic Amber: #D97706');
  console.log('%cTipografía: Poppins (Headings) + Inter (Body)', 'color: #D97706; font-weight: bold;');

  // ============================================
  // PERFORMANCE MONITORING (Desarrollo)
  // ============================================
  if (window.performance && window.performance.timing) {
    window.addEventListener('load', function() {
      const loadTime = window.performance.timing.domContentLoadedEventEnd - window.performance.timing.navigationStart;
      console.log(`%c⚡ Página cargada en ${loadTime}ms`, 'color: #059669; font-weight: bold;');
    });
  }

});

// ============================================
// EXPORTAR FUNCIONES GLOBALES (si es necesario)
// ============================================

// Función para abrir modal de contacto (implementar en el futuro)
window.openContactModal = function() {
  console.log('Contact modal would open here');
  // Implementar modal de contacto
};

// Función para filtrar portfolio por sector
window.filterPortfolio = function(sector) {
  console.log('Filtering portfolio by:', sector);
  // Implementar filtrado de portfolio
};

// Función para mostrar detalles de proyecto
window.showProjectDetails = function(projectId) {
  console.log('Showing project details for:', projectId);
  // Implementar modal de detalles de proyecto
};
