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
        <div className="mb-12">

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-[16px] text-white font-medium">
                    Artists and Creators
                </h2>

                <button className="text-[13px] text-[#3B82F6] hover:underline">
                    See All
                </button>
            </div>

            {/* Container (IMPORTANT FIX) */}
            <div className="border border-white/10 rounded-xl px-5 py-4">

                {/* Row */}
                <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">

                    {users.map((user, i) => (
                        <div
                            key={i}
                            className="flex flex-col items-center min-w-[72px] cursor-pointer"
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
                            <p className="text-[12px] text-white mt-2 leading-tight text-center whitespace-nowrap">
                                {user.name}
                            </p>

                            {/* Follow Button */}
                            <button className="mt-[6px] text-[11px] text-white border border-white/20 px-3 py-[3px] rounded-full hover:border-white/40 transition">
                                Follow
                            </button>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    );
}