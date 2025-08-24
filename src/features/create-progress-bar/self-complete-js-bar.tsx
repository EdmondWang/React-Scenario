import React, { useRef, useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';

const SelfCompeteJsBar: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const progressTimerRef = useRef<number>(0);

    const totalProgress = 100;
    const totalTime = 2000; // milliseconds
    const interval = 50; // milliseconds
    const updateTimes = totalTime / interval;
    const span = Math.floor(totalProgress / updateTimes);

    const updateProgress = () => {
        if (progressTimerRef) {
            clearTimeout(progressTimerRef.current);
        }

        progressTimerRef.current = setTimeout(() => {
            setProgress((prev) => {
                const newProgress = prev + span;
                if (newProgress >= totalProgress) {
                    clearTimeout(progressTimerRef.current);
                    return totalProgress;
                }
                updateProgress();
                return newProgress;
            });
        }, interval);
    };

    useEffect(() => {
        updateProgress();
    });

    return (
        <div>
            <ProgressBar progress={progress} totalProgress={totalProgress} />
        </div>
    );
};

export default SelfCompeteJsBar;
