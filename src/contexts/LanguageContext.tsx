import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { getTranslations as getTranslationsFromFiles } from '../translations';

export type Language = {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
};

export const languages: Language[] = [
  { code: 'en', name: 'English (US)', nativeName: 'English', flag: '🇺🇸' },
  { code: 'ko', name: 'Korean', nativeName: '한국어', flag: '🇰🇷' },
  { code: 'ja', name: 'Japanese', nativeName: '日本語', flag: '🇯🇵' },
  { code: 'fr', name: 'French', nativeName: 'Français', flag: '🇫🇷' },
  { code: 'de', name: 'German', nativeName: 'Deutsch', flag: '🇩🇪' },
  { code: 'es', name: 'Spanish (Spain)', nativeName: 'Español', flag: '🇪🇸' },
  { code: 'it', name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹' },
  { code: 'pt-br', name: 'Portuguese (Brazil)', nativeName: 'Português', flag: '🇧🇷' },
  { code: 'fi', name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮' },
  { code: 'da', name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰' },
  { code: 'nl', name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱' },
  { code: 'no', name: 'Norwegian', nativeName: 'Norsk', flag: '🇳🇴' },
  { code: 'sv', name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪' },
  { code: 'zh-cn', name: 'Simplified Chinese', nativeName: '简体中文', flag: '🇨🇳' },
  { code: 'zh-tw', name: 'Traditional Chinese', nativeName: '繁體中文', flag: '🇹🇼' },
  { code: 'id', name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩' },
  { code: 'vi', name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳' },
  { code: 'th', name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭' },
  { code: 'ru', name: 'Russian', nativeName: 'Русский', flag: '🇷🇺' }
];

type LanguageContextType = {
  currentLanguage: Language;
  setLanguage: (language: Language) => void;
  t: (key: string) => string;
  languages: Language[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

type LanguageProviderProps = {
  children: ReactNode;
};

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState<Language>(() => {
    // First, check URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const urlLang = urlParams.get('lang');
    if (urlLang) {
      const found = languages.find(lang => lang.code === urlLang);
      if (found) return found;
    }
    
    // Then check saved language
    const savedLanguage = localStorage.getItem('selectedLanguage');
    if (savedLanguage) {
      const found = languages.find(lang => lang.code === savedLanguage);
      if (found) return found;
    }
    
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    const found = languages.find(lang => 
      lang.code === browserLang || 
      lang.code === browserLang.substring(0, 2)
    );
    
    return found || languages[0]; // Default to English (US)
  });

  const setLanguage = (language: Language) => {
    setCurrentLanguage(language);
    localStorage.setItem('selectedLanguage', language.code);
    document.documentElement.lang = language.code;
    
    // Update URL parameter
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language.code);
    window.history.replaceState({}, '', url.toString());
  };

  const t = (key: string): string => {
    const translations = getTranslationsFromFiles(currentLanguage.code);
    return translations[key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = currentLanguage.code;
  }, [currentLanguage]);

  // Listen for URL changes and update language accordingly
  useEffect(() => {
    const handleUrlChange = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const urlLang = urlParams.get('lang');
      if (urlLang && urlLang !== currentLanguage.code) {
        const found = languages.find(lang => lang.code === urlLang);
        if (found) {
          setCurrentLanguage(found);
          localStorage.setItem('selectedLanguage', found.code);
          document.documentElement.lang = found.code;
        }
      }
    };

    // Listen for popstate events (back/forward navigation)
    window.addEventListener('popstate', handleUrlChange);
    
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
    };
  }, [currentLanguage.code]);

  return (
    <LanguageContext.Provider value={{ currentLanguage, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};