import React from 'react';
import { Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 text-gray-600 py-12 relative overflow-hidden border-t border-gray-100">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-blue to-brand-orange"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <h3 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-brand-blue to-brand-orange bg-clip-text text-transparent">ROSPAND</h3>
                        <p className="text-gray-600 text-sm mb-4">
                            Empowering businesses with futuristic digital solutions.
                        </p>
                        <div className="flex items-center gap-3">
                            <a 
                                href="https://linkedin.com/company/rospand" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-lg text-blue-600 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all hover:scale-110"
                                aria-label="LinkedIn"
                            >
                                <Linkedin className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://facebook.com/rospand" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-lg text-blue-600 border border-gray-200 hover:bg-blue-50 hover:border-blue-300 transition-all hover:scale-110"
                                aria-label="Facebook"
                            >
                                <Facebook className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://twitter.com/rospand" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-lg text-sky-500 border border-gray-200 hover:bg-sky-50 hover:border-sky-300 transition-all hover:scale-110"
                                aria-label="Twitter"
                            >
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://instagram.com/rospand" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-lg text-pink-600 border border-gray-200 hover:bg-pink-50 hover:border-pink-300 transition-all hover:scale-110"
                                aria-label="Instagram"
                            >
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a 
                                href="https://youtube.com/@rospand" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="p-2 bg-white rounded-lg text-red-600 border border-gray-200 hover:bg-red-50 hover:border-red-300 transition-all hover:scale-110"
                                aria-label="YouTube"
                            >
                                <Youtube className="w-5 h-5" />
                            </a>
                        </div>
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
