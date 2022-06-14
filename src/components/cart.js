import React, { useState } from "react";
const images = require.context('../images')
const imagePath = (image) =>images(image,true)
function Cart ({shoppingList,total,removeItem ,changeQty}){

    return (
       shoppingList.length>0 ? <>
        {shoppingList.map(item=>{ return(
            <div key={item.name}>
                <h3>{item.name}</h3>
                <img src={images(item.photo)}/>
                
                <div>
                    <button onClick={()=>{changeQty(item.name,-1)
                    if(item.qty ===1){removeItem(item)}}}>-</button>
                    <input type="text" value={item.qty}/>
                    <button onClick={()=>{changeQty(item.name,+1)}} >+</button>
                </div>

                
                <h4>item Qty :{item.qty}</h4>
                <h4>price: {(item.qty*item.price).toFixed(2)}</h4>
                <button onClick={()=>removeItem(item)}>remove</button>
            </div>)
        })}
        <h1>total price :{total.toFixed(2)}USD</h1>
        </>
        :<h1>No Items in the cart !!!! </h1>
    )
}

export default Cart ;