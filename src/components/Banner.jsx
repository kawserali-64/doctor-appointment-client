"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const slides = [
    {
        image: "/HeroDoctor.png",
        title: "Advanced Medical Care For Every Patient",
        subtitle: "World-Class Healthcare Service",
        desc: "Experience trusted healthcare with highly qualified doctors, modern medical facilities, and seamless appointment booking anytime.",
    },

    {
        image: "/doctor2.jpg",
        title: "Dedicated Specialists You Can Trust",
        subtitle: "Professional Medical Experts",
        desc: "Connect with experienced doctors across multiple specialties and receive personalized treatment with compassionate care.",
    },

    {
        image: "/doctor3.jpg",
        title: "Your Health Journey Starts Here",
        subtitle: "Modern Healthcare Platform",
        desc: "Book appointments instantly, manage your consultations, and access quality healthcare services from anywhere.",
    },

    {
        image: "/doctor4.jpg",
        title: "Healthcare Excellence With Innovation",
        subtitle: "24/7 Patient Support",
        desc: "Providing exceptional medical support with advanced technology, patient-focused treatment, and reliable healthcare solutions.",
    },
];

const BannerPage = () => {
    return (
        <div className="relative w-full h-screen overflow-hidden">

            <Swiper
                modules={[Autoplay, Pagination, EffectFade]}
                effect="fade"
                autoplay={{
                    delay: 4500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                loop={true}
                className="h-full"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative h-screen w-full">

                            {/* Background Image */}
                            <Image
                                src={slide.image}
                                alt="doctor"
                                fill
                                priority
                                className="object-cover"
                            />

                            {/* Premium Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-[#00111A]/95 via-[#00111A]/80 to-[#00111A]/40"></div>

                            {/* Light Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                            {/* Main Content */}
                            <div className="relative z-20 h-full flex items-center">
                                <div className="max-w-7xl mx-auto w-full px-6 lg:px-12">

                                    <div className="max-w-3xl">

                                        {/* Small Top Text */}
                                        <div className="inline-flex items-center gap-3 mb-6">
                                            <div className="w-12 h-[2px] bg-cyan-400"></div>

                                            <p className="uppercase tracking-[4px] text-cyan-300 text-sm font-medium">
                                                {slide.subtitle}
                                            </p>
                                        </div>

                                        {/* Main Heading */}
                                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight text-white">
                                            {slide.title}
                                        </h1>

                                        {/* Description */}
                                        <p className="mt-7 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
                                            {slide.desc}
                                        </p>

                                        {/* Buttons */}
                                        <div className="flex flex-wrap gap-5 mt-10">

                                            <Link href="/All-Appointments">
                                                <button className="bg-cyan-500 hover:bg-cyan-600 transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold shadow-2xl hover:scale-105">
                                                    Find Doctors
                                                </button>
                                            </Link>

                                            <Link href="/dashboard">
                                                <button className="border border-white/20 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 text-white px-8 py-4 rounded-xl font-semibold">
                                                    Book Appointment
                                                </button>
                                            </Link>
                                        </div>

                                        {/* Feature Boxes */}
                                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-16">

                                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                                <h2 className="text-3xl font-bold text-cyan-400">
                                                    500+
                                                </h2>

                                                <p className="text-gray-300 mt-2 text-sm">
                                                    Experienced Doctors
                                                </p>
                                            </div>

                                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                                <h2 className="text-3xl font-bold text-cyan-400">
                                                    24/7
                                                </h2>

                                                <p className="text-gray-300 mt-2 text-sm">
                                                    Emergency Support
                                                </p>
                                            </div>

                                            <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
                                                <h2 className="text-3xl font-bold text-cyan-400">
                                                    10K+
                                                </h2>

                                                <p className="text-gray-300 mt-2 text-sm">
                                                    Happy Patients
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom Shadow */}
                            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#000814] to-transparent"></div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default BannerPage;