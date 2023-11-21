import React from 'react'
import { Items } from "./Items.jsx";
import {PRODUCTS} from '../../assets/Products.js'
import Nav  from "../../Components/Nav";

export const Products = () => {
  return (
    <div className='products'>
      <Nav />
      <div>
      </div>
      <div className='product-name'>
        <h1>Keyboard Product Main Page</h1>
      </div>
      <div className='product-display'>
        {PRODUCTS.map((product) => (
          <Items data={product} />
        ))}
      </div>
    </div>
  )
}
