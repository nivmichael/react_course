import React from 'react'
import { useState } from 'react';
import { FaCartArrowDown } from "react-icons/fa";


const Cart = () => {
  const testObj = {name: "Michael", title: "dude"};
  console.log(testObj);
  

  let newObj = {...testObj, name: "OK", mike: 'oooo'};
  console.log(newObj);
  

  const [items, setItems] = useState(["item1", "item2","item3","item14"])  ;
  const addOneItem = () => setItems([...items, 'Michael'])
  const removeOneItem = () => setItems(
    items.filter(item => item !== 'Michael')
  )

  const updateOneItem = () => {
    setItems(items.map(item => item === 'Michael' ? 'MICHAELLLLLL' : item))
  }



  return (
    <div>
      <h1 >Cart <FaCartArrowDown /></h1>
      
      {items.length > 0 && <h2>You have {items.length} items in your Cart</h2>}

      <ul>
        <h4>Products</h4>
        {items.map(
          (item) => (<li key={Math.random()}>{item}</li>)
        )}
      </ul>

      <button onClick={addOneItem}>Add new item</button>
      <button onClick={removeOneItem}>Remove Michael item</button>
      <button onClick={updateOneItem}>update one item</button>
    </div>
  )
}

export default Cart 