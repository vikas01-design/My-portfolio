import React from 'react';

const Footer = () => {
    return (
        <footer id="contact" className="contact">
            <div className="contact-container neu-flat reveal">
                <h2>Let's Connect</h2>
                <p>Feel free to reach out for collaborations or just a friendly chat!</p>

                <div className="contact-links">
                    <a href="tel:9014896508" className="contact-item neu-btn reveal stagger">
                        <i className="fas fa-phone accent-color"></i>
                        <span>9014896508</span>
                    </a>
                    <a href="mailto:vikaselle196@gmail.com" className="contact-item neu-btn reveal stagger">
                        <i className="fas fa-envelope accent-color"></i>
                        <span>Email Me</span>
                    </a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="contact-item neu-btn reveal stagger">
                        <i className="fab fa-linkedin accent-color"></i>
                        <span>LinkedIn</span>
                    </a>
                    <a href="https://www.github.com" target="_blank" rel="noreferrer" className="contact-item neu-btn reveal stagger">
                        <i className="fab fa-github accent-color"></i>
                        <span>GitHub</span>
                    </a>
                    <div className="contact-item location neu-pressed reveal stagger">
                        <i className="fas fa-map-marker-alt accent-color"></i>
                        <span>Hyderabad</span>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; 2026 Vikas Elle. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
