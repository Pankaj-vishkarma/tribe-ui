"use client";

import {
    Video,
    Image,
    Music,
    Gamepad2,
    FileText,
    Layers,
    Ticket,
    Gift,
    BadgeCheck,
    ScrollText,
} from "lucide-react";

const iconMap = {
    Video: Video,
    "Visual Art": Image,
    Audio: Music,
    Game: Gamepad2,
    Writing: FileText,
    Other: Layers,

    Tickets: Ticket,
    Voucher: Gift,
    Membership: BadgeCheck,
    Certificate: ScrollText,
};

export default function TokenTypeCard({ label, active, onClick }) {
    const Icon = iconMap[label];

    return (
        <div
            onClick={onClick}
            className={`group w-[90px] h-[90px] sm:w-[100px] sm:h-[100px] lg:w-[110px] lg:h-[110px] 
      flex flex-col items-center justify-center gap-2
      rounded-xl border cursor-pointer
      transition-all duration-300 ease-in-out
      
      ${active
                    ? "border-white bg-[#111827] shadow-[0_0_0_1px_rgba(255,255,255,0.1)]"
                    : "border-[#1f2937] bg-[#0B0F19] hover:border-gray-400 hover:bg-[#111827]"
                }

      hover:scale-[1.03] active:scale-[0.97]
      `}
        >
            {/* Icon */}
            <div
                className={`w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 rounded-md flex items-center justify-center
        transition-all duration-300
        
        ${active
                        ? "bg-white text-black scale-110"
                        : "bg-[#1f2937] text-gray-400 group-hover:scale-105"
                    }
        `}
            >
                {Icon && <Icon size={16} className="sm:size-[18px]" strokeWidth={2} />}
            </div>

            {/* Label */}
            <p
                className={`text-[10px] sm:text-xs text-center transition-colors duration-200 px-1 leading-tight
        ${active ? "text-white" : "text-gray-300"}
        `}
            >
                {label}
            </p>
        </div>
    );
}