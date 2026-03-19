import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

type Language = 'zh' | 'en';

interface ILanguageContext {
  language: Language;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<ILanguageContext | undefined>(undefined);

const STORAGE_KEY = '__global_energyquant_lang';

const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return (saved === 'zh' || saved === 'en') ? saved : 'zh';
    } catch {
      return 'zh';
    }
  });

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem(STORAGE_KEY, lang);
      window.dispatchEvent(new CustomEvent('languagechange', { detail: { language: lang } }));
    } catch (error) {
      console.error('Failed to save language preference:', error);
    }
  }, []);

  const toggleLanguage = useCallback(() => {
    setLanguageState(prev => (prev === 'zh' ? 'en' : 'zh'));
  }, []);

  useEffect(() => {
    const handleStorageChange = (e: StorageEvent | CustomEvent) => {
      if ('detail' in e) {
        const lang = (e as CustomEvent).detail?.language;
        if (lang === 'zh' || lang === 'en') {
          setLanguageState(lang);
        }
      } else {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'zh' || saved === 'en') {
          setLanguageState(saved);
        }
      }
    };

    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('languagechange', handleStorageChange as EventListener);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('languagechange', handleStorageChange as EventListener);
    };
  }, []);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export { LanguageProvider, useLanguage };
export type { Language };
