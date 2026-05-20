"use client";

import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const NavBarPage = () => {
    const { data: session, isPending } = authClient.useSession();
    const user = session?.user;

    const pathname = usePathname();

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

    const closeMenu = () => setIsOpen(false);

    const navLinkClass = (path) =>
        `transition font-medium ${
            pathname === path
                ? "text-cyan-600 border-b-2 border-cyan-500 pb-1"
                : "hover:text-cyan-600 dark:hover:text-cyan-400"
        }`;

    const links = (
        <>
            <li>
                <Link
                    href="/"
                    className={navLinkClass("/")}
                    onClick={closeMenu} 
                >
                    Home
                </Link>
            </li>

            <li>
                <Link
                    href="/All-Appointments"
                    className={navLinkClass("/All-Appointments")}
                    onClick={closeMenu}
                >
                    All Appointments
                </Link>
            </li>

            <li>
                <Link
                    href="/dashboard"
                    className={navLinkClass("/dashboard")}
                    onClick={closeMenu} 
                >
                    Dashboard
                </Link>
            </li>
        </>
    );

    return (
        <nav className="w-full bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-gray-200 dark:border-zinc-800 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="flex items-center justify-between h-16 sm:h-20">

                    <Link
                        href="/"
                        className="flex items-center gap-2 sm:gap-3 min-w-fit"
                    >
                        <Image
                            src="/doctor.svg"
                            alt="logo"
                            width={50}
                            height={50}
                            className="w-10 h-10 sm:w-[50px] sm:h-[50px]"
                        />

                        <h1 className="text-base sm:text-xl font-black text-gray-800 dark:text-white whitespace-nowrap">
                            Doctor
                            <span className="text-cyan-600"> Appointment</span>
                        </h1>
                    </Link>

                    <ul className="hidden md:flex items-center gap-6 lg:gap-8 font-medium text-gray-700 dark:text-gray-200">
                        {links}
                    </ul>

                    <div className="hidden md:flex items-center gap-3 lg:gap-4">

                        <ThemeToggle />

                        {isPending ? (
                            <div className="flex items-center gap-2">
                                <div className="w-9 h-9 rounded-full bg-gray-200 dark:bg-zinc-700 animate-pulse" />
                                <div className="w-16 h-6 bg-gray-200 dark:bg-zinc-700 animate-pulse rounded" />
                            </div>
                        ) : user ? (
                            <>
                                <div className="flex items-center gap-3">

                                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-500/30">
                                        <Image
                                            src={user?.image || "/user.png"}
                                            alt="user"
                                            width={40}
                                            height={40}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    <span className="text-sm font-medium">
                                        {user?.name}
                                    </span>
                                </div>

                                <button
                                    onClick={handleLogout}
                                    disabled={logoutLoading}
                                    className="px-4 py-2 rounded-lg bg-red-500 text-white"
                                >
                                    {logoutLoading ? "Logging out..." : "Logout"}
                                </button>
                            </>
                        ) : (
                            <div className="flex items-center gap-3">

                                <Link href="/login">
                                    <button className="px-4 py-2 bg-blue-600 text-white rounded-lg">
                                        Login
                                    </button>
                                </Link>

                                <Link href="/signup">
                                    <button className="px-4 py-2 border border-cyan-500 text-cyan-600 rounded-lg">
                                        Sign Up
                                    </button>
                                </Link>

                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {isOpen && (
                    <div className="md:hidden mt-3 pb-4">

                        <div className="flex flex-col gap-4 p-4 bg-gray-50 dark:bg-zinc-900 rounded-2xl">

                            <div className="flex justify-end">
                                <ThemeToggle />
                            </div>
                            <ul className="flex flex-col gap-4">
                                {links}
                            </ul>

                            <div className="border-t pt-4">

                                {user ? (
                                    <>
                                        <div className="flex items-center gap-3">

                                            <Image
                                                src={user?.image || "/user.png"}
                                                width={42}
                                                height={42}
                                                alt="user"
                                                className="rounded-full"
                                            />

                                            <span>{user?.name}</span>
                                        </div>

                                        <button
                                            onClick={handleLogout}
                                            className="w-full mt-3 py-2 bg-red-500 text-white rounded-lg"
                                        >
                                            Logout
                                        </button>
                                    </>
                                ) : (
                                    <div className="flex flex-col gap-3">

                                        <Link href="/login" onClick={closeMenu}>
                                            <button className="w-full py-2 bg-blue-600 text-white rounded-lg">
                                                Login
                                            </button>
                                        </Link>

                                        <Link href="/signup" onClick={closeMenu}>
                                            <button className="w-full py-2 border border-cyan-500 text-cyan-600 rounded-lg">
                                                Sign Up
                                            </button>
                                        </Link>

                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBarPage;