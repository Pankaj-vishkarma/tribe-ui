"use client";

import { Home, Compass, Layers, Search } from "lucide-react";
import Image from "next/image";

export default function Sidebar() {
    return (
        <div className="w-[222px] min-h-screen bg-gradient-to-b from-[#2c1b2f] via-[#0c2a3d] to-[#0b0b0b] text-white flex flex-col px-4 py-6">

            {/* Logo */}
            <div className="flex justify-center mb-6">
                <Image
                    src="/images/Logo Copy.png"
                    alt="Tribe Logo"
                    width={34}
                    height={28}
                />
            </div>

            {/* Search */}
            <div className="flex items-center w-full h-[32px] border border-white/20 rounded-md px-2 mb-6">
                <Search size={14} className="text-gray-400" />

                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none ml-2 text-sm text-gray-300 placeholder-gray-400 w-full"
                />
            </div>

            {/* Navigation */}
            <div className="space-y-2 mb-8">

                {/* Active */}
                <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/20 cursor-pointer">
                    <Home size={18} />
                    <span className="text-sm">Home</span>
                </div>

                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
                    <Compass size={18} />
                    <span className="text-sm">Explore</span>
                </div>

                <div className="flex items-center gap-3 px-3 py-2 rounded-lg hover:bg-white/10 cursor-pointer">
                    <Layers size={18} />
                    <span className="text-sm">Collection</span>
                </div>

            </div>

            {/* Suggested */}
            <div className="text-xs text-gray-400 mb-3 tracking-wide">
                SUGGESTED
            </div>

            <div className="space-y-3 mb-8">

                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">JZero</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">Tobi Rockstar</span>
                    </div>

                    {/* notification */}
                    <span className="bg-pink-500 text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full">
                        2
                    </span>
                </div>

                <div className="flex items-center gap-3">
                    <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
                    <span className="text-sm">Tom Crypto</span>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="w-7 h-7 bg-gray-400 rounded-full"></div>
                        <span className="text-sm">Storyglitch</span>
                    </div>

                    <span className="bg-green-500 w-3 h-3 rounded-full"></span>
                </div>

            </div>

            {/* About */}
            <div className="mt-auto text-xs text-gray-400 grid grid-cols-2 gap-y-2">

                <span>Blog</span>
                <span>About Us</span>

                <span>Help</span>
                <span>Terms</span>

                <span>Privacy</span>
                <span>Imprint</span>

            </div>
        </div>
    );
}