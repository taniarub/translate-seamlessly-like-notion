import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';

interface HreflangLinksProps {
  path?: string;
}

const HreflangLinks = ({ path = "/" }: HreflangLinksProps) => {
  const { currentLanguage } = useLanguage();
  
  const languages = [
    { code: 'en', region: 'US' },
    { code: 'ru', region: 'RU' },
    { code: 'es', region: 'ES' },
    { code: 'it', region: 'IT' },
    { code: 'fr', region: 'FR' },
    { code: 'de', region: 'DE' },
    { code: 'ko', region: 'KR' },
    { code: 'ja', region: 'JP' },
    { code: 'pt-br', region: 'BR' },
    { code: 'fi', region: 'FI' },
    { code: 'da', region: 'DK' },
    { code: 'nl', region: 'NL' },
    { code: 'no', region: 'NO' },
    { code: 'sv', region: 'SE' },
    { code: 'zh-cn', region: 'CN' },
    { code: 'zh-tw', region: 'TW' },
    { code: 'id', region: 'ID' },
    { code: 'vi', region: 'VN' },
    { code: 'th', region: 'TH' }
  ];

  const baseUrl = 'https://anytranslator.app';
  const fullPath = path === '/' ? '' : path;

  return (
    <Helmet>
      {/* Default language (x-default) */}
      <link
        rel="alternate"
        hrefLang="x-default"
        href={`${baseUrl}${fullPath}`}
      />
      
      {/* Language specific links */}
      {languages.map(({ code }) => (
        <link
          key={code}
          rel="alternate"
          hrefLang={code}
          href={code === 'en' 
            ? `${baseUrl}${fullPath}` 
            : `${baseUrl}${fullPath}${fullPath.includes('?') ? '&' : '?'}lang=${code}`
          }
        />
      ))}
    </Helmet>
  );
};

export default HreflangLinks;