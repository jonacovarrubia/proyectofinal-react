import React, { useEffect, useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

const Checkout = ({ cartItems }) => {
  const [userName, setUserName] = useState('');
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let cartTotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    setTotal(cartTotal);
  }, [cartItems]);

  const handleOrderSubmit = async () => {
    try {
      console.log('Realizando pedido...');
      console.log('Usuario:', userName); 
      const db = getFirestore();
      const ordersCollection = collection(db, 'pedidos');
      const newOrderRef = await addDoc(ordersCollection, {
        usuario: userName,
        total: total,
        productos: cartItems,
        fecha: new Date()
      });
      console.log('Pedido realizado con éxito! ID:', newOrderRef.id);
      alert('Pedido realizado con éxito!');
    } catch (error) {
      console.error('Error al agregar el pedido:', error);
    }
  };

  return (
    <div className="checkout">
      <div className="container">
        <h3>Resumen del Pedido:</h3>
        <label htmlFor="userName">Nombre de usuario:</label>
        <input
          type="text"
          id="userName"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <p>Total: ${total}</p>
        <button onClick={handleOrderSubmit}>Realizar pedido</button>
      </div>
    </div>
  );
};

export default Checkout;
