import './App.css';
import React, { useState } from 'react';
import Field from './Components/field';
import Language from './Components/languages';
import Translate from './Components/translate';

export default function App() {
  const [language, setLanguage] = useState('ru');
  const [text, setText] = useState('');

  return (
    <div>
      <Field label="Enter English" onChange={setText} value={text} />
      <Language language={language} onLanguageChange={setLanguage} />
      <hr />
      <Translate text={text} language={language} />
    </div>
  );
}
