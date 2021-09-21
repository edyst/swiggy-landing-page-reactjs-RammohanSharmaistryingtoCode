import React from "react";
 import './Footer.css'
import List from "./List";

let gplay = require('../../assets/gplay.png');
let astore = require('../../assets/astore.png');
let fb = require('../../assets/fb.png');
let pinterest = require('../../assets/pinterest.png');
let ig = require('../../assets/ig.png');
let twitter = require('../../assets/twitter.png');
let swiggy = require('../../assets/swiggy.png')

function Footer(){
    return(
        <div className="Footer">
            <div className="Footer1">
        
                <List title ="company" num={0}/>
                <List title ="contact" num={1}/>
            
        
                <List title ="legal" num={2}/>
                <div className="app2">
                 <a href=""><img src={gplay}  width="180px" height="54px" /></a>
                <a href=""> <img src={astore} width="180px" height="54px" /></a>
            
                </div>
            </div>
             
            <div className="Footer1 Footer2">
    
            <List title ="we deliver to" num={3}/>
            <List title =" " num={4}/>
        
    
            <List title =" " num={5}/> 
            <List title =" " num={6} id="last"/>   
        
            </div>
            <div className="Copyright">
                
                <div>
                    <a href=""><img src={swiggy} width="142px" height="42px" /></a>
                </div>
                <div><p>© 2021 Swiggy</p></div>
                <div className="socialmedia">
                    <a href=""><img src={fb} width="24px" height="24px" /></a>
                    <a href=""><img src={pinterest} width="24px" height="24px" /></a>
                    <a href=""><img src={ig} width="24px" height="" /></a>
                    <a href=""><img src={twitter} width="24px" height="24px" /></a>
                </div>   
                
            </div>    
        </div>
    )
}

export default Footer;