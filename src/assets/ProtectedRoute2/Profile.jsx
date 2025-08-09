import React from "react";

import { useNavigate } from "react-router-dom";
function Profile(){
    const navigate=useNavigate()
    function log (){
        navigate('login')
    }
return(
    <div>
        <h1>Pfofile</h1>
    </div>
    )}
    export default Profile