import React, { useEffect, useRef, useState } from 'react';
import { isPrimeNumber2 } from './utils/prime-number';
import './styles.css';

const TimerFeature = () => {
    const [startVal, setStartVal] = useState(0);
    const [count, setCount] = useState(0);
    const timerRef = useRef<number | undefined>(undefined);

    const clearTimerRef = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const start = () => {
        function incCount() {
            timerRef.current = window.setTimeout(() => {
                setCount((prev) => prev + 1);
                incCount();
            }, 1000);
        }
        clearTimerRef();
        setCount(startVal);
        incCount();
    };

    const stop = () => {
        clearTimerRef();
    };

    const startValChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartVal(parseInt(e.target.value, 10));
    };

    useEffect(() => {
        setInterval(() => {
            console.log('useEffect', count);
        }, 1000);
        return () => {
            clearTimerRef();
        };
    }, [count]);

    return (
        <div className="timer-container">
            <div className="Counter card">
                <h2>Timer Feature</h2>
                <p className="description">Demonstrates closure trap of useEffect</p>
                <div className="Bar">
                    <input
                        type="number"
                        value={startVal}
                        onChange={startValChanged}
                        placeholder="Start value"
                    />
                    <button id="start" data-testid="start" onClick={start}>
                        Start
                    </button>
                    <button id="stop" onClick={stop}>
                        Stop
                    </button>
                </div>
                <div className={`counter-display ${isPrimeNumber2(count) ? 'prime' : ''}`}>
                    Count: {count}
                </div>
            </div>
        </div>
    );
};

export default TimerFeature;
