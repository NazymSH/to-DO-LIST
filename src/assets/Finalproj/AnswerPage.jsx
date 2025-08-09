// src/pages/QuestionAnswerPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './AnswerPage.css'

export default function AnswePage() {
  return (
    <>  
    <div  className='answerpage'>
     <h1 className='qa-h1'>❓ Сұрақ – Жауап</h1> 
      <p className='qa-h2'>Тұлғалар жайлы сұрақтарға жауап беріп, тарихты қызықты жолмен үйрен!</p>
    <div className="qa-container">
   
    

      <div className="qa-truefalse">
       
      <Link to="/truefalse" className="qa-button">True False</Link><br />
       <Link to={"/quizapp"} className="qa-button">Quizz</Link>
      </div>
    </div>
    </div>
    </>
  );
}
