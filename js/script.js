/**
 * L'Atelier Français — Modern French Tuition Studio
 * Interactive behavior, navigation observer, tab switcher, FAQ accordion
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. DOM Element Cache
  const header = document.querySelector('.site-header');
  const progressBar = document.getElementById('scroll-progress');
  const backToTopBtn = document.getElementById('back-to-top');
  const mobileToggle = document.querySelector('.mobile-toggle');
  const navMenu = document.querySelector('.nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');
  const tabButtons = document.querySelectorAll('.tab-btn');
  const curriculumPanels = document.querySelectorAll('.curriculum-panel');
  const faqItems = document.querySelectorAll('.faq-item');
  const enquiryForm = document.getElementById('enquiry-form');
  const formStatus = document.getElementById('form-status');

  // 2. Scroll Progress & Header Shadow Handler
  function handleScroll() {
    const scrollY = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // Scroll progress percentage
    if (docHeight > 0 && progressBar) {
      const scrollPercent = (scrollY / docHeight) * 100;
      progressBar.style.width = `${Math.min(100, Math.max(0, scrollPercent))}%`;
    }

    // Header elevation toggle
    if (header) {
      if (scrollY > 20) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }

    // Back-to-top button visibility
    if (backToTopBtn) {
      if (scrollY > 400) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll(); // Initial invocation

  // 3. Back to Top Click
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 4. Mobile Menu Drawer Toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);

      // Prevent body scroll when mobile menu is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close menu when clicking nav links
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          navMenu.classList.remove('open');
          mobileToggle.setAttribute('aria-expanded', 'false');
          document.body.style.overflow = '';
        }
      });
    });

    // Close menu on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
        mobileToggle.focus();
      }
    });
  }

  // 5. Active Navigation Link Observer (IntersectionObserver)
  const sections = document.querySelectorAll('section[id]');

  if ('IntersectionObserver' in window && sections.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const currentId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${currentId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => sectionObserver.observe(section));
  }

  // 6. Curriculum Interactive Level Switcher (Accessible Tabs)
  if (tabButtons.length > 0 && curriculumPanels.length > 0) {
    tabButtons.forEach((button, index) => {
      button.addEventListener('click', () => {
        const targetGrade = button.getAttribute('data-tab');

        // Deactivate all buttons
        tabButtons.forEach(btn => {
          btn.classList.remove('active');
          btn.setAttribute('aria-selected', 'false');
          btn.setAttribute('tabindex', '-1');
        });

        // Hide all panels
        curriculumPanels.forEach(panel => {
          panel.classList.remove('active');
          panel.setAttribute('aria-hidden', 'true');
        });

        // Activate selected button & panel
        button.classList.add('active');
        button.setAttribute('aria-selected', 'true');
        button.removeAttribute('tabindex');

        const activePanel = document.getElementById(`curriculum-${targetGrade}`);
        if (activePanel) {
          activePanel.classList.add('active');
          activePanel.setAttribute('aria-hidden', 'false');

          const cards = activePanel.querySelectorAll('.curriculum-card');
          cards.forEach(card => {
            card.classList.remove('is-faded-top', 'scroll-reveal');
            card.classList.add('is-visible');
            card.style.opacity = '1';
            card.style.transform = 'none';
          });
        }
      });

      // Keyboard arrow navigation between tabs
      button.addEventListener('keydown', (e) => {
        let targetIndex = null;
        if (e.key === 'ArrowRight') {
          targetIndex = (index + 1) % tabButtons.length;
        } else if (e.key === 'ArrowLeft') {
          targetIndex = (index - 1 + tabButtons.length) % tabButtons.length;
        } else if (e.key === 'Home') {
          targetIndex = 0;
        } else if (e.key === 'End') {
          targetIndex = tabButtons.length - 1;
        }

        if (targetIndex !== null) {
          e.preventDefault();
          tabButtons[targetIndex].focus();
          tabButtons[targetIndex].click();
        }
      });
    });
  }

  // 7. FAQ Accessible Accordion
  faqItems.forEach(item => {
    const trigger = item.querySelector('.faq-trigger');

    if (trigger) {
      trigger.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Optional: Close other open accordion items for clean accordion UX
        faqItems.forEach(otherItem => {
          if (otherItem !== item) {
            otherItem.classList.remove('active');
            const otherTrigger = otherItem.querySelector('.faq-trigger');
            if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
          }
        });

        // Toggle current item
        item.classList.toggle('active');
        trigger.setAttribute('aria-expanded', !isActive);
      });
    }
  });

  // 8. Functional Contact Form Email Submission
  // To change target recipient email, set data-email="your@email.com" on #enquiry-form in index.html
  const DEFAULT_RECIPIENT_EMAIL = "learnfrench74@gmail.com";

  if (enquiryForm && formStatus) {
    enquiryForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = enquiryForm.querySelector('button[type="submit"]');
      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : 'Submit Enquiry';

      const targetEmail = enquiryForm.getAttribute('data-email') || DEFAULT_RECIPIENT_EMAIL;
      const nameVal = document.getElementById('user-name')?.value.trim() || 'Website Visitor';

      // Prepare submission payload using FormData so FormSubmit parses all field entries
      const formData = new FormData(enquiryForm);
      formData.append('_subject', `New French Class Enquiry from ${nameVal}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      // Set sending UI state
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `Sending...`;
      }
      formStatus.className = 'form-status';
      formStatus.textContent = '';

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${encodeURIComponent(targetEmail)}`, {
          method: 'POST',
          headers: {
            'Accept': 'application/json'
          },
          body: formData
        });

        const result = await response.json();
        const isSuccess = (result.success === true || result.success === "true");

        if (isSuccess) {
          formStatus.className = 'form-status success';
          formStatus.textContent = "Merci! Your enquiry has been sent successfully. We will contact you within 24 hours.";
          enquiryForm.reset();
        } else if (result.message && result.message.toLowerCase().includes('activation')) {
          formStatus.className = 'form-status error';
          formStatus.textContent = `Activation Required: FormSubmit sent an activation email to ${targetEmail}. Please check your Inbox and Spam folder and click 'Activate Form'.`;
        } else if (result.message && result.message.toLowerCase().includes('web server')) {
          formStatus.className = 'form-status error';
          formStatus.textContent = "FormSubmit requires viewing via web server (http://localhost:8080) rather than opening the HTML file directly.";
        } else {
          throw new Error(result.message || 'Form submission failed');
        }
      } catch (err) {
        console.error('Email submission error:', err);
        formStatus.className = 'form-status error';
        formStatus.textContent = `Error sending message automatically. Please contact us directly at ${targetEmail}.`;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }

        // Auto clear status after 10 seconds
        setTimeout(() => {
          formStatus.className = 'form-status';
          formStatus.textContent = '';
        }, 10000);
      }
    });
  }

  // 9. Upward Moving Scroll & Load Reveal Observer
  function initScrollReveal() {
    const selectors = [
      '.hero-content',
      '.hero-card-container',
      '.section-header',
      '.course-card',
      '.curriculum-controls',
      '.approach-item',
      '.teacher-image-wrapper',
      '.teacher-bio',
      '.audience-card',
      '.faq-item',
      '.contact-block'
    ];

    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach(el => el.classList.add('scroll-reveal'));

    function updateRevealState() {
      const vh = window.innerHeight;
      const topThreshold = 40; // Top offset where elements fade out upwards

      elements.forEach(el => {
        const rect = el.getBoundingClientRect();

        if (rect.bottom < topThreshold) {
          // Scrolled past top -> Fade out upward
          el.classList.remove('is-visible');
          el.classList.add('is-faded-top');
        } else if (rect.top > vh - 30) {
          // Below bottom threshold -> Hidden below
          el.classList.remove('is-visible', 'is-faded-top');
        } else {
          // Inside viewport -> Upward moving fade in
          el.classList.remove('is-faded-top');
          el.classList.add('is-visible');
        }
      });
    }

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateRevealState();
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });

    // Initial trigger on site load
    setTimeout(updateRevealState, 50);
  }

  initScrollReveal();
});

