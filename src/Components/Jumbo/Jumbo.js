import React from "react";
import RightJumbo from './RightJumbo.js'
import LeftJumbo from "./LeftJumbo.js";
import './Jumbo.css'
let img1 = require('../../assets/jumbo1.jfif')

function Jumbo(){
    return(
        <div className="Jumbo">
             
            <LeftJumbo />
            <RightJumbo src={img1}/>
        </div>
    )


}
export default Jumbo;