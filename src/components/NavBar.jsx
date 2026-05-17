"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBarPage = () => {
    const [isOpen, setIsOpen] = useState(false);
    const links = <>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/All-Appointments">All Appointments</Link></li>
        <li><Link href="/services">Dashboard</Link></li>
    </>

    return (
        <nav className="w-full bg-white shadow-md sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5">

                <div className="flex items-center justify-between h-20">

                    {/* LEFT - LOGO */}
                    <div className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-gray-300">
                            <Image
                                src="/doctor.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <h1 className="font-bold text-xl">MyApp</h1>
                    </div>

                    {/* MIDDLE - ROUTES (DESKTOP) */}
                    <ul className="hidden md:flex gap-8 font-medium list-none">
                        {links}
                    </ul>

                    {/* RIGHT - LOGIN / LOGOUT */}
                    <div className="hidden md:flex gap-3">
                        <button className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">
                            Login
                        </button>
                        <button className="px-4 py-2 rounded bg-red-500 text-white hover:bg-red-600">
                            Logout
                        </button>
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <div className="md:hidden">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            ☰
                        </button>
                    </div>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="md:hidden flex flex-col gap-4 pb-4">
                        <ul className="flex flex-col gap-2">
                            {links}
                        </ul>

                        <div className="flex gap-2 mt-2">
                            <button className="px-3 py-1 bg-blue-600 text-white rounded">
                                Login
                            </button>
                            <button className="px-3 py-1 bg-red-500 text-white rounded">
                                Logout
                            </button>
                        </div>
                    </div>
                )}

            </div>
        </nav>
    );
};

export default NavBarPage;