import React, { useEffect, useState } from 'react';

interface UpdateStateProps {}

const UpdateState: React.FC<UpdateStateProps> = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <div>
                <p>Count: {count}</p>
                <button
                    onClick={() => {
                        setCount(count + 1);
                        console.log(count);
                        setCount(count + 1);
                        console.log(count);
                        setCount(count + 1);
                        console.log(count);
                    }}
                >
                    setCount(count + 1)
                </button>
                <button
                    onClick={() => {
                        setCount((prev) => prev + 1);
                        console.log(count);
                        setCount((prev) => prev + 1);
                        console.log(count);
                        setCount((prev) => prev + 1);
                        console.log(count);
                    }}
                >
                    {`setCount((prev) => prev + 1);`}
                </button>

                <button
                    onClick={() => {
                        setCount((prev) => prev + 1);
                        console.log(count);
                        setCount((prev) => prev + 1);
                        console.log(count);
                        setTimeout(() => {
                            setCount((prev) => prev + 1);
                            console.log('setTimeout');
                            console.log(count);
                        });
                        new Promise((resolve) => {
                            setCount((prev) => prev + 1);
                            console.log('Promise constructor');
                            console.log(count);
                            resolve(true);
                        });
                    }}
                >
                    {`setTimeout and Promise`}
                </button>
            </div>
        </div>
    );
};

export default UpdateState;
