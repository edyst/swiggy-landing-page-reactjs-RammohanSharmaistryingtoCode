import React from "react";
import Navbar from "./Navbar";
import Form from './Form'
import Heading from "./Heading";
import './Jumbo.css'
 import Cities from "./Cities";

function LeftJumbo(){
    return (
        <div className="LeftJumbo">
            <Navbar/>
            <Heading smalltext="Order food from favourite restaurants near you."
            bigtext="Hungry?" />
            <Form />
            <Cities/>
        </div>
    )
}

export default LeftJumbo;

 