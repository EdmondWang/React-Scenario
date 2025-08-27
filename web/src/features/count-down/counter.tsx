import { useState, useEffect, useRef } from 'react';

export interface CounterProps {
    countDownNum: number;
    onCountDownComplete?: () => void;
}

export const Counter: React.FC<CounterProps> = ({
    countDownNum,
    onCountDownComplete,
}) => {
    const timerRef = useRef<number>(0);
    const [running, setRunning] = useState<boolean>(false);
    const [count, setCount] = useState<number>(countDownNum);
    const countRef = useRef<number>(countDownNum);

    const clearTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = 0;
        }
    };

    const completeCount = () => {
        clearTimer();
        if (typeof onCountDownComplete === 'function') {
            onCountDownComplete();
        }
        setRunning(false);
    };

    useEffect(() => {
        if (!running || timerRef.current) {
            clearTimer();
            return;
        }

        if (countRef.current <= 0) {
            completeCount();
            return;
        }

        timerRef.current = setInterval(() => {
            if (countRef.current <= 0) {
                completeCount();
                return;
            }

            countRef.current = countRef.current - 1;
            setCount(countRef.current);
        }, 1000);

        return () => {
            clearTimer();
        };
    }, [running, onCountDownComplete]);

    useEffect(() => {
        setCount(countDownNum);
        countRef.current = countDownNum;
    }, [countDownNum]);

    const clickStart = () => {
        countRef.current = countDownNum;
        setCount(countDownNum);
        setRunning(true);
    };

    const clickPause = () => {
        setRunning(false);
        clearTimer();
    };

    const clickResume = () => {
        setRunning(true);
    };

    return (
        <div>
            <div>
                {count}, count down is {running ? 'running' : 'not running'}
            </div>
            <div>
                <button onClick={clickStart}>Start</button>
                <button onClick={clickPause}>Pause</button>
                <button onClick={clickResume}>Resume</button>
            </div>
        </div>
    );
};

export default Counter;
