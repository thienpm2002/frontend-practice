import React, { useEffect, useState } from 'react'
import ProductItem from './ProductItem.jsx'

const ProductList = ({ setCarts, carts }) => {
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchData(){
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProducts(data.products);
    }
    fetchData();
  }, [])

  return (
    <div className="product-list">
      {
        products.map(product => <ProductItem key={product.id} id={product.id} imgUrl={product.thumbnail} title={product.title} description={product.description} price={product.price} setCarts={setCarts} carts={carts}/>)
      }
    </div>
  )
}

export default ProductList
