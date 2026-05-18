import React from 'react';

const Innovation = () => {
    return (
        <section id="innovation" className="innovation section">
            <h2 className="section-title reveal">Innovation <span className="accent-color">& Idea</span></h2>
            <div className="innovation-card neu-flat reveal">
                <div className="innovation-icon neu-pressed" data-speed="1">
                    <i className="fas fa-bolt accent-color"></i>
                </div>
                <div className="innovation-details">
                    <h3>RF Energy Harvesting System (Radi-Energy)</h3>
                    <ul>
                        <li className="neu-list-item">
                            <div className="check-wrap neu-pressed"><i className="fas fa-check accent-color"></i></div>
                            <span>Designed a system to convert ambient RF signals into usable electrical energy.</span>
                        </li>
                        <li className="neu-list-item">
                            <div className="check-wrap neu-pressed"><i className="fas fa-check accent-color"></i></div>
                            <span>Focused on sustainable and alternative power solutions.</span>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Innovation;
