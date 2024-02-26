import React from 'react';
import ProductCard from './ProductCard';

const products = [
  {
    id: 1,
    name: 'Figura Yoda',
    image: '/images/yoda.jpg',
    price: 290.990,
    category: 'yoda'
  },
  {
    id: 2,
    name: 'Figura Anakin',
    image: '/images/anakin.jpg',
    price: 240.990,
    category: 'anakin'
  },
  {
    id: 3,
    name: 'Figura Luke',
    image: '/images/luke.jpg',
    price: 190.990,
    category: 'luke'
  },
  {
    id: 4,
    name: 'Figura Darth Vader',
    image: '/images/darth-vader.jpg',
    price: 340.990,
    category: 'darth-vader'
  }
];

const Home = () => {
  return (
    <div className="home">
      <h2>Productos Destacados</h2>
      <div className="product-grid">
        {products.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
