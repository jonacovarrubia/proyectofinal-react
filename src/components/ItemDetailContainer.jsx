import React, { useState, useEffect } from 'react';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await getProductDetailsFromDatabase(productId);
        setProduct(response);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProduct();
  }, [productId]);

  const getProductDetailsFromDatabase = async (productId) => {
    const databaseProductDetails = [
      { id: 1, name: 'Producto 1', description: 'Descripción del producto 1', price: 250000 },
      { id: 2, name: 'Producto 2', description: 'Descripción del producto 2', price: 300000 },
      { id: 3, name: 'Producto 3', description: 'Descripción del producto 3', price: 350000 },
      { id: 4, name: 'Producto 4', description: 'Descripción del producto 4', price: 400000 },
    ];

    const productDetails = databaseProductDetails.find(product => product.id === productId);

    return productDetails;
  };

  return (
    <div>
      {loading ? (
        <p>Cargando detalles del producto...</p>
      ) : (
        <ItemDetail product={product} />
      )}
    </div>
  );
};

export default ItemDetailContainer;
