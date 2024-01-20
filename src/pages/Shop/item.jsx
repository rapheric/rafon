import React, { useContext } from 'react'
import {ShopContext} from "../../Context/shop-context";


export const Item = (props) => {
  const {id,productName, productImage,price } = props.data;
  const{cartItems, addToCart}=useContext(ShopContext)

  const cartItemAmount= cartItems[id];
  return(
    <div className='items'>
      <img className='pImg' src={productImage} alt="itemimg"/>
      <div className="description">
        <p> <b>{productName}</b></p>
        <p> ksh{price}</p>
      </div>
      <button className="addToCartBttn" onClick={()=>addToCart(id)} > 
      Add To Cart {cartItemAmount>0 && <>({cartItems[id]})</>}</button>
    </div>
  )
}


