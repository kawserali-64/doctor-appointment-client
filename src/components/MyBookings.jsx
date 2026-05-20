"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { BookingDelete } from "./BookingDelete";
import { BookingUpdate } from "./bookingUpdate";

const MyBookings = () => {
    const { data: session } = authClient.useSession();
    const userEmail = session?.user?.email;

    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = async () => {
        if (!userEmail) return;

        try {
            setLoading(true);

            const { data: tokenData } = await authClient.token();

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_SERVER_URL}/booking/${userEmail}`,
                {
                    method: "GET",
                    headers: {
                        authorization: `Bearer ${tokenData?.token}`,
                    },
                }
            );

            const data = await res.json();
            setBookings(data || []);

        } catch (err) {
            console.log("FETCH ERROR:", err);
            setBookings([]);

        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [userEmail]);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">

            <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800 dark:text-white">
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
                    <div className="hidden lg:block overflow-x-auto rounded-2xl shadow-lg border">

                        <table className="w-full">

                            <thead className="bg-blue-600 text-white">
                                <tr>
                                    <th className="p-4 text-left">Doctor</th>
                                    <th className="p-4 text-left">Date</th>
                                    <th className="p-4 text-left">Time</th>
                                    <th className="p-4 text-left">Status</th>
                                    <th className="p-4 text-left">Actions</th>
                                </tr>
                            </thead>

                            <tbody>

                                {bookings.map((b) => (
                                    <tr key={b._id} className="border-b">

                                        <td className="p-4">
                                            <div className="flex items-center gap-3">

                                                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gray-200 dark:border-zinc-700 flex-shrink-0">

                                                    <Image
                                                        src={b.doctorImage}
                                                        width={48}
                                                        height={48}
                                                        alt="doctor"
                                                        className="w-full h-full object-cover"
                                                    />

                                                </div>

                                                <div>
                                                    <p className="font-semibold text-gray-800 dark:text-white">
                                                        {b.doctorName}
                                                    </p>
                                                    <p className="text-xs text-gray-500">
                                                        Specialist Doctor
                                                    </p>
                                                </div>

                                            </div>
                                        </td>

                                        <td className="p-4">{b.appointmentDate}</td>
                                        <td className="p-4">{b.appointmentTime}</td>

                                        <td className="p-4 text-green-600 font-medium">
                                            Confirmed
                                        </td>

                                        <td className="p-4 flex gap-2">

                                            <BookingUpdate bookingId={b._id} />

                                            <BookingDelete
                                                bookingId={b._id}
                                                setBookings={setBookings}
                                            />

                                        </td>

                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:hidden">

                        {bookings.map((b) => (
                            <div
                                key={b._id}
                                className="p-5 border rounded-xl shadow bg-white dark:bg-zinc-900"
                            >

                                <div className="flex items-center gap-3">

                                    {/* 🔥 FIXED CIRCLE IMAGE */}
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-gray-200 dark:border-zinc-700 flex-shrink-0">

                                        <Image
                                            src={b.doctorImage}
                                            width={64}
                                            height={64}
                                            alt="doctor"
                                            className="w-full h-full object-cover"
                                        />

                                    </div>

                                    <div>
                                        <h2 className="font-bold text-lg text-gray-800 dark:text-white">
                                            {b.doctorName}
                                        </h2>
                                        <p className="text-sm text-gray-500">
                                            Specialist Doctor
                                        </p>
                                    </div>

                                </div>

                                <div className="mt-3 text-sm space-y-1">
                                    <p><b>Date:</b> {b.appointmentDate}</p>
                                    <p><b>Time:</b> {b.appointmentTime}</p>
                                    <p className="text-green-600">
                                        Confirmed
                                    </p>
                                </div>

                                <div className="flex gap-2 mt-4">

                                    <BookingUpdate bookingId={b._id} />

                                    <BookingDelete
                                        bookingId={b._id}
                                        setBookings={setBookings}
                                    />

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