import React, { useState } from 'react';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer';
import CartWidget from './components/CartWidget';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import db from './firebase/firebase';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [userName, setUserName] = useState('');
  const [selectedItem, setSelectedItem] = useState(null); 

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(item => item.id === product.id);

    if (existingProductIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingProductIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const onRemoveItem = (itemToRemove) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemToRemove.id);
    setCartItems(updatedCartItems);
  };

  const onIncreaseQuantity = (itemToIncrease) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemToIncrease.id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const onDecreaseQuantity = (itemToDecrease) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemToDecrease.id) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0); 

    setCartItems(updatedCartItems);
  };

  const handleItemClick = (itemId) => {
    setSelectedItem(itemId); 
  };

  return (
    <div>
      <Navbar cartItemCount={cartItems.reduce((total, item) => total + item.quantity, 0)} onItemClick={handleItemClick} />
      <CartWidget cartItemCount={cartItems.length} />
      <div className="container">
        <ItemListContainer db={db} onAddToCart={addToCart} selectedItem={selectedItem} /> 
        <Cart cartItems={cartItems} onRemoveItem={onRemoveItem} onIncreaseQuantity={onIncreaseQuantity} onDecreaseQuantity={onDecreaseQuantity} />
        <Checkout cartItems={cartItems} userName={userName} />
      </div>
    </div>
  );
};

export default App;
