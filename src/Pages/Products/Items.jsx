import React, { useContext } from 'react'
import { ProductContext } from "../../Context/Product-Context";

export const Items = (props) => {

    const{id, name, model, image} = props.data;
    const {addToCart, cartItems} = useContext(ProductContext)
    const cartAmount = cartItems[id]

  return  <div className='item-image'>
        <img src={image} />
        <div className='item-name'>
            <p><b>{name}</b></p>
            <p>{model}</p>
          
        </div>
        <button className='viewmore'>View More</button>
        <button className='add-to-cart' onClick={()=> addToCart(id)}>Add to Cart{cartAmount > 0 &&<>({cartAmount})</>}</button>
  </div>
  
}
