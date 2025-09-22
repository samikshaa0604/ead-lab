import React, {useState} from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);
    const Increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
    const reset = () => {
        setCount(0);
        }    
        return(
        <>
        <button onClick={Increment}> increment </button>
        <label>{count}</label>
        <button onClick={decrement}> decrement </button>
        <p> <button onClick={reset}> Reset </button> </p>
        </>
    );
}
export default Counter;