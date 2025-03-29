// Main JavaScript file for the landing page

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile navigation toggle (for responsive design)
    const createMobileNav = () => {
        const nav = document.querySelector('nav');
        const mobileNavButton = document.createElement('div');
        mobileNavButton.className = 'mobile-nav-toggle';
        mobileNavButton.innerHTML = '<span></span><span></span><span></span>';
        
        mobileNavButton.addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('mobile-active');
            this.classList.toggle('active');
        });
        
        nav.appendChild(mobileNavButton);
    }
    
    // Show navbar on scroll up, hide on scroll down
    let lastScrollTop = 0;
    const handleNavScroll = () => {
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
            
            if (currentScroll > lastScrollTop) {
                // Scrolling down
                header.style.transform = 'translateY(-100%)';
            } else {
                // Scrolling up
                header.style.transform = 'translateY(0)';
            }
            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });
    }
    
    // Smooth scrolling for anchor links
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    // Add animation to elements when they come into view
    const initScrollAnimation = () => {
        const animatedElements = document.querySelectorAll('.feature-card, .collection-item, .testimonial');
        
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });
        
        animatedElements.forEach(element => {
            element.classList.add('animate-on-scroll');
            observer.observe(element);
        });
    }
    
    // Initialize functions based on screen size
    const init = () => {
        if (window.innerWidth <= 1024) {
            createMobileNav();
        }
        
        handleNavScroll();
        initSmoothScroll();
        initScrollAnimation();
        
        // Add CSS for animation classes
        const style = document.createElement('style');
        style.textContent = `
            .animate-on-scroll {
                opacity: 0;
                transform: translateY(30px);
                transition: opacity 0.6s ease, transform 0.6s ease;
            }
            
            .animate-on-scroll.visible {
                opacity: 1;
                transform: translateY(0);
            }
            
            .mobile-nav-toggle {
                display: none;
                flex-direction: column;
                justify-content: space-between;
                width: 30px;
                height: 21px;
                cursor: pointer;
            }
            
            .mobile-nav-toggle span {
                display: block;
                height: 3px;
                width: 100%;
                background-color: var(--secondary-color);
                transition: all 0.3s ease;
            }
            
            .mobile-nav-toggle.active span:nth-child(1) {
                transform: translateY(9px) rotate(45deg);
            }
            
            .mobile-nav-toggle.active span:nth-child(2) {
                opacity: 0;
            }
            
            .mobile-nav-toggle.active span:nth-child(3) {
                transform: translateY(-9px) rotate(-45deg);
            }
            
            @media (max-width: 1024px) {
                .mobile-nav-toggle {
                    display: flex;
                }
                
                .nav-links {
                    position: absolute;
                    top: 100%;
                    left: 0;
                    width: 100%;
                    background: var(--white);
                    flex-direction: column;
                    align-items: center;
                    padding: 20px 0;
                    box-shadow: 0 5px 10px rgba(0,0,0,0.1);
                    transform: translateY(-200%);
                    opacity: 0;
                    transition: all 0.3s ease;
                }
                
                .nav-links.mobile-active {
                    transform: translateY(0);
                    opacity: 1;
                    display: flex;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    init();
}); 