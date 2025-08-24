import React, { useRef, useState, useEffect } from 'react';
import ProgressBar from '../../components/ProgressBar';

const CompeteViaSetIntervalJsBar: React.FC = () => {
    const totalProgress = 200;
    const totalTime = 2 * 1000; // 2 seconds
    const interval = 50;
    const execTimes = Math.ceil(totalTime / interval);
    const span = Math.ceil(totalProgress / execTimes);

    const [progress, setProgress] = useState(0);
    const progressRef = useRef(0);

    const timerRef = useRef<number>(0);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            setProgress((p) => p + span);
            progressRef.current += span;
            if (progressRef.current >= totalProgress) {
                clearInterval(timerRef.current);
                setProgress(totalProgress);
            }
        }, interval);

        return () => {
            clearInterval(timerRef.current);
        };
    }, []);

    return (
        <div>
            <ProgressBar progress={progress} totalProgress={totalProgress} />
        </div>
    );
};

export default CompeteViaSetIntervalJsBar;
