import React from "react";

import { useNavigate } from "react-router-dom";
function About(){
    const navigate=useNavigate()
    function log (){
        navigate('login')
    }
return(
    <div>
        <h1>About</h1>
    </div>
    )}
    export default  About