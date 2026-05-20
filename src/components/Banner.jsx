"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { Stethoscope } from "lucide-react";

const slides = [
    {
        image: "/doctorHero.jpg",
        title: "Meet The Best Doctor",
        subtitle: "Professional Healthcare",
        desc: "Great doctor if you need your family member to get effective immediate assistance, emergency treatment or a simple consultation.",
    },
    {
        image: "/doctor2.jpg",
        title: "Trusted Medical Experts",
        subtitle: "Specialist Doctors",
        desc: "Get high-quality treatment from experienced doctors with modern healthcare solutions.",
    },
    {
        image: "/doctor3.jpg",
        title: "Advanced Healthcare System",
        subtitle: "Modern Medicine",
        desc: "Book appointments instantly and get reliable treatment from top medical professionals.",
    },
    {
        image: "/doctor4.jpg",
        title: "Care You Can Trust",
        subtitle: "24/7 Support",
        desc: "We provide continuous healthcare support with experienced doctors and advanced facilities.",
    },
];

const BannerPage = () => {
    return (
        <div className="w-full">

            {/* ================= HERO ================= */}
            <div className="relative w-full h-screen overflow-hidden">

                <Swiper
                    modules={[Autoplay, Pagination, EffectFade]}
                    effect="fade"
                    autoplay={{ delay: 4000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    loop
                    className="h-full"
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <div className="relative w-full h-screen">

                                <Image
                                    src={slide.image}
                                    alt="doctor"
                                    fill
                                    priority
                                    className="object-cover"
                                />

                                <div className="absolute inset-0 bg-blue-900/60" />

                                <div className="relative z-20 flex items-center h-full">
                                    <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-12">

                                        <div className="max-w-xl text-white">

                                            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10">

                                                <Stethoscope className="w-4 h-4 text-cyan-400" />

                                                <span className="text-cyan-200 text-xs sm:text-sm tracking-[3px] uppercase font-medium">
                                                    {slide.subtitle}
                                                </span>

                                            </div>

                                            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                                {slide.title}
                                            </h1>

                                            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-200">
                                                {slide.desc}
                                            </p>

                                            <div className="mt-6">
                                                <Link href="/dashboard">
                                                    <button className="px-5 py-2 bg-cyan-600 text-white rounded-xl shadow-md hover:bg-cyan-700 transition">
                                                        Make Appointment
                                                    </button>
                                                </Link>
                                            </div>

                                            <p className="text-xs mt-2 text-gray-300">
                                                T&C apply. Please read Terms and Conditions
                                            </p>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            {/* ================= FEATURE CARDS (OVERLAP STYLE) ================= */}
            <div className="relative z-30 -mt-20 sm:-mt-28 px-4 sm:px-6 lg:px-12">

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* Card 1 */}
                    <div className="bg-white rounded-xl shadow-xl p-6">
                        <h3 className="font-semibold text-gray-800">
                            Emergency Cases
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            Immediate medical help and emergency support anytime.
                        </p>
                        <p className="text-cyan-700 mt-4 text-sm cursor-pointer">
                            Read More →
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white rounded-xl shadow-xl p-6">
                        <h3 className="font-semibold text-gray-800">
                            Doctors Timetable
                        </h3>
                        <p className="text-sm text-gray-500 mt-2">
                            View doctor schedules and book appointments easily.
                        </p>
                        <p className="text-cyan-700 mt-4 text-sm cursor-pointer">
                            Read More →
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white rounded-xl shadow-xl p-6">
                        <h3 className="font-semibold text-gray-800">
                            Opening Hours
                        </h3>

                        <div className="text-sm text-gray-600 mt-2 space-y-1">
                            <p>Monday - Friday <span className="float-right">8.00 - 20.00</span></p>
                            <p>Saturday <span className="float-right">8.00 - 18.00</span></p>
                            <p>Sunday <span className="float-right">8.00 - 14.00</span></p>
                        </div>

                        <p className="text-cyan-700 mt-4 text-sm cursor-pointer">
                            Read More →
                        </p>
                    </div>

                </div>
            </div>

            {/* Bottom spacing (important for layout breathing) */}
            <div className="h-20 sm:h-28"></div>

        </div>
    );
};

export default BannerPage;