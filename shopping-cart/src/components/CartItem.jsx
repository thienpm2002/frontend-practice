import React from 'react'

const CartItem = ({ id, title, price, count, setCarts }) => {

  const hanlderRemove = () => {
    setCarts(arr => arr.filter(item => item.id !== id));
  }

  return (
    <div className='cart-item'>
       <span className="item-name">{title}</span>
       <span className="item-name">${price}</span>
       <span className='item-count'>x{count}</span>
       <svg
          className='btn-remove'
          onClick={hanlderRemove}
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="18" y1="6" x2="6" y2="18" />
          <line x1="6" y1="6" x2="18" y2="18" />
       </svg>
    </div>
  )
}

export default CartItem
