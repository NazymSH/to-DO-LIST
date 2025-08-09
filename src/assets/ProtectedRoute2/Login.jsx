import React from "react";

import { useNavigate } from "react-router-dom";
function Login({setAuth}){
const navigate=useNavigate()
function handlelogin(){
    setAuth(true)
    navigate('/home')
    navigate ('/about')
    navigate ('/profile')
}
function handleregis(){
    setAuth(true)
    navigate('/')
}

return(
    <div className="loginn">
        <button onClick={handlelogin}>login</button>
        <button onClick={handleregis}>regis</button>
        
    </div>
)
}

export default Login