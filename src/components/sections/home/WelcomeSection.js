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
        <div className="flex flex-col items-center justify-center text-center mt-12 sm:mt-16 lg:mt-[80px] px-2">

            {/* Heading */}
            <h2 className="text-[28px] sm:text-[34px] lg:text-[40px] font-semibold text-white mb-3 sm:mb-4 tracking-tight">
                Welcome
            </h2>

            {/* Description */}
            <p className="text-gray-400 text-[13px] sm:text-[14px] leading-[20px] sm:leading-[22px] max-w-[90%] sm:max-w-[520px] mb-8 sm:mb-10">
                Check out these popular Tribes and follow them to get updates and be among the first to know about investment and collaboration opportunities.
            </p>

            {/* Users Row */}
            <div className="flex gap-4 sm:gap-6 lg:gap-[28px] mb-10 sm:mb-12 flex-wrap justify-center">
                {users.map((user, index) => (
                    <UserCard key={index} user={user} />
                ))}
            </div>

            {/* CTA Button */}
            <button
                onClick={() => router.push("/explore")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-medium shadow-[0_0_25px_rgba(255,0,128,0.5)] hover:scale-105 active:scale-95 transition-all duration-200"
            >
                Explore Tribes
            </button>

        </div>
    );
}