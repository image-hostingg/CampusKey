// Campus Key Landing Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // ========== Mobile Menu Functionality ==========
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const headerElem = document.querySelector('.header');
    const navContainer = document.querySelector('.nav-container');

    // Header scroll behavior
    function handleHeaderScroll() {
        if (window.scrollY > 10) {
            headerElem?.classList.add('scrolled');
        } else {
            headerElem?.classList.remove('scrolled');
        }
    }
    window.addEventListener('scroll', handleHeaderScroll);
    handleHeaderScroll();

    // Mobile menu toggle
    function toggleMobileMenu(show) {
        if (headerElem && mobileMenuBtn) {
            if (typeof show === 'boolean') {
                headerElem.classList.toggle('mobile-menu-open', show);
                mobileMenuBtn.setAttribute('aria-expanded', show ? 'true' : 'false');
            } else {
                headerElem.classList.toggle('mobile-menu-open');
                mobileMenuBtn.setAttribute('aria-expanded', 
                    headerElem.classList.contains('mobile-menu-open') ? 'true' : 'false'
                );
            }
        }
    }

    // Mobile menu click handler
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMobileMenu();
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = headerElem?.contains(e.target);
        if (!isClickInside && headerElem?.classList.contains('mobile-menu-open')) {
            toggleMobileMenu(false);
        }
    });

    // Close menu when clicking nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            if (window.innerWidth <= 768) {
                toggleMobileMenu(false);
            }
        });
    });

    // ========== Footer Dropdowns Functionality ==========
    // Footer mobile dropdowns
    const footerColumns = document.querySelectorAll('.footer-column');
    footerColumns.forEach(column => {
        const heading = column.querySelector('h4');
        if (heading) {
            heading.addEventListener('click', (e) => {
                // Prevent default action and stop the event from bubbling up
                e.preventDefault();
                e.stopPropagation();
                
                if (window.innerWidth <= 768) {
                    const isActive = column.classList.contains('active');
                    
                    // Close all other columns first
                    footerColumns.forEach(otherColumn => {
                        if (otherColumn !== column) {
                            otherColumn.classList.remove('active');
                        }
                    });
                    
                    // Then, toggle the current column
                    if (!isActive) {
                        column.classList.add('active');
                    } else {
                        column.classList.remove('active');
                    }
                }
            });
        }
    });

    // Reset footer columns on mobile/desktop switch
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            if (window.innerWidth > 768) {
                // Reset mobile menu
                headerElem?.classList.remove('mobile-menu-open');
                mobileMenuBtn?.setAttribute('aria-expanded', 'false');
                
                // Reset footer dropdowns
                footerColumns.forEach(column => {
                    column.classList.remove('active');
                });
            }
        }, 250);
    });

    // Tab functionality
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove('active'));
            
            // Add active class to clicked tab
            this.classList.add('active');
            
            // Hide all tab contents
            tabContents.forEach(content => content.classList.add('hidden'));
            
            // Show corresponding tab content
            const targetTab = this.getAttribute('data-tab');
            const targetContent = document.getElementById(targetTab + '-content');
            if (targetContent) {
                targetContent.classList.remove('hidden');
            }
        });
    });

    // Search functionality
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            // In a real application, this would make an API call
            console.log('Searching for:', searchTerm);
            alert(`Searching for: "${searchTerm}"\n\nThis is a demo. In a real application, this would search through courses, quizzes, and documents.`);
        }
    }
    
    searchBtn.addEventListener('click', performSearch);
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Smooth scrolling for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const statisticsSection = document.querySelector('.statistics');
            if (statisticsSection) {
                statisticsSection.scrollIntoView({ 
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // University button interactions
    const universityBtns = document.querySelectorAll('.university-btn');
    universityBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const universityName = this.textContent;
            console.log('Selected university:', universityName);
            // In a real application, this would navigate to the university page
            alert(`Selected: ${universityName}\n\nThis is a demo. In a real application, this would navigate to the university's study materials.`);
        });
    });

    // View all universities button
    const viewAllBtn = document.querySelector('.view-all-btn');
    if (viewAllBtn) {
        viewAllBtn.addEventListener('click', function() {
            console.log('View all universities clicked');
            alert('View All Universities\n\nThis is a demo. In a real application, this would show a complete list of all universities.');
        });
    }

    // Company culture button
    const cultureBtn = document.querySelector('.culture-btn');
    if (cultureBtn) {
        cultureBtn.addEventListener('click', function() {
            console.log('Check our openings clicked');
            alert('Check Our Openings\n\nThis is a demo. In a real application, this would navigate to the careers page.');
        });
    }

    // Sign in button
    const signInBtn = document.querySelector('.sign-in-btn');
    if (signInBtn) {
        signInBtn.addEventListener('click', function(e) {
            // Let the link work naturally, no need for preventDefault
            console.log('Sign in clicked - navigating to unified auth page');
        });
    }

    // Sign up button
    const signUpBtn = document.querySelector('.sign-up-btn');
    if (signUpBtn) {
        signUpBtn.addEventListener('click', function(e) {
            // Let the link work naturally, no need for preventDefault
            console.log('Sign up clicked - navigating to unified auth page');
        });
    }

    // Language selector
    const languageSelectors = document.querySelectorAll('.language-selector, .lang-btn');
    languageSelectors.forEach(selector => {
        selector.addEventListener('click', function() {
            console.log('Language selector clicked');
            alert('Language Selection\n\nThis is a demo. In a real application, this would open a language/region selection dropdown.');
        });
    });

    // App store badges
    const appBadges = document.querySelectorAll('.app-badge');
    appBadges.forEach(badge => {
        badge.addEventListener('click', function() {
            console.log('App store badge clicked');
            alert('App Store\n\nThis is a demo. In a real application, this would redirect to the respective app store.');
        });
    });

    // Social media links
    const socialLinks = document.querySelectorAll('.social-media a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const platform = this.querySelector('i').className.split('fa-')[1];
            console.log('Social media clicked:', platform);
            alert(`${platform.charAt(0).toUpperCase() + platform.slice(1)} Social Media\n\nThis is a demo. In a real application, this would redirect to the respective social media page.`);
        });
    });

    // Trustpilot link
    const trustpilotLink = document.querySelector('.trustpilot-link');
    if (trustpilotLink) {
        trustpilotLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Trustpilot link clicked');
            alert('Trustpilot Reviews\n\nThis is a demo. In a real application, this would redirect to the Trustpilot reviews page.');
        });
    }


    // Navigation items
    const navItems = document.querySelectorAll('.nav-item');
    function smoothScrollTo(targetId) {
        const el = document.querySelector(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
    navItems.forEach(item => {
        item.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            if (target) smoothScrollTo(target);
        });
    });

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('button, .nav-item, .university-btn, .social-media a, .lang-btn');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });

    // Add loading animation for search
    function showSearchLoading() {
        const searchBtn = document.querySelector('.search-btn i');
        if (searchBtn) {
            searchBtn.classList.add('fa-spin');
            setTimeout(() => {
                searchBtn.classList.remove('fa-spin');
            }, 1000);
        }
    }

    // Enhanced search with loading
    searchBtn.addEventListener('click', function() {
        showSearchLoading();
        setTimeout(performSearch, 500);
    });

    // Add scroll animations
    function animateOnScroll() {
        const elements = document.querySelectorAll('.stat-item, .university-btn, .footer-column');
        const windowHeight = window.innerHeight;
        
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < windowHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Initialize scroll animations
    const animatedElements = document.querySelectorAll('.stat-item, .university-btn, .footer-column');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on load

    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            // Add focus styles for keyboard navigation
            document.body.classList.add('keyboard-navigation');
        }
    });

    document.addEventListener('mousedown', function() {
        // Remove focus styles when using mouse
        document.body.classList.remove('keyboard-navigation');
    });

    // Console welcome message
    console.log('%c🎓 Welcome to Campus Key!', 'color: #6B46C1; font-size: 20px; font-weight: bold;');
    console.log('%cThis is a demo landing page. All interactive elements are functional but show demo alerts.', 'color: #14B8A6; font-size: 14px;');
    console.log('%cIn a real application, these would connect to actual APIs and navigation.', 'color: #84CC16; font-size: 14px;');

    // =================== AUTH MODAL & FORMS ===================
    (function() {
      const modal = document.getElementById('auth-modal');
      const openBtn = document.querySelector('.sign-in-btn');
      const closeBtn = document.querySelector('.auth-close');
      const loginForm = document.getElementById('login-form');
      const registerForm = document.getElementById('register-form');
      const showRegister = document.getElementById('show-register');
      const showLogin = document.getElementById('show-login');

      function openModal(showRegisterForm = false) {
        if (!modal) return;
        
        modal.classList.add('visible');
        setTimeout(() => {
          modal.classList.add('fade-in');
        }, 10); // Small delay to ensure transition triggers

        if (showRegisterForm) {
          loginForm.classList.remove('active');
          registerForm.classList.add('active');
        } else {
          loginForm.classList.add('active');
          registerForm.classList.remove('active');
        }
        document.body.style.overflow = 'hidden';
      }

      function closeModal() {
        if (!modal) return;

        modal.classList.remove('fade-in');
        // Listen for the transition to end before setting display to none
        modal.addEventListener('transitionend', function handler() {
          modal.classList.remove('visible');
          modal.removeEventListener('transitionend', handler);
        });
        document.body.style.overflow = '';
      }

      if (openBtn) {
        openBtn.addEventListener('click', (e) => {
          e.preventDefault();
          openModal();
        });
      }
      
      if (closeBtn) closeBtn.addEventListener('click', closeModal);

      // Close on outside click
      if (modal) {
        modal.addEventListener('mousedown', function(e) {
          if (e.target === modal) closeModal();
        });
      }

      // ESC key closes
      document.addEventListener('keydown', function(e) {
        if (modal.classList.contains('visible') && e.key === 'Escape') {
          closeModal();
        }
      });

      // Toggle forms
      if (showRegister) showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        loginForm.classList.remove('active');
        registerForm.classList.add('active');
      });

      if (showLogin) showLogin.addEventListener('click', function(e) {
        e.preventDefault();
        registerForm.classList.remove('active');
        loginForm.classList.add('active');
      });

      // Prevent form submit (demo)
      [loginForm, registerForm].forEach(form => {
        if (form) form.addEventListener('submit', function(e) {
          e.preventDefault();
          alert('Demo only. No backend connected.');
          closeModal(); // Close modal on successful "submit"
        });
      });

      // Handle register button if it exists separately
      const registerBtn = document.querySelector('.register-btn');
      if (registerBtn) {
        registerBtn.addEventListener('click', function(e) {
          e.preventDefault();
          openModal(true); // Open modal and show register form
        });
      }
    })();


});

// Add CSS for keyboard navigation
const style = document.createElement('style');
style.textContent = `
    .keyboard-navigation button:focus,
    .keyboard-navigation .nav-item:focus,
    .keyboard-navigation .university-btn:focus,
    .keyboard-navigation .social-media a:focus,
    .keyboard-navigation .lang-btn:focus {
        outline: 2px solid #6B46C1;
        outline-offset: 2px;
    }
`;
document.head.appendChild(style);

// Remove previews: no extra demo handlers needed
