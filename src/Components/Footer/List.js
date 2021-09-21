import React from "react";
import data from './data.json';
import './Footer.css'

function List(props) {
    let ram = data[props.num]
    return(
        <div className="List">
            <div className="listhead" id={props.id}>
                <p>{props.title}</p>
            </div>

            <div className="listtext">
             {ram.map((element)=>
                
                    <p key={element.name}><a href={element.url}>{element.name} </a> </p>
           
             )}
             </div>
        </div>
    )
} 

export default List;