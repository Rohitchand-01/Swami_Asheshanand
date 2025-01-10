import React from 'react';
import banner from '../assets/banner.jpg';
import { useLanguage } from '../context/LanguageContext';
import translations from '../translations/Translations';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language].bio;

  return (
    <div className="overflow-hidden"> {/* Hide scrollbar globally */}
      {/* Banner Section */}
      <section className="relative">
        {/* Banner Image */}
        <img
          src={banner}
          alt="Banner"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Text Section */}
      <section className="bg-gray-100 px-6 lg:px-20 py-10">
        <div className="max-w-4xl">
          <p className="mb-6 text-gray-700 text-lg lg:text-xl leading-relaxed">{t.paragraph1}</p>
          <p className="mb-6 text-gray-700 text-lg lg:text-xl leading-relaxed">{t.paragraph2}</p>
          <p className="mb-6 text-gray-700 text-lg lg:text-xl leading-relaxed">{t.paragraph3}</p>
          <p className="text-gray-700 text-lg lg:text-xl leading-relaxed">{t.paragraph4}</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
