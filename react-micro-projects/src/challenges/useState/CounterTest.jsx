// Simple counter using useState
import React, { useState } from 'react'

const CounterTest = () => {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1) 
    }
    return (
        <div>
            <p>The count is: {count}</p>
            <button onClick={incrementCount}>Increment +1</button>
        </div>
    )
}

export default CounterTest