// import React,{useState} from 'react';
// function  Ternary(){
//  const isAdmin=true 
//  return(
//     <div>
//      {isAdmin &&  <p>Сіз әкімшісіз</p>}
//     </div>
//  )
// }

// export default  Ternary


// import React,{useState} from 'react';
// function  Ternary(){
//  const isSubscride=true
//  return(
//     <div>
//      {isSubscride &&  <p>Сіз Premium қолданушысыз</p>}
//      {!isSubscride && <p>Қарапайым қолданушы</p>}
//     </div>
//  )
// }

// export default  Ternary


// import React,{useState} from 'react';
// function  Ternary(){
//  const isOnline=false
//  return(
//     <div>
//      {isOnline ? "қОЛДАНУШЫ ОНЛАЙН" : "ҚОЛДАНУШЫ ОФЛАЙН"}
   
//     </div>
//  )
// }

// export default  Ternary


// import React,{useState} from 'react';
// function  Ternary(){
//  const Temperature="67"
//  const Guesion="абылай"
//   const questions = [
//   {
//     id: 1,
//     question: "Қазақстанның астанасы қай қала?",
//     options: ["Алматы", "Нұр‑Сұлтан", "Шымкент", "Ақтөбе"],
//     answer: "Нұр‑Сұлтан"
//   }
// ];


//  return(


//     <div style={{
//       backgroundColor:Temperature>40 ?'red':Temperature>20  ? 'orange' : 'blue',
//     }}>
//      {Temperature>29 ? "ЫСТЫҚ" :Temperature >20 ?'жылы':'суык' }
//    {Guesion === "абылай" ? "Дұрыс" : Guesion === "шынгыс" ? "Бұрыс" : "Қате"}
//  <p>{questions}</p>
//     </div>
//  )
// }

// export default  Ternary

import React, { useState } from 'react';

function Ternary() {
  const question = "React не болып табылады?";
  const options = [
    { id: "A", text: "Бағдарламалау тілі" },
    { id: "B", text: "JavaScript кітапханасы" },
    { id: "C", text: "Браузер" },
    { id: "D", text: "CMS жүйесі" }
  ];
  const correctAnswer = "B";

  const [selected, setSelected] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    if (selected) {
      setIsSubmitted(true);
    }
  };

  return (
    <div>
      <h2>{question}</h2>

      {options.map((option) => {
        const isCorrect = option.id === correctAnswer;
        const isChosen = option.id === selected;

        const getStyle = () => {
          if (!isSubmitted) return {};
          if (isCorrect) return { backgroundColor: "lightgreen" };
          if (isChosen && !isCorrect) return { backgroundColor: "salmon" };
          return {};
        };

        const getSymbol = () => {
          if (!isSubmitted) return "";
          if (isCorrect) return "✅";
          if (isChosen && !isCorrect) return "❌";
          return "";
        };

        return (
          <button
            key={option.id}
            style={{
              margin: '5px',
              padding: '10px',
              width: '100%',
              textAlign: 'left',
              ...getStyle()
            }}
            onClick={() => {
              if (!isSubmitted) setSelected(option.id);
            }}
          >
            {option.id}. {option.text} {getSymbol()}
          </button>
        );
      })}

      <br />

      <button onClick={handleSubmit} disabled={isSubmitted || !selected}>
        Жіберу
      </button>

      {isSubmitted && (
        <p style={{ marginTop: '10px' }}>
          {selected === correctAnswer
            ? "🎉 Дұрыс жауап!"
            : `Қате. Дұрыс жауап: ${correctAnswer}`}
        </p>
      )}
    </div>
  );
}

export default Ternary;


// import React,{useState} from 'react';
// function  Ternary(){
//  const[isDark,setDark]=useState(true)
//  return(
//     <div>
//     <button style={{backgroundColor:isDark>false ? 'red' :isDark>true ?'blue':'',}} onClick={()=>setDark(!isDark)}>{isDark ? 'dark mode':'light mode'}</button>
   
//     </div>
//  )
// }

// export default  Ternary
// import React,{useState} from 'react';
// function  Ternary(){
//  const[isShow,setShow]=useState(false)

//  return(
//     <div>
//     <button onClick={()=> setShow(!isShow)}>{isShow ? 'Көрсету' : 'Жасыру'} </button>
   
//     <p style={{
//         display:isShow ? 'none' :'block'
//     }}>ghghj
//       </p> 

//     </div>
//  )
// }


//  export default  Ternary




// import React, { useState } from "react";
// import './Ternary.css'

// function Ternary() {
//   const [isShow, setShow] = useState(false);
//   const [isLogin, setLogin] = useState(false);

//   return (
//     <div className="class">
     
//       {!isShow && !isLogin && (
//         <div>
//           <p>Жүйеге кіру қажет</p>
//           <button onClick={() => setShow(true)}>Register</button>
//           <button onClick={() => setLogin(true)}>Login</button>
//         </div>
//       )}

      
//       {isShow && !isLogin && (
//         <div>
//           <p>Register form</p>
//           <input type="text" placeholder="Enter email or number" />
//           <input type="password" placeholder="Enter new password" />
//           <button onClick={() => setShow(false)}>Register</button>
//         </div>
//       )}

    
//       {isLogin && !isShow && (
//         <div>
//           <p>Бастапқы бетке қош келдіңіз</p>
//           <button onClick={() => setLogin(false)}>Login out</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Ternary;

// import React,{useState} from 'react';
//  function  Ternary(){
//   const [count,setCout]=useState(0)
    
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCout(count+1)}>+</button>
//       <button onClick={()=>setCout(count-1)}>-</button>
//     </div>
//   )
// const fruits = ['Алма', 'Банан', 'Өрік'];

// return (
//   <ul>
//     {fruits.map((fruit, index) => (
//       <li key={index}>{fruit}</li>
//     ))}
//   </ul>
// );


// }





// export default Ternary