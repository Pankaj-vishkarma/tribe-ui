"use client";

export default function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
    size = "md",
    disabled = false,
    error = false,
}) {

    const sizes = {
        sm: "text-[12px] px-3 py-[8px]",
        md: "text-[13px] px-3 sm:px-4 py-[9px] sm:py-[10px]",
        lg: "text-[14px] px-5 py-[12px]",
    };

    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
            className={`
                w-full
                bg-[#0f0f0f]
                border
                ${error ? "border-red-500" : "border-[#2a2a2a]"}
                text-white
                rounded-lg
                outline-none
                placeholder-gray-500
                focus:border-white
                focus:ring-1 focus:ring-white/20
                transition-all duration-200
                disabled:opacity-50 disabled:cursor-not-allowed
                ${sizes[size]}
                ${className}
            `}
        />
    );
}