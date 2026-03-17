"use client";

import { useRouter } from "next/navigation";
import UserCard from "./UserCard";
import Button from "@/components/ui/Button";

const users = [
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/pp.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
];

export default function WelcomeSection() {

    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center text-center mt-[80px]">

            {/* Heading */}
            <h2 className="text-[40px] font-semibold text-white mb-4 tracking-tight">
                Welcome
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-[14px] leading-[22px] max-w-[520px] mb-10">
                Check out these popular Tribes and follow them to get updates and be among the first to know about investment and collaboration opportunities.
            </p>

            {/* Users Row */}
            <div className="flex gap-[28px] mb-12 flex-wrap justify-center">
                {users.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
            </div>

            {/* CTA Button */}
            <button
                onClick={() => router.push("/explore")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-[32px] py-[12px] rounded-full font-medium shadow-[0_0_25px_rgba(255,0,128,0.5)] hover:scale-105 transition-all duration-200"
            >
                Explore Tribes
            </button>

        </div>
    );
}