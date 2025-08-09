import React from "react";

import { useNavigate } from "react-router-dom";
function Home(){
    const navigate=useNavigate()
    function log (){
        navigate('login')
    }
return(
    <div>
        <h1>HOme</h1>
    </div>
    )}
    export default Home