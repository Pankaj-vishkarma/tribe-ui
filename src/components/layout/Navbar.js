"use client";

import { Bell, Plus } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {

    const router = useRouter();

    return (
        <div className="w-full h-[53px] flex items-center justify-end px-5 border-b bg-[#000000] text-white">

            <div className="flex items-center gap-4">

                <button className="flex items-center gap-2 border px-4 py-1 rounded-lg hover:bg-gray-100">
                    <Plus size={16} />
                    Create
                </button>

                <div className="relative">
                    <Bell />
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                        2
                    </span>
                </div>

                <button
                    onClick={() => router.push("/signup")}
                    className="border px-4 py-1 rounded-lg hover:bg-gray-100"
                >
                    Sign in
                </button>

            </div>
        </div>
    );
}