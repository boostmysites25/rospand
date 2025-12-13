import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ServicePoint {
    title: string;
    description: string;
}

interface ServiceSectionProps {
    title: string;
    description: string;
    points: ServicePoint[];
    reversed?: boolean;
    image?: string;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ title, description, points, reversed = false, image }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(el.querySelectorAll('.fade-up'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.1,
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-20 lg:py-32 relative">
            <div className="container mx-auto px-4">
                <div className={`flex flex-col lg:flex-row items-center gap-16 ${reversed ? 'lg:flex-row-reverse' : ''}`}>

                    <div className="lg:w-1/2 space-y-6 fade-up">
                        <h2 className="text-4xl font-semibold text-gray-900 drop-shadow-sm">{title}</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{description}</p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
                            {points.map((point, idx) => (
                                <div key={idx} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-brand-blue/20 transition-all border border-gray-100 fade-up hover:-translate-y-1">
                                    <h3 className="text-xl font-semibold mb-2 text-brand-blue">{point.title}</h3>
                                    <p className="text-gray-600 text-sm">{point.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 relative fade-up">
                        <div className="aspect-[4/3] bg-gradient-to-br from-brand-blue/5 to-brand-orange/5 rounded-3xl relative overflow-hidden group">
                            {image ? (
                                <img
                                    src={image}
                                    alt={title}
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            ) : (
                                <>
                                    <div className="absolute inset-0 flex items-center justify-center text-brand-blue/20 text-9xl font-semibold select-none">
                                        {title.charAt(0)}
                                    </div>
                                    <div className="absolute top-10 right-10 w-32 h-32 bg-brand-orange/10 rounded-full blur-2xl"></div>
                                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-brand-blue/10 rounded-full blur-2xl"></div>
                                </>
                            )}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceSection;
