// ===================================
// Dr. Pires - Premium Blue Theme
// Interactive JavaScript
// ===================================

document.addEventListener('DOMContentLoaded', function () {

    // ===================================
    // Mobile Navigation Toggle
    // ===================================
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle) {
        navToggle.addEventListener('click', function () {
            navMenu.classList.toggle('active');
            const icon = navToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const icon = navToggle.querySelector('i');
                icon.classList.add('fa-bars');
                icon.classList.remove('fa-times');
            }
        });
    });

    // ===================================
    // Header Scroll Effect
    // ===================================
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', function () {
        const currentScroll = window.pageYOffset;

        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = 'none';
        }

        // Add scrolled class for enhanced visibility
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        lastScroll = currentScroll;
    });

    // ===================================
    // Smooth Scroll for Navigation Links
    // ===================================
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const headerHeight = header.offsetHeight;
                const targetPosition = targetSection.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===================================
    // Scroll Animations (Intersection Observer)
    // ===================================
    const animateElements = document.querySelectorAll('[data-animate]');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ===================================
    // Back to Top Button
    // ===================================
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
    });

    if (backToTop) {
        backToTop.addEventListener('click', function () {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ===================================
    // Cookie Banner
    // ===================================
    const cookieBanner = document.getElementById('cookieBanner');
    const acceptCookies = document.getElementById('acceptCookies');

    // Check if user has already accepted cookies
    if (!localStorage.getItem('cookiesAccepted')) {
        setTimeout(function () {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    if (acceptCookies) {
        acceptCookies.addEventListener('click', function () {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');

            setTimeout(function () {
                cookieBanner.style.display = 'none';
            }, 300);
        });
    }

    // ===================================
    // Active Navigation Link on Scroll
    // ===================================
    const sections = document.querySelectorAll('section[id]');

    function highlightNavigation() {
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 150;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (navLink) {
                if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                    navLink.style.color = 'var(--color-light)';
                } else {
                    navLink.style.color = 'var(--color-gray)';
                }
            }
        });
    }

    window.addEventListener('scroll', highlightNavigation);

    // ===================================
    // Stats Counter Animation
    // ===================================
    const stats = document.querySelectorAll('.stat-number');
    let statsAnimated = false;

    function animateStats() {
        if (statsAnimated) return;

        stats.forEach(stat => {
            const target = stat.textContent;
            const isPercentage = target.includes('%');
            const isPlus = target.includes('+');
            const number = parseInt(target.replace(/\D/g, ''));

            let current = 0;
            const increment = number / 50;
            const duration = 2000;
            const stepTime = duration / 50;

            const timer = setInterval(function () {
                current += increment;
                if (current >= number) {
                    current = number;
                    clearInterval(timer);
                }

                let displayValue = Math.floor(current);
                if (isPercentage) {
                    displayValue += '%';
                } else if (isPlus) {
                    displayValue += '+';
                }

                stat.textContent = displayValue;
            }, stepTime);
        });

        statsAnimated = true;
    }

    // Trigger stats animation when profile card is visible
    const profileCard = document.querySelector('.profile-card');
    if (profileCard) {
        const statsObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateStats();
                    statsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statsObserver.observe(profileCard);
    }

    // ===================================
    // Parallax Effect for Hero Background
    // ===================================
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground) {
        window.addEventListener('scroll', function () {
            const scrolled = window.pageYOffset;
            const parallaxSpeed = 0.5;
            heroBackground.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
        });
    }

    // ===================================
    // WhatsApp Float Button Tooltip
    // ===================================
    const whatsappFloat = document.querySelector('.whatsapp-float');

    if (whatsappFloat) {
        whatsappFloat.addEventListener('mouseenter', function () {
            this.setAttribute('title', 'Fale conosco pelo WhatsApp');
        });
    }

    // ===================================
    // Service Cards Stagger Animation
    // ===================================
    const serviceCards = document.querySelectorAll('.service-card');

    serviceCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ===================================
    // Testimonial Cards Stagger Animation
    // ===================================
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ===================================
    // Blog Cards Stagger Animation
    // ===================================
    const blogCards = document.querySelectorAll('.blog-card');

    blogCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // ===================================
    // Form Validation (if contact form is added later)
    // ===================================
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    function validatePhone(phone) {
        const re = /^[\d\s\-\(\)]+$/;
        return re.test(phone);
    }

    // ===================================
    // Lazy Loading Images (if needed)
    // ===================================
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    // ===================================
    // Accessibility: Keyboard Navigation
    // ===================================
    document.addEventListener('keydown', function (e) {
        // ESC key closes mobile menu
        if (e.key === 'Escape' && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('i');
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }

        // ESC key closes cookie banner
        if (e.key === 'Escape' && cookieBanner.classList.contains('show')) {
            localStorage.setItem('cookiesAccepted', 'true');
            cookieBanner.classList.remove('show');
        }
    });

    // ===================================
    // Performance: Debounce Scroll Events
    // ===================================
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }

    // Apply debounce to scroll-heavy functions
    const debouncedHighlight = debounce(highlightNavigation, 100);
    window.addEventListener('scroll', debouncedHighlight);

    // ===================================
    // Console Message
    // ===================================
    console.log('%c🧠 Dr. Pires - Psiquiatria & Saúde Mental', 'color: #24476C; font-size: 20px; font-weight: bold;');
    console.log('%cSite desenvolvido com ❤️ e tecnologia premium', 'color: #A8A9AD; font-size: 12px;');

});

// ===================================
// External Link Handler
// ===================================
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
});

// ===================================
// Print Styles Handler
// ===================================
window.addEventListener('beforeprint', function () {
    document.body.classList.add('printing');
});

window.addEventListener('afterprint', function () {
    document.body.classList.remove('printing');
});
