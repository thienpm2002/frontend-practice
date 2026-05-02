import React, { useState } from 'react'

const ProductItem = ({id, imgUrl, title, description, price, setCarts, carts}) => {
  
  const item = carts.find(i => i.id === id);
  const count = item?.count || 0;

  const handlerPlus = () => {
    setCarts((arr) => {

        const exists = arr.some(item => item.id === id);
        if(exists){
            return arr.map((item) => item.id === id ? {...item, count: item.count + 1} : item);
        }

        return [...arr,{
                id,
                title,
                price,
                count: 1
            }];
    });
  }

  const handlerMinus = () => {
    setCarts(arr => {
        const newArr =  arr.map(item => item.id === id ? {...item, count: item.count - 1} : item);
        return newArr.filter(item => item.count > 0);
    });
  }

  return (
    <div className='product-item'>
      <img className="product-img" src={imgUrl} alt="image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-desc">{description}</p>
      <div className="item-footer">
        <span className="product-price">${price}</span>
        <div className="counter">
            <svg
               onClick={handlerPlus} 
               className='btn-plus'
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
            <span>{count}</span>
            <svg 
                onClick={handlerMinus}
                className='btn-minus'
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                >
                <line x1="5" y1="12" x2="19" y2="12" />
            </svg>
        </div>
      </div>
    </div>
  )
}

export default ProductItem
