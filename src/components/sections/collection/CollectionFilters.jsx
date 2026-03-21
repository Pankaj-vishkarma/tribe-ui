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
        <div className="mb-8 sm:mb-10">

            {/* TOP SECTION */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">

                {/* FILTER PILLS */}
                <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto scrollbar-hide">

                    {["All categories", "Mint condition", "For Sale"].map((item) => (
                        <button
                            key={item}
                            onClick={() => {
                                setActiveFilter(item);

                                if (item === "All categories") {
                                    setActiveCategory(null);
                                }
                            }}
                            className={`flex-shrink-0 px-3 sm:px-4 py-[5px] sm:py-[6px] rounded-full text-[11px] sm:text-[12px] transition border whitespace-nowrap
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
                <div ref={dropdownRef} className="relative w-fit">

                    <button
                        onClick={() => setOpenDropdown((prev) => !prev)}
                        className="flex items-center gap-2 px-3 py-[5px] sm:py-[6px] border border-white/20 rounded-md text-[11px] sm:text-[12px] text-white hover:border-white/40 transition"
                    >
                        {sort}
                        <ChevronDown size={14} />
                    </button>

                    {openDropdown && (
                        <div className="absolute right-0 mt-2 w-[150px] sm:w-[170px] bg-[#1a1a1a] border border-white/10 rounded-md shadow-lg z-50">

                            {sortOptions.map((option, i) => (
                                <div
                                    key={i}
                                    onClick={() => {
                                        setSort(option);
                                        setOpenDropdown(false);
                                    }}
                                    className="px-3 py-2 text-[11px] sm:text-[12px] text-white hover:bg-white/10 cursor-pointer"
                                >
                                    {option}
                                </div>
                            ))}

                        </div>
                    )}

                </div>

            </div>

            {/* CATEGORY */}
            <div className="flex flex-wrap sm:flex-nowrap gap-3 sm:gap-4 overflow-hidden sm:overflow-x-auto scrollbar-hide pb-2 scroll-smooth w-full">

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
                            className={`flex flex-col items-center justify-center w-[23%] sm:w-auto sm:min-w-[72px] h-[64px] sm:h-[72px] border rounded-[12px] cursor-pointer transition sm:flex-shrink-0
                                ${activeCategory === cat.name
                                    ? "border-white bg-white/10"
                                    : "border-white/20 hover:border-white/40"
                                }`}
                        >
                            <Icon size={18} className="sm:size-[20px] text-white" strokeWidth={1.5} />

                            <span className="text-[10px] sm:text-[11px] text-white mt-[4px] sm:mt-[6px] text-center px-1">
                                {cat.name}
                            </span>
                        </div>
                    );
                })}

            </div>

            {/* DIVIDER */}
            <div className="mt-4 sm:mt-5 border-b border-white/10"></div>

        </div>
    );
}