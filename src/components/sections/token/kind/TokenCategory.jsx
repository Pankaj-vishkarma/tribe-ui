"use client";

import TokenTypeCard from "./TokenTypeCard";

export default function TokenCategory({
    title,
    description,
    items = [],
    formData,
    setFormData,
}) {
    return (
        <div className="bg-[#0B0F19] border border-[#1f2937] rounded-2xl px-4 sm:px-6 py-4 sm:py-6 mb-6 sm:mb-8">

            {/* Title */}
            <h3 className="text-[14px] sm:text-[15px] font-semibold text-white mb-1">
                {title}
            </h3>

            {/* Description */}
            <p className="text-[12px] sm:text-[13px] text-gray-400 mb-4 sm:mb-6 leading-relaxed max-w-2xl">
                {description}
            </p>

            {/* Items */}
            <div className="flex flex-wrap gap-3 sm:gap-5">
                {items.map((item) => (
                    <TokenTypeCard
                        key={item}
                        label={item}
                        active={formData.type === item}
                        onClick={() =>
                            setFormData({
                                ...formData,
                                type: item,
                                category: title,
                            })
                        }
                    />
                ))}
            </div>

        </div>
    );
}