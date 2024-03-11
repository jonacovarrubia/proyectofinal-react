import React, { useEffect, useState } from 'react';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ItemListContainer = ({ greeting, onAddToCart, selectedItem }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getFirestore();
        const productsCollection = collection(db, 'productos');
        const querySnapshot = await getDocs(productsCollection);
        const productsData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setProducts(productsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [selectedItem]); 
  useEffect(() => {
    if (selectedItem) {
      const selectedProduct = products.find(product => product.id === parseInt(selectedItem));
      setSelectedProduct(selectedProduct);
    } else {
      setSelectedProduct(null);
    }
  }, [selectedItem, products]); 

  const addToCart = (product) => {
    console.log('Agregado al carrito:', product);
    onAddToCart(product);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Productos Destacados</h2>
      <p className="lead text-center">{greeting}</p>
      <div className="row">
        {selectedProduct ? (
          <div key={selectedProduct.id} className="col-md-3 col-sm-6 mb-4">
            <div className="card">
              <img src={selectedProduct.image} className="card-img-top" alt={selectedProduct.name} />
              <div className="card-body">
                <h5 className="card-title">{selectedProduct.name}</h5>
                <p className="card-text">{selectedProduct.description}</p>
                <p className="card-text">Precio: ${selectedProduct.price}</p>
                <button onClick={() => addToCart(selectedProduct)} className="btn btn-primary">Agregar al carrito</button>
              </div>
            </div>
          </div>
        ) : (
          products.map(product => (
            <div key={product.id} className="col-md-3 col-sm-6 mb-4">
              <div className="card">
                <img src={product.image} className="card-img-top" alt={product.name} />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Precio: ${product.price}</p>
                  <button onClick={() => addToCart(product)} className="btn btn-primary">Agregar al carrito</button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ItemListContainer;
