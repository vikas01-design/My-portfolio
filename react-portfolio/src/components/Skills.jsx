import React from 'react';

const Skills = () => {
    return (
        <section id="skills" className="skills section">
            <h2 className="section-title reveal">My <span className="accent-color">Skills</span></h2>
            <div className="skills-grid">
                <div className="skill-tag neu-btn reveal stagger"><span>HTML</span><i className="fab fa-html5"></i></div>
                <div className="skill-tag neu-btn reveal stagger"><span>CSS</span><i className="fab fa-css3-alt"></i></div>
                <div className="skill-tag neu-btn reveal stagger"><span>JavaScript</span><i className="fab fa-js"></i></div>
                <div className="skill-tag neu-btn reveal stagger"><span>Python</span><i className="fab fa-python"></i></div>
                <div className="skill-tag neu-btn reveal stagger"><span>DBMS</span><i className="fas fa-database"></i></div>
                <div className="skill-tag neu-btn reveal stagger"><span>3D-Modeling in Fusion</span><i
                        className="fas fa-cube"></i></div>
                <div className="skill-tag neu-btn reveal stagger"><span>Gen-AI</span><i className="fas fa-brain"></i></div>
            </div>
        </section>
    );
};

export default Skills;
