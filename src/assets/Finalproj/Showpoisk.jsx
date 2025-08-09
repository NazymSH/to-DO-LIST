import React from "react";


import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Showpoisk (){
    const navigate=useNavigate()
   

return(
    <div className="cont1">
        
          <div className="Class1">
     <img className="IMG1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtjBw4xwF01ZdKL1cmnYZD3vdavlQPOWA7w&s" alt="" width={140} height={73}/>
      

       <div className="home">
        <Link to={'/Show'}> <img src="https://cdn0.iconfinder.com/data/icons/google-material-design-3-0/48/ic_home_48px-1024.png" alt=""  width={40} height={40} 
        /><span>Главная</span></Link>
       </div>
       <div className="search">
         <Link to={'/Showpoisk'}> <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-search-1024.png" alt=""width={40} height={40}/> <span>Поисковый запрос</span></Link>
       </div>
        <div className="inter">
        <Link to={'/'}> <img src="https://i.pinimg.com/1200x/42/84/5e/42845e80c6d5215149be72f1f37f24db.jpg" alt="" width={40} height={40}/> <span>Интересное</span> </Link>
        </div>

          <div className="reels">
          <Link to={'/'}> <img src="https://cdn3.iconfinder.com/data/icons/instagram-latest/1000/Instagram_reels-1024.png" alt=""width={40} height={40} /> <span>Reels</span>
          </Link>
          </div>
             <div className="message">
              <Link to={'/'}> <img src="https://cdn1.iconfinder.com/data/icons/office-322/24/send-email-message-mail-letter-512.png" alt=""width={40} height={40} /> <span>Сообщения</span>
          </Link>
             </div>
              <div className="Profil">
               <Link to={'/'}> <img src="https://cdn2.iconfinder.com/data/icons/e-commerce-line-4-1/1024/user4-1024.png" alt=""width={40} height={40} /> <span>Профиль</span>
          </Link>
              </div>
          </div>
   </div>
)}
export default Showpoisk
