import React, { useEffect, useRef, useState } from 'react';

const Hero = () => {
    const targetRef = useRef(null);
    const cursorRef = useRef(null);
    const homeRef = useRef(null);
    // eslint-disable-next-line no-unused-vars
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        const textToType = "Web Developer & Innovator";
        let charIndex = 0;
        let timeoutId;
        let isCancelled = false;
        let isTypingLocal = false;

        const typeWriter = () => {
            if (isCancelled || !targetRef.current || !cursorRef.current) return;

            if (charIndex < textToType.length) {
                let char = textToType.charAt(charIndex);
                if (char === '&') {
                    targetRef.current.innerHTML += `<span class="accent-color">&</span>`;
                } else {
                    targetRef.current.innerHTML += char;
                }
                charIndex++;
                timeoutId = setTimeout(typeWriter, 100);
            } else {
                cursorRef.current.style.animation = 'none';
                cursorRef.current.style.opacity = '0';
                isTypingLocal = false;
                setIsTyping(false);
            }
        };

        const startTypewriter = () => {
            if (isTypingLocal || !targetRef.current || !cursorRef.current) return;
            isTypingLocal = true;
            setIsTyping(true);
            
            targetRef.current.innerHTML = '';
            charIndex = 0;
            cursorRef.current.style.animation = 'blink 0.75s step-end infinite';
            cursorRef.current.style.opacity = '1';
            
            timeoutId = setTimeout(typeWriter, 1000);
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    startTypewriter();
                }
            });
        }, { threshold: 0.3 });

        if (homeRef.current) {
            observer.observe(homeRef.current);
        }

        return () => {
            isCancelled = true;
            clearTimeout(timeoutId);
            if (homeRef.current) {
                observer.unobserve(homeRef.current);
            }
        };
    }, []);

    return (
        <section id="home" className="hero section" ref={homeRef}>
            <div className="hero-content" data-speed="3">
                <h2 className="greeting reveal">Hello, I'm</h2>
                <h1 className="name reveal" style={{ '--d': '0.1s' }}>Vikas Elle</h1>
                <h3 className="role reveal" style={{ '--d': '0.2s' }}>
                    <span className="typewriter-target" ref={targetRef}></span>
                    <span className="typewriter-cursor" ref={cursorRef}>|</span>
                </h3>
                <p className="summary reveal" style={{ '--d': '0.3s' }}>
                    Aspiring developer and innovator with hands-on experience in web development, Python, and AI-powered automation. Passionate about building real-world solutions.
                </p>
                <div className="cta-buttons reveal" style={{ '--d': '0.4s' }}>
                    <a href="#projects" className="btn neu-btn-primary">View My Work</a>
                    <a href="#contact" className="btn neu-btn-secondary">Contact Me</a>
                </div>
            </div>
            <div className="hero-image-container" data-speed="-1">
            </div>
        </section>
    );
};

export default Hero;
