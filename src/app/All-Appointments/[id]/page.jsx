import { Card } from "@heroui/react";
import Image from "next/image";
import {
  BriefcaseMedical,
  MapPin,
  Clock3,
  Building2,
  Star,
  ShieldCheck,
  BadgeCheck,
  HeartPulse,
  CalendarDays,
} from "lucide-react";

import BookingCardPage from "@/components/BookingCard";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

export async function generateMetadata({ params }) {
  return {
    title: "Doctor Details",
  };
}

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/doctors/${id}`,
    {
      headers: {
        authorization: `Bearer ${token}`,
      },
      cache: "no-store",
    }
  );

  const doctor = await res.json();

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen py-6 sm:py-10 px-4 sm:px-6 lg:px-10 transition-colors">

      <div className="max-w-7xl mx-auto">

        <Card
          className="
          overflow-hidden
          rounded-[35px]
          border border-gray-100 dark:border-zinc-800
          bg-white dark:bg-zinc-900
          shadow-[0_20px_80px_rgba(14,116,144,0.15)]
          "
        >

          <div className="grid grid-cols-1 lg:grid-cols-12">

            <div className="lg:col-span-5 relative bg-gradient-to-br from-cyan-50 to-white dark:from-zinc-900 dark:to-zinc-900 p-5 sm:p-8">

              <div className="relative h-[360px] sm:h-[650px] rounded-[30px] overflow-hidden">

                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover hover:scale-105 transition duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

                <div className="absolute top-5 left-5 bg-white/90 dark:bg-zinc-800/90 backdrop-blur-xl border border-gray-100 dark:border-zinc-700 rounded-full px-4 py-2 shadow-xl flex items-center gap-2">

                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />

                  <span className="text-sm font-semibold text-gray-700 dark:text-gray-200">
                    Available For Appointment
                  </span>

                </div>

                <div className="absolute bottom-5 left-5 bg-cyan-600 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-2xl">
                  {doctor.specialty}
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4 mt-5">

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-gray-100 dark:border-zinc-800 shadow-[0_10px_35px_rgba(14,116,144,0.12)]">

                  <p className="text-sm text-gray-500 dark:text-gray-400">Rating</p>

                  <h2 className="text-3xl font-black text-gray-800 dark:text-white mt-1">
                    {doctor.rating}
                  </h2>

                  <Star className="text-yellow-500 fill-yellow-400 mt-2" />
                </div>

                <div className="bg-white dark:bg-zinc-900 rounded-3xl p-5 border border-gray-100 dark:border-zinc-800 shadow-[0_10px_35px_rgba(14,116,144,0.12)]">

                  <p className="text-sm text-gray-500 dark:text-gray-400">Patients</p>

                  <h2 className="text-3xl font-black text-gray-800 dark:text-white mt-1">
                    1.2K+
                  </h2>

                  <HeartPulse className="text-cyan-600 mt-2" />
                </div>

              </div>

            </div>

            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-14 flex flex-col justify-center">

              <div className="inline-flex items-center gap-2 bg-cyan-50 dark:bg-zinc-800 text-cyan-700 dark:text-cyan-400 border border-cyan-100 dark:border-zinc-700 rounded-full px-4 py-2 text-sm font-semibold w-fit mb-6">
                <ShieldCheck size={16} />
                Trusted Healthcare Specialist
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-gray-800 dark:text-white leading-tight">
                {doctor.name}
              </h1>

              <div className="flex items-center gap-2 mt-5 text-gray-600 dark:text-gray-300">
                <Building2 className="text-cyan-600" size={18} />
                {doctor.hospital}
              </div>

              <p className="mt-6 text-gray-600 dark:text-gray-300 leading-8 text-[15px]">
                Dedicated medical professional delivering advanced healthcare solutions
                with compassionate patient care and modern treatment systems.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-10">

                {[
                  {
                    icon: Clock3,
                    label: "Experience",
                    value: doctor.experience,
                  },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: doctor.location,
                  },
                  {
                    icon: BriefcaseMedical,
                    label: "Fee",
                    value: `৳ ${doctor.fee}`,
                  },
                  {
                    icon: BadgeCheck,
                    label: "Reviews",
                    value: "128+",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={i}
                      className="rounded-3xl border border-gray-100 dark:border-zinc-800 bg-cyan-50/40 dark:bg-zinc-800 p-5 shadow-[0_10px_30px_rgba(14,116,144,0.08)]"
                    >
                      <div className="flex items-center gap-4">
                        <div className="bg-white dark:bg-zinc-900 p-4 rounded-2xl shadow-md">
                          <Icon className="text-cyan-600" size={22} />
                        </div>

                        <div>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {item.label}
                          </p>
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white mt-1">
                            {item.value}
                          </h3>
                        </div>
                      </div>
                    </div>
                  );
                })}

              </div>

              <div className="mt-10">
                <BookingCardPage doctor={doctor} />
              </div>

            </div>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 border-t border-gray-100 dark:border-zinc-800 bg-gradient-to-r from-cyan-50/50 to-white dark:from-zinc-900 dark:to-zinc-900 p-6 sm:p-8">

            {[
              {
                icon: ShieldCheck,
                title: "Trusted Specialist",
                desc: "Safe and modern healthcare support.",
              },
              {
                icon: CalendarDays,
                title: "Easy Appointment",
                desc: "Fast and flexible booking system.",
              },
              {
                icon: HeartPulse,
                title: "Patient Support",
                desc: "Care-focused medical assistance.",
              },
            ].map((item, i) => {
              const Icon = item.icon;

              return (
                <div
                  key={i}
                  className="bg-white dark:bg-zinc-900 rounded-3xl border border-gray-100 dark:border-zinc-800 p-6 shadow-[0_10px_30px_rgba(14,116,144,0.08)] hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="bg-cyan-100 dark:bg-zinc-800 w-fit p-4 rounded-2xl mb-5">
                    <Icon className="text-cyan-600" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 dark:text-white">
                    {item.title}
                  </h3>

                  <p className="text-gray-500 dark:text-gray-400 mt-3 text-sm leading-7">
                    {item.desc}
                  </p>
                </div>
              );
            })}

          </div>

        </Card>

      </div>
    </div>
  );
};

export default DoctorDetailsPage;