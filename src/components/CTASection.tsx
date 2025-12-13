import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
    return (
        <section className="py-24 relative overflow-hidden">
            <div className="absolute inset-0 bg-white">
                <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/10 to-brand-orange/10 mix-blend-multiply"></div>
                {/* Abstract shapes */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-blue/10 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-brand-orange/10 rounded-full blur-[120px] -translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10 text-center">
                <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6">Ready to Transform Your Digital Future?</h2>
                <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                    Join forces with Rospand to build scalable, high-performance solutions tailored to your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <button
                        onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                        className="px-8 py-4 bg-brand-orange text-white rounded-full font-semibold text-lg hover:bg-orange-600 transition-colors shadow-lg hover:shadow-brand-orange/50 flex items-center justify-center gap-2 group"
                    >
                        Start Your Project
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default CTASection;
