import React, { useContext } from 'react';
import { CartContext } from './CartContext'; 

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calculamos el total de productos en el carrito sumando las cantidades de todos los productos
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-shopping-cart"
      >
        <circle cx="9" cy="21" r="1"></circle>
        <circle cx="20" cy="21" r="1"></circle>
        <path d="M9 21V7a2 2 0 0 1 2-2h7l-1.95 7.08"></path>
      </svg>
      {totalItems > 0 && <span className="badge">{totalItems}</span>}
    </div>
  );
};

export default CartWidget;
