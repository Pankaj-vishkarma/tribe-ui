"use client";

export default function Button({
    children,
    className = "",
    variant = "primary",
    onClick,
    type = "button",
}) {
    const baseStyle =
        "inline-flex items-center justify-center rounded-full text-[13px] font-medium transition-all duration-200 px-5 py-[6px]";

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
            className={`${baseStyle} ${variants[variant]} ${className}`}
        >
            {children}
        </button>
    );
}