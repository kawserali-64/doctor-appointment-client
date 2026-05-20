"use client";

import { Button, Input } from "@heroui/react";
import { Search } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DoctorSearch = () => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [search, setSearch] = useState("");

    // ✅ URL থেকে value নিয়ে input sync করা
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
                className="max-w-xl w-96"
            />

            <Button
                onClick={handleSearch}
                className="px-5 py-2 bg-cyan-600 text-white rounded-xl shadow-md hover:bg-cyan-700 transition"
            >
                <Search size={18} />
                Search
            </Button>
        </div>
    );
};

export default DoctorSearch;