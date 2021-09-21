import React from "react";
import './F_C.css';

function F_Component(props){
    return(
        <div className="F_C">
             <img
            src={props.src}
            height="200px" width="110px"
            />
            <h2>{props.title}</h2>
            <h4>{props.text} </h4>
        </div>
    )
}

export default F_Component;