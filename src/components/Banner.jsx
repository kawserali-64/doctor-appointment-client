import Image from "next/image";
import React from "react";

const BannerPage = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden">

            {/* Background Image */}
            <Image
                src="/HeroDoctor.png"
                alt="Doctors"
                fill
                className="object-cover"
                priority
            />

            {/* Dark Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent"></div>

            {/* Content */}
            <div className="relative z-10 flex items-center h-full px-6 md:px-16">
                <div className="max-w-2xl text-white">
                    <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                        Care That <span className="text-cyan-400">Comes to You</span>
                    </h1>

                    <p className="mt-4 text-gray-300 text-lg">
                        Book top-rated doctors across all specialties. Fast, easy & reliable healthcare at your fingertips.
                    </p>

                    <div className="mt-6 flex gap-4 flex-wrap">
                        <button className="bg-cyan-500 hover:bg-cyan-600 px-6 py-3 rounded-xl font-semibold shadow-lg">
                            Browse Doctors
                        </button>

                        <button className="bg-white/10 backdrop-blur border border-white/20 px-6 py-3 rounded-xl font-semibold">
                            My Bookings
                        </button>
                    </div>

                </div>
            </div>

            {/* Bottom Blur Effect */}
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent"></div>

        </div>
    );
};

export default BannerPage;