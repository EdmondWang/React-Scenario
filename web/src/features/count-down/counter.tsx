import { useState, useEffect, useRef } from 'react';
import styles from './counter.module.css';

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

    useEffect(() => {
        const completeCount = () => {
            clearTimer();
            if (typeof onCountDownComplete === 'function') {
                onCountDownComplete();
            }
            setRunning(false);
        };
        
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
        <>
            <div className={styles.counterDisplay}>{count}</div>
            <div className={styles.statusText}>
                Count down is {running ? 'running' : 'not running'}
            </div>
            <div className={styles.controls}>
                <button 
                    className={`${styles.button} ${styles.startButton}`} 
                    onClick={clickStart}
                >
                    Start
                </button>
                <button 
                    className={`${styles.button} ${styles.pauseButton}`} 
                    onClick={clickPause}
                >
                    Pause
                </button>
                <button 
                    className={`${styles.button} ${styles.resumeButton}`} 
                    onClick={clickResume}
                >
                    Resume
                </button>
            </div>
        </>
    );
};

export default Counter;
