import React from 'react';

const ParallaxBackground = () => {
    return (
        <div className="parallax-container">
            <div className="shape shape-1" data-speed="-2"></div>
            <div className="shape shape-2" data-speed="5"></div>
            <div className="shape shape-3" data-speed="2"></div>
            <div className="shape shape-4" data-speed="-4"></div>
        </div>
    );
};

export default ParallaxBackground;
