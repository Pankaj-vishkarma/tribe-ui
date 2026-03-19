"use client";

import {
    Video,
    Image as ImageIcon,
    Music,
    Gamepad2,
    Ticket,
    Gift,
    Users,
    Award,
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

export default function TokenFilters({
    selectedCategory,
    setSelectedCategory,
}) {
    return (
        <div className="mb-8 sm:mb-10">

            {/* TOP FILTERS */}
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 overflow-x-auto scrollbar-hide scroll-smooth">

                <div
                    onClick={() => setSelectedCategory("all")}
                    className={`flex-shrink-0 px-3 sm:px-4 py-[5px] sm:py-[6px] border rounded-full text-[11px] sm:text-[12px] cursor-pointer transition whitespace-nowrap active:scale-95
            ${selectedCategory === "all"
                            ? "border-white text-white"
                            : "border-white/20 text-white hover:border-white/40"
                        }
          `}
                >
                    All categories
                </div>

                <div className="flex-shrink-0 px-3 sm:px-4 py-[5px] sm:py-[6px] border border-white/20 rounded-full text-[11px] sm:text-[12px] text-white cursor-pointer hover:border-white/40 transition whitespace-nowrap active:scale-95">
                    Mint condition
                </div>

                <div className="flex-shrink-0 px-3 sm:px-4 py-[5px] sm:py-[6px] border border-white/20 rounded-full text-[11px] sm:text-[12px] text-white cursor-pointer hover:border-white/40 transition whitespace-nowrap active:scale-95">
                    For Sale
                </div>

                <div className="flex-shrink-0 px-3 sm:px-4 py-[5px] sm:py-[6px] border border-white/20 rounded-full text-[11px] sm:text-[12px] text-white cursor-pointer hover:border-white/40 transition whitespace-nowrap active:scale-95">
                    Newest
                </div>

            </div>

            {/* CATEGORY ICONS */}
            <div className="flex gap-3 sm:gap-4 overflow-x-auto scrollbar-hide scroll-smooth">

                {categories.map((cat, i) => {
                    const Icon = cat.icon;

                    const isActive = selectedCategory === cat.name;

                    return (
                        <div
                            key={i}
                            onClick={() => setSelectedCategory(cat.name)}
                            className={`flex flex-col items-center justify-center min-w-[64px] sm:min-w-[72px] h-[64px] sm:h-[72px] border rounded-xl cursor-pointer transition flex-shrink-0 active:scale-95
                ${isActive
                                    ? "border-white bg-white/10"
                                    : "border-white/10 hover:border-white/30"
                                }
              `}
                        >
                            {/* Icon */}
                            <Icon
                                size={18}
                                className="sm:size-[22px]"
                                strokeWidth={1.5}
                            />

                            {/* Label */}
                            <span className="text-[10px] sm:text-[11px] text-white mt-1 sm:mt-2 text-center leading-tight px-1">
                                {cat.name}
                            </span>
                        </div>
                    );
                })}

            </div>

        </div>
    );
}