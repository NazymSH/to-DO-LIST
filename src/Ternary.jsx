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
//  return(
//     <div style={{
//       backgroundColor:Temperature>40 ?'red':Temperature>20  ? 'orange' : 'blue',
//     }}>
//      {Temperature>29 ? "ЫСТЫҚ" :Temperature >20 ?'жылы':'суык' }
   
//     </div>
//  )
// }

// export default  Ternary


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

import React,{useState} from 'react';
 function  Ternary(){
//   const [count,setCout]=useState(0)
    
//   return(
//     <div>
//       <h1>{count}</h1>
//       <button onClick={()=>setCout(count+1)}>+</button>
//       <button onClick={()=>setCout(count-1)}>-</button>
//     </div>
//   )
const fruits = ['Алма', 'Банан', 'Өрік'];

return (
  <ul>
    {fruits.map((fruit, index) => (
      <li key={index}>{fruit}</li>
    ))}
  </ul>
);


}





export default Ternary