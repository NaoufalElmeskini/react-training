import {createContext, useMemo, useState} from 'react';

export const LangContext = createContext({
  lang: 'english',
  setLang: () => {},
});

export const LangProvider = ({ children }) => {
  const [lang, setLang] = useState('english');
  const shared = useMemo(() => ({
    lang,
    setLang,
  }), [lang, setLang]);

  return (
    <LangContext.Provider value={shared}>
      {children}
    </LangContext.Provider>
  );
};