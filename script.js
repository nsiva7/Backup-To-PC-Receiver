// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Scroll reveal animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

// Observe all scroll reveal elements
document.querySelectorAll('.scroll-reveal').forEach(element => {
    observer.observe(element);
});

// Add scroll reveal class to sections on page load
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('scroll-reveal');
    });
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        if (window.pageYOffset >= (sectionTop - navbarHeight - 200)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Add fade-in animation to hero content
window.addEventListener('load', () => {
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        heroContent.classList.add('fade-in');
    }
});

// Mobile menu toggle (for future implementation)
const createMobileMenu = () => {
    const navbar = document.querySelector('.navbar .container');
    const navLinks = document.querySelector('.nav-links');
    
    // Only create mobile menu on small screens
    if (window.innerWidth <= 768 && !document.querySelector('.mobile-menu-toggle')) {
        const menuToggle = document.createElement('button');
        menuToggle.className = 'mobile-menu-toggle';
        menuToggle.innerHTML = '☰';
        menuToggle.style.cssText = `
            display: block;
            background: none;
            border: none;
            font-size: 1.5rem;
            color: var(--primary-color);
            cursor: pointer;
        `;
        
        navbar.insertBefore(menuToggle, navLinks);
        
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-active');
        });
    }
};

// Handle window resize
let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        createMobileMenu();
    }, 250);
});

// Initialize on page load
createMobileMenu();

// Add loading animation to images
document.querySelectorAll('img[loading="lazy"]').forEach(img => {
    img.addEventListener('load', function() {
        this.style.opacity = '0';
        this.style.transition = 'opacity 0.3s ease';
        setTimeout(() => {
            this.style.opacity = '1';
        }, 10);
    });
});

// Console message
console.log('%cB2PC - Backup To PC v2.0.0', 'color: #4f46e5; font-size: 20px; font-weight: bold;');
console.log('%cDeveloped by Siva Nimmala', 'color: #6b7280; font-size: 14px;');
