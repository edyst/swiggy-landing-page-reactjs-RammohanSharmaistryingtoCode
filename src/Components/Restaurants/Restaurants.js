import React from "react";
import RightImages from "./RightImages";
import LeftText from "./LeftText";
import './Restaurants.css'

function Restaurants(){
    return(
        <div className="Restaurants">
            <LeftText/>
            <RightImages/>
        </div>
    )
}

export default Restaurants;