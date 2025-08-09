// // src/pages/Landing.jsx
// import React from 'react';
// import './Login.css';
// import { Link } from 'react-router-dom';
// import img from '/ChatGPT Image 6 авг. 2025 г., 21_53_28.png'
// const Login = () => {
//   return (
//     <div className="landing"> <h1 className='landingh1'>Talk2History</h1>
      
      
//       <div className="card">
       
//         <p>
//          Скучный кітаптар емес – тірі тарих!  . Talk2History арқылы сен өткеннің
//   ұлыларымен сөйлесе аласың. Абайдың өсиетін тыңда, Әлияның ерлігін сез, 
//   Бауыржанның рухымен шабыттан! Сұрақтарға жауап бер, біліміңді сына, тарихпен бірге өмір сүр!
//         </p>
        
//       </div>
//       <img src={img} alt="" />
//       <div className="buttons">
//           <Link to="/signup" className="btn register">Тіркелу</Link>
//           <Link to="/login" className="btn login">Кіру</Link>
//         </div>
//     </div>
//   );
// };

// export default Login;
// src/pages/Landing.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import img from '/ChatGPT Image 6 авг. 2025 г., 21_53_28.png';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (email && password) {
      navigate('/Chatpage');
    } else {
      alert('Email мен құпиясөзді толтырыңыз');
    }
  };

  return (
    <div className="landing-container">


 <div class="timeline">
  <div class="container left">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum..</p>
    </div>
  </div>
  <div class="container right">
    <div class="content">
      <h2>2016</h2>
      <p>Lorem ipsum..</p>

    </div>
  </div>

  <div class="container left">
    <div class="content">
      <h2>2017</h2>
      <p>Lorem ipsum..xxxx</p>
    </div>
  </div>
</div>

















      {/* <div className="intro-card">
        <img src={img} alt="Coffee with History" className="intro-image" />
        <h2>Welcome to Talk2History</h2>
        <p>Скучный кітаптар емес – тірі тарих! Абайдың өсиетін тыңда, Әлияның ерлігін сез, 
          Бауыржанның рухымен шабыттан! Сұрақтарға жауап бер, біліміңді сына, тарихпен бірге өмір сүр!</p>
        <button className="primary-btn" onClick={handleLogin}>Кіру</button>
      </div>

      <div className="auth-card">
        <div className="tabs">
          <span className="active">Sign In</span>
          <Link to="/signup">Sign Up</Link>
        </div>

        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="primary-btn" onClick={handleLogin}>Кіру</button>
        <p className="forgot">Құпиясөзді ұмыттың ба?</p>
        <div className="divider">немесе</div>
        <button className="google-btn">Google арқылы кіру</button> */}



      </div>
   
  );
};

export default Login;