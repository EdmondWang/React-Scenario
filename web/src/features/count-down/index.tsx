import { useState, useEffect, useRef } from 'react';

const CountDownFeature = () => {
    const countRef = useRef(5);
    const timerRef = useRef<number>(0);

    const [running, setRunning] = useState(true);
    const [count, setCount] = useState(5);

    useEffect(() => {
        timerRef.current = setInterval(() => {
            console.log('count', countRef.current);
            countRef.current = countRef.current - 1;
            setCount(countRef.current);
            if (countRef.current <= 0) {
                clearInterval(timerRef.current);
                setRunning(false);
            }
        }, 1000);

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        };
    }, []);

    const clickStart = () => {
        setRunning(true);
        setCount(5);
    };

    const clickPause = () => {
        setRunning(true);
    };

    const clickResume = () => {
        setRunning(true);
    };

    return (
        <div>
            <div>
                {count}, count down is {running ? 'running' : 'done'}
            </div>
            <div>
                <button onClick={clickStart}>Start</button>
                <button onClick={clickPause}>Pause</button>
                <button onClick={clickResume}>Resume</button>
            </div>
        </div>
    );
};

export default CountDownFeature;
