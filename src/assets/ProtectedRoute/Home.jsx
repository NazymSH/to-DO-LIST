import React from "react";

import { useNavigate } from "react-router-dom";
function Home(){
const navigate=useNavigate()
function log (){
    navigate('/login')
}
return(
    <div className="loginn">
        <input type="text" placeholder="Enter email"   />
        <input type="text" placeholder="Enter password" />
       
         <button onClick={log}>register</button> 
    </div>
)
}
export default Home