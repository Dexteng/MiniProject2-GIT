import React, {useContext} from 'react'
import { PRODUCTS } from '../../assets/Products'
import { ProductContext } from "../../Context/Product-Context";
import { CartItem } from "./Cart-Item";
import Nav  from "../../Components/Nav";


export const Cart = () => {
  const {cartItems} = useContext(ProductContext)
  return (
    <div className='cart'>   
      <div>
        <Nav />
        <h1>Cart items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0 ){
            return <CartItem data={product} />;
          }
        })}
        
        <div className='checkout'>

          <p>Subtotal: $</p>
          <button>Continue Shopping</button>
          <button>Checkout</button>
        </div>
      </div>
    </div>
  )
}
