"use client";

import Image from "next/image";

const users = [
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
    { name: "JZero", image: "/home/pp.png" },
    { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
];

export default function ArtistRow() {
    return (
        <div className="mb-10 sm:mb-12">

            {/* Header */}
            <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h2 className="text-[14px] sm:text-[16px] text-white font-medium">
                    Artists and Creators
                </h2>

                <button className="text-[12px] sm:text-[13px] text-[#3B82F6] hover:underline">
                    See All
                </button>
            </div>

            {/* Container */}
            <div className="border border-white/10 rounded-xl px-3 sm:px-5 py-3 sm:py-4">

                {/* Row */}
                <div className="flex items-center gap-4 sm:gap-6 lg:gap-8 overflow-x-auto scrollbar-hide scroll-smooth">

                    {users.map((user, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center min-w-[64px] sm:min-w-[72px] flex-shrink-0 cursor-pointer active:scale-95 transition"
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
                            <p className="text-[11px] sm:text-[12px] text-white mt-2 leading-tight text-center whitespace-nowrap">
                                {user.name}
                            </p>

                            {/* Follow Button */}
                            <button className="mt-[6px] text-[10px] sm:text-[11px] text-white border border-white/20 px-2 sm:px-3 py-[3px] rounded-full hover:border-white/40 transition whitespace-nowrap">
                                Follow
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}