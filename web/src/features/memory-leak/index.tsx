import { useEffect, useState } from 'react';

const LeakDemo = () => {
    console.log('LeakDemo component render function is called');

    const [count, setCount] = useState(1);
    // Uncleaned timer (memory leak point)
    useEffect(() => {
        console.log('Creating setInterval timer');
        const timer = setInterval(() => {
            console.log('Leaking memory...');
        }, 1000);

        // Intentionally not returning cleanup function
        // return () => clearInterval(timer);
    }, []);

    // Unremoved event listener (memory leak point)
    useEffect(() => {
        const handleResize = () => console.log('Window resized');
        window.addEventListener('resize', handleResize);

        // Intentionally not cleaning up event listener
        // return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h1>Memory Leak Demo Component</h1>
            <button
                onClick={() => {
                    console.log('Forcing re-render');
                    setCount((prev: number) => prev + 1);
                }}
            >
                Re-render {count}
            </button>
        </div>
    );
};

export default LeakDemo;
