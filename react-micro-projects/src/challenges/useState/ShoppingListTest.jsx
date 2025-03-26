import React, { useState } from 'react'

const ShoppingListTest = () => {
    const [shoppingList, setshoppingList] = useState([
        { name: "Cola", quantity: "10" },
        { name: "Zero", quantity: "17" },
        { name: "Twix", quantity: "35" }
    ]);

    const [newItemName, setNewItemName] = useState('');
    const [newItemQuantity, setNewItemQuantity] = useState(null);

    const addNewItem = () => {
        if (newItemName.trim() === '' || newItemQuantity === null) return;
        const newItem = {
            name: newItemName, 
            quantity: parseInt(newItemQuantity)
        }
            // Check if input is not empty
        setshoppingList([...shoppingList, newItem])
        setInputsValue(''); // Clear the input
          
        
    }

    const setInputsValue = () => {
        setNewItemName('')
        setNewItemQuantity('')
    }
    return (
        <div>
            <div>List of items:
                <ul>
                    {
                        shoppingList.map((item) => (
                            <p>name: {item.name}, quantity: {item.quantity}</p>
                        )
                        )
                    }
                </ul>
            </div>
            <input type="text" onChange={(e) => setNewItemName(e.target.value)} placeholder='New item name' value={newItemName} />
            <input type="number" onChange={(e) => setNewItemQuantity(e.target.value)} placeholder='New item quantity' value={newItemQuantity}/>
            <button onClick={addNewItem}>Add new item to shoppingList</button>
        </div>
    )
}

export default ShoppingListTest