"use client";

import Image from "next/image";
import { Eye } from "lucide-react";

export default function CardGrid({ title }) {
    return (
        <div className="mb-14">

            {/* Header */}
            {title && (
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-[16px] font-medium text-white">
                        {title}
                    </h2>

                    <button className="text-[13px] text-[#3B82F6] hover:underline">
                        See All
                    </button>
                </div>
            )}

            {/* Grid */}
            <div className="grid grid-cols-3 gap-6">

                {Array(6).fill(0).map((_, i) => (
                    <div
                        key={i}
                        className="border border-white/10 rounded-xl p-2 cursor-pointer group transition"
                    >

                        {/* Image */}
                        <div className="relative w-full h-[210px] rounded-lg overflow-hidden">

                            <Image
                                src="/explore/thumbnail.png"
                                alt="thumbnail"
                                fill
                                className="object-cover transition duration-300 group-hover:scale-[1.03]"
                            />

                            {/* subtle gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

                        </div>

                        {/* Content */}
                        <div className="mt-3 px-[2px]">

                            {/* Title */}
                            <p className="text-[13px] text-white font-medium leading-tight">
                                Landfall
                            </p>

                            {/* Bottom Row */}
                            <div className="flex items-center justify-between mt-[4px]">

                                {/* Views */}
                                <div className="flex items-center gap-[4px] text-[11px] text-[#9CA3AF]">
                                    <Eye size={12} strokeWidth={1.5} />
                                    <span>12</span>
                                </div>

                                {/* Price */}
                                <span className="text-[12px] text-white font-medium tracking-wide">
                                    € 12.92
                                </span>

                            </div>

                        </div>

                    </div>
                ))}

            </div>

        </div>
    );
}