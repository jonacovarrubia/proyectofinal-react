import React from 'react';
import ItemQuantitySelector from './ItemQuantitySelector'; 

const ItemDetail = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <img src={item.image} alt={item.name} />
      <p>{item.description}</p>
      <p>Precio: ${item.price}</p>
     
      <ItemQuantitySelector 
        quantity={1} 
        onDecrease={() => console.log('Decrementar cantidad')} 
        onIncrease={() => console.log('Incrementar cantidad')} 
      />
      
    </div>
  );
};

export default ItemDetail;
