import React from 'react';
import CartWidget from './CartWidget'; 

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Star Wars Shop</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Yoda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Anakin</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Luke</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Darth Vader</a>
            </li>
            {/* componente CartWidget */}
            <li className="nav-item">
              <CartWidget />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
