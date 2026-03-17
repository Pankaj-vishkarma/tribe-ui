"use client";

import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";
import { useRouter } from "next/navigation";

export default function ProfileHeader({
    isOwner,
    isFollowing,
    setIsFollowing,
}) {
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        router.push("/signup");
    };

    return (
        <div className="flex gap-10 items-start">

            {/* Avatar */}
            <Avatar size="xl" src="/home/pp.png" />

            <div className="flex-1">

                {/* Name */}
                <h1 className="text-[32px] font-semibold text-white leading-tight">
                    Armin Luschin
                </h1>

                {/* Role */}
                <p className="text-gray-500 text-xs mt-1 tracking-[1px] uppercase">
                    Founder
                </p>

                {/* Buttons */}
                <div className="flex gap-3 mt-5">

                    {isOwner ? (
                        <>
                            <Button
                                variant="outline"
                                onClick={() => router.push("/profile/edit")}
                                className="px-5 py-[6px] text-[13px]"
                            >
                                Edit Info
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => router.push("/settings")}
                                className="px-5 py-[6px] text-[13px]"
                            >
                                Settings
                            </Button>

                            <Button
                                variant="danger"
                                onClick={handleLogout}
                                className="px-5 py-[6px] text-[13px]"
                            >
                                Log out
                            </Button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsFollowing(!isFollowing)}
                            className={`
                                px-6 py-[6px] text-[13px] rounded-full border transition
                                ${isFollowing
                                    ? "border-white text-black bg-white"
                                    : "border-gray-500 text-white hover:border-white"
                                }
                            `}
                        >
                            {isFollowing ? "Following" : "Follow"}
                        </button>
                    )}
                </div>

                {/* Bio */}
                <p className="text-gray-400 text-sm mt-5 max-w-[520px] leading-[1.6]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                </p>
            </div>
        </div>
    );
}