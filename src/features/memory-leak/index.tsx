import React, { useState, useEffect } from 'react';
import './styles.css';

const LeakDemo = () => {
    console.log('LeakDemo component render function is called');

    const [count, setCount] = useState(1);
    const [leakCount, setLeakCount] = useState(0);
    const [renderCount, setRenderCount] = useState(0);

    // Track component renders
    useEffect(() => {
        setRenderCount(prev => prev + 1);
    }, []); // Empty dependency array to run only once on mount

    // Uncleaned timer (memory leak point)
    useEffect(() => {
        console.log('Creating setInterval timer');
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const timer = setInterval(() => {
            console.log('Leaking memory...');
            setLeakCount(prev => prev + 1);
        }, 1000);

        // Intentionally not returning cleanup function
        // return () => clearInterval(timer);
    }, []);

    // Unremoved event listener (memory leak point)
    useEffect(() => {
        const handleResize = () => console.log('Window resized');
        window.addEventListener('resize', handleResize);

        // Intentionally not cleaning up event listener
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="leak-demo-container">
            <div className="card">
                <h1 className="title">Memory Leak Demo Component</h1>
                <div className="info-section">
                    <div className="info-item">
                        <span className="label">Timer Leaks:</span>
                        <span className="value leak-count">{leakCount}</span>
                    </div>
                    <div className="info-item">
                        <span className="label">Render Count:</span>
                        <span className="value">{renderCount}</span>
                    </div>
                </div>
                <button
                    className="reload-button"
                    onClick={() => {
                        console.log('Forcing re-render');
                        setCount((prev: number) => prev + 1);
                    }}
                >
                    Re-render {count}
                </button>
                <div className="leak-indicators">
                    <div className="indicator-item">
                        <div className="indicator active"></div>
                        <span>Uncleaned Timer</span>
                    </div>
                    <div className="indicator-item">
                        <div className="indicator active"></div>
                        <span>Unremoved Listener</span>
                    </div>
                </div>
                <div className="warning-text">
                    <p>⚠️ This component demonstrates memory leaks. Check console for details.</p>
                </div>
            </div>
        </div>
    );
};


export default LeakDemo;
