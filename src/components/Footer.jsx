import Link from "next/link";

import {
    Mail,
    MapPin,
    Phone,
    Stethoscope,
    Clock3,
} from "lucide-react";

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
} from "react-icons/fa";

const FooterPage = () => {
    return (
        <footer className="bg-cyan-50 dark:bg-black border-t border-cyan-100 dark:border-zinc-900 transition-colors duration-300">

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 pt-16 pb-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

                    <div>

                        <div className="flex items-center gap-3 mb-5">

                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg">

                                <Stethoscope className="text-white w-6 h-6" />

                            </div>

                            <div>

                                <h2 className="text-xl font-black text-gray-900 dark:text-white">
                                    Doctor Appointment
                                </h2>

                                <p className="text-sm text-cyan-700 dark:text-cyan-400">
                                    Healthcare Platform
                                </p>

                            </div>

                        </div>

                        <p className="text-sm leading-7 text-gray-600 dark:text-gray-400">
                            Easily book appointments with experienced doctors
                            and manage your healthcare services anytime,
                            anywhere with our smart medical platform.
                        </p>

                    </div>

                    <div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-sm">

                            <li>
                                <Link
                                    href="/"
                                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/All-Appointments"
                                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                                >
                                    All Doctors
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/dashboard"
                                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                                >
                                    Dashboard
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/login"
                                    className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                                >
                                    Login
                                </Link>
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">
                            Services
                        </h3>

                        <ul className="space-y-3 text-sm text-gray-600 dark:text-gray-400">

                            <li className="hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer">
                                Online Appointment Booking
                            </li>

                            <li className="hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer">
                                Specialist Doctor Consultation
                            </li>

                            <li className="hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer">
                                Healthcare Management
                            </li>

                            <li className="hover:text-cyan-600 dark:hover:text-cyan-400 transition cursor-pointer">
                                Emergency Medical Support
                            </li>

                        </ul>

                    </div>

                    <div>

                        <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-5">
                            Contact Us
                        </h3>

                        <div className="space-y-4 text-sm">

                            <div className="flex items-start gap-3">

                                <MapPin className="w-5 h-5 text-cyan-600 dark:text-cyan-400 mt-0.5" />

                                <p className="text-gray-600 dark:text-gray-400">
                                    Rajshahi, Bangladesh
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <Phone className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />

                                <p className="text-gray-600 dark:text-gray-400">
                                    +880 1234-567890
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <Mail className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />

                                <p className="text-gray-600 dark:text-gray-400">
                                    support@doctorappointment.com
                                </p>

                            </div>

                            <div className="flex items-center gap-3">

                                <Clock3 className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />

                                <p className="text-gray-600 dark:text-gray-400">
                                    24/7 Healthcare Support
                                </p>

                            </div>

                        </div>

                    </div>

                </div>

                <div className="border-t border-cyan-100 dark:border-zinc-900 my-10"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-6">

                    <div className="text-center md:text-left">

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-5 text-sm">

                            <Link
                                href="/"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                            >
                                Privacy Policy
                            </Link>

                            <Link
                                href="/"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                            >
                                Terms & Conditions
                            </Link>

                            <Link
                                href="/"
                                className="text-gray-600 dark:text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition"
                            >
                                Support Center
                            </Link>

                        </div>

                        <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
                            © 2026 Doctor Appointment. All rights reserved.
                        </p>

                    </div>

                    <div className="flex items-center gap-4">

                        <Link
                            href="/"
                            className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-cyan-100 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-md"
                        >
                            <FaFacebookF className="w-4 h-4" />
                        </Link>

                        <Link
                            href="/"
                            className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-cyan-100 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-md"
                        >
                            <FaInstagram className="w-4 h-4" />
                        </Link>

                        <Link
                            href="/"
                            className="w-11 h-11 rounded-2xl bg-white dark:bg-zinc-900 border border-cyan-100 dark:border-zinc-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-600 hover:text-white transition-all duration-300 shadow-md"
                        >
                            <FaLinkedinIn className="w-4 h-4" />
                        </Link>

                    </div>

                </div>

            </div>

        </footer>
    );
};

export default FooterPage;