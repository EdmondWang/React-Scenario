import React, { useRef, useState } from 'react';
import { isPrimeNumber2 } from './utils/prime-number';

const Counter = () => {
    const [startVal, setStartVal] = useState(0);
    const [count, setCount] = useState(0);
    const timerRef = useRef();

    const clearTimerRef = () => {
        if (timerRef.current) {
            clearTimeout(timerRef.current);
        }
    };

    const start = () => {
        function incCount() {
            timerRef.current = setTimeout(() => {
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

    const startValChanged = (e) => {
        setStartVal(parseInt(e.target.value, 10));
    };

    return (
        <div className="Counter">
            <div className="Bar">
                <input
                    type="number"
                    value={startVal}
                    onChange={startValChanged}
                />
                <button id="start" data-testid="start" onClick={start}>
                    start
                </button>
                <button id="stop" onClick={stop}>
                    stop
                </button>
            </div>
            <span
                style={{
                    color: isPrimeNumber2(count) ? 'green' : 'red',
                    transition: 'font-size ease 0.2s',
                    fontSize: isPrimeNumber2(count) ? '16px' : '24px',
                }}
            >
                Count: {count}
            </span>
        </div>
    );
};

export default Counter;
