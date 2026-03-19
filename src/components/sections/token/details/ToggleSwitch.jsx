"use client";

export default function ToggleSwitch({ label, value, onChange }) {
    return (
        <div className="flex items-center justify-between bg-[#0B0F19] border border-[#1f2937] rounded-xl px-4 py-3">

            {/* Label */}
            <span className="text-sm text-white">{label}</span>

            {/* Toggle */}
            <button
                onClick={() => onChange(!value)}
                className={`relative w-11 h-6 rounded-full transition-colors duration-300
          ${value ? "bg-blue-500" : "bg-gray-600"}
        `}
            >
                {/* Circle */}
                <div
                    className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-transform duration-300
            ${value ? "translate-x-5" : ""}
          `}
                />
            </button>
        </div>
    );
}