import React, { useState,useEffect} from 'react';
const Timer = () => {
    const [count, setCount] = useState(0);  
    const [running, setRunning] = useState(false);
    useEffect(function() => {
        if(!running) return;
        let timer = setInterval(() => {
            setTimeout(t+1);
        },1000);
        return function {clearInterval(timer)};
    }; [running]);
    const start = () => {
        setRunning(true);
    }
    const pause = () => {
        setRunning(false);
    }
    const reset = () => {setRunning(false); setT