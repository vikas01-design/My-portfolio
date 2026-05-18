import React, { useEffect } from 'react';
import ParallaxBackground from './components/ParallaxBackground';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Innovation from './components/Innovation';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // 1. Reveal on Scroll (with optional dynamic staggering)
    const reveal = () => {
        const reveals = document.querySelectorAll('.reveal');
        const windowHeight = window.innerHeight;
        const elementVisible = 100;
        
        const staggerGroups = new Map();

        reveals.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            
            if (elementTop < windowHeight - elementVisible) {
                if (el.classList.contains('stagger')) {
                    const parent = el.parentElement;
                    if (!staggerGroups.has(parent)) {
                        staggerGroups.set(parent, []);
                    }
                    staggerGroups.get(parent).push(el);
                } else {
                    el.classList.add('active');
                }
            }
        });

        staggerGroups.forEach(group => {
            const inactiveGroup = group.filter(el => !el.classList.contains('active'));
            inactiveGroup.forEach((el, index) => {
                const delay = 0.1 + (index * 0.15);
                el.style.transitionDelay = `${delay}s`;
                setTimeout(() => {
                    el.classList.add('active');
                }, 10);
            });
        });
    };

    window.addEventListener('scroll', reveal);
    // Timeout to ensure DOM is ready
    setTimeout(reveal, 100);

    // 2. Parallax Scrolling Effect
    const parallaxElements = document.querySelectorAll('.shape, [data-speed]');
    const handleParallax = () => {
        const scrollY = window.scrollY;
        if (window.innerWidth > 768) {
            parallaxElements.forEach(el => {
                const speed = el.getAttribute('data-speed') || 2;
                const yPos = -(scrollY * speed / 20);
                el.style.transform = `translateY(${yPos}px)`;
            });
        }
    };
    window.addEventListener('scroll', handleParallax);

    return () => {
      window.removeEventListener('scroll', reveal);
      window.removeEventListener('scroll', handleParallax);
    };
  }, []);

  return (
    <>
      <ParallaxBackground />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Innovation />
      </main>
      <Footer />
    </>
  );
}

export default App;
