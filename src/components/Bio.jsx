import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations/Translations';

const Bio = () => {
  const { language } = useLanguage();
  const t = translations[language].bio;

  return (
    <section className="bg-gradient-to-r from-yellow-500 via-orange-400 to-yellow-600 py-16 pt-4 text-center text-white">
      <div className="mx-auto px-6 lg:px-20 container">
        <h2 className="drop-shadow-lg mb-8 font-bold text-4xl text-white lg:text-5xl">{t.title}</h2>
        <p className="mx-auto mb-6 max-w-4xl text-lg lg:text-xl leading-relaxed">{t.paragraph1}</p>
        <p className="mx-auto mb-6 max-w-4xl text-lg lg:text-xl leading-relaxed">{t.paragraph2}</p>
        <p className="mx-auto mb-6 max-w-4xl text-lg lg:text-xl leading-relaxed">{t.paragraph3}</p>
        <p className="mx-auto max-w-4xl text-lg lg:text-xl leading-relaxed">{t.paragraph4}</p>
      </div>
    </section>
  );
};

export default Bio;
