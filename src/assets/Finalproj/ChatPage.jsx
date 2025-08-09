
// import { lazy } from "react";
// import { useState } from "react";
// import { useNavigate } from 'react-router-dom';
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import './Chatpage.css'

// function ChatPage(){
//    const navigate=useNavigate()
//    const [Home,setHome]=useState(false)
//   const[question, setQuestion] =  useState('')
//   const[answer, setAnswer] = useState([])
//   function ask(){
//     axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`, {
//       contents: [{parts: [{
//         text: question 
//       }]}]
//     }, 
//   {
//     headers: {'Content-Type': 'application/json'}
//   })
//   .then(response=> setAnswer([...answer, {answer: response.data.candidates?.[0]?.content?.parts?.[0]?.text, question: question }]))
//   }

// return(
//       <div className="text55">
     
//            <div className="top-bar">

             
//     <button className="btn" onClick={()=>setHome(!Home)}>
//       {Home ? <img  className="bt" src="https://d2cvjmix0699s1.cloudfront.net/resources/elephango/resourceFull/what-is-history-11908-full.jpg" alt="" width={40} height={40} />  : <img className="bt" src="https://cdn-icons-png.flaticon.com/128/15468/15468239.png" alt="" width={40} height={40} />  }
//     </button> <h1 className='landingh1'>Talk2History</h1>
//     <h1>Talk</h1>
   
// </div>


//   {Home &&  <div className="Home">
//           <div className="Profil">
//             <Link to={'/Show'}>
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzRO7JeUdNBl_M9GB4NV18V8duW7mEDM_mg&s" alt="" width={40} height={40} />
//               <span>тұлға паракшасы</span>
//             </Link>
//             </div>
//            <div className="Profil"> 
//             <Link to={'/AnswerPage'}>
//               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjnS5fhy6wyT0Osw3A92jT98ry0S5MEEnO2w&s" alt="" width={40} height={40} />
//               <span>Quiz</span>
//             </Link>
//             </div>

//              <div className="Profil"> 
//             <Link to={'/MapPage'}>
//               <img src="https://media.istockphoto.com/id/953455882/vector/map-icon-vector-image-of-a-location-icon-search-pointer-on-navigation-isolated-on-white-line.jpg?s=612x612&w=0&k=20&c=7VQXHH65RCq9x-aOhhSRcgMoNFFwdPzCitCP8CXHkjU=" alt="" width={40} height={40} />
//               <span>Map</span>
//             </Link>
//             <Link to={'/Login'}>login</Link>
//             </div>
//         <div>
//         </div>
         


//             </div>
          
//    }
   



// {answer.map(a=>{
 
//  return(

//   <div>
   
         
//            <div className="answer-area">
//             <div className="p2">

            
//             <p className="question">{a.question}-</p>
//              <p   className="answer">-{a.answer}</p>
//           </div> </div>
//       {/* <p>{a.question}</p> */}
     
//     </div>
    
//   )
//  })}

 

// <div className="Chat">

//  <input  type="text" placeholder="Сұрақ қойыныз..."  onChange={(e)=>setQuestion(e.target.value)}
//    onKeyDown={(e) => e.key === 'Enter' && ask()}
 
 
//  /> 
//  <button className="askq" onClick={ask}>ask</button>
 
// </div>





//   </div>









//   )}
// export default ChatPage
import { useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import './Chatpage.css';

function ChatPage() {
  const navigate = useNavigate();
  const [Home, setHome] = useState(false);
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState([]);

  function ask() {
    axios.post(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=AIzaSyAtOX-Yvymqz8ogViLD1EyzdqLPK85W3wQ`, {
      contents: [{ parts: [{ text: question }] }]
    },
      {
        headers: { 'Content-Type': 'application/json' }
      })
      .then(response => setAnswer([...answer, {
        answer: response.data.candidates?.[0]?.content?.parts?.[0]?.text,
        question: question
      }]));
  }

  return (
    <div className="chat-page-container">
      {/* Top bar */}
      <div className="top-bar">
        <button className="menu-btn" onClick={() => setHome(!Home)}>
          <img
            className="icon-img"
            src=""
            alt="menu"
            width={28}
            height={28}
          />
        </button>
        <h1 className="logo-text">Talk2History</h1>
      </div>

      {/* Sidebar */}
      {Home && (
        <div className="side-menu">
          <button className="close-btn" onClick={() => setHome(false)}>×</button>

          <div className="profile-block">
            <img
              className="profile-pic"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKzRO7JeUdNBl_M9GB4NV18V8duW7mEDM_mg&s"
              alt="profile"
            />
            <h3>Сәлем, Тарихшы!</h3>
          </div>

          <nav className="menu-links">
            

            <Link to="/AnswerPage" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/9068/9068663.png" alt="icon" />
              <span>Quiz</span>
            </Link>

            <Link to="/MapPage" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/535/535137.png" alt="icon" />
              <span>Карта</span>
            </Link>
            
            <Link to="/Book" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/9043/9043296.png" alt="icon" />
              <span>Library</span>
                </Link>
                
                  <Link to="/Onepage" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/5776/5776862.png" alt="icon" />
              <span>Years</span>
            </Link>
             <Link to="/Messages" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/5356/5356190.png" alt="icon" />
              <span>Тұлғалармен жеке  сұхпат</span>
            </Link>

                  <Link to="/interesting" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/9060/9060280.png" alt="icon" />
              <span>reels</span>
            </Link>
                
            <Link to="/Matsh" className="menu-item">
              <img src="https://cdn-icons-png.flaticon.com/512/159/159707.png" alt="icon" />
              <span>Кіру</span>
            </Link>
             
          
          </nav>
        </div>
      )}

      {/* Chat history */}
      <div className="chat-history">
        {answer.map((a, index) => (
          <div key={index} className="chat-bubble">
            <p className="user-question"><strong>Сұрақ:</strong> {a.question}</p>
            <p className="bot-answer"><strong>Жауап:</strong> {a.answer}</p>
          </div>
        ))}
      </div>

      {/* Chat input */}
      <div className="chat-input">
        <input
          type="text"
          placeholder="Сұрақ қойыңыз..."
          onChange={(e) => setQuestion(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && ask()}
        />
        <button className="send-btn" onClick={ask}>Жіберу</button>
      </div>
    </div>
  );
}

export default ChatPage;
