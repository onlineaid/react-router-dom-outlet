import React, { useState, useEffect } from 'react';
import MyImage from '../components/MyImage';
import LoadingBar from 'react-top-loading-bar';

const url = 'https://fakestoreapi.com/products';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [selectedProducts, setSelectedProducts] = useState([]);

  // Function to toggle product selection
  const toggleProductSelection = (product) => {
    const isSelected = selectedProducts.some((p) => p.id === product.id);
    if (isSelected) {
      const updatedSelectedProducts = selectedProducts.filter((p) => p.id !== product.id);
      setSelectedProducts(updatedSelectedProducts);
    } else {
      setSelectedProducts([...selectedProducts, product]);
    }
  };

  // Function to clear selected products and local storage
   // Function to clear selected products and local storage
   const clearSelectedProducts = () => {
    const updatedProducts = products.filter((product) =>
      !selectedProducts.some((p) => p.id === product.id)
    );
    setProducts(updatedProducts);
    setSelectedProducts([]);
    localStorage.removeItem('selectedProducts');
  }

  // Load the selected products from local storage when the component mounts
  useEffect(() => {
    const storedSelectedProducts = localStorage.getItem('selectedProducts');
    if (storedSelectedProducts) {
      setSelectedProducts(JSON.parse(storedSelectedProducts));
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setProgress(10);

      try {
        const response = await fetch(url);
        const data = await response.json();

        setProgress(70);

        setProducts(data);
        setLoading(false);
        setProgress(100);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <LoadingBar color="#80f" progress={progress} onLoaderFinished={() => setProgress(0)} />

      <h1>Product List</h1>
      <div>Selected Products: {selectedProducts.length}</div>
      <button onClick={clearSelectedProducts}>Clear Selected Products</button>
      {loading ? (
        <p>loading ...</p>
      ) : (
        <>
          {products.map((product) => (
            // Conditionally render unselected products
            !selectedProducts.some((p) => p.id === product.id) && (
              <div key={product.id}>
                <MyImage
                  image={{
                    alt: 'Image alt text',
                    height: 300,
                    width: 300,
                    style: { objectFit: 'cover' },
                    src: product.image,
                  }}
                />

                <input
                  type="checkbox"
                  onChange={() => toggleProductSelection(product)}
                  checked={selectedProducts.some((p) => p.id === product.id)}
                />
                <li>{product.title}</li>
              </div>
            )
          ))}
        </>
      )}
    </div>
  );
}

export default Product;
