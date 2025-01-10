import React, { createContext, useContext, useState } from 'react';
import translations from '../translations/Translations'; // Import your translations object

// Create the Language Context
const LanguageContext = createContext();

// Create a custom hook to use the language context
export const useLanguage = () => {
  return useContext(LanguageContext);
};

// Create a provider for the language context
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default language is English

  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};
