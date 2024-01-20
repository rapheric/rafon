import { createContext ,React,useState} from "react"

import { PRODUCTS } from "../products";
 export const ShopContext = createContext(null);

const getDefaultItem=()=>{
    let cart={}
    for(let i=1;i< PRODUCTS.length+1 ;i++){
        cart[i]=0

    }
    return cart
}

const ShopContextProvider = (props)=> {
   const [cartItems, setCartItems]=useState( getDefaultItem())

   const addToCart=(itemId)=>{
    setCartItems(prev=>({...prev, [itemId] : prev[itemId]+1}))
   }

   const removeFromCart=(itemId)=>{
    setCartItems(prev=>({...prev, [itemId] : prev[itemId]-1}))
   }
   const updateCartItemCount=(itemId,newAmount)=>{
    setCartItems((prev)=> ({...prev, [itemId]:newAmount}))
   }
   
   
   const getTotalCartAmount=(item)=>{
    let totalAmount=0;
  for(item in cartItems){
    if(cartItems[item]>0){
      let itemInfo=PRODUCTS.find((item)=>item.id ===Number(item))
      totalAmount+=cartItems[item]*itemInfo.price
    }
    return totalAmount
  }
   }
   

console.log(cartItems)

   const ContextValue= 
   {
    cartItems, 
    addToCart,
    removeFromCart,
    updateCartItemCount,
    getTotalCartAmount
  }

      return (
    <ShopContext.Provider value ={ContextValue}>{props.children}</ShopContext.Provider>
  )
}

export default ShopContextProvider