import React from "react";
import { ReactDOM } from "react";
import Card from "../card";
import "../App.css"
const images = require.context('../images')
const imagePath = (image) =>images(image,true)
function Shop (props){

    const items = [
        {   name : 'Zero',
            photo: "./zero.jpeg"  ,
            price: 20.99},
        {   name : 'Zero2',
            photo:   './zero2.jpeg',
            price: 25.99 },
        {   name : 'Luke S kit',
            photo:  './luxe-s-kite.jpeg' ,
            price:   55.99},
        {   name : 'Novo 2 kit',
            photo:  './novo2.jpeg' ,
            price:   21.99},
        {   name : 'Novo 4 kit',
            photo:  './novo4.jpeg' ,
            price:    18.99},    
    ]

    return (
        <div>
            <h3>Products</h3>
            <div className="card-container"> 
                {items.map(item =>
                <Card imgSrc={images(item.photo)} 
                  itemName={item.name}
                  itemPrice={item.price}
                    key={item.name} 
                    id ={item.name}/>
                    
            )}
            </div>
        </div>
    )
}


export default Shop ;