import React from "react";

import { useNavigate } from "react-router-dom";
function About(){
const navigate=useNavigate()
function log (){
    navigate('/login')
}
return(
    <div>
        <p>Welcome to about</p>
         <button onClick={log}>about</button> 
    </div>
)
}
export default About