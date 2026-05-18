import { Button, Card } from "@heroui/react";
import Image from "next/image";
import {
  BriefcaseMedical,
  MapPin,
  Clock3,
  Building2,
  Star,
  CalendarDays,
  ShieldCheck,
  BadgeCheck,
  HeartPulse,
} from "lucide-react";
import BookingCardPage from "@/components/BookingCard";

const DoctorDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(`http://localhost:5000/doctors/${id}`, {
    cache: "no-store",
  });

  const doctor = await res.json();

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-cyan-50 to-white p-5 md:p-10">
      <Card className="max-w-7xl mx-auto rounded-[35px] border border-white/50 bg-white/80 backdrop-blur-xl shadow-[0_20px_80px_rgba(0,0,0,0.08)] overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 p-6 md:p-10">

          {/* LEFT SIDE */}
          <div className="relative">

            {/* image */}
            <div className="relative h-[500px] rounded-[30px] overflow-hidden group shadow-xl">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
              />

              {/* overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/10 to-transparent"></div>
            </div>

            {/* floating review card */}
            <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md shadow-2xl rounded-3xl px-6 py-4 flex items-center gap-6 border border-white/50">

              <div className="flex items-center gap-2">
                <Star
                  className="text-yellow-500 fill-yellow-400"
                  size={24}
                />

                <div>
                  <h2 className="font-bold text-slate-800 text-lg">
                    {doctor.rating}
                  </h2>
                  <p className="text-xs text-gray-400">
                    120+ Reviews
                  </p>
                </div>
              </div>

              <div className="w-[1px] h-10 bg-gray-200"></div>

              <div>
                <h2 className="font-bold text-slate-800 text-lg">
                  1.2k+
                </h2>
                <p className="text-xs text-gray-400">
                  Happy Patients
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col justify-center pt-6 lg:pt-0">

            {/* specialty */}
            <div className="mb-4">
              <span className="bg-cyan-100 text-cyan-700 text-sm font-semibold px-4 py-2 rounded-full shadow-sm">
                {doctor.specialty}
              </span>
            </div>

            {/* name */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-slate-800 leading-tight mb-4">
              {doctor.name}
            </h1>

            {/* rating */}
            <div className="flex items-center gap-2 mb-6">
              <Star
                size={18}
                className="text-yellow-500 fill-yellow-400"
              />

              <span className="font-semibold text-slate-700">
                {doctor.rating}
              </span>

              <span className="text-gray-400 text-sm">
                / 5.0 (128 Reviews)
              </span>
            </div>

            {/* description */}
            <p className="text-gray-500 leading-8 text-[15px] mb-8">
              Highly experienced specialist dedicated to providing
              compassionate and patient-centered healthcare with
              modern treatment methods and advanced medical support.
            </p>

            {/* INFO BOXES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">

              {/* Experience */}
              <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Clock3 className="text-cyan-700" size={22} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    Experience
                  </p>

                  <h3 className="font-bold text-slate-700 text-lg">
                    {doctor.experience}
                  </h3>
                </div>
              </div>

              {/* Hospital */}
              <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <Building2 className="text-cyan-700" size={22} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    Hospital
                  </p>

                  <h3 className="font-bold text-slate-700 text-lg">
                    {doctor.hospital}
                  </h3>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <MapPin className="text-cyan-700" size={22} />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    Location
                  </p>

                  <h3 className="font-bold text-slate-700 text-lg">
                    {doctor.location}
                  </h3>
                </div>
              </div>

              {/* Fee */}
              <div className="flex items-center gap-4 bg-white border border-slate-100 rounded-3xl p-5 shadow-sm hover:shadow-lg transition-all duration-300">

                <div className="bg-cyan-100 p-4 rounded-2xl">
                  <BriefcaseMedical
                    className="text-cyan-700"
                    size={22}
                  />
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">
                    Consultation Fee
                  </p>

                  <h3 className="font-bold text-slate-700 text-lg">
                    ৳ {doctor.fee}
                  </h3>
                </div>
              </div>
            </div>

            {/* availability */}
            <div className="mb-8">
              <h3 className="font-bold text-slate-700 mb-4 text-lg">
                Availability
              </h3>

              <div className="flex flex-wrap gap-3">
                {doctor.availability?.map((slot, index) => (
                  <span
                    key={index}
                    className="bg-cyan-100 text-cyan-700 px-5 py-2 rounded-full text-sm font-semibold shadow-sm"
                  >
                    {slot}
                  </span>
                ))}
              </div>
            </div>

            {/* buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div>

               
              </div>
              <div>
                <BookingCardPage doctor={doctor} />
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM FEATURES */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 md:px-10 md:pb-10">

          <div className="bg-slate-50 rounded-3xl p-6 flex items-start gap-4 border border-slate-100">
            <div className="bg-cyan-100 p-4 rounded-2xl">
              <ShieldCheck className="text-cyan-700" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-1">
                Trusted Specialist
              </h3>

              <p className="text-sm text-gray-500">
                10+ years of experience in medical care.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 flex items-start gap-4 border border-slate-100">
            <div className="bg-cyan-100 p-4 rounded-2xl">
              <BadgeCheck className="text-cyan-700" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-1">
                Quality Care
              </h3>

              <p className="text-sm text-gray-500">
                Advanced treatment with patient-focused support.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-3xl p-6 flex items-start gap-4 border border-slate-100">
            <div className="bg-cyan-100 p-4 rounded-2xl">
              <HeartPulse className="text-cyan-700" />
            </div>

            <div>
              <h3 className="font-bold text-slate-800 mb-1">
                Quick Response
              </h3>

              <p className="text-sm text-gray-500">
                Fast appointment scheduling and support system.
              </p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DoctorDetailsPage;