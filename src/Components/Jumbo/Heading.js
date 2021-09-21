import React, { useEffect, useState } from "react";
import './Jumbo.css'


function Heading(props){
    const [text,setText] = useState("Game night?")
    var topics =["Game night?","Late night at office?","Hungry?","Unexpected guests?","Cooking gone wrong?",
        "Movie marathon?"]
    let count =0;
    useEffect(()=>{
     setInterval(()=>{
        setText(topics[count%6]);
        count++;
    },2000);
    },
    []);
    return (
        <div className="Heading">
            <h1>
                {text}
            </h1>
            <p >
                {props.smalltext}
            </p>
        </div>
    )
}

export default Heading;