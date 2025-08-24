import React from 'react';
import styles from './index.module.css';

const ProgressBar: React.FC<{
    progress: number;
    totalProgress: number;
    className?: string;
}> = ({ progress, totalProgress, className }) => {
    const widthPer = (progress / totalProgress) * 100;
    return (
        <div className={`${styles['progress-bar']} ${className ?? ''}`}>
            <div
                className={styles['progress-completed']}
                style={{ width: `${widthPer}%` }}
            ></div>
            <span className={styles['progress-label']}>
                {progress} / {totalProgress}
            </span>
        </div>
    );
};

export default ProgressBar;
