import React from 'react';
import './index.css';

const ProgressBar: React.FC<{
    progress: number;
    totalProgress: number;
    className?: string;
}> = ({ progress, totalProgress, className }) => {
    return (
        <div className={`progress-bar ${className ?? ''}`}>
            <div
                className="progress-completed"
                style={{ width: `${progress}%` }}
            ></div>
            <span className="progress-label">
                {progress} / {totalProgress}%
            </span>
        </div>
    );
};

export default ProgressBar;
