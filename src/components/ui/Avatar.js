"use client";

import { useState } from "react";

export default function Avatar({
    src,
    alt = "avatar",
    size = "md",
    className = "",
}) {
    const [error, setError] = useState(false);

    // UPDATED SIZE MAP (FIGMA MATCH)
    const sizeClasses = {
        sm: "w-6 h-6",    // 24px
        md: "w-8 h-8",    // 32px
        lg: "w-12 h-12",  // 48px
        xl: "w-24 h-24",  // 🔥 96px (FIXED)
    };

    return (
        <div
            className={`
                ${sizeClasses[size]}
                rounded-full 
                overflow-hidden 
                bg-[#1a1a1a] 
                flex items-center justify-center 
                shrink-0
                ${className}
            `}
        >
            {!error && src ? (
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                    onError={() => setError(true)}
                />
            ) : (
                <span className="text-[10px] text-gray-400 font-medium">
                    U
                </span>
            )}
        </div>
    );
}