import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products }) => {
  return (
    <div className="row">
      {products.map(product => (
        <div key={product.id} className="col-lg-3 col-md-4 col-sm-6">
          <ProductCard
            name={product.name}
            image={product.image}
            price={product.price}
          />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
