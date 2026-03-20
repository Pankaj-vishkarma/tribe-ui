import Image from "next/image";

export default function UserCard({ user }) {
    return (
        <div className="flex flex-col items-center gap-2 sm:gap-[10px] relative">

            {/* Close Icon */}
            <span className="absolute -top-2 right-1 sm:right-2 text-gray-500 text-[10px] sm:text-xs cursor-pointer hover:text-white transition">
                ×
            </span>

            {/* Avatar */}
            <div className="relative w-[56px] h-[56px] sm:w-[64px] sm:h-[64px] lg:w-[72px] lg:h-[72px]">
                <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>

            {/* Name */}
            <p className="text-[12px] sm:text-[13px] text-gray-300 text-center whitespace-nowrap">
                {user.name}
            </p>

            {/* 🔥 Follow Button (FUNCTION ADDED ONLY) */}
            <button
                onClick={() => {
                    localStorage.setItem("hasFollowing", "true");
                    window.location.reload();
                }}
                className="text-[11px] sm:text-[12px] text-white border border-gray-600 px-3 sm:px-[14px] py-[3px] sm:py-[4px] rounded-full hover:border-white transition active:scale-95"
            >
                Follow
            </button>

        </div>
    );
}