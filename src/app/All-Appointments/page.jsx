import DoctorSearch from "@/components/DoctorSearch";
import { Button, Card } from "@heroui/react";
import {
  CircleDollarSign,
  Hospital,
  LocationEdit,
  TimerResetIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "All Doctors",
};

const AllAppointment = async ({ searchParams }) => {
  const params = await searchParams;
  const search = params?.search || "";

  const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, {
    cache: "no-store",
  });

  const doctors = await res.json();

  const filteredDoctors = doctors.filter((doctor) =>
    doctor.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen py-14 px-5 sm:px-8 lg:px-12 transition-colors">

      <div className="max-w-7xl mx-auto">

        <div className="mb-14 text-center">

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-gray-800 dark:text-white">
            Find Your <span className="text-cyan-600">Doctor</span>
          </h1>

          <p className="text-gray-500 dark:text-gray-300 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Book appointments with trusted specialists instantly and receive
            quality healthcare support from experienced doctors.
          </p>

        </div>

        <DoctorSearch />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mt-10">

          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor._id}
              className="group bg-white dark:bg-zinc-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-zinc-800 shadow-[0_10px_30px_rgba(14,116,144,0.20)] hover:shadow-[0_20px_60px_rgba(14,116,144,0.35)] transition-all duration-300"
            >

              <div className="relative h-[200px] w-full overflow-hidden">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                <div className="absolute top-3 right-3 bg-white/90 dark:bg-zinc-800/90 backdrop-blur px-3 py-1 text-xs rounded-full shadow text-black dark:text-white">
                  ⭐ {doctor.rating || "4.5"}
                </div>

                <div className="absolute bottom-3 left-3 px-4 py-1.5 rounded-full bg-white/90 dark:bg-zinc-800/90 backdrop-blur-md border border-cyan-100 dark:border-zinc-700 text-cyan-700 dark:text-cyan-400 text-[11px] sm:text-xs font-semibold tracking-wide shadow-[0_6px_20px_rgba(14,116,144,0.18)] group-hover:bg-cyan-50 dark:group-hover:bg-zinc-800 transition-all">
                  {doctor.specialty}
                </div>

              </div>

              <div className="p-5 flex flex-col gap-2">

                <h2 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-cyan-600 transition">
                  {doctor.name}
                </h2>

                <div className="text-xs text-gray-500 dark:text-gray-300 space-y-1">

                  <p className="flex items-center gap-2">
                    <Hospital size={16} /> {doctor.hospital}
                  </p>

                  <p className="flex items-center gap-2">
                    <LocationEdit size={16} /> {doctor.location}
                  </p>

                  <p className="flex items-center gap-2">
                    <TimerResetIcon size={16} /> {doctor.experience}
                  </p>

                </div>

                <div className="border-t border-gray-100 dark:border-zinc-800 my-3"></div>

                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-1 text-sm font-semibold text-green-600 bg-green-50 dark:bg-green-950/30 px-3 py-1 rounded-full">
                    <CircleDollarSign size={16} />
                    {doctor.fee}
                  </div>

                  <Link href={`/All-Appointments/${doctor._id}`}>
                    <Button className="px-5 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-700 dark:hover:bg-cyan-600 transition">
                      View Details
                    </Button>
                  </Link>

                </div>

              </div>

            </Card>
          ))}

        </div>

        {filteredDoctors.length === 0 && (
          <p className="text-center mt-10 text-red-500 font-semibold">
            No doctor found 😢
          </p>
        )}

      </div>
    </div>
  );
};

export default AllAppointment;