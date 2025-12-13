import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { Sparkle } from 'lucide-react';

const BrandMarquee: React.FC = () => {
    const marqueeRef = useRef<HTMLDivElement>(null);

    const taglines = [
        "APP DEVELOPMENT",
        "WEB DEVELOPMENT",
        "DIGITAL TRANSFORMATION",
        "CLOUD SOLUTIONS",
        "AI INNOVATION",
        "GLOBAL SERVICES",
        "NEXT-GEN TECH",
        "UI/UX DESIGN"
    ];

    useEffect(() => {
        const el = marqueeRef.current;
        if (!el) return;

        const content = el.querySelector('.marquee-content');
        if (!content) return;

        // Clone content for seamless loop
        const clone = content.cloneNode(true);
        el.appendChild(clone);

        // Animate
        gsap.to(el.querySelectorAll('.marquee-content'), {
            xPercent: -100,
            repeat: -1,
            duration: 30, // Slower duration for readability
            ease: "linear"
        });
    }, []);

    return (
        <section className="py-12 bg-gray-50/50 border-y border-gray-200 overflow-hidden backdrop-blur-sm relative z-20">
            <div ref={marqueeRef} className="flex overflow-hidden relative w-full select-none">
                <div className="marquee-content flex gap-8 items-center shrink-0 pl-8">
                    {taglines.map((tag, idx) => (
                        <div key={idx} className="flex items-center gap-8">
                            <span className="text-4xl md:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-gray-300 to-gray-500 whitespace-nowrap hover:from-brand-blue hover:to-brand-orange hover:opacity-100 transition-colors duration-300 cursor-default">
                                {tag}
                            </span>
                            <Sparkle className="text-brand-blue/30 w-6 h-6 md:w-8 md:h-8 animate-spin" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BrandMarquee;
