import React, { useState, useEffect } from 'react';

const Timer = () => {
    const [count, setCount] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) return;

        const timer = setInterval(() => {
            setCount(prevCount => prevCount + 1);
        }, 1000);

        return () => clearInterval(timer);
    }, [running]);

    const start = () => {
        setRunning(true);
    };

    const pause = () => {
        setRunning(false);
    };

    const reset = () => {
        setRunning(false);
        setCount(0);
    };

    return (
        <>
            <h1>TIMER</h1>
            <h1>{count}</h1>
            <button onClick={start}>Start</button>
            <button onClick={pause}>Pause</button>
            <button onClick={reset}>Reset</button>
        </>
    );
};

export default Timer;
