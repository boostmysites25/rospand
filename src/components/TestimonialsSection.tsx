import React, { useRef } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './TestimonialsSection.css'; // We'll create this for custom swiper styles

const TestimonialsSection: React.FC = () => {
    const prevRef = useRef<HTMLButtonElement>(null);
    const nextRef = useRef<HTMLButtonElement>(null);

    const testimonials = [
        {
            text: "Rospand transformed our outdated system into a high-performance digital platform. Their attention to detail and technical expertise is unmatched.",
            author: "Rahul Sharma",
            role: "CTO, FinTech Global",
            initial: "R",
            color: "bg-purple-500",
            image: null
        },
        {
            text: "The web application they built for us not only looks stunning but handles thousands of concurrent users seamlessly. Highly recommended.",
            author: "Priya Patel",
            role: "Founder, GreenSpace",
            initial: "P",
            color: "bg-green-500",
            image: null
        },
        {
            text: "Reliable, innovative, and truly partners in our growth. The mobile app has significantly improved our customer engagement metrics.",
            author: "Amit Verma",
            role: "Director of Ops, RetailConnect",
            initial: "A",
            color: "bg-orange-500",
            image: null
        },
        {
            text: "Their team's understanding of the Indian market combined with global tech standards delivered a product that resonates perfectly with our audience.",
            author: "Sneha Gupta",
            role: "Marketing Head, TechSolutions",
            initial: "S",
            color: "bg-pink-500",
            image: null
        },
        {
            text: "Exceptional service! They delivered the project ahead of schedule and the post-launch support has been fantastic.",
            author: "Vikram Singh",
            role: "CEO, StartUp Hub",
            initial: "V",
            color: "bg-blue-500",
            image: null
        }
    ];

    return (
        <section className="py-24 bg-white relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-brand-blue/5 rounded-full blur-[80px] translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-orange/5 rounded-full blur-[80px] -translate-x-1/2"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16 max-w-2xl mx-auto">
                    <h2 className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-2">Testimonials</h2>
                    <h3 className="text-4xl font-semibold text-gray-900 mb-4 drop-shadow-sm">Trusted by Industry Leaders</h3>
                    <p className="text-gray-600">Don't just take our word for it. Here's what our partners have to say about working with Rospand.</p>
                </div>

                <div className="relative px-4 md:px-12">
                    <button ref={prevRef} className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-brand-blue transition-colors hidden md:block">
                        <ChevronLeft size={32} />
                    </button>
                    <button ref={nextRef} className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-400 hover:text-brand-blue transition-colors hidden md:block">
                        <ChevronRight size={32} />
                    </button>

                    <Swiper
                        modules={[Navigation, Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={1}
                        loop={true}
                        navigation={{
                            prevEl: prevRef.current,
                            nextEl: nextRef.current,
                        }}
                        onInit={(swiper) => {
                            // Assign navigation elements after mount
                            if (swiper.params.navigation && typeof swiper.params.navigation !== 'boolean') {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }
                        }}
                        pagination={{ clickable: true }}
                        autoplay={{ delay: 5000, disableOnInteraction: false }}
                        breakpoints={{
                            640: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                        className="pb-12"
                    >
                        {testimonials.map((t, idx) => (
                            <SwiperSlide key={idx} className="h-full">
                                <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-brand-blue/10 transition-shadow flex flex-col h-full hover:bg-gray-50 group min-h-[320px]">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex gap-1 text-yellow-400">
                                            {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                                        </div>
                                        <Quote className="text-gray-300 w-8 h-8 group-hover:text-brand-blue/20 transition-colors" />
                                    </div>

                                    <blockquote className="text-gray-600 mb-8 flex-grow leading-relaxed">"{t.text}"</blockquote>

                                    <div className="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
                                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold text-lg ${t.color} ring-2 ring-gray-100`}>
                                            {t.initial}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{t.author}</div>
                                            <div className="text-sm text-gray-500">{t.role}</div>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
