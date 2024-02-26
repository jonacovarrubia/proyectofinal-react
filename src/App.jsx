import React from 'react';
import './components/styles.css';
import { firestore } from './firebase/firebase';
import AddItemButton from './components/AddItemButton';
import Brief from './components/Brief';
import Cart from './components/Cart';
import { CartContext } from './components/CartContext';
import CartWidget from './components/CartWidget';
import Checkout from './components/Checkout';
import Description from './components/Description';
import Home from './components/Home';
import ItemDetail from './components/ItemDetail';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import ItemQuantitySelector from './components/ItemQuantitySelector';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ProductDetail from './components/ProductDetail';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [count, setCount] = React.useState(0);

  return (
    <>
    <Navbar />
      <Home />
      <ProductCard />
      <ProductDetail />
      <ProductList />
      <ItemDetail />
      <ItemListContainer />
      <ItemDetailContainer />
      <ItemQuantitySelector />
      <Brief />
      <Description />
      <Cart />
      <CartWidget />
      <Checkout />
      <AddItemButton />   
  
    </>
  );
}

export default App;
