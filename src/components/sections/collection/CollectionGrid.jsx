"use client";

import { useState } from "react";
import Image from "next/image";
import { Eye } from "lucide-react";

export default function CollectionCardGrid({
    activeFilter,
    activeCategory,
    sort
}) {

    const [data] = useState([
        { id: 1, title: "Landfall", views: 12, price: 12.92, category: "Video", mint: true, date: 6 },
        { id: 2, title: "Dreamscape", views: 8, price: null, category: "Visual Art", mint: false, date: 2 },
        { id: 3, title: "Soundwave", views: 22, price: 15.00, category: "Audio", mint: true, date: 5 },
        { id: 4, title: "Cyber Game", views: 5, price: null, category: "Game", mint: false, date: 1 },
        { id: 5, title: "VIP Ticket", views: 18, price: 20.00, category: "Tickets", mint: true, date: 4 },
        { id: 6, title: "Premium Pass", views: 30, price: 25.00, category: "Membership", mint: true, date: 3 },
    ]);

    let filteredData = [...data];

    // 🔥 CATEGORY FILTER
    if (activeCategory) {
        filteredData = filteredData.filter(
            (item) => item.category === activeCategory
        );
    }

    // 🔥 FILTER PILLS
    if (activeFilter === "Mint condition") {
        filteredData = filteredData.filter((item) => item.mint === true);
    }

    if (activeFilter === "For Sale") {
        filteredData = filteredData.filter((item) => item.price !== null);
    }

    // 🔥 SORT (FULL FIX)
    if (sort === "Name") {
        filteredData.sort((a, b) => a.title.localeCompare(b.title));
    }

    if (sort === "Purchase Date") {
        filteredData.sort((a, b) => b.date - a.date);
    }

    if (sort === "Content Type") {
        filteredData.sort((a, b) => a.category.localeCompare(b.category));
    }

    if (sort === "Recently Unlocked") {
        filteredData.sort((a, b) => b.views - a.views);
    }

    return (
        <div className="mt-6">

            {/* EMPTY */}
            {filteredData.length === 0 && (
                <div className="text-center text-gray-400 mt-20">
                    No items found
                </div>
            )}

            {/* GRID */}
            <div className="grid grid-cols-3 gap-8">

                {filteredData.map((item) => (
                    <div
                        key={item.id}
                        className="border border-white/20 rounded-[12px] overflow-hidden cursor-pointer group transition duration-200"
                    >

                        {/* IMAGE */}
                        <div className="relative w-full h-[160px]">

                            <Image
                                src="/explore/thumbnail.png"
                                alt={item.title}
                                fill
                                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                            />

                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                        </div>

                        {/* CONTENT */}
                        <div className="px-3 py-2">

                            <p className="text-[13px] text-white font-medium leading-tight">
                                {item.title}
                            </p>

                            <div className="flex items-center justify-between mt-[2px]">

                                <div className="flex items-center gap-[4px] text-[11px] text-[#9CA3AF]">
                                    <Eye size={12} strokeWidth={1.5} />
                                    <span>{item.views}</span>
                                </div>

                                <span className="text-[12px] text-white font-medium">
                                    {item.price ? `€ ${item.price}` : "--"}
                                </span>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}