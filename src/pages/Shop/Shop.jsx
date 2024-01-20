import "./shop.css";
import React from 'react'
import {PRODUCTS} from "../../products";
import {Item} from "./item";

const Shop = () => {
  return (
    <div className="shop">
        <div className="titles">
            <h1>Rafon Fashions</h1>
        </div>
        <div className="products">
          {PRODUCTS.map((item)=>(
          <Item  data={item}/>
          ))}
        </div>
    </div>
  )}


export default Shop