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

            {/* Filters (FIXED) */}
            <div className="flex items-center gap-3 mb-8">

                <span className="text-[13px] text-white font-medium">
                    Show
                </span>

                {/* Category */}
                <div className="flex items-center gap-2 px-4 py-[6px] border border-white/20 rounded-full text-[12px] text-white cursor-pointer hover:border-white/40 transition">
                    All categories
                    <ChevronDown size={14} />
                </div>

                {/* Text */}
                <span className="text-[12px] text-[#9CA3AF]">
                    projects sorted by
                </span>

                {/* Sort */}
                <div className="flex items-center gap-2 px-4 py-[6px] border border-white/20 rounded-full text-[12px] text-white cursor-pointer hover:border-white/40 transition">
                    Newest
                    <ChevronDown size={14} />
                </div>

            </div>

            {/* MAIN GRID */}
            <div className="grid grid-cols-5 gap-x-8 gap-y-10 mb-12">

                {users.map((user, i) => (
                    <div
                        key={i}
                        className="flex flex-col items-center cursor-pointer"
                    >

                        {/* Avatar */}
                        <div className="relative w-[56px] h-[56px]">
                            <Image
                                src={user.image}
                                alt={user.name}
                                fill
                                className="rounded-full object-cover"
                            />
                        </div>

                        {/* Name */}
                        <p className="mt-2 text-[12px] text-white leading-tight text-center whitespace-nowrap">
                            {user.name}
                        </p>

                        {/* Follow */}
                        <button className="mt-[6px] text-[11px] text-white border border-white/20 px-3 py-[3px] rounded-full hover:border-white/40 transition">
                            Follow
                        </button>

                    </div>
                ))}

            </div>

            {/* In the Spotlight */}
            <div className="mb-10">

                <h3 className="text-[14px] text-white font-medium mb-6">
                    In the Spotlight
                </h3>

                <div className="grid grid-cols-4 gap-8">

                    {users.slice(0, 4).map((user, i) => (
                        <div key={i} className="flex flex-col items-center">

                            <div className="relative w-[56px] h-[56px]">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <p className="mt-2 text-[12px] text-white">
                                {user.name}
                            </p>

                            <button className="mt-[6px] text-[11px] border border-white/20 px-3 py-[3px] rounded-full">
                                Follow
                            </button>

                        </div>
                    ))}

                </div>

            </div>

            {/* Recommended */}
            <div>

                <h3 className="text-[14px] text-white font-medium mb-6">
                    Recommended for You
                </h3>

                <div className="grid grid-cols-4 gap-8">

                    {users.slice(0, 4).map((user, i) => (
                        <div key={i} className="flex flex-col items-center">

                            <div className="relative w-[56px] h-[56px]">
                                <Image
                                    src={user.image}
                                    alt={user.name}
                                    fill
                                    className="rounded-full object-cover"
                                />
                            </div>

                            <p className="mt-2 text-[12px] text-white">
                                {user.name}
                            </p>

                            <button className="mt-[6px] text-[11px] border border-white/20 px-3 py-[3px] rounded-full">
                                Follow
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}