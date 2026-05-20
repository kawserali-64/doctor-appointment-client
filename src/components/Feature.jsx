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
    <div className="bg-white py-14 px-5 sm:px-8 lg:px-12">

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="mb-10 text-center">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            🌟 Top Rated Doctors
          </h1>

          <p className="text-gray-500 mt-2">
            Meet our highest-rated specialists trusted by thousands
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {doctors.map((doctor) => (
            <Card
              key={doctor._id}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-[0_10px_30px_rgba(14,116,144,0.20)] hover:shadow-[0_20px_60px_rgba(14,116,144,0.35)] transition-all duration-300
"
            >

              {/* IMAGE */}
              <div className="relative h-[200px] w-full overflow-hidden">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

                {/* rating */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-xs rounded-full shadow">
                  ⭐ {doctor.rating || "4.5"}
                </div>

                {/* specialty */}
                <div
                  className="absolute bottom-3 left-3 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-100  text-cyan-700 text-[11px] sm:text-xs font-semibold tracking-wide shadow-[0_6px_20px_rgba(14,116,144,0.18)] transition-all duration-300 group-hover:bg-cyan-50"
                >
                  {doctor.specialty}
                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5 flex flex-col gap-2">

                <h2 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 transition">
                  {doctor.name}
                </h2>

                <div className="text-xs text-gray-500 space-y-1">

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

                {/* divider */}
                <div className="border-t border-gray-100 my-3"></div>

                {/* bottom */}
                <div className="flex items-center justify-between">

                  <div className="flex items-center gap-1 text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                    <CircleDollarSign size={16} /> {doctor.fee}
                  </div>

                  <Link href={`/All-Appointments/${doctor._id}`}>
                    <Button className="px-5 py-2 bg-cyan-600 text-white rounded-xl shadow-md hover:bg-cyan-700 transition">
                      View Details
                    </Button>
                  </Link>

                </div>

              </div>

            </Card>
          ))}

        </div>

      </div>
    </div>
  );
};

export default FeaturePage;