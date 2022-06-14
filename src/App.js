import React, { useEffect, useState } from "react";
import Nav from "./components/nav";
import Home from "./components/home";
import Shop from "./components/shop";
import Contact from "./contact";
import Cart from "./components/cart";

import Item from "./components/item";
import './App.css'
import { BrowserRouter , Route ,Routes } from "react-router-dom";

function App ({product, itemQuantity}){

  const[shoppingList , setShoppingList]=useState([]);
  const[total , setTotal] = useState(0)
  const  [cartItemsQty , setCartItemsQty] =useState(0)
  const AddItem =()=>{
    let arr =shoppingList
    for(let i=0 ; i <itemQuantity ; i++){
      arr.push(product)
    }
    
    setShoppingList(arr)
    console.log(shoppingList)
  }
  
const addToCart =(newItem , newItemQuantity)=>{
  
  if (shoppingList.map(item=>item.name).includes(newItem.name))
    {changeQty(newItem.name ,newItemQuantity)}
    else{ setShoppingList(shoppingList.concat({...newItem,qty:newItemQuantity}))}

}

const changeQty = (name ,amount) =>{
  setShoppingList(shoppingList.map(item =>item.name===name?{...item ,qty:item.qty +amount}:item))
}

const deleteItem =(dltItem)=>{
  setShoppingList(shoppingList.filter(item=>item.name!==dltItem.name))
}

const getTotal = (list)=>{
  let priceList = shoppingList.map(item=>item.price*item.qty)
  setTotal ( priceList.reduce((prev,curr)=>prev+curr,0))
}



useEffect(()=>{
    countCartItems(shoppingList) ;
    getTotal(shoppingList)
   },[shoppingList])

const countCartItems = (shoppingList) =>{
  setCartItemsQty(shoppingList.map(item=>item.qty).reduce((pre,cur)=>pre+cur,0))

}


  return (
    <BrowserRouter>
      <div>
        <Nav items={cartItemsQty}/>
        <Routes> 
          <Route path="/home" element={<Home/>}/>
          <Route path="/shop" element ={<Shop/>} />
          <Route path="/contact"  element = {<Contact/>}/>
          <Route path ="/cart"  element = {
            <Cart shoppingList={shoppingList} 
                  getTotal={getTotal} 
                  total={total}
                  removeItem={deleteItem} 
                  changeQty={changeQty}/>}/>
          <Route path="/shop/:name"  element ={<Item addToCart={addToCart} shoppingList={shoppingList} setShoppingList = {setShoppingList}/>}   />
        </Routes>
          
          
          
      </div>    
    </BrowserRouter>
    
  )
}


export default App;
