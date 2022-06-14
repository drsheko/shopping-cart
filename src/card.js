import React from "react";
import { Link } from "react-router-dom";


const Card =({
    imgSrc,
    itemName,
    itemPrice
}) =>{

    return (
        <div key={itemName}>
            <Link to={`/shop/${itemName}`} >
                <img src={imgSrc} alt={imgSrc} />
                <h3>{itemName}</h3>
                <h4 style={{color:"green"}}>${itemPrice}</h4>
            </Link>
        </div>
    )

}

export default Card ;