import React from "react";
import './Restaurants.css'

let img3 = require('../../assets/restaurants1.png');
let img4 = require('../../assets/restaurants2.png');


function RightImages(){
    return(
        <div className="RightImages">
            <img src={img3} />
            <img src={img4} id="img4"/>
        </div>
    )
}
export default RightImages;