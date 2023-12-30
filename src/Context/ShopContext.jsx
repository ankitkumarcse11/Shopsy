// ShopContextProvider.jsx
import React, { createContext, useState } from "react";
import all_product from '../Components/Assests/all_product';

export const ShopContext = createContext(null);
const getDefaultcart=()=>{
  let cart={};
  for(let index=0;index<all_product.length+1;index++)
  {
    cart[index]=0;
  }
  return cart;
}
const ShopContextProvider = (props) => {
  const [CartItems,setcartItems]=useState(getDefaultcart());
 

  const addToCart=(itemId)=>{
  setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
  console.log(CartItems)
  }

  const removeFromCart=(itemId)=>{
    setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
    }
  
    const getTotalCartAmount =()=>{
      let totalAmount=0;
      for(const item in CartItems)
      {
        if(CartItems[item]>0)
        {
          let itemInfo =all_product.find((product)=>product.id===Number(item))
          totalAmount+=itemInfo.new_price*CartItems[item];
        }
        
      }
      return totalAmount;
    }


    const getTotalCartItems =()=>{
      let totalItem=0;
      for(const item in CartItems)
      {
        if(CartItems[item]>0)
        {
          totalItem+=CartItems[item];
        }
      }
      return totalItem;
    }
    const contextValue = {getTotalCartItems,getTotalCartAmount, all_product ,CartItems,addToCart,removeFromCart};

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;
