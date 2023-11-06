import React, { useState, useEffect, useRef } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const cart = useRef([]); // Use useRef for cart

  useEffect(() => {
    // Fetch products from the API
    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const addToCart = (product) => {
    // Simulate an asynchronous operation (not typically needed)
    setTimeout(() => {
      // Use current to access and update the ref value
      cart.current = [...cart.current, product];
      // Log the current cart data for demonstration
      console.log(cart.current);
    }, 1000); // Simulate a 1-second delay
  };
  
  return (
    <div>
      <h1>Product List</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.title}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
      <h2>Cart</h2>
      <p>Number of items in the cart: {cart.current.length}</p>
      <ul>
        {cart.current.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
