import { useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export const useDocumentTitle = () => {
  const { t } = useLanguage();

  useEffect(() => {
    const title = t('meta.title');
    const description = t('meta.description');
    
    // Update page title
    document.title = title;
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
    
    // Update Open Graph meta tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }
    
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }
    
    // Update Twitter meta tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    } else {
      // Create twitter:title if it doesn't exist
      const newTwitterTitle = document.createElement('meta');
      newTwitterTitle.setAttribute('name', 'twitter:title');
      newTwitterTitle.setAttribute('content', title);
      document.head.appendChild(newTwitterTitle);
    }
    
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    } else {
      // Create twitter:description if it doesn't exist
      const newTwitterDescription = document.createElement('meta');
      newTwitterDescription.setAttribute('name', 'twitter:description');
      newTwitterDescription.setAttribute('content', description);
      document.head.appendChild(newTwitterDescription);
    }
    
  }, [t]);
};