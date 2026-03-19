"use client";

import { Home, Compass, Layers, Search, X } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useState, useRef } from "react";

export default function Sidebar({ isLoggedIn = true }) {
    const router = useRouter();
    const pathname = usePathname();

    const [searchQuery, setSearchQuery] = useState("");
    const [followedUsers, setFollowedUsers] = useState({});

    // 🔥 Popup state
    const [selectedUser, setSelectedUser] = useState(null);
    const popupRef = useRef(null);

    // ✅ keep input synced with URL
    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const query = params.get("search") || "";
        setSearchQuery(query);
    }, [pathname]);

    // ✅ live search
    const handleSearch = (e) => {
        const value = e.target.value;
        setSearchQuery(value);
        router.push(`/explore?search=${value}`);
    };

    // ✅ close popup outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setSelectedUser(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // 🔥 dummy user data
    const getUserDetails = (name) => ({
        name,
        bio: "Digital creator • NFT artist • Web3 enthusiast",
        followers: Math.floor(Math.random() * 1000) + " followers",
        image: "/home/pp.png",
    });

    const toggleFollow = (name) => {
        setFollowedUsers((prev) => ({
            ...prev,
            [name]: !prev[name],
        }));
    };

    return (
        <div className="relative w-[80vw] max-w-[260px] md:w-[240px] min-h-screen bg-gradient-to-b from-[#2b1f3a] via-[#0f2d2c] to-[#0a0a0a] text-white flex flex-col px-3 sm:px-4 py-5 sm:py-6">

            {/* Logo */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <Image src="/images/Logo Copy.png" alt="Tribe Logo" width={34} height={28} />
            </div>

            {/* Search */}
            <div className="flex items-center w-full h-[36px] bg-white/5 border border-white/10 rounded-md px-3 mb-6">
                <Search size={14} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    value={searchQuery}
                    onChange={handleSearch}
                    className="bg-transparent outline-none ml-2 text-[13px] text-gray-300 placeholder-gray-500 w-full"
                />
            </div>

            {/* Navigation */}
            <div className="space-y-[6px] mb-6">
                <div
                    onClick={() => router.push("/home")}
                    className={`flex items-center gap-3 px-3 py-[8px] rounded-md cursor-pointer ${pathname.startsWith("/home") ? "bg-white/10" : "hover:bg-white/10"
                        }`}
                >
                    <Home size={16} />
                    <span className="text-[13px] font-medium">Home</span>
                </div>

                <div
                    onClick={() => router.push("/explore")}
                    className={`flex items-center gap-3 px-3 py-[8px] rounded-md cursor-pointer ${pathname.startsWith("/explore") ? "bg-white/10" : "hover:bg-white/10"
                        }`}
                >
                    <Compass size={16} />
                    <span className="text-[13px] font-medium">Explore</span>
                </div>

                <div
                    onClick={() => router.push("/collection")}
                    className="flex items-center gap-3 px-3 py-[8px] rounded-md hover:bg-white/10 cursor-pointer"
                >
                    <Layers size={16} />
                    <span className="text-[13px] font-medium">Collection</span>
                </div>
            </div>

            {/* FOLLOWING */}
            {isLoggedIn && (
                <>
                    <p className="text-[11px] text-gray-400 mb-3 mt-2 tracking-wider">
                        FOLLOWING
                    </p>

                    <div className="space-y-3 mb-6">
                        {["JZero", "Tobi Rockstar", "Tom Crypto", "Storyglitch"].map((name, i) => (
                            <div
                                key={i}
                                onClick={() => setSelectedUser(getUserDetails(name))}
                                className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-1 rounded-md"
                            >
                                <div className="flex items-center gap-3">
                                    <Image src="/home/pp.png" alt="" width={26} height={26} className="rounded-full" />
                                    <span className="text-[13px] font-medium">{name}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* SUGGESTED */}
            <p className="text-[11px] text-gray-400 mb-3 tracking-wider">
                SUGGESTED
            </p>

            <div className="space-y-3 mb-8">
                {["Victor Pacheco", "Jesus Bañuelos", "Nembo Lukeni", "Relow"].map((name, i) => (
                    <div
                        key={i}
                        onClick={() => setSelectedUser(getUserDetails(name))}
                        className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-1 rounded-md"
                    >
                        <div className="flex items-center gap-3">
                            <Image src="/home/pp.png" alt="" width={26} height={26} className="rounded-full" />
                            <span className="text-[13px] font-medium">{name}</span>
                        </div>

                        <span className="text-gray-500 text-sm">×</span>
                    </div>
                ))}
            </div>

            {/* ABOUT */}
            <div className="mt-auto text-[11px] text-gray-400 grid grid-cols-2 gap-y-2">
                <span>Blog</span>
                <span>About Us</span>
                <span>Help</span>
                <span>Terms</span>
                <span>Privacy</span>
                <span>Imprint</span>
            </div>

            {/* 🔥 POPUP */}
            {/* 🔥 POPUP */}
            {selectedUser && (
                <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
                    <div
                        ref={popupRef}
                        className="relative bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-6 w-[90%] max-w-[320px] text-center shadow-xl"
                    >

                        {/* ❌ CLOSE BUTTON */}
                        <button
                            onClick={() => setSelectedUser(null)}
                            className="absolute top-3 right-3 text-gray-400 hover:text-white transition"
                        >
                            <X size={18} />
                        </button>

                        {/* Image */}
                        <Image
                            src={selectedUser.image}
                            alt=""
                            width={70}
                            height={70}
                            className="rounded-full mx-auto mb-3"
                        />

                        {/* Name */}
                        <h3 className="text-white font-medium">
                            {selectedUser.name}
                        </h3>

                        {/* Bio */}
                        <p className="text-xs text-gray-400 mt-1">
                            {selectedUser.bio}
                        </p>

                        {/* Followers */}
                        <p className="text-xs text-gray-500 mt-1">
                            {selectedUser.followers}
                        </p>

                        {/* Follow Button */}
                        <button
                            onClick={() => toggleFollow(selectedUser.name)}
                            className={`mt-4 w-full py-2 rounded-lg text-sm font-medium transition
    ${followedUsers[selectedUser.name]
                                    ? "bg-gray-700 hover:bg-gray-600"
                                    : "bg-blue-500 hover:bg-blue-600"
                                }
    `}
                        >
                            {followedUsers[selectedUser.name] ? "Following" : "Follow"}
                        </button>

                    </div>
                </div>
            )}
        </div>
    );
}