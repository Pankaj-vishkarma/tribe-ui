"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

// ✅ Dummy Data
const tokens = [
    { id: 1, title: "Landfall", views: 12, price: "€ 12.92", type: "Video" },
    { id: 2, title: "Art Piece", views: 20, price: "€ 8.50", type: "Visual Art" },
    { id: 3, title: "Music Track", views: 5, price: "€ 5.00", type: "Audio" },
    { id: 4, title: "Game Asset", views: 30, price: "€ 15.00", type: "Game" },
    { id: 5, title: "Ticket Pass", views: 18, price: "€ 22.00", type: "Tickets" },
    { id: 6, title: "Membership Card", views: 10, price: "€ 9.99", type: "Membership" },
];

export default function CardGrid({
    title,
    selectedCategory = "all",
    searchQuery = "",
}) {

    const filteredTokens = tokens.filter((item) => {
        const matchCategory =
            selectedCategory === "all" || item.type === selectedCategory;

        const matchSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase());

        return matchCategory && matchSearch;
    });

    return (
        <div className="mb-12 sm:mb-14">

            {/* Header */}
            {title && (
                <div className="flex items-center justify-between mb-4 sm:mb-6">
                    <h2 className="text-[14px] sm:text-[16px] font-medium text-white">
                        {title}
                    </h2>

                    <button className="text-[12px] sm:text-[13px] text-[#3B82F6] hover:underline">
                        See All
                    </button>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">

                {/* EMPTY STATE */}
                {filteredTokens.length === 0 && (
                    <div className="col-span-full text-center py-16 sm:py-20 text-gray-400 text-sm">
                        No results found
                    </div>
                )}

                {/* Cards */}
                {filteredTokens.map((item) => (
                    <div
                        key={item.id}
                        className="border border-white/10 rounded-xl p-2.5 sm:p-2 w-full cursor-pointer group transition hover:border-white/20"
                    >

                        {/* Image */}
                        <div className="relative w-full h-[170px] sm:h-[190px] lg:h-[210px] rounded-lg overflow-hidden">

                            <Image
                                src="/explore/thumbnail.png"
                                alt="thumbnail"
                                fill
                                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                        </div>

                        {/* Content */}
                        <div className="mt-2.5 sm:mt-3 px-[2px]">

                            <p className="text-[12px] sm:text-[13px] text-white font-medium leading-tight line-clamp-1">
                                {item.title}
                            </p>

                            <div className="flex items-center justify-between mt-[4px]">

                                <div className="flex items-center gap-[4px] text-[10px] sm:text-[11px] text-[#9CA3AF]">
                                    <Eye size={12} strokeWidth={1.5} />
                                    <span>{item.views}</span>
                                </div>

                                <span className="text-[11px] sm:text-[12px] text-white font-medium tracking-wide">
                                    {item.price}
                                </span>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}