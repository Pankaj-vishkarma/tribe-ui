"use client";

import { Bell, Plus, Menu } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

export default function Navbar({
    isLoggedIn: propLoggedIn,
    toggleSidebar,
}) {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);

    const notifRef = useRef(null);

    useEffect(() => {
        const stored = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(propLoggedIn ?? stored === "true");
    }, [propLoggedIn]);

    // ✅ Close on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // ✅ Dummy notifications
    const notifications = [
        { id: 1, text: "Your NFT was liked", time: "2m ago" },
        { id: 2, text: "New follower: JZero", time: "10m ago" },
        { id: 3, text: "Token sold successfully", time: "1h ago" },
    ];

    return (
        <div className="w-full min-h-[56px] flex items-center justify-between px-4 sm:px-6 border-b border-[#1a1a1a] bg-black text-white">

            {/* LEFT */}
            <div className="md:hidden flex items-center">
                <button onClick={toggleSidebar}>
                    <Menu size={20} />
                </button>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-3 sm:gap-4 ml-auto flex-shrink-0">

                {/* CREATE */}
                <Button
                    variant="outline"
                    onClick={() => router.push("/token")}
                    className="flex items-center gap-2 px-3 sm:px-4 py-1.5 text-sm whitespace-nowrap"
                >
                    <Plus size={14} />
                    <span className="hidden sm:inline">Create</span>
                </Button>

                {/* 🔔 NOTIFICATION */}
                <div className="relative" ref={notifRef}>
                    <div
                        onClick={() => setShowNotifications((prev) => !prev)}
                        className="relative cursor-pointer hover:opacity-80 transition"
                    >
                        <Bell size={18} className="text-gray-300" />
                        <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] px-[5px] py-[1px] rounded-full">
                            {notifications.length}
                        </span>
                    </div>

                    {/* 🔥 POPUP */}
                    {showNotifications && (
                        <div className="absolute right-0 mt-3 w-[280px] sm:w-[320px] bg-[#0B0F19] border border-[#1f2937] rounded-xl shadow-xl z-50 overflow-hidden">

                            {/* Header */}
                            <div className="px-4 py-3 border-b border-[#1f2937] text-sm font-medium">
                                Notifications
                            </div>

                            {/* List */}
                            <div className="max-h-[300px] overflow-y-auto">

                                {notifications.map((item) => (
                                    <div
                                        key={item.id}
                                        className="px-4 py-3 border-b border-[#1f2937] hover:bg-[#111827] cursor-pointer transition"
                                    >
                                        <p className="text-sm text-white">
                                            {item.text}
                                        </p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            {item.time}
                                        </p>
                                    </div>
                                ))}

                                {notifications.length === 0 && (
                                    <p className="text-center text-sm text-gray-400 py-6">
                                        No notifications
                                    </p>
                                )}

                            </div>

                            {/* Footer */}
                            <div className="text-center text-xs text-blue-400 py-2 hover:underline cursor-pointer">
                                View all
                            </div>

                        </div>
                    )}
                </div>

                {/* USER */}
                {isLoggedIn ? (
                    <div
                        onClick={() => router.push("/profile")}
                        className="cursor-pointer hover:scale-105 transition"
                    >
                        <Avatar size="md" src="/home/pp.png" />
                    </div>
                ) : (
                    <Button
                        variant="outline"
                        onClick={() => router.push("/signup")}
                        className="px-3 sm:px-4 py-1.5 text-sm whitespace-nowrap"
                    >
                        Sign in
                    </Button>
                )}

            </div>
        </div>
    );
}