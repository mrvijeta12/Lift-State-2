const Child = ({ cartItems, removeItems }) => {
 
    return (
        <div className="child-container">
            <h1>Child Component</h1>
            <ul>
                {cartItems.map((item) => (
                    <li key={item.id}>
                        <span id='itemname'>{item.name}</span>
                        <span id='itemprice'>${item.price}</span>
                        <button onClick={() => removeItems(item. id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Child