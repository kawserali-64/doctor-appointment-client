"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";

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

                const res = await fetch(
                    `http://localhost:5000/booking/${userEmail}`
                );

                const data = await res.json();
                setBookings(data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [userEmail]);

    return (
        <div className="max-w-6xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-center">
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
                <div className="overflow-x-auto rounded-xl shadow-lg border">
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
                                    className={`border-b hover:bg-gray-50 transition ${
                                        index % 2 === 0
                                            ? "bg-white"
                                            : "bg-gray-50"
                                    }`}
                                >
                                    {/* Doctor */}
                                    <td className="py-3 px-4">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={
                                                    b.doctorImage ||
                                                    "https://i.ibb.co/4pDNDk1/doctor.png"
                                                }
                                                className="w-12 h-12 rounded-full object-cover border"
                                            />
                                            <div>
                                                <p className="font-semibold">
                                                    {b.doctorName}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    Doctor
                                                </p>
                                            </div>
                                        </div>
                                    </td>

                                    {/* Date */}
                                    <td className="py-3 px-4">
                                        {b.appointmentDate}
                                    </td>

                                    {/* Time */}
                                    <td className="py-3 px-4">
                                        {b.appointmentTime}
                                    </td>

                                    {/* Status */}
                                    <td className="py-3 px-4">
                                        <span className="px-3 py-1 text-xs rounded-full bg-green-100 text-green-700 font-medium">
                                            Confirmed
                                        </span>
                                    </td>

                                    {/* Actions */}
                                    <td className="py-3 px-4">
                                        <div className="flex gap-2">
                                            <button className="px-3 py-1 text-xs rounded bg-blue-500 text-white hover:bg-blue-600">
                                                Update
                                            </button>

                                            <button className="px-3 py-1 text-xs rounded bg-red-500 text-white hover:bg-red-600">
                                                Delete
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default MyBookings;