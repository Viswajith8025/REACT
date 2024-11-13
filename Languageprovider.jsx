// App.js
import React, { useContext } from 'react';
import { LanguageProvider, LanguageContext } from './LanguageContext';

const Content = () => {
  const { language } = useContext(LanguageContext);

  const textContent = {
    en: "Hello, welcome to our application!",
    ml: "ഹലോ, ഞങ്ങളുടെ ആപ്ലിക്കേഷനിലേക്ക് സ്വാഗതം!"
  };

  return <p>{textContent[language]}</p>;
};

const LanguageSwitcher = () => {
  const { toggleLanguage } = useContext(LanguageContext);

  return (
    <div>
      <button onClick={() => toggleLanguage("en")}>English</button>
      <button onClick={() => toggleLanguage("ml")}>Malayalam</button>
    </div>
  );
};

const App = () => {
  return (
    <LanguageProvider>
      <div className="App">
        <h1>Language Switcher App</h1>
        <LanguageSwitcher />
        <Content />
      </div>
    </LanguageProvider>
  );
};

export default App;
