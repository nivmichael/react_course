import React from 'react'
import { FaCartArrowDown } from "react-icons/fa";

// const Button = () => {
//   const handleClick = () => console.log(Math.round(Math.random() * 10));
  
//   return <button onClick={handleClick}>Click</button>
// }

// const Copy = () => {
//   const copyHandler = () => {
//     console.log('STOOOOOPPPP');
    
//   }
//   return (
//     <p onCopy={copyHandler}>
//       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptate, quas assumenda beatae pariatur saepe aperiam? Natus quod at beatae!
//     </p>
//   );
// } 

const Move = () => {
  const moveHandler = () => {
    console.log('Move event fires');
    
  }
    return (
    <p onMouseMove={moveHandler}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi voluptate, quas assumenda beatae pariatur saepe aperiam? Natus quod at beatae!
    </p>
  );
}

const Cart = () => {
  const items = ["item1", "item2","item3","item14"]  ;

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
      <Move />
    </div>
  )
}

export default Cart 