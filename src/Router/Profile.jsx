
import React from "react";
import { useNavigate } from "react-router-dom";

function Profile() {
 
const navigate=useNavigate()
  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1>👤 My Rrojects</h1>
       
       
        <div className="imgg2">
           <img src="https://webdevmonk.com/main/html.png" alt="" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN-R7LjZirQO8gxcqLt6KV-LOhKBVHGH4X5Q&s" alt="" />
      <img src="https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png" alt="" />
        </div>
        
        
         <button onClick={()=>navigate('/project')}>"Go to My Projects"</button>
      </div>
    </div>
  );
}





export default Profile;