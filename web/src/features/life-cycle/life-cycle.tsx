import React, { useEffect, useState } from 'react';

interface LifeCycleProps {
    prefix: string;
}

const LifeCycle: React.FC<LifeCycleProps> = ({ prefix }) => {
    const [count, setCount] = useState(0);

    const clickCount = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        console.log(`${prefix} componentDidMount`);
    }, []);

    useEffect(() => {
        console.log(`${prefix} componentWilReceiveProps`);
    }, [prefix]);

    useEffect(() => {
        console.log(`${prefix} componentDidUpdate`);
        console.log(`${prefix} count: ${count}`);
    });

    useEffect(() => {
        console.log(`${prefix} componentDidUpdate -- layout`);
        console.log(`${prefix} count: ${count}`);
    });

    return (
        <div>
            Use hooks to mock Life Cycle
            <div>
                <p>Count: {count}</p>
                <button onClick={clickCount}>click me</button>
            </div>
            <p>
                Attention that it is just mock, do not stands for real execution
                sequence in class component, changing the order of declaring
                `useEffect` will obviously impact the console print result
            </p>
        </div>
    );
};

export default LifeCycle;
