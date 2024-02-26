import React, { useState, useEffect } from 'react';

const ItemDetail = ({ productId }) => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        //llamada a una API o consulta a una base de datos
        const productDetail = await fetchProductDetailFromDatabase(productId);
        setProduct(productDetail);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching product details:', error);
      }
    };

    fetchProductDetail();
  }, [productId]);

  const fetchProductDetailFromDatabase = async (productId) => {
    // obtención de detalles del producto de una base de datos
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
        <div>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p>Precio: ${product.price}</p>
        </div>
      )}
    </div>
  );
};

export default ItemDetail;
