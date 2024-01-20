import "./cart.css";
import React from 'react'
import  { useContext } from 'react'
import {ShopContext} from "../../Context/shop-context";
import {PRODUCTS} from "../../products";
import CartItem from "./cartItem";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const{cartItems, getTotalCartAmount}=useContext(ShopContext);
  const totalAmount=  getTotalCartAmount();

  const navigate=useNavigate()

  return (
    <div className="cart">
      <div className="cartTitles">
        <h1> Your cart Items</h1>
      </div>
      <div className="carty">
      <div className="cartItems">
        {PRODUCTS.map((item)=>{ if(cartItems[item.id]!==0){

           return <CartItem data={item}/>
           
          
        }
        })}
      </div>
      </div>
      
      <div className="checkout">
        <p>subTotal ksh {totalAmount}</p>
        <button onClick={()=>navigate("/")}>continue shopping</button>
        <button>checkout</button>
      </div>
      
    </div>
  )
}

export default Cart
/*if(cartItems[item.id]!==0){
        ( <h1> Your cart is empty</h1>)
        
  */