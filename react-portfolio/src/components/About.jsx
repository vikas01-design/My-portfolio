import React from 'react';

const About = () => {
    return (
        <section id="about" className="about section">
            <h2 className="section-title reveal">About <span className="accent-color">Me</span></h2>
            <div className="about-container">
                <div className="about-card neu-flat reveal stagger">
                    <div className="icon-wrapper neu-pressed"><i className="fas fa-user-circle accent-color"></i></div>
                    <h3>Profile</h3>
                    <p>Passionate about building real-world solutions such as automation systems, productivity tools,
                        and energy innovations. Skilled in problem-solving, workflow automation, and developing
                        impactful technology-driven projects.</p>
                </div>

                <div className="about-card neu-flat reveal stagger">
                    <div className="icon-wrapper neu-pressed"><i className="fas fa-graduation-cap accent-color"></i></div>
                    <h3>Education</h3>
                    <div className="timeline">
                        <div className="timeline-item">
                            <h4>Bachelor of Technology</h4>
                            <p className="institution">Aurora deemed to be University</p>
                            <span className="neu-tag date">2025 - 2029</span>
                        </div>
                        <div className="timeline-item mt-3">
                            <h4>Technology Partner</h4>
                            <p className="institution">nxtwave institute of advanced technologies</p>
                        </div>
                    </div>
                </div>

                <div className="about-card neu-flat reveal stagger">
                    <div className="icon-wrapper neu-pressed"><i className="fas fa-language accent-color"></i></div>
                    <h3>Languages</h3>
                    <ul className="language-list">
                        <li><span className="lang">English</span> <span
                                className="proficiency accent-color font-weight-bold">Fluent</span></li>
                        <li><span className="lang">German</span> <span
                                className="proficiency accent-color font-weight-bold">Basic</span></li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default About;
