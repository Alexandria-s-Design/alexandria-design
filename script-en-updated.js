// ============================================
// ALEXANDRIA'S DESIGN - ENHANCED INTERACTIVE WEBSITE
// All New Features Implemented
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // Import all base functionality from script-en.js
  // Additional features below

  // ============================================
  // SECTOR CARDS - CLICKABLE WITH INFO MODAL
  // ============================================
  const sectorInfo = {
    government: {
      title: 'Federal Government / DoD',
      description: 'We specialize in delivering DFARS-compliant training solutions and ITAR-ready materials for federal agencies and Department of Defense contractors.',
      services: [
        'DFARS-compliant training development',
        'ITAR-ready educational materials',
        'Section 508 accessibility compliance',
        'Secure content delivery systems',
        'Federal acquisition regulations training',
        'Cybersecurity awareness programs'
      ],
      standards: ['SCORM 2004', 'Section 508', 'DFARS', 'ITAR'],
      cta: 'Request Federal Contract Information'
    },
    health: {
      title: 'Public Health',
      description: 'Bilingual healthcare training programs designed for medical professionals, with emphasis on cultural relevance and trauma-informed care approaches.',
      services: [
        'Bilingual medical training (EN/ES)',
        'ACEs and trauma-informed care',
        'Medi-Cal provider education',
        'Community health worker training',
        'Patient education materials',
        'Burnout prevention programs'
      ],
      standards: ['WCAG 2.1 AA', 'Bilingual', 'Evidence-Based'],
      cta: 'Explore Healthcare Solutions'
    },
    k12: {
      title: 'K-12 Education',
      description: 'Standards-aligned curriculum development and teacher professional development programs that integrate adaptive learning technologies.',
      services: [
        'NGSS and Common Core alignment',
        'Teacher professional development',
        'Interactive digital curriculum',
        'Assessment design and rubrics',
        'Adaptive learning platforms',
        'Student engagement strategies'
      ],
      standards: ['NGSS', 'Common Core', 'UDL', 'WCAG 2.1 AA'],
      cta: 'View K-12 Solutions'
    },
    higher: {
      title: 'Higher Education',
      description: 'Comprehensive online course design, custom LMS implementation, and professional training programs for universities and colleges.',
      services: [
        'Online course design and development',
        'Custom LMS implementation',
        'Faculty training and support',
        'Quality Matters certification support',
        'Hybrid and HyFlex course design',
        'Student success initiatives'
      ],
      standards: ['Quality Matters', 'SCORM', 'xAPI', 'WCAG 2.1 AA'],
      cta: 'Discover Higher Ed Programs'
    },
    corporate: {
      title: 'Corporate Training',
      description: 'Modern corporate learning solutions featuring gamification, microlearning, and mobile-responsive designs for maximum engagement and retention.',
      services: [
        'Employee onboarding programs',
        'Compliance and ethics training',
        'Leadership development',
        'Sales enablement training',
        'Microlearning and mobile learning',
        'Gamification and simulations'
      ],
      standards: ['SCORM 2004', 'xAPI', 'Mobile-First', 'Gamification'],
      cta: 'Explore Corporate Training'
    }
  };

  // Add click handlers to sector cards
  document.querySelectorAll('.sector-card').forEach((card, index) => {
    const sectors = ['government', 'health', 'k12', 'higher', 'corporate'];
    const sectorKey = sectors[index];

    card.classList.add('clickable');
    card.setAttribute('data-sector', sectorKey);
    card.style.cursor = 'pointer';

    card.addEventListener('click', function() {
      showSectorModal(sectorKey);
    });
  });

  function showSectorModal(sectorKey) {
    const sector = sectorInfo[sectorKey];
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    const content = `
      <div class="modal-project-header">
        <h2>${sector.title}</h2>
        <p style="color: #3182CE; font-size: 1.125rem; margin-bottom: 1rem;">Specialized Solutions</p>
      </div>

      <div class="modal-section">
        <h3>Overview</h3>
        <p>${sector.description}</p>
      </div>

      <div class="modal-section">
        <h3>Our Services</h3>
        <ul style="list-style: none; padding: 0;">
          ${sector.services.map(service => `
            <li style="padding: 0.5rem 0; display: flex; align-items: start; gap: 0.5rem;">
              <span style="color: #059669; font-weight: bold;">✓</span>
              <span>${service}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Standards & Compliance</h3>
        <div class="modal-tags">
          ${sector.standards.map(standard => `
            <span class="modal-tag">${standard}</span>
          `).join('')}
        </div>
      </div>

      <div style="margin-top: 2rem; text-align: center;">
        <a href="#contact" class="btn btn-white" onclick="document.getElementById('project-modal').classList.remove('active')">${sector.cta}</a>
      </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ============================================
  // ADDIE METHODOLOGY - INTERACTIVE TOOLTIPS
  // ============================================
  const addieInfo = {
    analyze: {
      title: 'Analyze',
      description: 'Comprehensive needs assessment and learner analysis to identify performance gaps and learning objectives.',
      activities: [
        'Conduct stakeholder interviews',
        'Analyze target audience characteristics',
        'Identify performance gaps',
        'Define learning objectives',
        'Assess constraints and resources'
      ]
    },
    design: {
      title: 'Design',
      description: 'Strategic planning of learning experiences, assessment strategies, and instructional approaches.',
      activities: [
        'Develop learning objectives',
        'Design assessment strategy',
        'Create instructional strategy',
        'Develop content outline',
        'Plan multimedia elements'
      ]
    },
    develop: {
      title: 'Develop',
      description: 'Creation of all learning materials, multimedia assets, and interactive components.',
      activities: [
        'Develop course content',
        'Create multimedia assets',
        'Build interactive elements',
        'Implement in authoring tools',
        'Conduct internal review'
      ]
    },
    implement: {
      title: 'Implement',
      description: 'Deployment of learning solution with trainer support and learner access.',
      activities: [
        'Deploy to LMS platform',
        'Conduct pilot testing',
        'Train facilitators',
        'Launch to learners',
        'Provide technical support'
      ]
    },
    evaluate: {
      title: 'Evaluate',
      description: 'Measurement of learning outcomes and continuous improvement based on data and feedback.',
      activities: [
        'Collect learner feedback',
        'Analyze completion rates',
        'Measure learning outcomes',
        'Assess ROI and impact',
        'Implement improvements'
      ]
    }
  };

  document.querySelectorAll('.process-step').forEach((step, index) => {
    const phases = ['analyze', 'design', 'develop', 'implement', 'evaluate'];
    const phaseKey = phases[index];

    step.classList.add('has-tooltip');
    step.style.cursor = 'pointer';

    // Create tooltip element
    const tooltip = document.createElement('div');
    tooltip.className = 'addie-tooltip';
    tooltip.innerHTML = `
      <h4>${addieInfo[phaseKey].title}</h4>
      <p>${addieInfo[phaseKey].description}</p>
      <ul>
        ${addieInfo[phaseKey].activities.slice(0, 3).map(activity => `<li>• ${activity}</li>`).join('')}
      </ul>
    `;
    step.appendChild(tooltip);

    step.addEventListener('click', function() {
      // Show full modal with all details
      showAddieModal(phaseKey);
    });

    step.addEventListener('mouseenter', function() {
      tooltip.style.display = 'block';
    });

    step.addEventListener('mouseleave', function() {
      tooltip.style.display = 'none';
    });
  });

  function showAddieModal(phaseKey) {
    const phase = addieInfo[phaseKey];
    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    const content = `
      <div class="modal-project-header">
        <h2>ADDIE Phase: ${phase.title}</h2>
        <p style="color: #3182CE; font-size: 1.125rem;">Evidence-Based Instructional Design</p>
      </div>

      <div class="modal-section">
        <h3>Phase Description</h3>
        <p>${phase.description}</p>
      </div>

      <div class="modal-section">
        <h3>Key Activities</h3>
        <div class="modal-features-grid">
          ${phase.activities.map((activity, idx) => `
            <div class="modal-feature-card">
              <h4>Step ${idx + 1}</h4>
              <p>${activity}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <div style="margin-top: 2rem; text-align: center;">
        <a href="#contact" class="btn btn-white" onclick="document.getElementById('project-modal').classList.remove('active')">Discuss Your Project</a>
      </div>
    `;

    modalBody.innerHTML = content;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ============================================
  // LOGO CLICKABLE - ZOOM EFFECT
  // ============================================
  const logoClickable = document.getElementById('logo-clickable');
  const logoModal = document.createElement('div');
  logoModal.id = 'logo-modal';
  logoModal.className = 'logo-zoom-modal';
  logoModal.innerHTML = `
    <div class="logo-zoom-content">
      <button class="logo-zoom-close">&times;</button>
      <img src="../Información Recopilada/Logotipo 2.png" alt="Alexandria's Design Logo - Full View" />
      <div class="logo-zoom-info">
        <h3>Alexandria's Design</h3>
        <p>Innovate • Educate • Create</p>
        <p class="logo-description">Expert instructional design and eLearning development for government, healthcare, education, and corporate sectors.</p>
      </div>
    </div>
  `;
  document.body.appendChild(logoModal);

  if (logoClickable) {
    logoClickable.addEventListener('click', function(e) {
      e.preventDefault();
      logoModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  logoModal.querySelector('.logo-zoom-close').addEventListener('click', function() {
    logoModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  logoModal.addEventListener('click', function(e) {
    if (e.target === logoModal) {
      logoModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ============================================
  // CONTACT FORM MODAL FOR CTAs
  // ============================================
  const contactModal = document.createElement('div');
  contactModal.id = 'contact-modal';
  contactModal.className = 'modal';
  contactModal.innerHTML = `
    <div class="modal-content">
      <button class="modal-close" aria-label="Close">&times;</button>
      <div id="contact-modal-body">
        <h2>Get Started with Alexandria's Design</h2>
        <p style="margin-bottom: 2rem; color: #4B5563;">Fill out the form below and we'll get back to you within 24 hours.</p>

        <form id="contact-form" class="contact-form">
          <div class="form-group">
            <label for="contact-name">Full Name *</label>
            <input type="text" id="contact-name" name="name" required />
          </div>

          <div class="form-group">
            <label for="contact-email">Email Address *</label>
            <input type="email" id="contact-email" name="email" required />
          </div>

          <div class="form-group">
            <label for="contact-phone">Phone Number</label>
            <input type="tel" id="contact-phone" name="phone" placeholder="(323) 632-0271" />
          </div>

          <div class="form-group">
            <label for="contact-organization">Organization</label>
            <input type="text" id="contact-organization" name="organization" />
          </div>

          <div class="form-group">
            <label for="contact-sector">Sector *</label>
            <select id="contact-sector" name="sector" required>
              <option value="">Select your sector...</option>
              <option value="government">Federal Government / DoD</option>
              <option value="health">Public Health</option>
              <option value="k12">K-12 Education</option>
              <option value="higher">Higher Education</option>
              <option value="corporate">Corporate Training</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="contact-service">Service Interest *</label>
            <select id="contact-service" name="service" required>
              <option value="">What service are you interested in?</option>
              <option value="instructional-design">Instructional Design</option>
              <option value="elearning">eLearning Development</option>
              <option value="bilingual">Bilingual Training</option>
              <option value="multimedia">Multimedia Production</option>
              <option value="lms">LMS Consulting</option>
              <option value="testing">Testing & Compliance</option>
              <option value="consultation">General Consultation</option>
            </select>
          </div>

          <div class="form-group">
            <label for="contact-message">Project Details *</label>
            <textarea id="contact-message" name="message" rows="5" required placeholder="Tell us about your project, timeline, and any specific requirements..."></textarea>
          </div>

          <div class="form-group">
            <label>
              <input type="checkbox" name="newsletter" />
              Subscribe to our newsletter for eLearning insights
            </label>
          </div>

          <button type="submit" class="btn btn-white btn-large">Submit Request</button>

          <p style="margin-top: 1rem; font-size: 0.875rem; color: #6B7280;">
            Or call us directly: <a href="tel:+13236320271" style="color: #3182CE; font-weight: 600;">(323) 632-0271</a>
          </p>
        </form>
      </div>
    </div>
  `;
  document.body.appendChild(contactModal);

  // Handle contact form submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your interest! We\'ll contact you within 24 hours.\n\nFor immediate assistance, call (323) 632-0271');
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
    this.reset();
  });

  // Contact modal close handlers
  contactModal.querySelector('.modal-close').addEventListener('click', function() {
    contactModal.classList.remove('active');
    document.body.style.overflow = '';
  });

  contactModal.addEventListener('click', function(e) {
    if (e.target === contactModal) {
      contactModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // Connect all CTA buttons to contact modal
  document.querySelectorAll('a[href="#contact"]:not(.modal-content a)').forEach(button => {
    button.addEventListener('click', function(e) {
      e.preventDefault();
      contactModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // ============================================
  // CONSOLE WELCOME
  // ============================================
  console.log('%c🎓 Alexandria\'s Design - Enhanced Version', 'color: #1E3A5F; font-size: 20px; font-weight: bold;');
  console.log('%cNew Features Active:', 'color: #3182CE; font-size: 14px; font-weight: bold;');
  console.log('  ✓ Interactive Sector Cards');
  console.log('  ✓ ADDIE Methodology Tooltips');
  console.log('  ✓ Clickable Logo with Zoom');
  console.log('  ✓ Contact Form Modal');
  console.log('  ✓ Phone: (323) 632-0271');

});
