"use client";

import Image from "next/image";
import { ChevronDown } from "lucide-react";

const users = [
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
];

export default function CreatorGrid() {
    return (
        <div>

            {/* Filters */}
            <div className="flex items-center gap-2 sm:gap-3 mb-6 sm:mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">

                <span className="text-[12px] sm:text-[13px] text-white font-medium flex-shrink-0">
                    Show
                </span>

                <div className="flex items-center gap-2 px-3 sm:px-4 py-[5px] sm:py-[6px] border border-white/20 rounded-full text-[11px] sm:text-[12px] text-white cursor-pointer hover:border-white/40 transition flex-shrink-0">
                    All categories
                    <ChevronDown size={14} />
                </div>

                <span className="text-[11px] sm:text-[12px] text-[#9CA3AF] flex-shrink-0">
                    projects sorted by
                </span>

                <div className="flex items-center gap-2 px-3 sm:px-4 py-[5px] sm:py-[6px] border border-white/20 rounded-full text-[11px] sm:text-[12px] text-white cursor-pointer hover:border-white/40 transition flex-shrink-0">
                    Newest
                    <ChevronDown size={14} />
                </div>

            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-4 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-10 mb-10 sm:mb-12">

                {users.map((user, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center cursor-pointer"
                    >

                        {/* Avatar */}
                        <div className="relative w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px]">
                            <Image
                                src={user.image}
                                alt={user.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <p className="mt-2 text-[11px] sm:text-[12px] text-white leading-tight text-center whitespace-nowrap">
                            {user.name}
                        </p>

                        {/* Follow */}
                        <button className="mt-[6px] text-[10px] sm:text-[11px] text-white border border-white/20 px-2 sm:px-3 py-[3px] rounded-full hover:border-white/40 transition">
                            Follow
                        </button>

                    </div>
                ))}

            </div>

            {/* In the Spotlight */}
            <div className="mb-8 sm:mb-10">

                <h3 className="text-[13px] sm:text-[14px] text-white font-medium mb-4 sm:mb-6">
                    In the Spotlight
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">

                    {users.slice(0, 4).map((user, i) => (
                        <div key={i} className="flex flex-col items-center">

                            <div className="relative w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px]">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <p className="mt-2 text-[11px] sm:text-[12px] text-white">
                                {user.name}
                            </p>

                            <button className="mt-[6px] text-[10px] sm:text-[11px] border border-white/20 px-2 sm:px-3 py-[3px] rounded-full">
                                Follow
                            </button>

                        </div>
                    ))}

                </div>

            </div>

            {/* Recommended */}
            <div>

                <h3 className="text-[13px] sm:text-[14px] text-white font-medium mb-4 sm:mb-6">
                    Recommended for You
                </h3>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8">

                    {users.slice(0, 4).map((user, i) => (
                        <div key={i} className="flex flex-col items-center">

                            <div className="relative w-[48px] h-[48px] sm:w-[52px] sm:h-[52px] lg:w-[56px] lg:h-[56px]">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <p className="mt-2 text-[11px] sm:text-[12px] text-white">
                                {user.name}
                            </p>

                            <button className="mt-[6px] text-[10px] sm:text-[11px] border border-white/20 px-2 sm:px-3 py-[3px] rounded-full">
                                Follow
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}