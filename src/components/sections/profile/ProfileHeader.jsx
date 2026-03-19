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
        <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-center sm:items-start text-center sm:text-left">

            {/* Avatar */}
            <Avatar
                size="xl"
                src="/home/pp.png"
                className="w-20 h-20 sm:w-24 sm:h-24"
            />

            <div className="flex-1">

                {/* Name */}
                <h1 className="text-[22px] sm:text-[26px] lg:text-[32px] font-semibold text-white leading-tight">
                    Armin Luschin
                </h1>

                {/* Role */}
                <p className="text-gray-500 text-[10px] sm:text-xs mt-1 tracking-[1px] uppercase">
                    Founder
                </p>

                {/* Buttons */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 sm:gap-3 mt-4 sm:mt-5">

                    {isOwner ? (
                        <>
                            <Button
                                variant="outline"
                                onClick={() => router.push("/profile/edit")}
                                className="px-4 sm:px-5 py-[5px] sm:py-[6px] text-[12px] sm:text-[13px]"
                            >
                                Edit Info
                            </Button>

                            <Button
                                variant="outline"
                                onClick={() => router.push("/settings")}
                                className="px-4 sm:px-5 py-[5px] sm:py-[6px] text-[12px] sm:text-[13px]"
                            >
                                Settings
                            </Button>

                            <Button
                                variant="danger"
                                onClick={handleLogout}
                                className="px-4 sm:px-5 py-[5px] sm:py-[6px] text-[12px] sm:text-[13px]"
                            >
                                Log out
                            </Button>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsFollowing(!isFollowing)}
                            className={`
                                px-5 sm:px-6 py-[5px] sm:py-[6px] text-[12px] sm:text-[13px] rounded-full border transition whitespace-nowrap
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
                <p className="text-gray-400 text-[13px] sm:text-sm mt-4 sm:mt-5 max-w-[100%] sm:max-w-[520px] leading-[1.6]">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.
                </p>
            </div>
        </div>
    );
}