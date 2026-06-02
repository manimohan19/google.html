import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from './App'

 function Home() {

  const {cartcount , setCartcount}= useContext(cartContext);

const navigate = useNavigate()


function increment() {
  setCartcount(cartcontext + 1)
}


function increment () {
  navigate("/Cart")
}

  return (
    <div>Home Page
      <h1>Cart Items : {caercount}</h1>
      <button onClick={increment}>Add Item</button>
      <br />
      <button onClick={cartPage}>Go To Cart</button>
    </div>
  )
}
export default Home