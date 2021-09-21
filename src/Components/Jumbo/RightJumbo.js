import React from "react";
import './Jumbo.css'

function RightJumbo(props){
    return(
        <div className="RightJumbo" >
         <img
             src={props.src}
             height="580px" 
             width="100%"
             
             
            />
        </div>
    )
}
export default RightJumbo;