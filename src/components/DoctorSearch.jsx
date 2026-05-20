"use client";

import { Button, Input } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoctorSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState("");

    useEffect(() => {
        const urlSearch = searchParams.get("search") || "";
        setSearch(urlSearch);
    }, [searchParams]);

    const handleSearch = () => {
        router.push(`/All-Appointments?search=${search}`);
    };

    return (
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6 mb-6">

            <Input
                type="text"
                placeholder="Search doctor by name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="max-w-xl w-96
                bg-white dark:bg-zinc-900
                text-black dark:text-white
                border border-gray-200 dark:border-zinc-700
                rounded-xl
                focus:ring-2 focus:ring-cyan-500"
            />

            <Button
                onClick={handleSearch}
                className="px-5 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl shadow-md hover:bg-cyan-700 dark:hover:bg-cyan-600 transition"
            >
                <Search size={18} />
                Search
            </Button>

        </div>
    );
};

export default DoctorSearch;