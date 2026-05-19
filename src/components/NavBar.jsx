"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const NavBarPage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const [isOpen, setIsOpen] = useState(false);
    const [logoutLoading, setLogoutLoading] = useState(false);

    const handleLogout = async () => {
        try {
            setLogoutLoading(true);
            await authClient.signOut();
        } finally {
            setLogoutLoading(false);
        }
    };

    const links = (
        <>
            <li>
                <Link href="/" className="hover:text-blue-600 transition">
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/All-Appointments"
                    className="hover:text-blue-600 transition"
                >
                    All Appointments
                </Link>
            </li>

            <li>
                <Link
                    href="/dashboard"
                    className="hover:text-blue-600 transition"
                >
                    Dashboard
                </Link>
            </li>
        </>
    );

    return (
        <nav className="w-full bg-white/90 backdrop-blur-md border-b sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-5">
                <div className="flex items-center justify-between h-20">

                    {/* LOGO */}
                    <Link href="/" className="flex items-center gap-3">
                        <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-blue-500">
                            <Image
                                src="/doctor.png"
                                alt="logo"
                                width={50}
                                height={50}
                            />
                        </div>

                        <div>
                            <h1 className="font-bold text-2xl">MyApp</h1>
                            <p className="text-xs text-gray-500">
                                Doctor Appointment
                            </p>
                        </div>
                    </Link>

                    {/* DESKTOP MENU */}
                    <ul className="hidden md:flex gap-8 font-medium">
                        {links}
                    </ul>

                    {/* AUTH (DESKTOP) */}
                    <div className="hidden md:flex items-center gap-4">

                        {/* 🔥 LOADING STATE */}
                        {isPending ? (
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gray-200 animate-pulse" />
                                <div className="w-20 h-8 bg-gray-200 animate-pulse rounded-lg" />
                            </div>
                        ) : user ? (
                            <>
                                <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-blue-500">
                                    <Image
                                        src={user?.image}
                                        alt="user"
                                        width={44}
                                        height={44}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <button
                                    onClick={handleLogout}
                                    disabled={logoutLoading}
                                    className="px-5 py-2 rounded-xl bg-red-500 text-white"
                                >
                                    {logoutLoading ? "Logging out..." : "Logout"}
                                </button>
                            </>
                        ) : (
                            <>
                                <Link href="/login">
                                    <button className="px-5 py-2 rounded-xl bg-blue-600 text-white">
                                        Login
                                    </button>
                                </Link>

                                <Link href="/signup">
                                    <button className="px-5 py-2 rounded-xl border border-blue-600 text-blue-600">
                                        Signup
                                    </button>
                                </Link>
                            </>
                        )}
                    </div>

                    {/* MOBILE MENU BUTTON */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <X size={30} /> : <Menu size={30} />}
                    </button>
                </div>

                {/* MOBILE MENU */}
                {isOpen && (
                    <div className="md:hidden pb-5">
                        <ul className="flex flex-col gap-5 bg-gray-50 p-5 rounded-2xl">

                            {links}

                            <div className="border-t pt-4">

                                {isPending ? (
                                    <p className="text-gray-400">
                                        Loading user...
                                    </p>
                                ) : user ? (
                                    <>
                                        <div className="flex items-center gap-3">
                                            <Avatar
                                                src={user?.image || ""}
                                                className="w-12 h-12"
                                            />

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
                                            onClick={handleLogout}
                                            className="w-full py-2 bg-red-500 text-white rounded-xl mt-3"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login">
                                            <button className="w-full py-2 bg-blue-600 text-white rounded-xl">
                                                Login
                                            </button>
                                        </Link>

                                        <Link href="/signup">
                                            <button className="w-full py-2 border border-blue-600 text-blue-600 rounded-xl mt-2">
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