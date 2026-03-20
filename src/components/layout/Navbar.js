"use client";

import { Bell, Plus, Menu, FolderPlus, Sparkles, ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState, useRef } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar({
    isLoggedIn: propLoggedIn,
}) {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showCreate, setShowCreate] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    const createRef = useRef(null);
    const notifRef = useRef(null);

    useEffect(() => {
        const stored = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(propLoggedIn ?? stored === "true");
    }, [propLoggedIn]);

    // ✅ Outside click handler
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (createRef.current && !createRef.current.contains(e.target)) {
                setShowCreate(false);
            }
            if (notifRef.current && !notifRef.current.contains(e.target)) {
                setShowNotifications(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const notifications = [
        {
            id: 1,
            title: "Demo Tape added",
            time: "2m ago",
            icon: "🎵",
        },
        {
            id: 2,
            title: "Purchased By The River",
            price: "€9.99 / 0.0475 ETH",
            time: "10m ago",
            icon: "💰",
        },
        {
            id: 3,
            title: "Project created",
            time: "1h ago",
            icon: "📁",
        },
    ];

    return (
        <>
            <div className="relative z-50 w-full h-[64px] flex items-center justify-between px-5 sm:px-8 border-b border-[#1a1a1a] bg-black/95 backdrop-blur-md text-white">

                {/* LEFT (Mobile only) */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setMobileOpen(true)}>
                        <Menu size={20} />
                    </button>
                </div>

                {/* RIGHT (Desktop only) */}
                <div className="hidden md:flex items-center gap-5 sm:gap-6 ml-auto">

                    {/* ================= CREATE ================= */}
                    <div className="relative" ref={createRef}>
                        <Button
                            onClick={() => setShowCreate((prev) => !prev)}
                            className="flex items-center gap-2 px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium shadow-[0_0_30px_rgba(255,0,128,0.6)] transition"
                        >
                            <Plus size={16} />
                            <span>Create</span>
                        </Button>

                        {/* 🔴 NOT LOGGED IN */}
                        {showCreate && !isLoggedIn && (
                            <div className="absolute right-2 mt-4 w-[340px] rounded-2xl p-[1px] bg-gradient-to-br from-green-200 via-white to-green-100 shadow-2xl z-50">

                                <div className="bg-white rounded-2xl p-6 text-center text-black">

                                    <h3 className="text-xl font-semibold mb-2">
                                        Create on Tribe
                                    </h3>

                                    <p className="text-sm text-gray-600 mb-5">
                                        Sign up to create projects and collections
                                    </p>

                                    <Button
                                        onClick={() => router.push("/signup")}
                                        className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium shadow-[0_0_30px_rgba(255,0,128,0.6)] transition"
                                    >
                                        Sign up
                                    </Button>

                                    <p className="text-xs mt-3 text-gray-500 underline cursor-pointer">
                                        Learn more
                                    </p>

                                </div>
                            </div>
                        )}

                        {/* 🟢 LOGGED IN */}
                        {showCreate && isLoggedIn && (
                            <div className="absolute right-2 mt-4 w-[240px] bg-[#0B0F19] border border-gray-700 rounded-xl shadow-xl z-50 overflow-hidden">

                                <div
                                    onClick={() => router.push("/token")}
                                    className="px-5 py-4 hover:bg-[#111827] cursor-pointer flex items-center gap-3 transition"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#1a2233] flex items-center justify-center">
                                        <FolderPlus size={16} />
                                    </div>
                                    <span className="text-sm">New Project</span>
                                </div>

                                <div
                                    onClick={() => router.push("/creation")}
                                    className="px-5 py-4 hover:bg-[#111827] cursor-pointer flex items-center gap-3 transition"
                                >
                                    <div className="w-8 h-8 rounded-lg bg-[#1a2233] flex items-center justify-center">
                                        <Sparkles size={16} />
                                    </div>
                                    <span className="text-sm">New Creation</span>
                                </div>

                            </div>
                        )}
                    </div>

                    {/* ================= WALLET ================= */}
                    <div className="relative" ref={notifRef}>
                        <div
                            onClick={() => setShowNotifications((prev) => !prev)}
                            className="relative cursor-pointer hover:opacity-80 transition"
                        >
                            <Bell size={20} className="text-gray-300" />
                            <span className="absolute -top-1.5 -right-1.5 bg-pink-500 text-white text-[10px] px-[6px] py-[2px] rounded-full shadow">
                                {notifications.length}
                            </span>
                        </div>

                        {showNotifications && (
                            <div className="fixed right-6 top-[70px] w-[320px] bg-[#0B0F19]/95 backdrop-blur-md border border-gray-700 rounded-xl shadow-xl z-[9999] overflow-hidden">

                                <div className="px-5 py-4 border-b border-gray-700 text-sm font-medium">
                                    Activity
                                </div>

                                <div className="max-h-[300px] overflow-y-auto">

                                    {notifications.map((item) => (
                                        <div
                                            key={item.id}
                                            className="px-5 py-4 border-b border-gray-700 hover:bg-[#111827] transition flex items-center justify-between"
                                        >

                                            <div className="flex items-center gap-3">

                                                <div className="w-8 h-8 rounded-lg bg-[#1a2233] flex items-center justify-center text-sm">
                                                    {item.icon}
                                                </div>

                                                <div>
                                                    <p className="text-sm text-white">
                                                        {item.title}
                                                    </p>

                                                    {item.price && (
                                                        <p className="text-xs text-gray-400">
                                                            {item.price}
                                                        </p>
                                                    )}

                                                    <p className="text-xs text-gray-500 mt-1">
                                                        {item.time}
                                                    </p>
                                                </div>

                                            </div>

                                            <div className="w-6 h-6 rounded-full bg-[#1a2233] flex items-center justify-center">
                                                <ArrowUpRight size={12} className="text-gray-300" />
                                            </div>

                                        </div>
                                    ))}

                                </div>

                                {/* FIXED FOOTER */}
                                <div className="px-5 py-4 text-xs text-gray-400 border-t border-gray-700 flex justify-between items-center">
                                    <span>Connected to Mainnet</span>
                                    <span className="text-gray-500">⚙️</span>
                                </div>

                            </div>
                        )}
                    </div>

                    {/* ================= USER ================= */}
                    {isLoggedIn ? (
                        <div
                            onClick={() => router.push("/profile")}
                            className="cursor-pointer hover:scale-105 transition"
                        >
                            <Avatar size="lg" src="/home/pp.png" />
                        </div>
                    ) : (
                        <Button
                            onClick={() => router.push("/signup")}
                            className="px-5 py-2 rounded-full bg-pink-500 hover:bg-pink-600 text-white text-sm font-medium shadow-[0_0_30px_rgba(255,0,128,0.6)] transition"
                        >
                            Sign in
                        </Button>
                    )}

                </div>
            </div>

            {/* MOBILE MENU OUTSIDE */}
            <MobileMenu
                isOpen={mobileOpen}
                onClose={() => setMobileOpen(false)}
            />
        </>
    );
}