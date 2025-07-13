import React from "react";

import { useNavigate } from "react-router-dom";
function Regist({setAuth}){
const navigate=useNavigate()
function handleregist(){
    setAuth(true)
    navigate('/dashboard')
    navigate('/home')
}

return(
    <div>
        <button onClick={handleregist}>Regist</button>
        
    </div>
)
}

export default Regist