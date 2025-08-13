import React, { useState, useEffect } from 'react';
import './index.css';

const AnimationEventFeature = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [animationCount, setAnimationCount] = useState(0);
    const [eventLog, setEventLog] = useState<string[]>([]);
    const [animationType, setAnimationType] = useState<'bounce' | 'fade' | 'slide'>('bounce');

    // Add log and limit length
    const addEventLog = (message: string) => {
        setEventLog(prev => [message, ...prev].slice(0, 10));
    };

    // Reset animation
    const resetAnimation = () => {
        setIsVisible(false);
        setTimeout(() => setIsVisible(true), 100);
        setAnimationCount(prev => prev + 1);
    };

    // Animation event handlers
    const handleAnimationStart = () => {
        const message = '✅ onAnimationStart: Animation started';
        console.log(message);
        addEventLog(message);
    };

    const handleAnimationEnd = () => {
        const message = '✅ onAnimationEnd: Animation ended';
        console.log(message);
        addEventLog(message);
    };

    const handleAnimationIteration = () => {
        const message = '✅ onAnimationIteration: Animation repeated';
        console.log(message);
        addEventLog(message);
    };

    const handleTransitionEnd = () => {
        const message = '✅ onTransitionEnd: Transition ended';
        console.log(message);
        addEventLog(message);
    };

    // Reset animation when animation type changes
    useEffect(() => {
        resetAnimation();
    }, [animationType]);

    return (
        <div className="animation-demo-container">
            <h2>React Animation Events Demo</h2>
            <p>This example demonstrates all animation events supported by React and their triggering timings</p>

            <div className="controls">
                <div className="animation-type-selector">
                    <label>Select animation type:</label>
                    <select
                        value={animationType}
                        onChange={(e) => setAnimationType(e.target.value as 'bounce' | 'fade' | 'slide')}
                    >
                        <option value="bounce">Bounce Animation</option>
                        <option value="fade">Fade Animation</option>
                        <option value="slide">Slide Animation</option>
                    </select>
                </div>

                <button onClick={resetAnimation} className="reset-button">
                    Reset Animation
                </button>
            </div>

            <div className="animation-container">
                <div
                    key={`animated-box-${animationCount}`}
                    className={`animated-box ${isVisible ? 'visible' : ''} ${animationType}`}
                    onAnimationStart={handleAnimationStart}
                    onAnimationEnd={handleAnimationEnd}
                    onAnimationIteration={handleAnimationIteration}
                    onTransitionEnd={handleTransitionEnd}
                >
                    {animationType === 'bounce' && 'Bounce Effect'}
                    {animationType === 'fade' && 'Fade Effect'}
                    {animationType === 'slide' && 'Slide Effect'}
                </div>
            </div>

            <div className="event-log-container">
                <h3>Event Log</h3>
                <ul className="event-log">
                    {eventLog.map((log, index) => (
                        <li key={index} className="log-entry">{log}</li>
                    ))}
                </ul>
            </div>

            <div className="event-description">
                <h3>Animation Events Supported by React</h3>
                <ul className="event-list">
                    <li><strong>onAnimationStart</strong>: Triggered when CSS animation starts</li>
                    <li><strong>onAnimationEnd</strong>: Triggered when CSS animation ends</li>
                    <li><strong>onAnimationIteration</strong>: Triggered when CSS animation completes one iteration</li>
                    <li><strong>onTransitionEnd</strong>: Triggered when CSS transition ends</li>
                </ul>
            </div>
        </div>
    );
};

export default AnimationEventFeature;
