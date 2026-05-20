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
    <section className="bg-white dark:bg-zinc-950 py-14 sm:py-20 px-4 sm:px-8 lg:px-12 transition-colors">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10 sm:mb-14">

          <span className="inline-block px-3 sm:px-4 py-1 text-[10px] sm:text-xs tracking-[3px] uppercase bg-cyan-50 dark:bg-zinc-900 text-cyan-600 dark:text-cyan-400 rounded-full mb-4 border border-cyan-100 dark:border-zinc-800">
            Trusted Healthcare Categories
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-white leading-tight">
            Browse Medicines & Health Solutions
          </h2>

          <p className="text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto text-sm sm:text-base">
            Explore specialized healthcare categories designed to support your wellness journey with expert care and modern treatment solutions.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-0 text-center mb-10 sm:mb-12 bg-white dark:bg-zinc-900 shadow-lg rounded-xl border border-gray-100 dark:border-zinc-800 py-6 transition-colors">

          <div className="py-3 sm:py-0">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-600">500+</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">Doctors</p>
          </div>

          <div className="py-3 sm:py-0 sm:border-x border-gray-100 dark:border-zinc-700">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-600">10K+</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">Patients</p>
          </div>

          <div className="py-3 sm:py-0">
            <h3 className="text-lg sm:text-2xl font-bold text-cyan-600">24/7</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-300">Support</p>
          </div>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">

          {categories.map((item, i) => (
            <div
              key={i}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-white dark:bg-zinc-900 shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-zinc-800"
            >

              <div className="relative h-44 sm:h-52 lg:h-56 overflow-hidden">

                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-black/10 group-hover:from-black/80 transition" />

              </div>

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

        <div className="mt-10 sm:mt-14 rounded-3xl p-5 sm:p-8 text-center border border-cyan-100 dark:border-zinc-800 bg-gradient-to-r from-cyan-50 via-white to-blue-50 dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 shadow-[0_10px_40px_rgba(14,116,144,0.12)] overflow-hidden relative transition-colors">

          <div className="inline-block px-3 sm:px-4 py-1 rounded-full bg-white dark:bg-zinc-800 border border-cyan-100 dark:border-zinc-700 text-cyan-700 dark:text-cyan-400 text-[10px] sm:text-xs font-semibold tracking-[3px] uppercase shadow-sm mb-4">
            24/7 Healthcare Support
          </div>

          <h3 className="text-base sm:text-2xl font-bold text-gray-800 dark:text-white leading-snug">

            Need medical help?
            <span className="text-cyan-600">
              {" "}Find the right category instantly
            </span>

          </h3>

          <p className="text-sm sm:text-base text-gray-500 dark:text-gray-300 mt-3 max-w-2xl mx-auto leading-relaxed">

            Get connected with expert doctors and healthcare solutions
            tailored specifically for your wellness journey.

          </p>

        </div>

      </div>
    </section>
  );
};

export default CategorySectionPage;