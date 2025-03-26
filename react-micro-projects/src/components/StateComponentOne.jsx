import React, { useState } from 'react'

const StateComponentOne = ({ count, onClickHandleCount }) => {
  // inner function will only run once  in the init to set init value
  const [innerCount, setInnerCount] = useState(() => {
    const initialCount = 10;
    return initialCount;
  });

  const innerIncrement = () => {
    setInnerCount((prevCount) => prevCount + 1);
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandleCount}>Add To count</button>


      <p>Inner Count</p>
      <h4>{innerCount}</h4>
      <button onClick={innerIncrement}>Increment inner count</button>
    </div>
  )
}

export default StateComponentOne