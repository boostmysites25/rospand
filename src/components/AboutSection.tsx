import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutSection: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(el.querySelectorAll('.fade-in-up'),
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                scrollTrigger: {
                    trigger: el,
                    start: "top 75%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 relative overflow-hidden bg-white">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-orange/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    <div className="lg:w-1/2 space-y-8 fade-in-up">
                        <div className="space-y-2">
                            <h2 className="text-sm font-semibold tracking-widest text-brand-orange uppercase">About Our Company</h2>
                            <h3 className="text-4xl md:text-5xl font-semibold bg-gradient-to-r from-brand-blue to-gray-800 bg-clip-text text-transparent drop-shadow-sm">
                                Tradition meets <br /> Innovation.
                            </h3>
                        </div>

                        <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                            <p>
                                <span className="font-semibold text-brand-blue">Rospand Global Techno Services Pvt Ltd.</span> is a multifaceted company with over 20 years of experience in the global market, excelling in the IMPORT & EXPORT of premium clothing and authentic spices. With a strong global presence, we operate through two established branches located in Dubai and the United States.
                            </p>
                            <p>
                                Building on our legacy of excellence, we have expanded into the IT services sector, providing comprehensive solutions that include software development, Website services, Technology consulting, and Digital transformation strategies. Our IT services office is located in Nagpur, India, serving as a hub for delivering innovative technology solutions to clients worldwide.
                            </p>
                            <p className="font-medium text-gray-800 border-l-4 border-brand-orange pl-4 italic">
                                At Rospand, we seamlessly combine tradition with innovation, ensuring quality and growth in every aspect of our business.
                            </p>
                        </div>
                    </div>

                    <div className="lg:w-1/2 fade-in-up">
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/20 to-brand-orange/20 rounded-[2rem] transform rotate-3 blur-sm"></div>
                            <img
                                src="/rospand_global_network_1765614474639.png"
                                alt="Rospand Global Network"
                                className="relative rounded-[2rem] shadow-2xl w-full border border-gray-200 bg-white/50 backdrop-blur-sm"
                            />

                            {/* Floating Stats or Decor */}
                            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg animate-float flex items-center gap-4 border border-gray-100">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span className="font-semibold text-brand-blue">Global Presence</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
