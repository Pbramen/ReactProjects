import React, { useState } from 'react';
function Counter() {
    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1) };
    const decrement = () => { setCount(count - 1) };
    const reset = () => { setCount(0) };

    return (
        <div className="counter">
            <p className="count-display">{count}</p>
            <button className="count-button" onClick={increment}>Add</button>
            <button className="count-button" onClick={decrement}>Subtract</button>
            <button className="count-button" onClick={reset}>Reset</button>
        </div>
    )
}
 
export default Counter;