"use client";

import {
    X, Home, Compass, Folder, PlusSquare
} from "lucide-react";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function MobileMenu({ isOpen, onClose }) {

    const [selectedUser, setSelectedUser] = useState(null);
    const popupRef = useRef(null);
    const [followedUsers, setFollowedUsers] = useState({});

    const router = useRouter();
    const pathname = usePathname();

    const handleNavigate = (path) => {
        router.push(path);
        onClose();
    };

    const getUserDetails = (name) => ({
        name,
        bio: "Digital creator • NFT artist • Web3 enthusiast",
        followers: Math.floor(Math.random() * 1000) + " followers",
        image: "/home/pp.png",
    });

    // close popup on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (popupRef.current && !popupRef.current.contains(e.target)) {
                setSelectedUser(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <>
            {!isOpen ? null : (
                <div className="fixed inset-0 z-50">

                    {/* OVERLAY */}
                    <div
                        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* DRAWER */}
                    <div className="absolute left-0 top-0 h-full w-[280px] overflow-y-auto bg-[#0B0F19] p-5 flex flex-col">

                        {/* CLOSE */}
                        <div className="flex justify-end mb-6">
                            <button onClick={onClose}>
                                <X size={20} className="text-white" />
                            </button>
                        </div>

                        {/* SEARCH */}
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full mb-6 px-4 py-2 rounded-lg bg-[#111827] text-white outline-none"
                        />

                        {/* FOLLOWING */}
                        <div className="mb-6">
                            <p className="text-gray-400 text-xs mb-3">FOLLOWING</p>

                            <div className="space-y-3 text-white text-sm">
                                {["Alex", "Maria"].map((name, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedUser(getUserDetails(name))}
                                        className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-1 rounded-md"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src="/home/pp.png"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="rounded-full"
                                            />
                                            {name}
                                        </div>
                                        <div className="w-2 h-2 bg-pink-500 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* SUGGESTED */}
                        <div className="mb-6">
                            <p className="text-gray-400 text-xs mb-3">SUGGESTED</p>

                            <div className="space-y-3 text-white text-sm">
                                {["Victor Pacheco", "Jesus Bañuelos", "Nembo Lukeni"].map((name, i) => (
                                    <div
                                        key={i}
                                        onClick={() => setSelectedUser(getUserDetails(name))}
                                        className="flex items-center justify-between cursor-pointer hover:bg-white/5 p-1 rounded-md"
                                    >
                                        <div className="flex items-center gap-2">
                                            <Image
                                                src="/home/pp.png"
                                                alt=""
                                                width={24}
                                                height={24}
                                                className="rounded-full"
                                            />
                                            {name}
                                        </div>
                                        <div className="w-2 h-2 bg-pink-500 rounded-full" />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* NAV ITEMS */}
                        <div className="space-y-3 text-white text-sm mb-6">
                            <div
                                onClick={() => handleNavigate("/")}
                                className={`flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer ${pathname === "/" ? "bg-white/10" : "hover:bg-[#111827]"
                                    }`}
                            >
                                <Home size={16} />
                                Home
                            </div>

                            <div
                                onClick={() => handleNavigate("/explore")}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827] cursor-pointer"
                            >
                                <Compass size={16} />
                                Explore
                            </div>

                            <div
                                onClick={() => handleNavigate("/collection")}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827] cursor-pointer"
                            >
                                <Folder size={16} />
                                Collection
                            </div>

                            <div
                                onClick={() => handleNavigate("/creation")}
                                className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-[#111827] cursor-pointer"
                            >
                                <PlusSquare size={16} />
                                Create
                            </div>
                        </div>

                        {/* FOOTER */}
                        <div className="mt-auto text-xs text-gray-400 space-y-2">
                            <p onClick={() => handleNavigate("/blog")} className="cursor-pointer">Blog</p>
                            <p onClick={() => handleNavigate("/help")} className="cursor-pointer">Help</p>
                            <p onClick={() => handleNavigate("/privacy")} className="cursor-pointer">Privacy</p>
                        </div>

                    </div>

                    {/* POPUP */}
                    {selectedUser && (
                        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]">
                            <div
                                ref={popupRef}
                                className="relative bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-6 w-[90%] max-w-[320px] text-center shadow-xl"
                            >

                                <button
                                    onClick={() => setSelectedUser(null)}
                                    className="absolute top-3 right-3 text-gray-400 hover:text-white"
                                >
                                    <X size={18} />
                                </button>

                                <Image
                                    src={selectedUser.image}
                                    alt=""
                                    width={70}
                                    height={70}
                                    className="rounded-full mx-auto mb-3"
                                />

                                <h3 className="text-white font-medium">{selectedUser.name}</h3>

                                <p className="text-xs text-gray-400 mt-1">{selectedUser.bio}</p>

                                <p className="text-xs text-gray-500 mt-1">{selectedUser.followers}</p>

                                <button
                                    onClick={() =>
                                        setFollowedUsers((prev) => ({
                                            ...prev,
                                            [selectedUser.name]: !prev[selectedUser.name],
                                        }))
                                    }
                                    className={`mt-4 w-full py-2 rounded-lg text-sm font-medium ${followedUsers[selectedUser.name]
                                        ? "bg-gray-700"
                                        : "bg-blue-500"
                                        }`}
                                >
                                    {followedUsers[selectedUser.name] ? "Following" : "Follow"}
                                </button>

                            </div>
                        </div>
                    )}

                </div>
            )}
        </>
    );
}