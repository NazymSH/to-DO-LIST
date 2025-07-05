// LanguageProvider.jsx
import React, { createContext, useState } from 'react';

export const LanguageContext = createContext();

const translations = {
  kk: {
    greeting: "Сәлем, әлем!",
    description: "Бұл — қазақша мәтін.",
  },
  ru: {
    greeting: "Привет, мир!",
    description: "Это — текст на русском языке.",
  },
  en: {
    greeting: "Hello, world!",
    description: "This is text in English.",
  }
};

const Language= ({ children }) => {
  const [language, setLanguage] = useState('kk');

  const changeLanguage = (lang) => {
    setLanguage(lang);
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default Language;