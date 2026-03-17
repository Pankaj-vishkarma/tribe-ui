import Image from "next/image"

export default function UserCard({ user }) {
    return (
        <div className="flex flex-col items-center gap-[10px] relative">

            {/* Close Icon (Top Right) */}
            <span className="absolute -top-2 right-2 text-gray-500 text-xs cursor-pointer">
                ×
            </span>

            {/* Avatar */}
            <div className="relative w-[72px] h-[72px]">
                <Image
                    src={user.image}
                    alt={user.name}
                    fill
                    className="rounded-full object-cover"
                />
            </div>

            {/* Name */}
            <p className="text-[13px] text-gray-300">
                {user.name}
            </p>

            {/* Follow Button */}
            <button className="text-[12px] text-white border border-gray-600 px-[14px] py-[4px] rounded-full hover:border-white transition">
                Follow
            </button>

        </div>
    )
}