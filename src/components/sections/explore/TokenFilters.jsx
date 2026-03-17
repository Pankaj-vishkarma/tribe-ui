"use client";

import {
    Video,
    Image as ImageIcon,
    Music,
    Gamepad2,
    Ticket,
    Gift,
    Users,
    Award
} from "lucide-react";

const categories = [
    { name: "Video", icon: Video },
    { name: "Visual Art", icon: ImageIcon },
    { name: "Audio", icon: Music },
    { name: "Game", icon: Gamepad2 },
    { name: "Tickets", icon: Ticket },
    { name: "Voucher", icon: Gift },
    { name: "Membership", icon: Users },
    { name: "Certificate", icon: Award },
];

export default function TokenFilters() {
    return (
        <div className="mb-10">

            {/* TOP FILTERS */}
            <div className="flex items-center gap-3 mb-6">

                <div className="px-4 py-[6px] border border-white/20 rounded-full text-[12px] text-white cursor-pointer hover:border-white/40 transition">
                    All categories
                </div>

                <div className="px-4 py-[6px] border border-white/20 rounded-full text-[12px] text-white cursor-pointer hover:border-white/40 transition">
                    Mint condition
                </div>

                <div className="px-4 py-[6px] border border-white/20 rounded-full text-[12px] text-white cursor-pointer hover:border-white/40 transition">
                    For Sale
                </div>

                <div className="px-4 py-[6px] border border-white/20 rounded-full text-[12px] text-white cursor-pointer hover:border-white/40 transition">
                    Newest
                </div>

            </div>

            {/* CATEGORY ICONS */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide">

                {categories.map((cat, i) => {
                    const Icon = cat.icon;

                    return (
                        <div
                            key={i}
                            className="flex flex-col items-center justify-center w-[72px] h-[72px] border border-white/10 rounded-xl cursor-pointer hover:border-white/30 transition"
                        >

                            {/* Icon */}
                            <Icon size={22} strokeWidth={1.5} />

                            {/* Label */}
                            <span className="text-[11px] text-white mt-2 text-center leading-tight">
                                {cat.name}
                            </span>

                        </div>
                    );
                })}

            </div>

        </div>
    );
}