import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Sparkles from './Sparkles';

gsap.registerPlugin(ScrollTrigger);

interface HeroProps {
    title: string;
    subtitle: string;
    image: string; // URL or path
    gradient?: string;
}

const Hero: React.FC<HeroProps> = ({ title, subtitle, image, gradient = "from-brand-blue to-brand-orange" }) => {
    const heroRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        if (textRef.current) {
            tl.fromTo(textRef.current.children,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, stagger: 0.2 }
            );
        }

        if (imageRef.current) {
            tl.fromTo(imageRef.current,
                { scale: 0.8, opacity: 0 },
                { scale: 1, opacity: 1, duration: 1.2 },
                "-=0.8"
            );

            // Parallax effect
            gsap.to(imageRef.current, {
                yPercent: 30,
                ease: "none",
                scrollTrigger: {
                    trigger: heroRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden bg-white">
            <Sparkles count={50} className="w-full h-full" color="#0ea5e9" />
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-[-20%] right-[-10%] w-[50vw] h-[50vw] bg-brand-blue/10 rounded-full blur-3xl animate-float"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[40vw] h-[40vw] bg-brand-orange/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
            </div>

            <div className="container mx-auto px-4 z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div ref={textRef} className="text-left space-y-6">
                    <h1 className={`text-5xl md:text-7xl font-semibold leading-tight bg-gradient-to-r ${gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                        {title}
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-600 max-w-lg">
                        {subtitle}
                    </p>
                    <div className="pt-4">
                        <button
                            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                            className={`px-8 py-3 rounded-full bg-gradient-to-r ${gradient} text-white font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300`}
                        >
                            Get Started
                        </button>
                    </div>
                </div>

                <div ref={imageRef} className="relative">
                    {/* Placeholder for futuristic image/graphic */}
                    <div className="relative w-full aspect-square max-w-md mx-auto">
                        <div className={`absolute inset-0 bg-gradient-to-tr ${gradient} opacity-20 rounded-3xl rotate-6 blur-md`}></div>
                        <div className="absolute inset-0 bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden flex items-center justify-center border border-gray-200 group-hover:border-brand-blue/50 transition-colors">
                            {image ? (
                                <img src={image} alt={title} className="w-full h-full object-cover" />
                            ) : (
                                <span className="text-gray-400 font-semibold text-xl">Futuristic Graphic</span>
                            )}
                        </div>
                        {/* Floating elements */}
                        <div className="absolute -top-10 -right-10 w-20 h-20 bg-white/90 backdrop-blur rounded-xl shadow-lg animate-float flex items-center justify-center text-brand-blue border border-gray-100">
                            <div className="w-12 h-12 bg-gray-100 rounded-full"></div>
                        </div>
                        <div className="absolute -bottom-5 -left-5 w-24 h-16 bg-white/90 backdrop-blur rounded-lg shadow-lg animate-float flex items-center justify-center border border-gray-100" style={{ animationDelay: '1.5s' }}>
                            <div className="h-2 w-16 bg-gray-200 rounded"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
