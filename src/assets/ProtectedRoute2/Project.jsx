import React from "react";

import { useNavigate } from "react-router-dom";
function Project(){
    const navigate=useNavigate()
    function log (){
        navigate('login')
    }
return(
    <div>
        <h1>Project</h1>
    </div>
    )}
    export default  Project