


// import React, { createContext, useContext, useState } from "react";

// function Comp2(){
//     return(
//         <div>
//             <Grandparent/>
//         </div>
//     )
//  }
// const ToyContext=createContext()
// const ThemeContext=createContext()
// const LanguageContext=createContext()
// function Grandparent(){
//      const [toy,setToy]=useState('робот')
//     const [theme,setTheme]=useState('light')
//     const [Language,setLanguage]=useState('')
//     return(
//         <LanguageContext.Provider value={{Language,setLanguage}}>
//  <ThemeContext.Provider value={{theme,setTheme}}>
//         <ToyContext.Provider value={{toy,setToy}}>
//       <Parent/>
//       <Childd/>
//         </ToyContext.Provider>
//      </ThemeContext.Provider>
//         </LanguageContext.Provider>
       
//     )
// }

// function Childd(){
//     const toy=useContext(ToyContext)
//     const theme=useContext(ThemeContext)
//     const Language=useContext(LanguageContext)
     
//     return(
//         <div style={{
//             backgroundColor:theme.theme=='dark'?'black':'white'
//         }}>
          
//             <p>Dark {toy.toy} </p>
//     <button onClick={()=> toy.setToy ('dark')}>Өзгерту</button>
//     <button onClick={()=>theme.setTheme(theme.theme=='dark'?'light':'dark')}>{theme.theme=='dark'?'dark':'light'}</button>
    
// <select
//   value={Language.Language}
//   onChange={(e) => Language.setLanguage(e.target.value)}
// >
//   <option value="Миссия түн ортасында басталды">Қазақша</option>
//   <option value="Mission starts at midnight">Ағылшынша</option>
//   <option value="Миссия начинается в полночь">Орысша</option>
// </select>


//          </div>
//     )
// }

// function Parent(){
//     // const toy=useContext(ToyContext)
//     const Language=useContext(LanguageContext)
//     return(
//         <div>
//             {/* <p>Сенің ойыншығың:{toy.toy}</p> */}
//         <p>{Language.Language}</p>
//          </div>
//     )   
// }
// export default Comp2;




