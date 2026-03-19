"use client";

import { useState } from "react";
import Avatar from "@/components/ui/Avatar";

export default function FollowItem({ user, isFollowing }) {
    const [follow, setFollow] = useState(isFollowing);

    return (
        <div className="flex items-center justify-between py-3 border-b border-[#1f1f1f]">

            {/* LEFT */}
            <div className="flex items-center gap-3 sm:gap-4 min-w-0">

                <Avatar
                    size="lg"
                    src={user.image}
                    className="w-10 h-10 sm:w-12 sm:h-12"
                />

                <p className="text-white text-[13px] sm:text-sm font-medium truncate">
                    {user.name}
                </p>
            </div>

            {/* RIGHT */}
            {follow ? (
                <span className="text-[12px] sm:text-sm text-gray-400 whitespace-nowrap">
                    Following
                </span>
            ) : (
                <button
                    onClick={() => setFollow(true)}
                    className="px-3 sm:px-5 py-[5px] sm:py-[6px] text-[12px] sm:text-[13px] rounded-full border border-gray-500 text-white transition hover:border-white active:scale-95 whitespace-nowrap"
                >
                    Follow
                </button>
            )}
        </div>
    );
}