import React from 'react'
import CartIcon from './CartIcon'
import CartItem from './CartItem'

const Cart = ({ carts, setCarts, setIsOpen }) => {

  const size = carts?.length || 0;
     
  const handlerReset = () => {
    setIsOpen(true);
  }

  return (
    <div className='cart'>
      {
        size == 0 ? (
            <>
              <CartIcon />
              <p>Cart Empty</p>
            </>
        ) : (
           <>
           {
            carts.map(item => <CartItem key={item.id} id={item.id} title={item.title} price={item.price} count={item.count} setCarts={setCarts}/>)
           }
           <div className='cart-total'>
                <h3>Total</h3>
                <span>{ carts.reduce((total, item) => (total + item.price * item.count), 0).toFixed(2) }
                </span>
           </div>
           <button className='btn-reset' onClick={handlerReset}>Rest Cart</button>
           </>
        )
      }
    </div>
  )
}

export default Cart
