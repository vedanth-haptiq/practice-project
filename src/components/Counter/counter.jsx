import React, { useState, useEffect } from "react";
import "./counter.css";

const Counter = () => {
    // Get initial count from localStorage
    const getInitialCount = () => {
        const savedCount = localStorage.getItem("count");
        return savedCount ? parseInt(savedCount, 10) : 0;
    };

    // State for counter
    const [count, setCount] = useState(getInitialCount);

    // Update localStorage when count changes
    useEffect(() => {
        localStorage.setItem("count", count);
    }, [count]);

    return (
        <div className="counter-container">
            <h1>Counter App</h1>
            <p className="count-display">{count}</p>
            <div className="button-container">
                <button className="btn" onClick={() => setCount(count + 1)}>+</button>
                <button className="btn" onClick={() => setCount(count - 1)}>-</button>
                <button className="btn reset" onClick={() => setCount(0)}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;
