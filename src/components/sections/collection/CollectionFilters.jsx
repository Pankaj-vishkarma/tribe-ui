"use client";

import { useRef, useEffect, useState } from "react";
import {
    Video,
    Image as ImageIcon,
    Music,
    Gamepad2,
    Ticket,
    Gift,
    Users,
    Award,
    ChevronDown
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

const sortOptions = [
    "Purchase Date",
    "Content Type",
    "Recently Unlocked",
    "Name",
];

export default function CollectionFilters({
    activeFilter,
    setActiveFilter,
    activeCategory,
    setActiveCategory,
    sort,
    setSort
}) {

    const [openDropdown, setOpenDropdown] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpenDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="mb-10">

            <div className="flex items-center justify-between mb-4">

                {/* FILTER PILLS */}
                <div className="flex items-center gap-3">

                    {["All categories", "Mint condition", "For Sale"].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setActiveFilter(item);

                                // 🔥 RESET CATEGORY
                                if (item === "All categories") {
                                    setActiveCategory(null);
                                }
                            }}
                            className={`px-4 py-[6px] rounded-full text-[12px] transition border
                                ${activeFilter === item
                                    ? "border-white text-white bg-white/10"
                                    : "border-white/20 text-white hover:border-white/40"
                                }`}
                        >
                            {item}
                        </button>
                    ))}

                </div>

                {/* SORT */}
                <div ref={dropdownRef} className="relative">

                    <button
                        onClick={() => setOpenDropdown((prev) => !prev)}
                        className="flex items-center gap-2 px-3 py-[6px] border border-white/20 rounded-md text-[12px] text-white hover:border-white/40 transition"
                    >
                        {sort}
                        <ChevronDown size={14} />
                    </button>

                    {openDropdown && (
                        <div className="absolute right-0 mt-2 w-[170px] bg-[#1a1a1a] border border-white/10 rounded-md shadow-lg z-50">

                            {sortOptions.map((option, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        setSort(option);
                                        setOpenDropdown(false);
                                    }}
                                    className="px-3 py-2 text-[12px] text-white hover:bg-white/10 cursor-pointer"
                                >
                                    {option}
                                </div>
                            ))}

                        </div>
                    )}

                </div>

            </div>

            {/* CATEGORY */}
            <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2 scroll-smooth">

                {categories.map((cat, i) => {
                    const Icon = cat.icon;

                    return (
                        <div
                            key={i}
                            onClick={() =>
                                setActiveCategory(prev =>
                                    prev === cat.name ? null : cat.name
                                )
                            }
                            className={`flex flex-col items-center justify-center min-w-[72px] h-[72px] border rounded-[12px] cursor-pointer transition
                                ${activeCategory === cat.name
                                    ? "border-white bg-white/10"
                                    : "border-white/20 hover:border-white/40"
                                }`}
                        >
                            <Icon size={20} strokeWidth={1.5} className="text-white" />

                            <span className="text-[11px] text-white mt-[6px] text-center">
                                {cat.name}
                            </span>
                        </div>
                    );
                })}

            </div>

            <div className="mt-5 border-b border-white/10"></div>

        </div>
    );
}