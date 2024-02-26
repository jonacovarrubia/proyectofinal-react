import React, { useContext } from 'react';
import { CartContext } from '../components/CartContext'; 

const Checkout = () => {
  const { cartItems, clearCart } = useContext(CartContext);

  // Calcula el precio total de todos los productos en el carrito
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // Función que se ejecuta al realizar el pedido
  const handleCheckout = () => {
    // Simulación de procesamiento del pago y envío de la orden
    setTimeout(() => {
      alert('¡Gracias por su compra! Su pedido ha sido procesado y será enviado pronto.');
      clearCart(); // Vacía el carrito después de procesar el pedido
    }, 2000); // tiempo de espera de 2 segundos antes de procesar el pedido
  };

  return (
    <div>
      <h2>Checkout</h2>
      {cartItems.length === 0 ? (
        <p>No hay productos en el carrito.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.quantity}</span>
                <span>{item.price}</span>
              </li>
            ))}
          </ul>
          <p>Total: {totalPrice}</p>
          <button onClick={handleCheckout}>Realizar pedido</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
