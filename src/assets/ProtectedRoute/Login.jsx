import React from "react";

import { useNavigate } from "react-router-dom";
function Login({setAuth}){
const navigate=useNavigate()
function handlelogin(){
    setAuth(true)
    navigate('/dashboard')
    
}
function handleregis(){
    setAuth(true)
    navigate('/home')
}

return(
    <div className="loginn">
        <button onClick={handlelogin}>login</button>
        <button onClick={handleregis}>regis</button>
        
    </div>
)
}

export default Login