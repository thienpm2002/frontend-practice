import React from 'react'

const CartIcon = () => {
  return (
    <div>
      <svg
        width="120"
        height="120"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        >
            <circle cx="9" cy="20" r="1" />
            <circle cx="17" cy="20" r="1" />
            <path d="M3 4h2l2.5 10h10l2-7H6" />

            <line x1="9" y1="10" x2="15" y2="16" />
            <line x1="15" y1="10" x2="9" y2="16" />
      </svg>
    </div>
  )
}

export default CartIcon
