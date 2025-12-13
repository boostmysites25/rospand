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

const AppDevelopment: React.FC = () => {
    const appProjects = [
        {
            title: "Akash Mega Mart Mobile App",
            category: "E-Commerce",
            image: "/assets/portfolio/app-development/akash_mega_mart-app.webp",
            link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
            color: "bg-blue-600"
        },
        {
            title: "FeelIt Mobile App",
            category: "Social",
            image: "/assets/portfolio/app-development/feelit_app.webp",
            link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
            color: "bg-purple-600"
        },
        {
            title: "Klikomics Mobile App",
            category: "Entertainment",
            image: "/assets/portfolio/app-development/klikomics.webp",
            link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
            color: "bg-red-600"
        },
        {
            title: "AutoSnap Mobile App",
            category: "Automotive",
            image: "/assets/portfolio/app-development/autosnap-app.webp",
            link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
            color: "bg-orange-600"
        },
        {
            title: "Rentop Bike and Car",
            category: "Travel",
            image: "/assets/portfolio/app-development/rentop.webp",
            link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
            color: "bg-green-600"
        }
    ];

    return (
        <Layout>
            <Hero
                title="Revolutionary Mobile Experiences"
                subtitle="Crafting intuitive, high-performance mobile applications that redefine user engagement."
                image="/app_dev_hero_futuristic_1765614439157.png"
                gradient="from-blue-600 to-indigo-600"
            />

            <AboutSection />
            <ServiceSection
                title="Native Development"
                description="We build powerful native applications for iOS and Android, leveraging the full potential of the platform for unmatched performance."
                points={[
                    { title: 'iOS Development', description: 'Swift & SwiftUI based apps optimized for the Apple ecosystem.' },
                    { title: 'Android Development', description: 'Kotlin based scalable apps for the diverse Android market.' }
                ]}
                image="/app_native_dev_futuristic_1765615410318.png"
            />
            <CTASection />
            <ServiceSection
                title="Cross-Platform Solutions"
                description="Accelerate your time-to-market with code that runs everywhere without compromising quality."
                points={[
                    { title: 'Flutter', description: 'Beautiful, natively compiled applications from a single codebase.' },
                    { title: 'React Native', description: 'Seamless cross-platform experiences using the power of React.' }
                ]}
                reversed
                image="/app_cross_platform_futuristic_1765615431778.png"
            />

            <ServiceSection
                title="Enterprise Mobility"
                description="Empower your workforce with secure, robust mobile solutions designed for enterprise scale."
                points={[
                    { title: 'Secure Architecture', description: 'End-to-end encryption and enterprise-grade security protocols.' },
                    { title: 'Cloud Integration', description: 'Seamless synchronization with your existing cloud infrastructure.' }
                ]}
                image="/app_enterprise_mobility_futuristic_1765615448615.png"
            />

            <BrandMarquee />
            <PortfolioSection projects={appProjects} />
            <TestimonialsSection />

            <ContactSection />
        </Layout>
    );
};

export default AppDevelopment;
