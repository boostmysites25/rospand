import React, { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
    keywords?: string;
    image?: string;
    url?: string;
    type?: string;
    structuredData?: object;
}

const SEO: React.FC<SEOProps> = ({
    title,
    description,
    keywords = 'app development, web development, mobile apps, software development, digital solutions, Rospand',
    image = 'https://rospand.com/brand_logo_1_abstract_tech_1765616154053.png',
    url = 'https://rospand.com',
    type = 'website',
    structuredData
}) => {
    const fullTitle = `${title} | Rospand Global - Digital Solutions`;
    const fullUrl = url;

    useEffect(() => {
        // Update document title
        document.title = fullTitle;

        // Helper function to update or create meta tag by name
        const updateMetaByName = (name: string, content: string) => {
            let element = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('name', name);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper function to update or create meta tag by property
        const updateMetaByProperty = (property: string, content: string) => {
            let element = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
            if (!element) {
                element = document.createElement('meta');
                element.setAttribute('property', property);
                document.head.appendChild(element);
            }
            element.setAttribute('content', content);
        };

        // Helper function to update or create link tag
        const updateLink = (rel: string, href: string) => {
            let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
            if (!element) {
                element = document.createElement('link');
                element.setAttribute('rel', rel);
                document.head.appendChild(element);
            }
            element.setAttribute('href', href);
        };

        // Primary Meta Tags
        updateMetaByName('description', description);
        updateMetaByName('keywords', keywords);
        updateMetaByName('author', 'Rospand Global Techno Services Pvt. Ltd.');
        updateMetaByName('robots', 'index, follow');
        updateMetaByName('language', 'English');
        updateMetaByName('revisit-after', '7 days');

        // Canonical URL
        updateLink('canonical', fullUrl);

        // Open Graph / Facebook
        updateMetaByProperty('og:type', type);
        updateMetaByProperty('og:url', fullUrl);
        updateMetaByProperty('og:title', fullTitle);
        updateMetaByProperty('og:description', description);
        updateMetaByProperty('og:image', image);
        updateMetaByProperty('og:site_name', 'Rospand Global');
        updateMetaByProperty('og:locale', 'en_US');

        // Twitter
        updateMetaByName('twitter:card', 'summary_large_image');
        updateMetaByName('twitter:url', fullUrl);
        updateMetaByName('twitter:title', fullTitle);
        updateMetaByName('twitter:description', description);
        updateMetaByName('twitter:image', image);

        // Additional Meta Tags
        updateMetaByName('theme-color', '#2563eb');
        updateMetaByName('msapplication-TileColor', '#2563eb');

        // Structured Data
        if (structuredData) {
            let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
            if (!script) {
                script = document.createElement('script');
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }
            script.textContent = JSON.stringify(structuredData);
        }
    }, [title, description, keywords, image, url, type, structuredData, fullTitle, fullUrl]);

    return null;
};

export default SEO;

