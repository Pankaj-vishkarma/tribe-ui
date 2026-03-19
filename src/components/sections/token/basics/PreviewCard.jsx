"use client";

import { useMemo } from "react";

export default function PreviewCard({ formData }) {

    // ✅ Safe preview URL
    const previewUrl = useMemo(() => {
        if (!formData.thumbnail) return null;
        return URL.createObjectURL(formData.thumbnail);
    }, [formData.thumbnail]);

    return (
        <div className="bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-3 sm:p-4 h-fit">

            {/* Title */}
            <p className="text-xs sm:text-sm text-gray-400 mb-2 sm:mb-3">
                Preview
            </p>

            {/* Card */}
            <div className="bg-[#111827] border border-[#1f2937] rounded-xl p-3">

                {/* Image Container */}
                <div className="w-full h-[150px] sm:h-[180px] bg-[#0B0F19] rounded-lg flex items-center justify-center overflow-hidden mb-3">

                    {previewUrl ? (
                        <img
                            src={previewUrl}
                            alt="preview"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <p className="text-[10px] sm:text-xs text-gray-500">
                            No Image
                        </p>
                    )}

                </div>

                {/* Name */}
                <p className="text-xs sm:text-sm text-white font-medium truncate">
                    {formData.name || "Untitled"}
                </p>

                {/* Project */}
                <p className="text-[10px] sm:text-xs text-gray-400 mt-1 truncate">
                    {formData.project || "No Project"}
                </p>

            </div>
        </div>
    );
}