/* ==========================================================================
   CHERLOPALLI VISHNUVARDHAN - PORTFOLIO INTERACTIVITY SCRIPT
   Features: Typewriter, Sticky Header, Scroll Spy, Mobile Drawer,
             Scroll Reveal, Modal Lightbox, Toast Notifications & Form Validation
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    
    /* --------------------------------------------------------------------------
       1. TYPEWRITER EFFECT IN HERO SECTION
       -------------------------------------------------------------------------- */
    const typingTextElement = document.getElementById('typing-text');
    const roles = [
        "Computer Science & Engineering Student",
        "Full-Stack Web Developer",
        "MySQL & Database Systems Lead",
        "Python & Physics Engine Developer",
        "Analytical Problem Solver"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingDelay = 100;

    function typeEffect() {
        if (!typingTextElement) return;

        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            typingTextElement.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typingDelay = 50;
        } else {
            typingTextElement.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typingDelay = 100;
        }

        if (!isDeleting && charIndex === currentRole.length) {
            typingDelay = 2000; // Pause at end of word
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typingDelay = 500;
        }

        setTimeout(typeEffect, typingDelay);
    }

    typeEffect();

    /* --------------------------------------------------------------------------
       2. STICKY HEADER NAVBAR & SCROLL SPY
       -------------------------------------------------------------------------- */
    const header = document.getElementById('header');
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    function handleScroll() {
        // Sticky Header Toggle
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Active Link Scroll Spy
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Back to top button visibility
        const backToTopBtn = document.getElementById('back-to-top');
        if (backToTopBtn) {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('show');
            } else {
                backToTopBtn.classList.remove('show');
            }
        }
    }

    window.addEventListener('scroll', handleScroll);

    /* --------------------------------------------------------------------------
       3. MOBILE HAMBURGER MENU DRAWER
       -------------------------------------------------------------------------- */
    const hamburgerBtn = document.getElementById('hamburger-menu');
    const navMenu = document.getElementById('nav-menu');

    if (hamburgerBtn && navMenu) {
        hamburgerBtn.addEventListener('click', () => {
            hamburgerBtn.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu when a link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburgerBtn.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });
    }

    /* --------------------------------------------------------------------------
       4. SCROLL REVEAL ANIMATIONS (IntersectionObserver)
       -------------------------------------------------------------------------- */
    const revealElements = document.querySelectorAll('[data-reveal]');

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                // Optionally unobserve after revealing
                // revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => revealObserver.observe(el));

    /* --------------------------------------------------------------------------
       5. BACK TO TOP BUTTON
       -------------------------------------------------------------------------- */
    const backToTopBtn = document.getElementById('back-to-top');
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    /* --------------------------------------------------------------------------
       6. PROJECT PREVIEW MODAL LIGHTBOX
       -------------------------------------------------------------------------- */
    const projectModal = document.getElementById('project-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalBody = document.getElementById('modal-body');
    const demoButtons = document.querySelectorAll('.open-demo-modal');

    const projectData = {
        "1": {
            title: "Smart City Grievance System",
            category: "Team Project | Web Application",
            img: "assets/project1.jpg",
            description: "A comprehensive web-based complaint management system designed for municipal governance. The platform enables citizens to lodge civic grievances, upload details, and automatically route issues to appropriate municipal officers for swift resolution.",
            tech: ["HTML5", "CSS3", "JavaScript", "Web APIs", "Responsive Layout"],
            github: "https://github.com/vishnu-LH44"
        },
        "2": {
            title: "Student Database Management System",
            category: "Database System | MySQL",
            img: "assets/project2.jpg",
            description: "A relational database application engineered with MySQL to manage student records, course enrollments, attendance, and academic grades. Features normalized schema designs, primary/foreign key relationships, and optimized SQL CRUD queries.",
            tech: ["MySQL", "SQL Queries", "Relational Schema", "DBMS Core"],
            github: "https://github.com/vishnu-LH44"
        },
        "3": {
            title: "Angry Bird 2D Physics Game",
            category: "Python Arcade Engine",
            img: "assets/project3.jpg",
            description: "A physics-based 2D game created using Python. Implements projectile motion algorithms, trajectory vectors, gravity math, and precise collision detection routines across multiple level designs.",
            tech: ["Python", "Physics Vector Math", "Collision Algorithms", "OOP Design"],
            github: "https://github.com/vishnu-LH44"
        }
    };

    demoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const projId = btn.getAttribute('data-project');
            const data = projectData[projId];

            if (data) {
                modalBody.innerHTML = `
                    <div style="margin-bottom: 20px;">
                        <img src="${data.img}" alt="${data.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: 12px; margin-bottom: 16px;">
                        <span style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent-cyan); text-transform: uppercase;">${data.category}</span>
                        <h2 style="font-size: 1.8rem; margin: 6px 0 12px 0;">${data.title}</h2>
                        <p style="color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px;">${data.description}</p>
                        
                        <div style="margin-bottom: 24px;">
                            <h4 style="font-size: 0.95rem; margin-bottom: 10px;">Technologies & Tools Used:</h4>
                            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
                                ${data.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                            </div>
                        </div>

                        <div style="display: flex; gap: 12px;">
                            <a href="${data.github}" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm">
                                <i class="fab fa-github"></i> View GitHub Repository
                            </a>
                            <button class="btn btn-secondary btn-sm" onclick="closeProjectModal()">
                                Close Preview
                            </button>
                        </div>
                    </div>
                `;
                projectModal.classList.add('active');
            }
        });
    });

    window.closeProjectModal = function() {
        if (projectModal) projectModal.classList.remove('active');
    };

    if (modalCloseBtn) {
        modalCloseBtn.addEventListener('click', closeProjectModal);
    }

    if (projectModal) {
        projectModal.addEventListener('click', (e) => {
            if (e.target === projectModal) closeProjectModal();
        });
    }

    /* --------------------------------------------------------------------------
       7. CONTACT FORM VALIDATION & TOAST SYSTEM
       -------------------------------------------------------------------------- */
    const contactForm = document.getElementById('contact-form');
    const toastContainer = document.getElementById('toast-container');

    function showToast(message, type = 'success') {
        if (!toastContainer) return;

        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-check-circle" style="color: var(--accent-cyan);"></i> <span>${message}</span>`;
        
        toastContainer.appendChild(toast);

        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(-30px)';
            toast.style.transition = 'all 0.3s ease';
            setTimeout(() => toast.remove(), 300);
        }, 3500);
    }

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            let isValid = true;

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const subjectInput = document.getElementById('subject');
            const messageInput = document.getElementById('message');

            // Reset error states
            document.querySelectorAll('.form-group').forEach(group => group.classList.remove('invalid'));

            // Name check
            if (!nameInput.value.trim()) {
                nameInput.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Email check
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
                emailInput.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Subject check
            if (!subjectInput.value.trim()) {
                subjectInput.parentElement.classList.add('invalid');
                isValid = false;
            }

            // Message check
            if (!messageInput.value.trim()) {
                messageInput.parentElement.classList.add('invalid');
                isValid = false;
            }

            if (isValid) {
                showToast("Thank you! Your message has been sent successfully.");
                contactForm.reset();
            }
        });
    }

    /* --------------------------------------------------------------------------
       8. CLICK-TO-COPY HANDLER
       -------------------------------------------------------------------------- */
    const copyButtons = document.querySelectorAll('[data-copy]');

    copyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const textToCopy = btn.getAttribute('data-copy');
            if (textToCopy) {
                navigator.clipboard.writeText(textToCopy).then(() => {
                    showToast(`Copied to clipboard: ${textToCopy}`);
                }).catch(err => {
                    console.error('Failed to copy: ', err);
                });
            }
        });
    });

});
