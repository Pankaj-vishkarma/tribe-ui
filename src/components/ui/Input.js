"use client";

export default function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    className = "",
}) {
    return (
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            className={`
                w-full
                bg-[#0f0f0f]
                border border-[#2a2a2a]
                text-white
                text-[13px]
                px-4 py-[10px]
                rounded-lg
                outline-none
                placeholder-gray-500
                focus:border-white
                transition-all duration-200
                ${className}
            `}
        />
    );
}