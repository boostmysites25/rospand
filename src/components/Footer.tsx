import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 text-gray-600 py-12 relative overflow-hidden border-t border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-orange"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">ROSPAND</h3>
                        <p className="text-gray-600 text-sm">
                            Empowering businesses with futuristic digital solutions.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-brand-orange">Services</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>App Development</li>
                            <li>Web Development</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4 text-brand-orange">Contact</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>Dubai, UAE</li>
                            <li>USA</li>
                            <li>Nagpur, India</li>
                            <li>info@rospand.com</li>
                        </ul>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-200 text-center text-xs text-gray-500">
                    &copy; {new Date().getFullYear()} Rospand Global Techno Services Pvt. Ltd. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
