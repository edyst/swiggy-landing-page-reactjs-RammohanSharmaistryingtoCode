import React from "react";
import Heading from "../Jumbo/Heading";
 
let gplay = require('../../assets/gplay.png');
let astore = require('../../assets/astore.png');

function LeftText(){
    return(
        <div className="LeftText">
            <Heading 
            bigtext="Restaurants in your pocket" 
            smalltext="Order from your favorite restaurants & track on the go, with the all-new Swiggy app."
             />
             <div className="app1">
                 <a href=""><img src={gplay}  width="180px" height="54px" /></a>
                 <a href=""><img src={astore} width="180px" height="54px" /></a>
             </div>
       </div>
    )
}
export default LeftText;