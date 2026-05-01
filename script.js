// --- Navigation & Header ---
const header = document.querySelector('.neu-header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navItems = document.querySelectorAll('.nav-links li a');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Toggle icon between bars and times (close)
    const icon = hamburger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Close mobile menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = hamburger.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// Active Navigation Link Update on Scroll
const sections = document.querySelectorAll('section, footer');
const indicator = document.querySelector('.nav-indicator');

function updateMagicIndicator(activeItem) {
    if (!indicator || !activeItem) return;
    // Calculate relative position inside navLinks
    const itemRect = activeItem.getBoundingClientRect();
    const navRect = navLinks.getBoundingClientRect();
    // Offset left is item's left minus nav's left
    const offsetLeft = itemRect.left - navRect.left;
    
    indicator.style.width = `${itemRect.width}px`;
    indicator.style.transform = `translateX(${offsetLeft}px)`;
}

window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        // Offset for sticky header
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            current = section.getAttribute('id');
        }
    });

    let currentActive = null;
    navItems.forEach(li => {
        li.classList.remove('active');
        if (li.getAttribute('href') === `#${current}`) {
            li.classList.add('active');
            currentActive = li;
        }
    });
    
    if (currentActive && window.innerWidth > 768) {
        updateMagicIndicator(currentActive);
    }
});

// Magic Indicator Hover Effects
navItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (window.innerWidth > 768) {
            updateMagicIndicator(item);
        }
    });
});

navLinks.addEventListener('mouseleave', () => {
    if (window.innerWidth > 768) {
        const active = document.querySelector('.nav-links li a.active');
        updateMagicIndicator(active);
    }
});

// Init magic indicator
window.addEventListener('load', () => {
    setTimeout(() => {
        if (window.innerWidth > 768) {
            const active = document.querySelector('.nav-links li a.active');
            if (active) updateMagicIndicator(active);
        }
    }, 100);
});


// --- Advanced Animations ---

// 1. Reveal on Scroll (with optional dynamic staggering)
function reveal() {
    const reveals = document.querySelectorAll('.reveal');
    const windowHeight = window.innerHeight;
    const elementVisible = 100;
    
    // Group stagger elements by their parent container to stagger them properly
    const staggerGroups = new Map();

    reveals.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - elementVisible) {
            // Check if it's part of a stagger group (e.g., project cards in a grid)
            if (el.classList.contains('stagger')) {
                const parent = el.parentElement;
                if (!staggerGroups.has(parent)) {
                    staggerGroups.set(parent, []);
                }
                staggerGroups.get(parent).push(el);
            } else {
                // Normal reveal
                el.classList.add('active');
            }
        }
    });

    // Apply staggered delays
    staggerGroups.forEach(group => {
        // Only stagger those that aren't already active
        const inactiveGroup = group.filter(el => !el.classList.contains('active'));
        inactiveGroup.forEach((el, index) => {
            // Base delay of 0.1s + 0.15s per item in the group
            const delay = 0.1 + (index * 0.15);
            el.style.transitionDelay = `${delay}s`;
            
            // Small timeout to ensure transition delay is applied before class is added
            setTimeout(() => {
                el.classList.add('active');
            }, 10);
        });
    });
}

window.addEventListener('scroll', reveal);
// Trigger once on load
reveal();


// 2. Parallax Scrolling Effect
const parallaxElements = document.querySelectorAll('.shape, [data-speed]');

window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    
    // Only run parallax on desktop/tablet for performance, unless specifically lightweight
    if (window.innerWidth > 768) {
        parallaxElements.forEach(el => {
            // Get speed from data attribute, default to 2
            const speed = el.getAttribute('data-speed') || 2;
            
            // Calculate translation (moving opposite to scroll direction if positive speed)
            const yPos = -(scrollY * speed / 20);
            
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
});

// 3. Typewriter Effect
const typeTarget = document.querySelector('.typewriter-target');
const typeCursor = document.querySelector('.typewriter-cursor');
const homeSection = document.querySelector('#home');

if (typeTarget && typeCursor && homeSection) {
    const textToType = "Web Developer & Innovator";
    let charIndex = 0;
    let isTyping = false;
    
    function typeWriter() {
        if (charIndex < textToType.length) {
            let char = textToType.charAt(charIndex);
            
            // Handle the ampersand special styling
            if (char === '&') {
                typeTarget.innerHTML += `<span class="accent-color">&</span>`;
            } else {
                typeTarget.innerHTML += char;
            }
            
            charIndex++;
            setTimeout(typeWriter, 100); // Typing speed
        } else {
            // Typing finished, stop the blinking cursor
            typeCursor.style.animation = 'none';
            typeCursor.style.opacity = '0';
            isTyping = false;
        }
    }
    
    function startTypewriter() {
        if (isTyping) return; // Prevent multiple instances
        isTyping = true;
        
        // Reset variables and DOM
        typeTarget.innerHTML = '';
        charIndex = 0;
        typeCursor.style.animation = 'blink 0.75s step-end infinite';
        typeCursor.style.opacity = '1';
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
    
    // Observe the home section
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                startTypewriter();
            }
        });
    }, { threshold: 0.3 }); // Trigger when 30% of the section is visible
    
    observer.observe(homeSection);
}
