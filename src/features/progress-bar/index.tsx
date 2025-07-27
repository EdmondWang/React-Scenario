import React, { useRef, useState } from 'react';
import './index.css';

const ProgressBarFeature: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const totalProgress = 100;
    const totalTime = 5; //second
    const span = totalProgress / totalTime;
    const progressRef = useRef(0);

    const updateProgress = () => {
        if (progressRef) {
            clearTimeout(progressRef.current);
        }

        progressRef.current = setTimeout(() => {
            setProgress((prev) => {
                const newProgress = prev + span;
                if (newProgress >= totalProgress) {
                    clearTimeout(progressRef.current);
                    return totalProgress;
                }
                updateProgress();
                return newProgress;
            });
        }, 1000);
    };

    const clickStart = () => {
        updateProgress();
    };

    return (
        <div>
            <h1>Progress Bar</h1>
            <button onClick={clickStart}>Start</button>
            <div className="progress-bar">
                <div
                    className="progress-completed"
                    style={{ width: `${progress}%` }}
                ></div>
                <span className="progress-label">
                    {progress} / {totalProgress}%
                </span>
            </div>
        </div>
    );
};

export default ProgressBarFeature;
