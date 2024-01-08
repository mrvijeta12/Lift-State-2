import { useState } from "react";
import Child from "./Child";

const Parent = () => {

    let [cartItems, setCartItems] = useState([]);
    let [itemName, setItemName] = useState("");
    let [itemPrice, setItemPrice] = useState("");


    function implementSubmit(event) {
        event.preventDefault();
        if (itemName && itemPrice) {
            let newItem = {
                id: cartItems.length + 1,
                name: itemName,
                price: parseFloat(itemPrice),
            };

            setCartItems((existItem) => [...existItem, newItem]);
            setItemName("");
            setItemPrice("");

        }
    };

    let removeItems = (itemId) => {
        setCartItems((existItem) => existItem.filter((item) => item.id !== itemId));
    };

    return (

        <div>

            <div className="parent-container">
                <h1>  Parent Component</h1>
                <form onSubmit={implementSubmit} >
                    <label>ITEM NAME:</label>
                    <input type="text" placeholder="Enter Name" value={itemName} onChange={(e) => setItemName(e.target.value)}></input>

                    <label>PRICE:</label>
                    <input type="number" placeholder="Enter Price" value={itemPrice} onChange={(e) => setItemPrice(e.target.value)}></input>

                    <button type="submit">ADD ITEMS</button>

                </form>
            </div>
            <Child cartItems={cartItems} removeItems={removeItems} />
        </div>
    )
}

export default Parent