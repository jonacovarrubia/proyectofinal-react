import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import Cart from './Cart';
import './styles.css';

const Navbar = ({ cartItemCount, onItemClick }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCartClick = () => {
    setIsCartOpen(!isCartOpen);
  };

  const handleItemClick = (itemId) => {
    onItemClick(itemId); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">Star Wars Shop</Link>
        <button className="navbar-toggler" type="button" onClick={handleCartClick}>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isCartOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/item/1" onClick={() => handleItemClick(1)}>Yoda</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/item/2" onClick={() => handleItemClick(2)}>Anakin</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/item/3" onClick={() => handleItemClick(3)}>Luke</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/item/4" onClick={() => handleItemClick(4)}>Darth Vader</Link>
            </li>
          </ul>
          <CartWidget cartItemCount={cartItemCount} />
        </div>
      </div>
      {isCartOpen && <Cart />}
    </nav>
  );
};

export default Navbar;
