import { useEffect } from 'react';
import siteData from '../data/siteData';

const SEO = () => {
  const { seo, school } = siteData;

  useEffect(() => {
    // Set title
    document.title = seo.home.title;

    // Set meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', seo.home.description);
    }

    // Set meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute('content', seo.home.keywords);
    }

    // Open Graph meta tags
    const ogTags = {
      'og:title': seo.home.title,
      'og:description': seo.home.description,
      'og:type': 'website',
      'og:locale': 'pt_BR',
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let meta = document.querySelector(`meta[property="${property}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('property', property);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // Twitter Card meta tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': seo.home.title,
      'twitter:description': seo.home.description,
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let meta = document.querySelector(`meta[name="${name}"]`);
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute('name', name);
        document.head.appendChild(meta);
      }
      meta.setAttribute('content', content);
    });

    // JSON-LD Schema.org structured data
    const schoolSchema = {
      "@context": "https://schema.org",
      "@type": "EducationalOrganization",
      "name": school.name,
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Iguaba Grande",
        "addressRegion": "RJ",
        "addressCountry": "BR"
      },
      "telephone": school.phone,
      "email": school.email,
      "url": window.location.origin,
      "foundingDate": new Date().getFullYear() - school.years,
      "description": seo.home.description
    };

    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": siteData.faq.map(item => ({
        "@type": "Question",
        "name": item.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": item.answer
        }
      }))
    };

    // Remove existing schema scripts
    const existingSchemas = document.querySelectorAll('script[type="application/ld+json"]');
    existingSchemas.forEach(script => script.remove());

    // Add new schema scripts
    [schoolSchema, faqSchema].forEach(schema => {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    });
  }, []);

  return null;
};

export default SEO;
