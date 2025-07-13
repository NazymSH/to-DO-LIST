import React, { createContext, useContext, useState } from "react";
import "./Langusage.css";
function Language() {
  return (
    <div>
      <Grandparent />
    </div>
  );
}

const LanguageContext = createContext();

function Grandparent() {
  const [Language, setLanguage] = useState("Миссия түн ортасында басталды");
  return (
    <LanguageContext.Provider value={{ Language, setLanguage }}>
      <Parent />
      <Childd />
    </LanguageContext.Provider>
  );
}

function Childd() {
  const Language = useContext(LanguageContext);

  return ( <div className="CLASS">
    <div className="class">
       <h1>This is Main component👩‍🏫</h1> 
    <p className="class">{Language.Language}</p>
      <select 
        value={Language.Language}
        onChange={(e) => Language.setLanguage(e.target.value)} >
        <option value="Миссия түн ортасында басталды">Қазақша</option>
        <option value="Mission starts at midnight">Ағылшынша</option>
        <option value="Миссия начинается в полночь">Орысша</option>
      </select>
        </div>
    </div>
  );
}

function Parent() {
  const Language = useContext(LanguageContext);
  return (
    < div>
      {/* <p className="class">{Language.Language}</p> */}
    </div>
  );
}

export default Language;
