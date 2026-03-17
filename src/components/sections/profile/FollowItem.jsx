"use client";

import { useState } from "react";
import Avatar from "@/components/ui/Avatar";

export default function FollowItem({ user, isFollowing }) {
    const [follow, setFollow] = useState(isFollowing);

    return (
        <div className="flex items-center justify-between py-3 border-b border-[#1f1f1f]">

            {/* LEFT */}
            <div className="flex items-center gap-4">
                <Avatar size="lg" src={user.image} />

                <p className="text-white text-sm font-medium">
                    {user.name}
                </p>
            </div>

            {/* RIGHT */}
            {follow ? (
                <span className="text-sm text-gray-400">
                    Following
                </span>
            ) : (
                <button
                    onClick={() => setFollow(true)}
                    className="px-5 py-[6px] text-[13px] rounded-full border border-gray-500 text-white transition hover:border-white"
                >
                    Follow
                </button>
            )}
        </div>
    );
}