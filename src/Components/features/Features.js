import React from "react";
import './Features.css'
import F_Component from './F_Component';

let img1 = require('../../assets/features1.png');
let img2 = require('../../assets/features2.png');
let img3 = require('../../assets/features3.png');


function Features() {
    return(
        <div className="Features">
           <F_Component title = "No Minimum Order" 
           src={img1}   
           text="Order in for yourself or for the group, with no restrictions on order value"
           />
           <F_Component title = "Live Order Tracking" 
           src = {img2} 
           text="Know where your order is at all times, from the restaurant to your doorstep"
           />
           <F_Component title = "Lightning-Fast Delivery" 
           src = {img3} 
           text="Experience Swiggy's superfast delivery for food delivered fresh & on time"
           />
        </div>
    )
}
export default Features;