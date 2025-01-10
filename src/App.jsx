import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext'; // Import LanguageProvider
import Home from './components/Home';
import Bio from './components/Bio';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Gallery from './components/Gallery';

const App = () => {
  return (
    <LanguageProvider> {/* Wrap the app with LanguageProvider */}
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bio" element={<Bio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
        <Footer />
      </Router>
    </LanguageProvider>
  );
};

export default App;
