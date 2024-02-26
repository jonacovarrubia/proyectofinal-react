import React from 'react';

const AddItemButton = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>Agregar al carrito</button>
  );
};

export default AddItemButton;
