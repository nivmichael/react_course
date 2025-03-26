import React, { useEffect, useState } from 'react'

const StateComponentTwo = ({ count, onClickHandleCount }) => {

  const [name, setName] = useState(() => {
    const savedName = localStorage.getItem('name');
    return savedName ? JSON.parse(savedName) : ''
  });
  
  // runs only when name value changes
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name])

  const handleChangeName = (event) => {
    setName(event.target.value)
  }

  const handleClear = () => setName('')
  
  return (
    <div>
      <p>{count}</p>
      <button onClick={onClickHandleCount}>Add To count</button>

      <h1>Your Name: {name}</h1>
      <input type="text" value={name} onChange={handleChangeName} placeholder='Enter your name' />
      <button onClick={handleClear}>Clear Name</button>
    </div>
  )
}

export default StateComponentTwo