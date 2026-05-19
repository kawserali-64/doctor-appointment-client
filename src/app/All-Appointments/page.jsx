import { Button, Card } from "@heroui/react";
import { Hospital, LocationEdit, TimerResetIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const AllAppointment = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/doctors`);

    const doctors = await res.json();

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 p-6">

            {/* Header */}
            <div className="mb-10 text-center">
                <h1 className="text-4xl font-bold text-gray-800">
                    Find Your Doctor 👨‍⚕️
                </h1>
                <p className="text-gray-500 mt-2">
                    Book appointments with trusted specialists in seconds
                </p>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
                {doctors.map((doctor) => (
                    <Card
                        key={doctor._id}
                        className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
                    >
                        {/* Image */}
                        <div className="relative h-[200px] w-full overflow-hidden">
                            <Image
                                src={doctor.image}
                                alt={doctor.name}
                                fill
                                className="object-cover group-hover:scale-110 transition-transform duration-500"
                            />

                            {/* gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

                            {/* rating */}
                            <div className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 text-xs rounded-full shadow">
                                ⭐ {doctor.rating || "4.5"}
                            </div>

                            {/* specialty badge */}
                            <div className="absolute bottom-3 left-3 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow">
                                {doctor.specialty}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col gap-2">
                            <h2 className="text-lg font-semibold text-gray-800 group-hover:text-blue-600 transition">
                                {doctor.name}
                            </h2>

                            <div className="text-xs text-gray-500 space-y-1">
                                <p><Hospital size={16} className="inline-block mr-2" /> {doctor.hospital}</p>
                                <p><LocationEdit size={16} className="inline-block mr-2" /> {doctor.location}</p>
                                <p><TimerResetIcon size={16} className="inline-block mr-2" /> {doctor.experience}</p>
                            </div>

                            {/* divider */}
                            <div className="border-t my-3"></div>

                            {/* bottom row: fee + button */}
                            <div className="flex items-center justify-between">

                                {/* fee */}
                                <div className="text-sm font-semibold text-green-600 bg-green-50 px-3 py-1 rounded-full">
                                    💰 ৳ {doctor.fee}
                                </div>

                                {/* button */}
                                <Link href={`/All-Appointments/${doctor._id}`}>
                                    <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-4 py-2 shadow-md">
                                        View Details
                                    </Button>
                                </Link>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default AllAppointment;