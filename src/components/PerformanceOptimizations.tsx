import { Helmet } from 'react-helmet-async';

const PerformanceOptimizations = () => {
  return (
    <Helmet>
      {/* Critical CSS and Font Preloading */}
      <link 
        rel="preload" 
        href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" 
        as="style" 
      />
      
      {/* Preload critical images */}
      <link rel="preload" href="/lovable-uploads/Logo.jpg" as="image" />
      <link rel="preload" href="/lovable-uploads/cute.jpg" as="image" />
      
      {/* DNS Prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//apps.apple.com" />
      <link rel="dns-prefetch" href="//play.google.com" />
      
      {/* Preconnect to critical domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints for better loading */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
      
      {/* Optimize for mobile performance */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="format-detection" content="date=no" />
      <meta name="format-detection" content="address=no" />
      <meta name="format-detection" content="email=no" />
      
      {/* PWA performance optimization */}
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      <meta name="apple-touch-fullscreen" content="yes" />
      
      {/* Disable unnecessary prefetching by browsers */}
      <meta httpEquiv="x-dns-prefetch-control" content="on" />
    </Helmet>
  );
};

export default PerformanceOptimizations;