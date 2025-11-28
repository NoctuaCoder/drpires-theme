// Scroll Animations (AOS - Animate On Scroll)
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Cookie Banner
    const cookieBanner = document.getElementById('cookieBanner');
    const cookieAccepted = localStorage.getItem('cookieAccepted');

    if (!cookieAccepted) {
        setTimeout(() => {
            cookieBanner.classList.add('show');
        }, 1000);
    }

    // Parallax Effect on Hero
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.gradient-orb');

        parallaxElements.forEach((el, index) => {
            const speed = 0.5 + (index * 0.1);
            el.style.transform = `translateY(${scrolled * speed}px)`;
        });
    });

    // Card Hover Effect Enhancement
    const cards = document.querySelectorAll('.card, .testimonial-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function (e) {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function (e) {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Typing Effect for Hero Title (Optional Enhancement)
    const heroTitle = document.querySelector('.hero h1');
    if (heroTitle) {
        const text = heroTitle.innerHTML;
        heroTitle.innerHTML = '';
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                heroTitle.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        }

        // Uncomment to enable typing effect
        // setTimeout(typeWriter, 500);
    }

    // Stats Counter Animation
    const stats = document.querySelectorAll('.stat-number');
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                entry.target.classList.add('counted');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.5 });

    stats.forEach(stat => statsObserver.observe(stat));

    function animateCounter(element) {
        const target = element.textContent;
        const isPercentage = target.includes('%');
        const number = parseInt(target.replace(/\D/g, ''));
        const duration = 2000;
        const increment = number / (duration / 16);
        let current = 0;

        const timer = setInterval(() => {
            current += increment;
            if (current >= number) {
                element.textContent = isPercentage ? `${number}%` : `${number}+`;
                clearInterval(timer);
            } else {
                element.textContent = isPercentage ? `${Math.floor(current)}%` : `${Math.floor(current)}+`;
            }
        }, 16);
    }

    // WhatsApp Float Button Interaction
    const whatsappFloat = document.querySelector('.whatsapp-float');

    whatsappFloat.addEventListener('mouseenter', function () {
        this.style.animation = 'none';
        setTimeout(() => {
            this.style.animation = '';
        }, 10);
    });

    // Add Loading State to Buttons
    document.querySelectorAll('.btn-primary').forEach(btn => {
        btn.addEventListener('click', function (e) {
            if (this.href && this.href.includes('wa.me')) {
                // Add loading state
                const originalText = this.innerHTML;
                this.innerHTML = '<svg class="spinner" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/></svg> Abrindo WhatsApp...';

                setTimeout(() => {
                    this.innerHTML = originalText;
                }, 2000);
            }
        });
    });

    // Image Lazy Loading Enhancement - REMOVED TO FIX CONFLICT
    // The images were blinking because this script was fighting with the AOS animation
    // AOS already handles the opacity transition for elements with data-aos

    // Add Ripple Effect to Buttons
    document.querySelectorAll('.btn').forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple-animation 0.6s ease-out;
            pointer-events: none;
        }
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
        .spinner {
            width: 20px;
            height: 20px;
            animation: spin 1s linear infinite;
        }
        @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);
});

// Cookie Accept Function
function acceptCookies() {
    localStorage.setItem('cookieAccepted', 'true');
    const cookieBanner = document.getElementById('cookieBanner');
    cookieBanner.classList.remove('show');
    setTimeout(() => {
        cookieBanner.style.display = 'none';
    }, 300);
}

// Performance Optimization: Debounce Scroll Events
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

// Add Page Load Animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s';
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Add Active State to Navigation on Scroll
window.addEventListener('scroll', debounce(() => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.add('active');
            });
        } else {
            document.querySelectorAll(`a[href="#${sectionId}"]`).forEach(link => {
                link.classList.remove('active');
            });
        }
    });
}, 100));

// FAQ Accordion
document.addEventListener('DOMContentLoaded', function () {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            // Close other open items
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                }
            });

            // Toggle current item
            item.classList.toggle('active');
        });

        // Keyboard accessibility
        question.addEventListener('keypress', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                question.click();
            }
        });
    });
});

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when clicking on a link
        const navLinks = navMenu.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
                navToggle.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    }
});

// Mobile Sticky CTA - Show after scroll
document.addEventListener('DOMContentLoaded', function () {
    const mobileCTA = document.getElementById('mobileCTA');
    const footer = document.querySelector('.footer');

    if (mobileCTA && window.innerWidth <= 640) {
        let lastScroll = 0;

        window.addEventListener('scroll', debounce(() => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const footerTop = footer.offsetTop;
            const windowHeight = window.innerHeight;

            // Show CTA after scrolling 300px
            if (scrollTop > 300) {
                mobileCTA.classList.add('visible');
                document.body.classList.add('sticky-cta-visible');
            } else {
                mobileCTA.classList.remove('visible');
                document.body.classList.remove('sticky-cta-visible');
            }

            // Hide CTA when near footer
            if (scrollTop + windowHeight >= footerTop - 50) {
                mobileCTA.classList.remove('visible');
            }

            lastScroll = scrollTop;
        }, 100));
    }
});
