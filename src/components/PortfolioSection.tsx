import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Project {
    title: string;
    category: string;
    image: string;
    color: string;
    link?: string;
}

interface PortfolioSectionProps {
    projects: Project[];
}

const PortfolioSection: React.FC<PortfolioSectionProps> = ({ projects }) => {
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        gsap.fromTo(el.querySelectorAll('.project-card'),
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
        <section ref={sectionRef} className="py-24 bg-white relative">
            <div className="absolute inset-0 bg-brand-blue/5 radial-gradient"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-sm font-semibold tracking-widest text-brand-blue uppercase">Selected Work</h2>
                    <h3 className="text-4xl font-semibold text-gray-900 drop-shadow-sm">Featured Projects</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, idx) => (
                        <a
                            key={idx}
                            href={project.link || "#"}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-card group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 bg-white border border-gray-200 block"
                        >
                            {/* Portfolio Image */}
                            <div className="aspect-[4/3] w-full overflow-hidden relative">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                <div className="bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75 border border-gray-100">
                                    <div>
                                        <h4 className="font-semibold text-gray-900">{project.title}</h4>
                                        <span className="text-xs font-semibold text-brand-blue uppercase tracking-wider">{project.category}</span>
                                    </div>
                                    <div className="w-10 h-10 bg-brand-blue rounded-full flex items-center justify-center text-white">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PortfolioSection;
