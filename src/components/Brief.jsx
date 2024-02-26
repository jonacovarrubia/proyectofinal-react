import React from 'react';

const Brief = ({ orderSummary }) => {
  return (
    <div>
      <h2>Resumen de la compra:</h2>
      <ul>
        {orderSummary.map((item, index) => (
          <li key={index}>{item.name}: ${item.price}</li>
        ))}
      </ul>
    </div>
  );
};

export default Brief;
