import React, { useState, useEffect } from 'react';
import MyImage from '../components/MyImage';
import TopLoadingBar from '../components/TopLoadingBar';

const url = 'https://fakestoreapi.com/products';

export default function Land() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);


  return (
    <div>
        
        
      <h1>Product List</h1>
      {loading ? (
       <TopLoadingBar />
      ) : (
        <>
          {products.map((product) => (
            <div  key={product.id}>
                <li>{product.title}</li>
                {/* <img src={product.image} alt="" /> */}
                <MyImage
                image={{
                    alt: 'Image alt text',
                    height: 300, // Replace with the desired height
                    width: 300, // Replace with the desired width
                    style: {objectFit: 'cover'},
                    src: product.image, // Replace with the image URL
                    }}
                />
            </div>
          ))}
        </>
      )}
    </div>
  );
}
