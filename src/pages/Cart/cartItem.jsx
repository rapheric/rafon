import React from "react";
import "./cart.css";
import  { useContext } from 'react'
import {ShopContext} from "../../Context/shop-context";

const CartItem = (props) => {
    const { id,productName, productImage, price } = props.data;
    const{cartItems,addToCart,removeFromCart, updateCartItemCount}=useContext(ShopContext);
   
  return (
    
   <div className='cartItems'>
      <div><img className='cImg' src={productImage} alt="itemimg"/></div>
    <div className="Cdescription">
        <p> <b>{productName}</b></p> 
        <p> ksh{price}</p>

      <div className="countHandler">
        <button onClick={()=>removeFromCart(id)}> - </button>
        <input type="text" value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)} />
        <button  onClick={()=>addToCart(id)} > + </button>
     </div>
   </div>
    
    </div>
  )
}

export default CartItem