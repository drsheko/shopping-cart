import React from "react";
import { Link } from "react-router-dom";
function Nav ({items }){

       

    return (
        <ul className="nav">
           <Link to="/home"> <li>Home</li></Link>
           <Link to="/shop"> <li>Shop</li></Link>
           <Link to="/contact" > <li>Contact</li></Link>
            
            <Link to="/cart"><li>Cart({items})</li></Link>
        </ul>
    )
}


export default Nav ;