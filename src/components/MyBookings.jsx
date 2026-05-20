"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { BookingDelete } from "./BookingDelete";
import Image from "next/image";
import { BookingUpdate } from "./bookingUpdate";

const MyBookings = () => {
    const { data: session } = authClient.useSession();
    const userEmail = session?.user?.email;

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (!userEmail) return;

        const fetchData = async () => {
            try {
                setLoading(true);

                const { data: tokenData, } = await authClient.token();

                const res = await fetch(
                    `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userEmail}`,
                    {
                        headers: {
                            authorization: `Bearer ${tokenData?.token}`
                        }
                    }
                );

                const bookingId = await res.json();
                setBookings(bookingId);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userEmail]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
                My Bookings
            </h1>

            {loading && (
                <p className="text-center text-gray-500">
                    Loading bookings...
                </p>
            )}

            {!loading && bookings.length === 0 && (
                <p className="text-center text-gray-500">
                    No bookings found
                </p>
            )}

            {bookings.length > 0 && (
                <>
                    {/* Desktop Table */}
                    <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-lg border border-gray-200">
                        <table className="w-full">
                            <thead className="bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                                <tr>
                                    <th className="py-4 px-4 text-left">
                                        Doctor
                                    </th>
                                    <th className="py-4 px-4 text-left">
                                        Date
                                    </th>
                                    <th className="py-4 px-4 text-left">
                                        Time
                                    </th>
                                    <th className="py-4 px-4 text-left">
                                        Status
                                    </th>
                                    <th className="py-4 px-4 text-left">
                                        Actions
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {bookings.map((b, index) => (
                                    <tr
                                        key={b._id}
                                        className={`border-b hover:bg-gray-50 transition ${index % 2 === 0
                                                ? "bg-white"
                                                : "bg-gray-50"
                                            }`}
                                    >
                                        {/* Doctor */}
                                        <td className="py-4 px-4">
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src={b.doctorImage}
                                                    width={50}
                                                    height={50}
                                                    alt="doctor"
                                                    className="rounded-full object-cover"
                                                />

                                                <div>
                                                    <p className="font-semibold text-gray-800">
                                                        {b.doctorName}
                                                    </p>

                                                    <p className="text-xs text-gray-500">
                                                        Doctor
                                                    </p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* Date */}
                                        <td className="py-4 px-4 text-gray-700">
                                            {b.appointmentDate}
                                        </td>

                                        {/* Time */}
                                        <td className="py-4 px-4 text-gray-700">
                                            {b.appointmentTime}
                                        </td>

                                        {/* Status */}
                                        <td className="py-4 px-4">
                                            <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                                Confirmed
                                            </span>
                                        </td>

                                        {/* Actions */}
                                        <td className="py-4 px-4">
                                            <div className="flex gap-2">
                                                <BookingUpdate bookingId={b._id} />

                                                <BookingDelete bookingId={b._id} />
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Mobile + Tablet Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">
                        {bookings.map((b) => (
                            <div
                                key={b._id}
                                className="bg-white rounded-2xl shadow-md border border-gray-100 p-5 hover:shadow-xl transition"
                            >
                                {/* Top */}
                                <div className="flex items-center gap-4">
                                    <Image
                                        src={b.doctorImage}
                                        width={60}
                                        height={60}
                                        alt="doctor"
                                        className="rounded-full object-cover"
                                    />

                                    <div>
                                        <h2 className="font-bold text-lg text-gray-800">
                                            {b.doctorName}
                                        </h2>

                                        <p className="text-sm text-gray-500">
                                            Doctor
                                        </p>
                                    </div>
                                </div>

                                {/* Info */}
                                <div className="mt-4 space-y-2 text-sm text-gray-600">
                                    <p>
                                        <span className="font-semibold">
                                            Date:
                                        </span>{" "}
                                        {b.appointmentDate}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Time:
                                        </span>{" "}
                                        {b.appointmentTime}
                                    </p>

                                    <p>
                                        <span className="font-semibold">
                                            Status:
                                        </span>{" "}
                                        <span className="px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-medium">
                                            Confirmed
                                        </span>
                                    </p>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-2 mt-5">
                                    <BookingUpdate bookingId={b._id} />

                                    <BookingDelete bookingId={b._id} />
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default MyBookings;