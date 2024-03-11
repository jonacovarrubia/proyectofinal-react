import React from 'react';

const ItemQuantitySelector = ({ quantity, onDecrease, onIncrease }) => {
  return (
    <div>
      <button onClick={onDecrease}>-</button>
      <span>{quantity}</span>
      <button onClick={onIncrease}>+</button>
    </div>
  );
};

export default ItemQuantitySelector;
