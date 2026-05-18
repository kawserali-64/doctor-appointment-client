"use client";

import { useState } from "react";
import MyBookingsPage from "@/components/MyBookings";
import MyProfilePage from "@/components/MyProfile";

const DashboardPage = () => {
    const [activeTab, setActiveTab] = useState("bookings");

    return (
        <div className="max-w-7xl mx-auto p-6">

            {/* TOGGLE BUTTONS */}
            <div className="flex gap-4 mb-6">

                <button
                    onClick={() => setActiveTab("bookings")}
                    className={`px-4 py-2 rounded font-semibold ${
                        activeTab === "bookings"
                            ? "bg-cyan-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    My Bookings
                </button>

                <button
                    onClick={() => setActiveTab("profile")}
                    className={`px-4 py-2 rounded font-semibold ${
                        activeTab === "profile"
                            ? "bg-cyan-600 text-white"
                            : "bg-gray-200"
                    }`}
                >
                    My Profile
                </button>

            </div>

            {/* CONTENT AREA */}
            <div className="bg-white p-4 rounded-xl shadow">

                {activeTab === "bookings" && <MyBookingsPage />}

                {activeTab === "profile" && <MyProfilePage />}

            </div>

        </div>
    );
};

export default DashboardPage;