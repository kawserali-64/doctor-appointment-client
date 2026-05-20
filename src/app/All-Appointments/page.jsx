import DoctorSearch from "@/components/DoctorSearch";
import { Button, Card } from "@heroui/react";
import { CircleDollarSign, Hospital, LocationEdit, TimerResetIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllAppointment = async ({ searchParams }) => {
    // ✅ FIX: searchParams must be awaited
    const params = await searchParams;

    const search = params?.search || "";

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`, {
        cache: "no-store",
    });

    const doctors = await res.json();

    // ✅ Filter logic
    const filteredDoctors = doctors.filter((doctor) =>
        doctor.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="container mx-auto mb-5 mt-5">

            {/* Header */}
            <div className="mb-14 text-center">
               
                {/* TITLE */}
                <h1
                    className="
        mt-5
        text-3xl sm:text-4xl md:text-5xl
        font-black
        leading-tight
        text-gray-800
        "
                >
                    Find Your
                    <span className="text-cyan-600"> Doctor</span>
                </h1>

                {/* DESCRIPTION */}
                <p
                    className=" text-gray-500 mt-4 max-w-2xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed"
                >
                    Book appointments with trusted specialists instantly and
                    receive quality healthcare support from experienced doctors.
                </p>

            </div>

            {/* Search Component */}
            <DoctorSearch />

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {filteredDoctors.map((doctor) => (
                    <Card
                        key={doctor._id}
                        className="group bg-white rounded-3xl overflow-hidden border border-gray-100 p-5 shadow-[0_10px_25px_rgba(14,116,144,0.15)] hover:shadow-[0_20px_60px_rgba(14,116,144,0.35)] transition-all duration-300"
                    >
                        {/* Image */}
                        <div className="relative h-[200px] w-full overflow-hidden">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500 rounded-2xl"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                            <div className="absolute top-3 right-3 bg-white/90 px-3 py-1 text-xs rounded-full shadow">
                                ⭐ {doctor.rating || "4.5"}
                            </div>

                            <div
                                className="absolute bottom-3 left-3 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-cyan-100  text-cyan-700 text-[11px] sm:text-xs font-semibold tracking-wide shadow-[0_6px_20px_rgba(14,116,144,0.18)] transition-all duration-300 group-hover:bg-cyan-50"
                            >
                                {doctor.specialty}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-cyan-600 ">
                                {doctor.name}
                            </h2>

                            <div className="text-xs text-gray-500 space-y-1">
                                <p>
                                    <Hospital size={16} className="inline-block mr-2" />
                                    {doctor.hospital}
                                </p>

                                <p>
                                    <LocationEdit size={16} className="inline-block mr-2" />
                                    {doctor.location}
                                </p>

                                <p>
                                    <TimerResetIcon size={16} className="inline-block mr-2" />
                                    {doctor.experience}
                                </p>
                            </div>

                            <div className="border-t my-3"></div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full flex items-center gap-1">
                                    <CircleDollarSign size={16} />
                                    {doctor.fee}
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

            {/* No result */}
            {filteredDoctors.length === 0 && (
                <p className="text-center mt-10 text-red-500 font-semibold">
                    No doctor found 😢
                </p>
            )}
        </div>
    );
};

export default AllAppointment;