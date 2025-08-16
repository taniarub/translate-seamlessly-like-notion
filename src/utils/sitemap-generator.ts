export interface SitemapEntry {
  url: string;
  lastmod?: string;
  changefreq?: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority?: number;
}

export const generateSitemap = (entries: SitemapEntry[]): string => {
  const header = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">';
  const footer = '</urlset>';
  
  const urls = entries.map(entry => {
    let urlXml = `  <url>\n    <loc>${entry.url}</loc>`;
    
    if (entry.lastmod) {
      urlXml += `\n    <lastmod>${entry.lastmod}</lastmod>`;
    }
    
    if (entry.changefreq) {
      urlXml += `\n    <changefreq>${entry.changefreq}</changefreq>`;
    }
    
    if (entry.priority !== undefined) {
      urlXml += `\n    <priority>${entry.priority.toFixed(1)}</priority>`;
    }
    
    urlXml += '\n  </url>';
    return urlXml;
  }).join('\n');
  
  return `${header}\n${urls}\n${footer}`;
};

export const getStaticSitemapEntries = (): SitemapEntry[] => {
  const baseUrl = 'https://anytranslator.app';
  const currentDate = new Date().toISOString().split('T')[0];
  
  return [
    {
      url: baseUrl,
      lastmod: currentDate,
      changefreq: 'weekly',
      priority: 1.0
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.3
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastmod: currentDate,
      changefreq: 'monthly',
      priority: 0.3
    }
  ];
};

export const generateMultilingualSitemap = (): string => {
  const languages = ['en', 'ru', 'es', 'it', 'fr', 'de', 'ko', 'ja', 'pt-br', 'fi', 'da', 'nl', 'no', 'sv', 'zh-cn', 'zh-tw', 'id', 'vi', 'th'];
  const baseEntries = getStaticSitemapEntries();
  const allEntries: SitemapEntry[] = [];
  
  baseEntries.forEach(entry => {
    // Default English version
    allEntries.push(entry);
    
    // Other language versions
    languages.slice(1).forEach(lang => {
      const langUrl = entry.url + (entry.url === 'https://anytranslator.app' ? '' : '') + `?lang=${lang}`;
      allEntries.push({
        ...entry,
        url: langUrl,
        priority: entry.priority ? entry.priority * 0.8 : undefined
      });
    });
  });
  
  return generateSitemap(allEntries);
};