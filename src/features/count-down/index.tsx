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

    return (
        <div>
            {count}, count down is {running ? 'running' : 'done'}
        </div>
    );
};

export default CountDownFeature;
