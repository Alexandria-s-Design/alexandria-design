// ============================================
// ALEXANDRIA'S DESIGN - ENHANCED INTERACTIVE WEBSITE
// English Version with Project Modals
// ============================================

document.addEventListener('DOMContentLoaded', function() {

  // Import base functionality from script.js
  // This script adds enhanced modal functionality

  // ============================================
  // PROJECT DATA WITH FULL DETAILS
  // ============================================
  const projectData = {
    'aces-aware': {
      title: 'Becoming ACEs Aware in California',
      client: 'California Department of Public Health',
      description: 'Comprehensive bilingual training program for healthcare professionals on Adverse Childhood Experiences (ACEs). Designed for Medi-Cal teams and community organizations across California.',
      challenge: 'Create a culturally sensitive, bilingual training program that healthcare professionals could complete at their own pace while maintaining engagement and meeting strict accessibility requirements.',
      solution: 'Developed a 7-lesson interactive course using Articulate Rise for responsive lessons and Storyline for complex interactive modules. Implemented custom navigation, culturally relevant imagery, and professional Spanish translations.',
      results: [
        'Deployed statewide across California',
        'Over 2,500 physicians successfully trained',
        '100% WCAG 2.1 AA accessibility compliance',
        'Positive feedback from California Department of Public Health',
        'Recognized as model for bilingual healthcare training'
      ],
      features: [
        {
          title: 'Bilingual Development',
          items: [
            'Full English and Spanish versions',
            'Professional translation and localization',
            'Culturally relevant content and imagery',
            'Native speaker voiceovers'
          ]
        },
        {
          title: 'Interactive Design',
          items: [
            '7 responsive lessons in Articulate Rise',
            'Custom interactive module with icon navigation',
            'Knowledge checks and assessments',
            'Downloadable resources and job aids'
          ]
        },
        {
          title: 'Technical Excellence',
          items: [
            'SCORM 1.2 and 2004 compliant',
            'Mobile-responsive design',
            'LMS integration ready',
            'Cross-browser compatibility'
          ]
        },
        {
          title: 'Accessibility',
          items: [
            'WCAG 2.1 AA compliant',
            'Screen reader compatible',
            'Keyboard navigation support',
            'High contrast color options'
          ]
        }
      ],
      technologies: ['Articulate Rise 360', 'Articulate Storyline 360', 'SCORM 2004', 'Professional Translation', 'Custom Graphics'],
      image: '📊'
    },
    'bua': {
      title: 'Baptist University of the Americas',
      client: 'Baptist University of the Americas',
      description: 'Comprehensive online learning platform for university students featuring custom LMS integration, interactive course modules, and multimedia resources.',
      challenge: 'Transform traditional classroom content into engaging online courses while maintaining academic rigor and providing seamless LMS integration for university administration.',
      solution: 'Developed a complete eLearning platform using Articulate Storyline for interactive modules, integrated with custom LMS for tracking and reporting, and created multimedia resources aligned with university standards.',
      results: [
        'Successfully launched 15+ online courses',
        'Increased student engagement by 35%',
        'Improved course completion rates by 28%',
        'Positive faculty feedback on ease of use',
        'Seamless LMS integration with minimal technical support needed'
      ],
      features: [
        {
          title: 'Course Development',
          items: [
            'Interactive Storyline modules',
            'Video lectures with synchronized transcripts',
            'Quizzes and assessments',
            'Discussion forum integration'
          ]
        },
        {
          title: 'LMS Integration',
          items: [
            'Custom gradebook integration',
            'Student progress tracking',
            'Automated reporting dashboards',
            'Single sign-on (SSO) capability'
          ]
        },
        {
          title: 'Multimedia Resources',
          items: [
            'Professional video production',
            'Animated concept explanations',
            'Interactive infographics',
            'Downloadable study materials'
          ]
        },
        {
          title: 'Student Support',
          items: [
            'Mobile-friendly access',
            '24/7 course availability',
            'Offline resource downloads',
            'Multilingual support options'
          ]
        }
      ],
      technologies: ['Articulate Storyline 360', 'Custom LMS', 'Video Production', 'SCORM 2004', 'Responsive Design'],
      image: '🏛️'
    },
    'knoxville': {
      title: 'Knoxville College Professional Development',
      client: 'Knoxville College',
      description: 'Faculty training program and curriculum development featuring multimedia resources, standards-aligned instruction, and comprehensive professional development modules.',
      challenge: 'Provide effective professional development for faculty members with varying levels of technical expertise while ensuring alignment with updated educational standards.',
      solution: 'Created a series of self-paced training modules using Articulate Rise 360, incorporating video demonstrations, interactive scenarios, and downloadable templates for immediate classroom application.',
      results: [
        '95% faculty completion rate',
        'Significant improvement in technology integration',
        'Increased use of active learning strategies',
        'Positive impact on student learning outcomes',
        'Model adopted by other institutions'
      ],
      features: [
        {
          title: 'Faculty Training',
          items: [
            'Self-paced learning modules',
            'Video tutorials and demonstrations',
            'Interactive practice scenarios',
            'Peer collaboration tools'
          ]
        },
        {
          title: 'Curriculum Resources',
          items: [
            'Standards-aligned lesson templates',
            'Assessment rubrics and tools',
            'Multimedia content library',
            'Best practices guide'
          ]
        },
        {
          title: 'Technology Integration',
          items: [
            'LMS training and support',
            'Educational technology tools',
            'Digital assessment strategies',
            'Online collaboration platforms'
          ]
        },
        {
          title: 'Ongoing Support',
          items: [
            'Regular webinar series',
            'Resource library updates',
            'One-on-one coaching available',
            'Community of practice forum'
          ]
        }
      ],
      technologies: ['Articulate Rise 360', 'Video Production', 'Camtasia', 'Interactive PDFs', 'Learning Analytics'],
      image: '🎓'
    },
    'morgan': {
      title: 'Morgan State University Training Modules',
      client: 'Morgan State University',
      description: 'Professional development training modules with SCORM compliance, comprehensive assessment frameworks, and interactive learning experiences.',
      challenge: 'Develop engaging professional training that could be deployed across multiple departments while maintaining consistent quality and tracking completion for accreditation purposes.',
      solution: 'Built modular SCORM-compliant training courses that could be customized by department while maintaining core content integrity. Implemented robust assessment and reporting systems.',
      results: [
        'Deployed across 8 university departments',
        '1,200+ staff members trained',
        '100% SCORM compliance for tracking',
        'Streamlined professional development process',
        'Reduced training costs by 40%'
      ],
      features: [
        {
          title: 'Modular Design',
          items: [
            'Department-specific customization',
            'Core content consistency',
            'Mix-and-match module selection',
            'Flexible learning paths'
          ]
        },
        {
          title: 'Assessment Framework',
          items: [
            'Pre and post-assessments',
            'Knowledge checks throughout',
            'Scenario-based evaluations',
            'Certificate of completion'
          ]
        },
        {
          title: 'SCORM Compliance',
          items: [
            'SCORM 2004 4th Edition',
            'Detailed progress tracking',
            'Automated reporting to HR',
            'Completion verification'
          ]
        },
        {
          title: 'Interactive Content',
          items: [
            'Branching scenarios',
            'Interactive decision trees',
            'Video case studies',
            'Collaborative activities'
          ]
        }
      ],
      technologies: ['SCORM 2004', 'Articulate Storyline', 'xAPI', 'Learning Analytics', 'Custom Reporting'],
      image: '🏢'
    },
    'eccalon': {
      title: 'ECCALON Corporate Training Platform',
      client: 'ECCALON - Enterprise Learning Solutions',
      description: 'Comprehensive talent development program featuring gamification, microlearning modules, mobile-responsive design, and advanced learning analytics for corporate training.',
      challenge: 'Create an engaging corporate training platform that would appeal to modern learners, support mobile learning, and provide meaningful analytics to measure training ROI.',
      solution: 'Developed a gamified learning experience using microlearning principles, mobile-first design, and integrated analytics dashboard. Implemented point systems, leaderboards, and achievement badges to drive engagement.',
      results: [
        '85% increase in course completion rates',
        '92% positive learner feedback',
        '45% reduction in time-to-competency',
        'Significant improvement in knowledge retention',
        'Higher employee engagement scores'
      ],
      features: [
        {
          title: 'Gamification',
          items: [
            'Points and achievement system',
            'Interactive leaderboards',
            'Progress badges and rewards',
            'Challenge-based learning'
          ]
        },
        {
          title: 'Microlearning',
          items: [
            '3-5 minute learning nuggets',
            'Just-in-time training access',
            'Mobile-optimized content',
            'Spaced repetition algorithms'
          ]
        },
        {
          title: 'Mobile-First Design',
          items: [
            'Responsive across all devices',
            'Offline content access',
            'Native app integration',
            'Touch-optimized interactions'
          ]
        },
        {
          title: 'Analytics Dashboard',
          items: [
            'Real-time completion tracking',
            'Engagement metrics',
            'Knowledge gap analysis',
            'ROI measurement tools'
          ]
        }
      ],
      technologies: ['Gamification Framework', 'Microlearning Platform', 'SCORM 2004', 'xAPI', 'Mobile-Responsive Design', 'Learning Analytics'],
      image: '💼'
    },
    'burnout': {
      title: 'Prevention of Burnout for Healthcare Teams',
      client: 'Healthcare Professional Development',
      description: 'Comprehensive wellness and burnout prevention training designed specifically for healthcare professionals. This interactive course addresses the unique stressors faced by medical teams and provides evidence-based strategies for maintaining mental health and professional well-being.',
      challenge: 'Healthcare professionals face unprecedented levels of stress and burnout. We needed to create an engaging, accessible training that healthcare workers could complete during limited downtime while providing practical, immediately applicable strategies.',
      solution: 'Developed an interactive, self-paced course using Articulate Rise 360 that combines medical research, real-world scenarios, and practical exercises. The course includes stress assessment tools, guided relaxation techniques, and actionable self-care plans tailored to healthcare environments.',
      results: [
        'High engagement rates among healthcare professionals',
        'Positive feedback on practical applicability',
        'SCORM 2004 4th Edition compliant for seamless LMS integration',
        'Mobile-responsive for access during breaks',
        'Evidence-based content validated by healthcare experts'
      ],
      features: [
        {
          title: 'Burnout Recognition',
          items: [
            'Self-assessment tools and questionnaires',
            'Warning signs and symptoms identification',
            'Understanding burnout vs. stress',
            'Personal burnout risk evaluation'
          ]
        },
        {
          title: 'Stress Management Techniques',
          items: [
            'Box breathing exercises (animated)',
            'Progressive muscle relaxation guides',
            'Mindfulness and meditation practices',
            'Quick stress-relief strategies for busy schedules'
          ]
        },
        {
          title: 'Self-Care Strategies',
          items: [
            'Work-life balance frameworks',
            'Boundary-setting techniques',
            'Peer support network building',
            'Professional help resources'
          ]
        },
        {
          title: 'Team Wellness',
          items: [
            'Creating supportive team cultures',
            'Recognizing burnout in colleagues',
            'Team-based wellness initiatives',
            'Manager support resources'
          ]
        }
      ],
      technologies: ['Articulate Rise 360', 'SCORM 2004 4th Edition', 'Interactive Assessments', 'Vyond Animations', 'Mobile-Responsive Design'],
      image: '💚'
    }
  };

  // ============================================
  // MODAL FUNCTIONALITY
  // ============================================
  const modal = document.getElementById('project-modal');
  const modalBody = document.getElementById('modal-body');
  const modalClose = document.querySelector('.modal-close');

  // Function to open modal with project details
  function openProjectModal(projectId) {
    const project = projectData[projectId];

    if (!project) {
      console.error('Project not found:', projectId);
      return;
    }

    // Build modal content
    const modalContent = `
      <div class="modal-project-header">
        <h2>${project.title}</h2>
        <p class="modal-project-client">${project.client}</p>
        <div class="modal-project-meta">
          <div class="modal-meta-item">
            <span>📊</span>
            <span>Case Study</span>
          </div>
          <div class="modal-meta-item">
            <span>✓</span>
            <span>Completed Project</span>
          </div>
        </div>
      </div>

      <div class="modal-section">
        <h3>Project Overview</h3>
        <p>${project.description}</p>
      </div>

      <div class="modal-section">
        <h3>The Challenge</h3>
        <p>${project.challenge}</p>
      </div>

      <div class="modal-section">
        <h3>Our Solution</h3>
        <p>${project.solution}</p>
      </div>

      <div class="modal-section">
        <h3>Results & Impact</h3>
        <ul style="list-style: none; padding: 0;">
          ${project.results.map(result => `
            <li style="padding: 0.5rem 0; display: flex; align-items: start; gap: 0.5rem;">
              <span style="color: #059669; font-weight: bold;">✓</span>
              <span>${result}</span>
            </li>
          `).join('')}
        </ul>
      </div>

      <div class="modal-section">
        <h3>Key Features</h3>
        <div class="modal-features-grid">
          ${project.features.map(feature => `
            <div class="modal-feature-card">
              <h4>${feature.title}</h4>
              <ul>
                ${feature.items.map(item => `<li>${item}</li>`).join('')}
              </ul>
            </div>
          `).join('')}
        </div>
      </div>

      <div class="modal-section">
        <h3>Technologies Used</h3>
        <div class="modal-tags">
          ${project.technologies.map(tech => `
            <span class="modal-tag">${tech}</span>
          `).join('')}
        </div>
      </div>
    `;

    modalBody.innerHTML = modalContent;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
  }

  // Function to close modal
  function closeProjectModal() {
    modal.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
  }

  // Event listeners for opening modals
  document.querySelectorAll('[data-project]').forEach(element => {
    element.addEventListener('click', function(e) {
      e.preventDefault();
      const projectId = this.getAttribute('data-project');
      openProjectModal(projectId);
    });
  });

  // Event listener for closing modal
  if (modalClose) {
    modalClose.addEventListener('click', closeProjectModal);
  }

  // Close modal when clicking outside
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeProjectModal();
    }
  });

  // Close modal with Escape key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeProjectModal();
    }
  });

  // ============================================
  // ENHANCED ANIMATIONS
  // ============================================

  // Parallax effect for hero section
  const hero = document.querySelector('.hero');
  if (hero) {
    window.addEventListener('scroll', function() {
      const scrolled = window.pageYOffset;
      if (scrolled < hero.offsetHeight) {
        const parallaxSpeed = 0.3;
        hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
      }
    });
  }

  // Enhanced intersection observer for animations
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px'
  };

  const animationObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '0';
        entry.target.style.transform = 'translateY(30px)';

        setTimeout(() => {
          entry.target.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, 100);

        animationObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Apply animations to elements
  document.querySelectorAll('.sector-card, .servicio-card, .portfolio-card, .process-step').forEach(el => {
    animationObserver.observe(el);
  });

  // ============================================
  // PORTFOLIO CARD TILT EFFECT
  // ============================================
  document.querySelectorAll('.portfolio-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;

      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', function() {
      card.style.transform = '';
    });
  });

  // ============================================
  // CONSOLE WELCOME MESSAGE
  // ============================================
  console.log('%c🎓 Alexandria\'s Design - Enhanced Prototype', 'color: #1E3A5F; font-size: 24px; font-weight: bold;');
  console.log('%cEnhanced Features Active:', 'color: #3182CE; font-size: 16px; font-weight: bold;');
  console.log('  ✓ Interactive Project Modals');
  console.log('  ✓ Vibrant Colorful Backgrounds');
  console.log('  ✓ Realistic Animated Icons');
  console.log('  ✓ Enhanced Logo Design');
  console.log('  ✓ 3D Card Tilt Effects');
  console.log('  ✓ Smooth Parallax Scrolling');
  console.log('%cClick any project card to view full details!', 'color: #059669; font-weight: bold;');

});
