// src/components/TrueFalseGame.jsx
import React, { useState } from 'react';
import './TrueFalseGame.css';

const questions = [
  {
    statement: "Абай Құнанбаев тек қазақ тілінде ғана өлең жазған.",
    isTrue: false,
    explanation: "Абай орыс тілінен аудармалар жасаған, мысалы, Лермонтов пен Пушкиннің шығармаларын қазақшаға аударған."
  },
  {
    statement: "Әл-Фараби математика, музыка, логика салаларында еңбектер жазған.",
    isTrue: true,
    explanation: "Иә, Әл-Фараби — әмбебап ғалым, оның еңбектері ғылымның түрлі саласын қамтиды."
  },
  {
    statement: "Наполеон Франция патшасы болған.",
    isTrue: false,
    explanation: "Жоқ, ол император болған, бірақ патша емес. Францияда патшалық билік жойылған."
  },
  {
    statement: "Бауыржан Момышұлы — Ұлы Отан соғысының қатысушысы.",
    isTrue: true,
    explanation: "Иә, ол Мәскеу үшін шайқаста ерекше ерлік көрсеткен."
  },
  {
    statement: "Анна Франк — қазақ ақыны.",
    isTrue: false,
    explanation: "Жоқ, Анна Франк — еврей қызы, Екінші дүниежүзілік соғыста күнделік жазған."
  }
];

export default function TrueFalseGame() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswer = (userAnswer) => {
    setSelected(userAnswer);
    setShowExplanation(true);
  };

  const nextQuestion = () => {
    setCurrentIndex((prev) => (prev + 1) % questions.length);
    setSelected(null);
    setShowExplanation(false);
  };

  const currentQuestion = questions[currentIndex];
  const isCorrect = selected === currentQuestion.isTrue;

  return (
    <div className="tf-game">
      <h2>🧠 Дұрыс па, бұрыс па?</h2>
      <p className="statement">«{currentQuestion.statement}»</p>

      {!showExplanation ? (
        <div className="buttons">
          <button onClick={() => handleAnswer(true)}>✅ Дұрыс</button>
          <button onClick={() => handleAnswer(false)}>❌ Бұрыс</button>
        </div>
      ) : (
        <div className="result">
          <p>{isCorrect ? "🎉 Дұрыс жауап!" : "😕 Қате жауап."}</p>
          <p className="explanation">📘 {currentQuestion.explanation}</p>
          <button onClick={nextQuestion}>Келесі</button>
        </div>
      )}
    </div>
  );
}
