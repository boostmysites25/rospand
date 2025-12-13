import React from 'react';
import Hero from '../components/Hero';
import ServiceSection from '../components/ServiceSection';
import AboutSection from '../components/AboutSection';
import Layout from '../components/Layout';
import BrandMarquee from '../components/BrandMarquee';
import PortfolioSection from '../components/PortfolioSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CTASection from '../components/CTASection';
import ContactSection from '../components/ContactSection';

const WebDevelopment: React.FC = () => {
    const webProjects = [
        {
            title: "5g Homes",
            category: "Real Estate",
            image: "/assets/portfolio/web-development/5ghomes.webp",
            link: "https://5ghighspeedinternet.co",
            color: "bg-blue-600"
        },
        {
            title: "Cold Creekcap",
            category: "Finance",
            image: "/assets/portfolio/web-development/cold-creekcap.webp",
            link: "https://www.coldcreekcap.com",
            color: "bg-slate-700"
        },
        {
            title: "Think Reality",
            category: "Real Estate",
            image: "/assets/portfolio/web-development/think-reality.webp",
            link: "https://thinkrealty.ae",
            color: "bg-orange-600"
        },
        {
            title: "Akash Mega Mart",
            category: "E-Commerce",
            image: "/assets/portfolio/web-development/akash-mega-mart.webp",
            link: "https://akashmegamart.com/",
            color: "bg-teal-600"
        },
        {
            title: "Midwam",
            category: "Design",
            image: "/assets/portfolio/web-development/midwam.webp",
            link: "https://www.midwam.com/en/about",
            color: "bg-purple-600"
        }
    ];

    return (
        <Layout>
            <Hero
                title="Next-Gen Web Solutions"
                subtitle="Building the future of the web with scalable, responsive, and blazing fast applications."
                image="/web_dev_hero_futuristic_1765614457714.png"
                gradient="from-orange-500 to-red-500"
            />

            <AboutSection />

            <ServiceSection
                title="Modern Web Applications"
                description="We leverage the latest frameworks to build SPAs and PWAs that feel like native apps."
                points={[
                    { title: 'React & Next.js', description: 'Server-side rendering and static generation for speed and SEO.' },
                    { title: 'Progressive Web Apps', description: 'Offline capable, installable web experiences.' }
                ]}
                image="/web_modern_apps_futuristic_1765615467648.png"
            />
            <CTASection />
            <ServiceSection
                title="E-Commerce Platforms"
                description="Drive sales with custom, high-converting e-commerce experiences."
                points={[
                    { title: 'Custom Storefronts', description: 'Tailored shopping experiences that embody your brand.' },
                    { title: 'Payment Integration', description: 'Secure and seamless payment gateway integrations.' }
                ]}
                reversed
                image="/web_ecommerce_futuristic_1765615486284.png"
            />

            <ServiceSection
                title="Backend & Cloud"
                description="Robust backend infrastructure to power your digital presence."
                points={[
                    { title: 'Microservices', description: 'Scalable and maintainable architecture.' },
                    { title: 'Cloud Native', description: 'Deployed on AWS, Azure, or Google Cloud for maximum reliability.' }
                ]}
                image="/web_backend_cloud_futuristic_1765615503048.png"
            />

            <BrandMarquee />
            <PortfolioSection projects={webProjects} />
            <TestimonialsSection />
            <CTASection />
            <ContactSection />
        </Layout>
    );
};

export default WebDevelopment;
