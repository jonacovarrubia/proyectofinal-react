import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector';

const Cart = ({ cartItems, onRemoveItem, onIncreaseQuantity, onDecreaseQuantity }) => {
  return (
    <div className="cart-container">
      <div className="cart-header">
        <h2>Cart</h2>
      </div>
      <ul className="cart-items">
        {cartItems.map((item, index) => (
          <li key={index} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="item-details">
              <h3>{item.name}</h3>
              <p>Price: ${item.price}</p>
              <ItemQuantitySelector
                quantity={item.quantity}
                onDecrease={item.quantity > 1 ? () => onDecreaseQuantity(item) : () => onRemoveItem(item)}
                onIncrease={() => onIncreaseQuantity(item)}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
