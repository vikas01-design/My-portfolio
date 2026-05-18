import React from 'react';

const Projects = () => {
    return (
        <section id="projects" className="projects section">
            <h2 className="section-title reveal">Featured <span className="accent-color">Projects</span></h2>

            <div className="project-category">
                <h3 className="category-title reveal">
                    <div className="icon-wrapper neu-pressed small"><i className="fas fa-laptop-code accent-color"></i></div>
                    Web Development
                </h3>
                <div className="project-grid">
                    <div className="project-card neu-flat reveal stagger">
                        <div className="project-content">
                            <h4>MyStep - Student Roadmap Planner</h4>
                            <p>Web-based roadmap planner for students to organize goals and track progress.</p>
                        </div>
                        <a href="https://mystep-rho.vercel.app/" target="_blank" rel="noreferrer" className="project-link neu-btn-circle"><i
                                className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="project-card neu-flat reveal stagger">
                        <div className="project-content">
                            <h4>Unified App Portal</h4>
                            <p>All-in-One Access Platform. Centralized web platform for accessing multiple apps with
                                improved usability.</p>
                        </div>
                        <a href="https://uap-iota.vercel.app/#" target="_blank" rel="noreferrer" className="project-link neu-btn-circle"><i
                                className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="project-card neu-flat reveal stagger">
                        <div className="project-content">
                            <h4>MoodSync — AI Powered Mood & Productivity Companion</h4>
                            <p>Designed a React-based web application that analyzes user moods and generates personalized playlists through AI-driven API integration.</p>
                        </div>
                        <a href="https://mood-sync-rosy.vercel.app/" target="_blank" rel="noreferrer" className="project-link neu-btn-circle"><i
                                className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>

            <div className="project-category mt-5">
                <h3 className="category-title reveal">
                    <div className="icon-wrapper neu-pressed small"><i className="fab fa-python accent-color"></i></div> Python
                </h3>
                <div className="project-grid">
                    <div className="project-card neu-flat reveal stagger">
                        <div className="project-content">
                            <h4>Password Strength Validator</h4>
                            <p>Checks password security based on complexity rules.</p>
                        </div>
                        <a href="#" className="project-link neu-btn-circle"><i className="fas fa-arrow-right"></i></a>
                    </div>
                    <div className="project-card neu-flat reveal stagger">
                        <div className="project-content">
                            <h4>Zodiac Compatibility Calculator</h4>
                            <p>Identifies zodiac sign from user's birth date and calculates compatibility.</p>
                        </div>
                        <a href="#" className="project-link neu-btn-circle"><i className="fas fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
