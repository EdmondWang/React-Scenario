import React, { useState } from 'react';
import './index.css';

const AnimationEventFeature = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false);

    // Event handlers
    const handleAnimationStart = () => {
        console.log('Animation started!');
        setIsAnimating(true);
    };

    const handleAnimationEnd = () => {
        console.log('Animation ended!');
        setIsAnimating(false);
    };

    const handleTransitionEnd = () => {
        console.log('Transition ended!');
    };

    return (
        <div className="container">
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? 'Hide element' : 'Show element'}
            </button>
            <div
                className={`box ${isVisible ? 'visible' : ''}`}
                onAnimationStart={handleAnimationStart}
                onAnimationEnd={handleAnimationEnd}
                onTransitionEnd={handleTransitionEnd}
            >
                Animated element
            </div>
        </div>
    );
};

export default AnimationEventFeature;
