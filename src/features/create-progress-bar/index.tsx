import React, { useRef, useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';
import './index.css';

const CreateProgressBarFeature: React.FC = () => {
    const [progress, setProgress] = useState(0);
    const totalProgress = 100;
    const totalTime = 5; //second
    const span = totalProgress / totalTime;
    const progressRef = useRef(0);
    const progressValueRef = useRef(0);

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

    useEffect(() => {
        progressValueRef.current = progress;
    }, [progress]);

    useEffect(() => {
        const timer = setTimeout(() => {
            console.log('progress', progressValueRef.current);
        }, 8000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <h1>Create Progress Bar</h1>
            <button onClick={clickStart}>Start</button>
            <ProgressBar
                progress={progressValueRef.current}
                totalProgress={totalProgress}
            />
        </div>
    );
};

export default CreateProgressBarFeature;
