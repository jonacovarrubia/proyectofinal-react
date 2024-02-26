import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useContext(CartContext);

  const handleIncrease = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    updateQuantity(id, updatedCart.find(item => item.id === id).quantity);
  };

  const handleDecrease = (id) => {
    const updatedCart = cart.map(item => {
      if (item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    updateQuantity(id, updatedCart.find(item => item.id === id).quantity);
  };

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleCheckout = () => {
    console.log('Procesando pago...');
    console.log('Orden completada.');
  };

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.map(item => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>Cantidad: {item.quantity}</p>
          <button onClick={() => handleIncrease(item.id)}>+</button>
          <button onClick={() => handleDecrease(item.id)}>-</button>
          <button onClick={() => handleRemove(item.id)}>Eliminar</button>
        </div>
      ))}
      <button onClick={handleCheckout}>Procesar Pago</button>
    </div>
  );
};

export default Cart;
