/**
 * Premium Effects - Next-Level Interactions
 * Ultra-premium visual effects for Dr. Pires website
 */

(function () {
    'use strict';

    // ============================================
    // 1. SCROLL PROGRESS BAR
    // ============================================
    function initScrollProgress() {
        // Create progress bar element
        const progressBar = document.createElement('div');
        progressBar.className = 'scroll-progress';
        document.body.prepend(progressBar);

        // Update progress on scroll
        window.addEventListener('scroll', () => {
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (window.scrollY / windowHeight) * 100;
            document.documentElement.style.setProperty('--scroll-progress', `${scrolled}%`);
        });
    }

    // ============================================
    // 2. CUSTOM CURSOR WITH GLOW TRAIL
    // ============================================
    function initCustomCursor() {
        // Skip on mobile
        if (window.innerWidth <= 768) return;

        // Create cursor element
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        document.body.appendChild(cursor);

        let mouseX = 0, mouseY = 0;
        let cursorX = 0, cursorY = 0;

        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        // Smooth cursor movement
        function animateCursor() {
            cursorX += (mouseX - cursorX) * 0.2;
            cursorY += (mouseY - cursorY) * 0.2;
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        // Cursor hover effect on interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .card, .blog-card, input, textarea');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
        });

        // Create cursor trail
        let lastTrailTime = 0;
        document.addEventListener('mousemove', (e) => {
            const now = Date.now();
            if (now - lastTrailTime > 50) { // Throttle trail creation
                createTrail(e.clientX, e.clientY);
                lastTrailTime = now;
            }
        });

        function createTrail(x, y) {
            const trail = document.createElement('div');
            trail.className = 'cursor-trail';
            trail.style.left = x + 'px';
            trail.style.top = y + 'px';
            document.body.appendChild(trail);

            setTimeout(() => trail.remove(), 600);
        }
    }

    // ============================================
    // 3. PARALLAX EFFECT FOR ORBS
    // ============================================
    function initParallax() {
        const orbs = document.querySelectorAll('.gradient-orb, .sobre::before, .sobre::after');

        window.addEventListener('mousemove', (e) => {
            const mouseX = e.clientX / window.innerWidth;
            const mouseY = e.clientY / window.innerHeight;

            orbs.forEach((orb, index) => {
                const speed = (index + 1) * 20;
                const x = (mouseX - 0.5) * speed;
                const y = (mouseY - 0.5) * speed;
                orb.style.transform = `translate(${x}px, ${y}px)`;
            });
        });
    }

    // ============================================
    // 4. REVEAL ANIMATIONS ON SCROLL
    // ============================================
    function initRevealAnimations() {
        const revealElements = document.querySelectorAll('.card, .blog-card, .testimonial-card, .timeline-item, .faq-item');

        revealElements.forEach((el, index) => {
            el.classList.add('reveal');
            el.style.transitionDelay = `${index * 0.1}s`;
        });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    }

    // ============================================
    // 5. FLOATING PARTICLES
    // ============================================
    function initFloatingParticles() {
        // Skip on mobile
        if (window.innerWidth <= 768) return;

        const container = document.createElement('div');
        container.className = 'particles-container';
        document.body.appendChild(container);

        // Create 30 particles
        for (let i = 0; i < 30; i++) {
            createParticle(container);
        }

        function createParticle(container) {
            const particle = document.createElement('div');
            particle.className = 'particle';

            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = '100%';

            // Random drift
            particle.style.setProperty('--particle-drift', (Math.random() - 0.5) * 200 + 'px');

            // Random delay
            particle.style.animationDelay = Math.random() * 15 + 's';

            // Random duration
            particle.style.animationDuration = (10 + Math.random() * 10) + 's';

            container.appendChild(particle);
        }
    }

    // ============================================
    // 6. MAGNETIC HOVER EFFECT FOR CARDS
    // ============================================
    function initMagneticCards() {
        // Skip on mobile
        if (window.innerWidth <= 768) return;

        const cards = document.querySelectorAll('.card, .blog-card, .testimonial-card');

        cards.forEach(card => {
            card.classList.add('magnetic-card');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;

                const centerX = rect.width / 2;
                const centerY = rect.height / 2;

                const rotateX = ((y - centerY) / centerY) * -5;
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.setProperty('--rotate-x', rotateX + 'deg');
                card.style.setProperty('--rotate-y', rotateY + 'deg');
            });

            card.addEventListener('mouseleave', () => {
                card.style.setProperty('--rotate-x', '0deg');
                card.style.setProperty('--rotate-y', '0deg');
            });
        });
    }

    // ============================================
    // 7. ENHANCED BUTTON INTERACTIONS
    // ============================================
    function initButtonEffects() {
        const buttons = document.querySelectorAll('.btn-primary, .btn-secondary, .btn-whatsapp');

        buttons.forEach(button => {
            // Add glow pulse to primary buttons
            if (button.classList.contains('btn-primary')) {
                button.classList.add('glow-pulse');
            }
        });
    }

    // ============================================
    // 8. SMOOTH SCROLL FOR ANCHOR LINKS
    // ============================================
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#') return;

                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // ============================================
    // INITIALIZE ALL EFFECTS
    // ============================================
    function init() {
        // Wait for DOM to be ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', init);
            return;
        }

        console.log('🚀 Initializing Premium Effects...');

        initScrollProgress();
        initCustomCursor();
        initParallax();
        initRevealAnimations();
        initFloatingParticles();
        initMagneticCards();
        initButtonEffects();
        initSmoothScroll();

        console.log('✨ Premium Effects Loaded!');
    }

    // Start initialization
    init();

})();
