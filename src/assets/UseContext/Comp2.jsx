// import React, { createContext, useContext, useState } from "react";

// function Comp2(){
//     return(
//         <div>
//             <Grandparent/>
//         </div>
//     )
// }
// const ToyContext=createContext()
// const ThemeContext=createContext()
// const LanguageContext=createContext()
// function Grandparent(){
//     const [toy,setToy]=useState('робот')
//     const [theme,setTheme]=useState('light')
//     const [Language,setLanguage]=useState('Сәлем')
//     return(
//         <LanguageContext.Provider value={{Language,Language}}>
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
//      <button onClick={()=>Language.setLanguage(Language.Language=='kk')}></button>

//          </div>
//     )
// }

// function Parent(){
//     const toy=useContext(ToyContext)
//     return(
//         <div>
//             <p>Сенің ойыншығың:{toy.toy}</p>
//          </div>
//     )   
// }
// export default Comp2;


// import React, { createContext, useState, useContext } from "react";
// import "./UseContexrt.css"; 


// const LanguageContext = createContext();


// function LanguageProvider({ children }) {
//   const [language, setLanguage] = useState("kk");
//   return (
//     <LanguageContext.Provider value={{ language, setLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// }

// function Comp2() {
//   return (
//     <LanguageProvider>
      
//         <Greeting />
     
//     </LanguageProvider>
//   );
// }


// function Greeting() {
//   const { language, setLanguage } = useContext(LanguageContext);

//   const translations = {
//     kk: "Сәлем!",
//     ru: "Привет!",
//     en: "Hello!",
//   };

//   const handleChange = (e) => {
//     setLanguage(e.target.value);
//   };

//   return (
//     <div className="card">
//       <h2>{translations[language]}</h2>
//       <p>Тіл: {language}</p>

//       <select value={language} onChange={handleChange}>
//         <option value="kk">Қазақша</option>
//         <option value="ru">Орысша</option>
//         <option value="en">Ағылшынша</option>
//       </select>
//     </div>
//   );
// }


// export default Comp2;


import React, { createContext, useState, useContext } from "react";
import "./UseContexrt.css";

const LanguageContext = createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("kk");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

function Comp2() {
  return (
    <LanguageProvider>
      <div className="container">
        <h1>HomeWork useContext</h1>
        <h2>This is Test component</h2>
        <MainCard />
        <footer>Secret language selection app © 2025</footer>
      </div>
    </LanguageProvider>
  );
}

function MainCard() {
  return (
    <div className="outer-box">
      <div className="inner-box">
        <h3>This is Main component 🧑‍🏫</h3>
        <Greeting />
      </div>
    </div>
  );
}

function Greeting() {
  const { language, setLanguage } = useContext(LanguageContext);

  const messages = {
    kk: "Миссия түн ортасында басталады.",
    ru: "Миссия начинается в полночь.",
    en: "The mission starts at midnight.",
  };

  const handleChange = (e) => {
    setLanguage(e.target.value);
  };

  return (
    <div className="card">
      <p>{messages[language]}</p>
      <select value={language} onChange={handleChange}>
        <option value="kk">Қазақша</option>
        <option value="ru">Орысша</option>
        <option value="en">Ағылшынша</option>
      </select>
    </div>
  );
}

export default Comp2;
