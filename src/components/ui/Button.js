"use client";

export default function Button({
    children,
    className = "",
    variant = "primary",
    size = "md",
    onClick,
    type = "button",
    disabled = false,
}) {

    const baseStyle =
        "inline-flex items-center justify-center rounded-full font-medium transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed";

    // SIZE SYSTEM
    const sizes = {
        sm: "text-[11px] px-3 py-[4px]",
        md: "text-[13px] px-4 sm:px-5 py-[5px] sm:py-[6px]",
        lg: "text-[14px] px-6 py-[8px]",
    };

    // VARIANTS
    const variants = {
        primary:
            "bg-pink-500 text-white hover:bg-pink-600",

        outline:
            "border border-[#2a2a2a] text-white hover:border-white",

        danger:
            "border border-red-500 text-red-400 hover:bg-red-500 hover:text-white",

        ghost:
            "text-gray-400 hover:text-white px-2 py-1",
    };

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyle} ${sizes[size]} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}