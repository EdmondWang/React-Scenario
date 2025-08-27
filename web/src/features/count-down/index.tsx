import { useState, useCallback } from 'react';
import {Counter} from './counter'

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
        <div>
            <input type="number" value={countDownNum} onChange={onCountDownNumChange} />
            <Counter countDownNum={countDownNum} onCountDownComplete={onCountDownComplete} />
            {completed && <div>Count down completed</div>}
        </div>
    );
};

export default CountDownFeature;
