import React, { useState, useEffect } from 'react';
import MyImage from '../components/MyImage';
import LoadingBar from 'react-top-loading-bar'
import withLoadingBar from '../components/WithLoadingBar';

const url = 'https://fakestoreapi.com/products';

function Product() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const fetchData = async () => {
      setProgress(10); // Start with a 10% loading progress

      try {
        const response = await fetch(url);
        const data = await response.json();

        setProgress(70); // Update loading progress as needed

        setProducts(data);
        setLoading(false);
        setProgress(100); // Set loading progress to 100 when data is loaded
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
        <LoadingBar
        color='#80f'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
        
      <h1>Product List</h1>
      {loading ? (
       <p>loading ...</p>
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

export default Product