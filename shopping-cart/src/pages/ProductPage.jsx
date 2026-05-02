import React, { useEffect, useState } from 'react'
import Header from "../components/Header.jsx"
import ProductList from "../components/ProductList.jsx"
import Cart from "../components/Cart.jsx"
import ConfirmDialog from "../components/ConfirmDialog.jsx"

const ProductPage = () => {
  const [carts, setCarts] = useState(JSON.parse(localStorage.getItem("carts")) || []);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("carts", JSON.stringify(carts));
  }, [carts])

  return (
    <div className={isOpen ? "product-page display-dialog" : "product-page"}>
      <Header />
      <div className='main'>
        <ProductList setCarts={setCarts} carts={carts}/>
        <Cart carts={carts} setCarts={setCarts} setIsOpen={setIsOpen}/>
      </div>
      {isOpen && <ConfirmDialog setIsOpen={setIsOpen} setCarts={setCarts}/>}
    </div>
  )
}

export default ProductPage
