import { Button, Card } from "@heroui/react";
import {
  CircleDollarSign,
  Hospital,
  LocationEdit,
  TimerResetIcon,
} from "lucide-react";

import Image from "next/image";
import Link from "next/link";

const FeaturePage = async () => {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/feature`,
    {
      cache: "no-store",
    }
  );

  const doctors = await res.json();

  return (
    <div className="bg-white dark:bg-zinc-950 py-14 px-5 sm:px-8 lg:px-12 transition-colors">

      <div className="max-w-7xl mx-auto">

        <div className="mb-12 text-center">

          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 dark:bg-zinc-900 border border-cyan-100 dark:border-zinc-800 text-cyan-700 dark:text-cyan-400 text-sm font-semibold shadow-sm mb-5">
            🌟 Featured Specialists
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 dark:text-white leading-tight">
            Meet Our Top Rated Doctors
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Connect with highly experienced specialists trusted by thousands
            of patients for quality healthcare and professional consultation.
          </p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {doctors?.map((doctor) => (
            <Card
              key={doctor._id}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-[0_10px_30px_rgba(14,116,144,0.15)] hover:shadow-[0_20px_60px_rgba(14,116,144,0.28)] transition-all duration-500 hover:-translate-y-2"
            >

              <div className="relative h-[240px] w-full overflow-hidden">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                <div className="absolute top-4 right-4 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md px-3 py-1 text-xs rounded-full shadow-lg text-black dark:text-white font-semibold">
                  ⭐ {doctor.rating || "4.5"}
                </div>

                <div className="absolute bottom-4 left-4 px-4 py-1.5 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-cyan-100 dark:border-zinc-700 text-cyan-700 dark:text-cyan-400 text-xs font-semibold shadow-lg">
                  {doctor.specialty}
                </div>

              </div>

              <div className="p-5 flex flex-col gap-3">

                <div>
                  <h2 className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-cyan-600 transition">
                    {doctor.name}
                  </h2>

                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                    Professional Healthcare Specialist
                  </p>
                </div>

                <div className="space-y-2 text-sm text-gray-600 dark:text-gray-300">

                  <p className="flex items-center gap-2">
                    <Hospital
                      size={16}
                      className="text-cyan-600"
                    />
                    {doctor.hospital}
                  </p>

                  <p className="flex items-center gap-2">
                    <LocationEdit
                      size={16}
                      className="text-cyan-600"
                    />
                    {doctor.location}
                  </p>

                  <p className="flex items-center gap-2">
                    <TimerResetIcon
                      size={16}
                      className="text-cyan-600"
                    />
                    {doctor.experience}
                  </p>

                </div>

                <div className="border-t border-gray-100 dark:border-zinc-800 my-2"></div>

                <div className="flex items-center justify-between gap-3">

                  <div className="flex items-center gap-1 text-sm font-bold text-green-600 bg-green-50 dark:bg-green-950/30 px-3 py-2 rounded-xl">

                    <CircleDollarSign size={16} />
                    {doctor.fee}

                  </div>

                  <Link href={`/All-Appointments/${doctor._id}`}>

                    <Button className="px-5 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl shadow-md hover:scale-105 hover:from-cyan-700 hover:to-blue-700 transition-all duration-300">
                      View Details
                    </Button>

                  </Link>

                </div>

              </div>

            </Card>
          ))}

        </div>

        <div className="flex justify-center mt-14">

          <Link href="/All-Appointments">

            <button className="group relative overflow-hidden px-8 sm:px-10 py-4 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold text-sm sm:text-base shadow-[0_10px_30px_rgba(14,116,144,0.35)] hover:shadow-[0_20px_50px_rgba(14,116,144,0.45)] transition-all duration-300 hover:-translate-y-1">

              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></span>

              <span className="relative flex items-center gap-3">

                View All Doctors

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>

              </span>

            </button>

          </Link>

        </div>

      </div>
    </div>
  );
};

export default FeaturePage;