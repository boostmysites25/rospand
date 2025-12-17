import React, { useState, useRef, useEffect } from 'react';
import { Send, Mail, MapPin, Phone, ChevronDown, Check, Loader2, Linkedin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { sendEmail } from '../utils/sendEmail';

const ContactSection: React.FC = () => {
    const [selectedSubject, setSelectedSubject] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const subjects = [
        { value: 'app', label: 'App Development' },
        { value: 'web', label: 'Web Development' },
        { value: 'other', label: 'Other' }
    ];

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const handleSubjectSelect = (value: string) => {
        setSelectedSubject(value);
        setIsDropdownOpen(false);
    };

    return (
        <section className="py-24 bg-white relative" id="contact">
            <div className="container mx-auto px-4">
                <div className="flex flex-col lg:flex-row gap-16">

                    {/* Contact Info */}
                    <div className="lg:w-1/3 space-y-8">
                        <div>
                            <h2 className="text-sm font-semibold tracking-widest text-brand-blue uppercase mb-2">Get in Touch</h2>
                            <h3 className="text-4xl font-semibold text-gray-900 drop-shadow-sm">Let's talk about <br /> your project.</h3>
                        </div>
                        <p className="text-gray-600">
                            We help companies and startups build successful digital products. Reach out to discuss how we can help you too.
                        </p>

                        <div className="space-y-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-blue/10 rounded-lg text-brand-blue border border-brand-blue/20">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                                    <a href="mailto:rospandglobal27@gmail.com" className="text-gray-600 hover:text-brand-blue transition-colors">rospandglobal27@gmail.com</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-brand-orange/10 rounded-lg text-brand-orange border border-brand-orange/20">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className='flex flex-col'>
                                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                                    <a href="tel:+918421148095" className="text-gray-600 hover:text-brand-orange transition-colors mb-1">+91 8421148095</a>
                                    <a href="tel:+918668622470" className="text-gray-600 hover:text-brand-orange transition-colors">+91 8668622470</a>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="p-3 bg-indigo-500/10 rounded-lg text-indigo-500 border border-indigo-500/20">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <h4 className="font-semibold text-gray-900">Visit Us</h4>
                                    <p className="text-gray-600">Nagpur, India (IT Hub)<br />Dubai, UAE<br />United States</p>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div className="pt-4">
                            <h4 className="font-semibold text-gray-900 mb-4">Follow Us</h4>
                            <div className="flex items-center gap-3">
                                <a 
                                    href="https://linkedin.com/company/rospand" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-50 rounded-lg text-blue-600 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all hover:scale-110"
                                    aria-label="LinkedIn"
                                >
                                    <Linkedin className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://facebook.com/rospand" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-blue-50 rounded-lg text-blue-600 border border-blue-200 hover:bg-blue-100 hover:border-blue-300 transition-all hover:scale-110"
                                    aria-label="Facebook"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://twitter.com/rospand" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-sky-50 rounded-lg text-sky-600 border border-sky-200 hover:bg-sky-100 hover:border-sky-300 transition-all hover:scale-110"
                                    aria-label="Twitter"
                                >
                                    <Twitter className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://instagram.com/rospand" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-pink-50 rounded-lg text-pink-600 border border-pink-200 hover:bg-pink-100 hover:border-pink-300 transition-all hover:scale-110"
                                    aria-label="Instagram"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                                <a 
                                    href="https://youtube.com/@rospand" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="p-3 bg-red-50 rounded-lg text-red-600 border border-red-200 hover:bg-red-100 hover:border-red-300 transition-all hover:scale-110"
                                    aria-label="YouTube"
                                >
                                    <Youtube className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="lg:w-2/3 bg-white rounded-3xl p-8 md:p-10 shadow-2xl border border-gray-200">
                        <form className="space-y-6" onSubmit={async (e) => {
                            e.preventDefault();
                            setIsLoading(true);
                            const form = e.target as HTMLFormElement;
                            const formData = new FormData(form);

                            const name = formData.get('name') as string;
                            const email = formData.get('email') as string;
                            const message = document.getElementById('message') as HTMLTextAreaElement; // getting value directly since textarea doesn't have name attr in original code or I should check. 
                            // Wait, looking at original code line 131: <textarea id="message" ... 
                            // It doesn't have name="message". I should access it safely or add name attribute. 
                            // I'll grab it by ID to be safe or assuming I can add name attribute in next chunk.
                            // Actually, let's just grab values from elements to be sure.

                            const data = {
                                name: (document.getElementById('name') as HTMLInputElement).value,
                                email: (document.getElementById('email') as HTMLInputElement).value,
                                subject: selectedSubject || 'General',
                                message: (document.getElementById('message') as HTMLTextAreaElement).value
                            };

                            if (!data.name || !data.email || !data.message) {
                                toast.error("Please fill in all fields");
                                setIsLoading(false);
                                return;
                            }

                            const success = await sendEmail({
                                ...data,
                                subject: subjects.find(s => s.value === data.subject)?.label || data.subject
                            });

                            if (success) {
                                toast.success('Message sent successfully! We will contact you soon.');
                                form.reset();
                                setSelectedSubject('');
                            } else {
                                toast.error('Failed to send message. Please try again.');
                            }
                            setIsLoading(false);
                        }}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                                    <input type="text" id="name" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all placeholder-gray-500" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                                    <input type="email" id="email" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all placeholder-gray-500" placeholder="john@company.com" />
                                </div>
                            </div>

                            <div ref={dropdownRef} className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <button
                                    type="button"
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className={`w-full px-4 py-3 rounded-xl bg-gray-50 border text-left flex justify-between items-center transition-all ${isDropdownOpen ? 'border-brand-blue ring-2 ring-brand-blue/20' : 'border-gray-300 hover:border-gray-400'} text-gray-900 outline-none`}
                                >
                                    <span className={selectedSubject ? 'text-gray-900' : 'text-gray-500'}>
                                        {subjects.find(s => s.value === selectedSubject)?.label || 'Select a topic'}
                                    </span>
                                    <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                                </button>

                                {isDropdownOpen && (
                                    <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden z-20 animate-in fade-in zoom-in-95 duration-200">
                                        {subjects.map((subject) => (
                                            <div
                                                key={subject.value}
                                                onClick={() => handleSubjectSelect(subject.value)}
                                                className="px-4 py-3 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition-colors text-gray-700 hover:text-gray-900"
                                            >
                                                <span>{subject.label}</span>
                                                {selectedSubject === subject.value && <Check className="w-4 h-4 text-brand-blue" />}
                                            </div>
                                        ))}
                                    </div>
                                )}
                                {/* Hidden input for native form submission if needed, keeping state sync */}
                                <input type="hidden" name="subject" value={selectedSubject} />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                                <textarea id="message" rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-300 text-gray-900 focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20 outline-none transition-all placeholder-gray-500" placeholder="Tell us about your project..."></textarea>
                            </div>

                            <button type="submit" disabled={isLoading} className="w-full md:w-auto px-8 py-4 bg-brand-blue text-white rounded-xl font-semibold flex items-center justify-center gap-2 hover:bg-blue-700 transition-colors shadow-lg hover:shadow-brand-blue/30 disabled:opacity-70 disabled:cursor-not-allowed">
                                {isLoading ? (
                                    <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                                ) : (
                                    <>Send Message <Send className="w-5 h-5" /></>
                                )}
                            </button>
                            <Toaster position="bottom-right" toastOptions={{
                                style: {
                                    background: '#fff',
                                    color: '#334155',
                                    border: '1px solid #e2e8f0',
                                }
                            }} />
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;
