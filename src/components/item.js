import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import products from '../products'
const images = require.context('../images')
const imagePath = (image) =>images(image,true)
function Item ({addToCart ,shoppingList , setShoppingList}){
    var { name } = useParams()
    
    const [items ,setItems] =useState(products)
    
    const [product,setProduct] =useState(items.find((item)=> item.name===name))
    const [itemQty,setItemQty] =useState(1)
    const handleChange = (e)=>{
        let num = e.target.value
       setItemQty(Number(num))
       
    } 




    return(
        <div className="item-detail">
            <img src={images(product.photo)} alt={product.name}/>
            <div>
                <h2>{product.name}</h2>
                <h3>${product.price} usd</h3>
                <input type="number" min={1}  onChange={handleChange} value={itemQty} /><br/>
                <button onClick={()=>addToCart(product,itemQty)}>Add to cart</button>
            </div>
        </div>
    )
}

export default Item;