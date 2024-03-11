import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart4 } from 'react-icons/bs';

const CartWidget = ({ cartItemCount, onClick }) => {
  return (
    <div className="cart-widget">
      <button className="btn btn-outline-light" disabled={!cartItemCount} onClick={onClick}>
        <BsCart4 />
        {cartItemCount > 0 && <span className="badge bg-secondary">{cartItemCount}</span>}
      </button>
    </div>
  );
};

export default CartWidget;
