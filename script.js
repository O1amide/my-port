// Smooth scrolling for navigation
function scrollToContact() {
    document.getElementById('contact').scrollIntoView({
        behavior: 'smooth'
    });
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    // Simple validation
    if (!data.name || !data.businessName || !data.whatsappNumber || !data.whatSell) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Simulate form submission
    alert('Thank you for your interest! I will contact you within 24 hours to discuss your project.');
    
    // Reset form
    event.target.reset();
}

// Demo alert function
function showDemoAlert() {
    alert("This is a demo");
}

// Add smooth scrolling to all anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Add loading animation to portfolio cards
    const portfolioCards = document.querySelectorAll('.portfolio-card');
    
    portfolioCards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 100);
    });
    
    // Add hover effects to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 8px 25px rgba(0,0,0,0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
        });
    });
    
    // Add typing effect to hero title (only on main page)
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const text = heroTitle.textContent;
        heroTitle.textContent = '';
        heroTitle.style.borderRight = '2px solid #27ae60';
        
        let i = 0;
        function typeWriter() {
            if (i < text.length) {
                heroTitle.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            } else {
                setTimeout(() => {
                    heroTitle.style.borderRight = 'none';
                }, 500);
            }
        }
        
        setTimeout(typeWriter, 500);
    }
});

// Add scroll effect for demo watermark
window.addEventListener('scroll', function() {
    const watermark = document.querySelector('.demo-watermark-fixed');
    if (watermark) {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        
        watermark.style.transform = `translateY(${parallax}px)`;
    }
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe sections for fade-in effect
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.demo-section, .resume-section, .testimonials, .contact');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Add CSS class for fade-in animation
const style = document.createElement('style');
style.textContent = `
    .fade-in {
        animation: fadeInUp 0.8s ease forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Mobile menu toggle (if needed for future enhancements)
function toggleMobileMenu() {
    const menu = document.querySelector('.mobile-menu');
    if (menu) {
        menu.classList.toggle('active');
    }
}

// Add form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePhone(phone) {
    const re = /^[\d\s\-\+\(\)]+$/;
    return re.test(phone) && phone.length >= 10;
}

// Enhanced form validation
function validateForm(formData) {
    const errors = [];
    
    if (!formData.name || formData.name.trim().length < 2) {
        errors.push('Name must be at least 2 characters long');
    }
    
    if (!formData.businessName || formData.businessName.trim().length < 2) {
        errors.push('Business name must be at least 2 characters long');
    }
    
    if (!formData.whatsappNumber || !validatePhone(formData.whatsappNumber)) {
        errors.push('Please enter a valid WhatsApp number');
    }
    
    if (!formData.whatSell || formData.whatSell.trim().length < 5) {
        errors.push('Please provide more details about what you sell');
    }
    
    return errors;
}

// Add loading state to buttons
function setButtonLoading(button, isLoading) {
    if (isLoading) {
        button.disabled = true;
        button.textContent = 'Loading...';
        button.style.opacity = '0.7';
    } else {
        button.disabled = false;
        button.style.opacity = '1';
    }
}

// Add success message display
function showSuccessMessage(message) {
    const successDiv = document.createElement('div');
    successDiv.className = 'success-message';
    successDiv.textContent = message;
    successDiv.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #27ae60;
        color: white;
        padding: 1rem 2rem;
        border-radius: 8px;
        z-index: 9999;
        box-shadow: 0 4px 12px rgba(0,0,0,0.2);
        animation: slideIn 0.3s ease;
    `;
    
    document.body.appendChild(successDiv);
    
    setTimeout(() => {
        successDiv.remove();
    }, 3000);
}

// Navigation Menu Functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!navToggle || !navMenu) return;
    
    // Toggle navigation menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        
        // Update toggle icon
        const icon = navToggle.querySelector('span');
        if (icon) {
            icon.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('span');
            if (icon) {
                icon.textContent = '☰';
            }
        }
    });
    
    // Close menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            const icon = navToggle.querySelector('span');
            if (icon) {
                icon.textContent = '☰';
            }
        });
    });
    
    // Highlight active page
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage || (currentPage === '' && linkPage === 'index.html')) {
            link.classList.add('active');
        }
    });
}

// Enhanced Device Detection and Optimization
function optimizeForDevice() {
    const userAgent = navigator.userAgent;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent);
    const isAndroid = /Android/.test(userAgent);
    const isMobile = /Mobi|Android/i.test(userAgent);
    const isTablet = /iPad|Android(?!.*Mobile)/i.test(userAgent);
    
    // Add device-specific classes
    document.body.classList.add(
        isIOS ? 'ios-device' : '',
        isAndroid ? 'android-device' : '',
        isMobile ? 'mobile-device' : '',
        isTablet ? 'tablet-device' : ''
    );
    
    // Optimize touch events for mobile
    if (isMobile) {
        // Add touch-friendly styles
        const style = document.createElement('style');
        style.textContent = `
            .mobile-device .cta-button,
            .mobile-device .nav-link,
            .mobile-device .portfolio-link {
                min-height: 44px;
                min-width: 44px;
                display: inline-flex;
                align-items: center;
                justify-content: center;
            }
            
            .mobile-device .form-group input,
            .mobile-device .form-group textarea {
                font-size: 16px; /* Prevents zoom on iOS */
            }
            
            .mobile-device .nav-menu {
                -webkit-tap-highlight-color: transparent;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Handle viewport height on mobile browsers
    if (isMobile) {
        function setVH() {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        }
        
        setVH();
        window.addEventListener('resize', setVH);
        window.addEventListener('orientationchange', () => {
            setTimeout(setVH, 100);
        });
    }
}

// Enhanced Responsive Image Loading
function optimizeImages() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        // Add loading attribute for better performance
        if (!img.hasAttribute('loading')) {
            img.setAttribute('loading', 'lazy');
        }
        
        // Handle image load errors
        img.addEventListener('error', function() {
            this.style.display = 'none';
        });
        
        // Add fade-in effect when image loads
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.3s ease';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });
}

// Performance Optimization
function optimizePerformance() {
    // Debounce scroll events
    let scrollTimeout;
    const originalScrollHandler = window.onscroll;
    
    window.onscroll = function() {
        if (scrollTimeout) {
            clearTimeout(scrollTimeout);
        }
        
        scrollTimeout = setTimeout(() => {
            if (originalScrollHandler) {
                originalScrollHandler();
            }
        }, 16); // ~60fps
    };
    
    // Optimize animations for reduced motion preference
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const style = document.createElement('style');
        style.textContent = `
            *, *::before, *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
}

// Enhanced Accessibility
function enhanceAccessibility() {
    // Add skip link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: #000;
        color: #fff;
        padding: 8px;
        text-decoration: none;
        z-index: 10000;
        border-radius: 4px;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
    
    // Add main content landmark
    const mainContent = document.querySelector('.hero') || document.querySelector('main') || document.body;
    if (mainContent && !mainContent.id) {
        mainContent.id = 'main-content';
    }
    
    // Enhance keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            // Close navigation menu on escape
            const navMenu = document.querySelector('.nav-menu');
            if (navMenu && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                const navToggle = document.querySelector('.nav-toggle');
                if (navToggle) {
                    navToggle.focus();
                    const icon = navToggle.querySelector('span');
                    if (icon) {
                        icon.textContent = '☰';
                    }
                }
            }
        }
    });
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', function() {
    // Existing initialization code...
    
    // Add new initialization functions
    initializeNavigation();
    optimizeForDevice();
    optimizeImages();
    optimizePerformance();
    enhanceAccessibility();
    
    // Existing code continues...
});