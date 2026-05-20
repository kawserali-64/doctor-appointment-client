"use client";

import { useState } from "react";
import MyBookingsPage from "@/components/MyBookings";
import MyProfilePage from "@/components/MyProfile";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("bookings");

  return (
    <div className="bg-white dark:bg-zinc-950 min-h-screen transition-colors">

      <div className="max-w-7xl mx-auto p-6">

        <div className="mb-8">
          <h1 className="text-3xl font-black text-gray-800 dark:text-white">
            My Dashboard
          </h1>

          <p className="text-gray-500 dark:text-gray-400 mt-2">
            Manage your bookings and profile in one place
          </p>
        </div>

        <div className="flex gap-3 mb-8">

          <button
            onClick={() => setActiveTab("bookings")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border ${
              activeTab === "bookings"
                ? "bg-cyan-600 text-white border-cyan-600 shadow-md"
                : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-zinc-800 hover:border-cyan-400 hover:text-cyan-600"
            }`}
          >
            My Bookings
          </button>

          <button
            onClick={() => setActiveTab("profile")}
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-300 border ${
              activeTab === "profile"
                ? "bg-cyan-600 text-white border-cyan-600 shadow-md"
                : "bg-white dark:bg-zinc-900 text-gray-600 dark:text-gray-300 border-gray-200 dark:border-zinc-800 hover:border-cyan-400 hover:text-cyan-600"
            }`}
          >
            My Profile
          </button>

        </div>

        <div className="bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-3xl shadow-[0_20px_60px_rgba(14,116,144,0.12)] p-5 sm:p-8 transition-colors">

          {activeTab === "bookings" && <MyBookingsPage />}

          {activeTab === "profile" && <MyProfilePage />}

        </div>

      </div>

    </div>
  );
};

export default DashboardPage;