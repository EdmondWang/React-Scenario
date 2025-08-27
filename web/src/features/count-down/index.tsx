import { useState, useCallback } from 'react';
import {Counter} from './counter'
import styles from './counter.module.css';

const CountDownFeature = () => {
    const [countDownNum, setCountDownNum] = useState<number>(6);
    const [completed, setCompleted] = useState<boolean>(false);

    const onCountDownNumChange =  (e: React.ChangeEvent<HTMLInputElement>) =>{
        setCountDownNum(parseInt(e.target.value, 10))
    }
    const onCountDownComplete = useCallback(() => {
       setCompleted(true)
    }, []);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Countdown Timer</h2>
            
            <div className={styles.inputContainer}>
                <label className={styles.inputLabel} htmlFor="countdown-input">
                    Set countdown seconds:
                </label>
                <input 
                    id="countdown-input"
                    type="number" 
                    min="1"
                    value={countDownNum} 
                    onChange={onCountDownNumChange} 
                    className={styles.inputField}
                />
            </div>
            
            <Counter 
                countDownNum={countDownNum} 
                onCountDownComplete={onCountDownComplete} 
            />
            
            {completed && (
                <div className={styles.completedMessage}>
                    Countdown completed!
                </div>
            )}
        </div>
    );
};

export default CountDownFeature;
