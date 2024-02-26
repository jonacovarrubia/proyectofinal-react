import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';

const ItemListContainer = ({ category }) => {
  const [products, setProducts] = useState([]);

  // Simulación de obtención de productos de la base de datos
  useEffect(() => {
    // Lógica para obtener los productos de la base de datos o de una API
    const fetchProducts = async () => {
      // Simulación de una llamada a una API o consulta a una base de datos
      const response = await fetchProductsFromDatabase(category);
      setProducts(response);
    };

    fetchProducts();
  }, [category]);

  // Función simulada para obtener productos de la base de datos
  const fetchProductsFromDatabase = async (category) => {
    // Simulación de una lista de productos de la base de datos
    const databaseProducts = [
      { id: 1, name: 'Producto 1', price: 250000, category: 'Star Wars' },
      { id: 2, name: 'Producto 2', price: 300000, category: 'Star Wars' },
      { id: 3, name: 'Producto 3', price: 350000, category: 'Star Wars' },
      { id: 4, name: 'Producto 4', price: 400000, category: 'Star Wars' },
    ];

    // Filtrar los productos por categoría
    const filteredProducts = databaseProducts.filter(product => product.category === category);

    return filteredProducts;
  };

  return (
    <div>
      <h2>{`Productos de la categoría ${category}`}</h2>
      <ProductList products={products} />
    </div>
  );
};

export default ItemListContainer;
