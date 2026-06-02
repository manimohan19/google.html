import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { cartContext } from './App'

 function Cart() {
  const {cartcount} = useContext(cartContext)
  const navigate = useNavigate()



  function backTo() {
    navigate("/Home")
  }
  return (
    <div>Cart Page
      <h1>Total Item : {cartcount}</h1>
      <button onClick={backTo}>Go Back To Home</button>
    </div>
  )
}
export default Cart 