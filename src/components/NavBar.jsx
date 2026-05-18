"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, AvatarFallback } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBarPage = () => {
    const { data: session } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className="hover:text-blue-600 transition duration-200"
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/All-Appointments"
                    className="hover:text-blue-600 transition duration-200"
                >
                    All Appointments
                </Link>
            </li>

            <li>
                <Link
                    href="/dashboard"
                    className="hover:text-blue-600 transition duration-200"
                >
                    Dashboard
                </Link>
            </li>
        </>
    );

    return (
        <nav className="w-full bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-blue-500 shadow-md">
                            <Image
                                src="/doctor.png"
                                alt="logo"
                                width={50}
                                height={50}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div>
                            <h1 className="font-bold text-2xl text-gray-800">
                                MyApp
                            </h1>
                            <p className="text-xs text-gray-500">
                                Doctor Appointment
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex items-center gap-8 font-medium text-gray-700">
                        {links}
                    </ul>

                    {/* DESKTOP AUTH */}
                    <div className="hidden md:flex items-center gap-4">

                        {user ? (
                            <>
                                <Avatar
                                    src={
                                        user?.image ||
                                        "https://img.heroui.chat/image/avatar?w=400&h=400&u=3"
                                    }
                                    className="w-11 h-11 border-2 border-blue-500"
                                />

                                <button
                                    onClick={() => authClient.signOut()}
                                    className="px-5 py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition duration-300 shadow-md"
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <button className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300 shadow-md">
                                        Login
                                    </button>
                                </Link>

                                <Link href="/signup">
                                    <button className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition duration-300">
                                        Signup
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden text-gray-700"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="md:hidden pb-5 animate-in fade-in slide-in-from-top-5 duration-300">

                        <ul className="flex flex-col gap-5 font-medium text-gray-700 bg-gray-50 p-5 rounded-2xl shadow-md">
                            {links}

                            <div className="border-t pt-4 flex flex-col gap-3">

                                {user ? (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                src={
                                                    user?.image
                                                }
                                                className="w-12 h-12 border-2 border-blue-500"
                                            />
                                            <AvatarFallback>
                                                {user?.name
                                                    ? user.name.charAt(0)
                                                    : "U"}
                                            </AvatarFallback>

                                            <div>
                                                <h2 className="font-semibold">
                                                    {user?.name}
                                                </h2>

                                                <p className="text-sm text-gray-500">
                                                    {user?.email}
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            onClick={() =>
                                                authClient.signOut()
                                            }
                                            className="w-full py-2 rounded-xl bg-red-500 hover:bg-red-600 text-white font-medium transition duration-300"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <button className="w-full py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium transition duration-300">
                                                Login
                                            </button>
                                        </Link>

                                        <Link href="/signup">
                                            <button className="w-full py-2 rounded-xl border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-medium transition duration-300">
                                                Signup
                                            </button>
                                        </Link>
                                    </>
                                )}
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBarPage;