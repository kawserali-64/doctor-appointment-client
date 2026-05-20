"use client";

import Image from "next/image";

const categories = [
  { title: "Skin", subtitle: "Care", img: "/skin.jpg" },
  { title: "Sexual", subtitle: "Wellness", img: "/sexual.jpg" },
  { title: "Weight", subtitle: "Management", img: "/weight.jpg" },
  { title: "Pain", subtitle: "Relief", img: "/pain.jpg" },
  { title: "Heart", subtitle: "Health", img: "/heart.jpg" },
  { title: "Cough", subtitle: "& Cold", img: "/cough.jpg" },
  { title: "Diabetes", subtitle: "Care", img: "/diabetes.jpg" },
  { title: "Cancer", subtitle: "Care", img: "/cancer.jpg" },
];

const CategorySectionPage = () => {
  return (
    <section className="bg-white py-14 sm:py-20 px-4 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-10 sm:mb-14">

          <span className="inline-block px-3 sm:px-4 py-1 text-[10px] sm:text-xs tracking-[3px] uppercase bg-cyan-50 text-cyan-600 rounded-full mb-4 border border-cyan-100">
            Trusted Healthcare Categories
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
            Browse Medicines & Health Solutions
          </h2>

          <p className="text-gray-500 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Explore specialized healthcare categories designed to support your wellness journey with expert care and modern treatment solutions.
          </p>

        </div>

        {/* STATS (FULL RESPONSIVE FIX) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 text-center mb-10 sm:mb-12 bg-white shadow-lg rounded-xl border border-gray-100 py-6">

          <div className="py-3 sm:py-0">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-600">500+</h3>
            <p className="text-xs sm:text-sm text-gray-500">Doctors</p>
          </div>

          <div className="py-3 sm:py-0 sm:border-x border-gray-100">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-600">10K+</h3>
            <p className="text-xs sm:text-sm text-gray-500">Patients</p>
          </div>

          <div className="py-3 sm:py-0">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-600">24/7</h3>
            <p className="text-xs sm:text-sm text-gray-500">Support</p>
          </div>

        </div>

        {/* GRID (PROPER RESPONSIVE FIX) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {categories.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >

              {/* IMAGE */}
              <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 group-hover:from-black/80 transition" />

              </div>

              {/* TEXT */}
              <div className="absolute bottom-0 left-0 p-3 sm:p-4 text-white">

                <h3 className="text-sm sm:text-base lg:text-lg font-semibold">
                  {item.title}
                </h3>

                <p className="text-[11px] sm:text-sm text-gray-200">
                  {item.subtitle}
                </p>

              </div>

            </div>
          ))}

        </div>

        {/* CTA */}
        <div
          className="
  mt-10 sm:mt-14
  rounded-3xl
  p-5 sm:p-8
  text-center
  border border-cyan-100
  bg-gradient-to-r from-cyan-50 via-white to-blue-50
  shadow-[0_10px_40px_rgba(14,116,144,0.12)]
  overflow-hidden
  relative
  "
        >

          {/* TOP SMALL BADGE */}
          <div
            className="inline-block px-3 sm:px-4 py-1 rounded-full bg-white border border-cyan-100 text-cyan-700 text-[10px] sm:text-xs font-semibold tracking-[3px] uppercase shadow-sm mb-4"
          >
            24/7 Healthcare Support
          </div>

          {/* TITLE */}
          <h3 className="text-base sm:text-2xl font-bold text-gray-800 leading-snug">

            Need medical help?
            <span className="text-cyan-600">
              {" "}Find the right category instantly
            </span>

          </h3>

          {/* DESCRIPTION */}
          <p className="text-sm sm:text-base text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">

            Get connected with expert doctors and healthcare solutions
            tailored specifically for your wellness journey.

          </p>

        </div>

      </div>
    </section>
  );
};

export default CategorySectionPage;