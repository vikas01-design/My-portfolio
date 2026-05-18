import React, { useState, useEffect, useRef } from 'react';

const Header = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuActive, setMenuActive] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const [indicatorStyle, setIndicatorStyle] = useState({});
    const navLinksRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const sections = document.querySelectorAll('section, footer');
            let current = 'home';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.clientHeight;
                if (window.pageYOffset >= (sectionTop - sectionHeight / 3)) {
                    current = section.getAttribute('id') || 'home';
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        // Trigger once to set initial state
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const updateIndicator = (element) => {
        if (!element || !navLinksRef.current) return;
        const itemRect = element.getBoundingClientRect();
        const navRect = navLinksRef.current.getBoundingClientRect();
        const offsetLeft = itemRect.left - navRect.left;
        setIndicatorStyle({
            width: `${itemRect.width}px`,
            transform: `translateX(${offsetLeft}px)`
        });
    };

    useEffect(() => {
        // Need a small timeout to let the DOM settle, especially on initial load
        const timer = setTimeout(() => {
            if (window.innerWidth > 768 && navLinksRef.current) {
                const activeLink = navLinksRef.current.querySelector('a.active');
                if (activeLink) updateIndicator(activeLink);
            }
        }, 100);
        return () => clearTimeout(timer);
    }, [activeSection]);

    const handleMouseEnter = (e) => {
        if (window.innerWidth > 768) {
            updateIndicator(e.currentTarget);
        }
    };

    const handleMouseLeave = () => {
        if (window.innerWidth > 768 && navLinksRef.current) {
            const activeLink = navLinksRef.current.querySelector('a.active');
            if (activeLink) updateIndicator(activeLink);
        }
    };

    return (
        <header className={`neu-header ${scrolled ? 'scrolled' : ''}`}>
            <nav className="navbar">
                <ul className={`nav-links ${menuActive ? 'active' : ''}`} ref={navLinksRef} onMouseLeave={handleMouseLeave}>
                    {['home', 'about', 'skills', 'projects', 'innovation'].map(id => (
                        <li key={id}>
                            <a 
                                href={`#${id}`} 
                                className={activeSection === id ? 'active' : ''}
                                onClick={() => setMenuActive(false)}
                                onMouseEnter={handleMouseEnter}
                            >
                                {id.charAt(0).toUpperCase() + id.slice(1)}
                            </a>
                        </li>
                    ))}
                    <div className="nav-indicator" style={indicatorStyle}></div>
                </ul>
                <div className="hamburger neu-btn" onClick={() => setMenuActive(!menuActive)}>
                    <i className={`fas ${menuActive ? 'fa-times' : 'fa-bars'}`}></i>
                </div>
            </nav>
        </header>
    );
};

export default Header;
