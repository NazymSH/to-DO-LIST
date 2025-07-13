import React from "react";

import { useNavigate } from "react-router-dom";
function Dashboard(){
const navigate=useNavigate()
function log (){
    navigate('/login')
}
function handleprofil(){
    navigate('/Project')
}
function handleabout(){
    navigate('/about')
}
return(
    <div className="loginn"> 
    <div className="btn">
         <button onClick={log}>home</button> 
        <button onClick={handleabout}>About me</button>
        <button onClick={handleprofil}>my projects</button>
    </div>
     
        <h1>Бастапқы бетке қош келдіңіз</h1>
      

    </div>
)
}
export default Dashboard