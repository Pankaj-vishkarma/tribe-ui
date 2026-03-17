"use client";

import { Home, Compass, Layers, Search } from "lucide-react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { User } from "lucide-react";

export default function Sidebar({ isLoggedIn = true }) {

    const router = useRouter();
    const pathname = usePathname();

    return (
        <div className="w-[240px] min-h-screen overflow-y-auto bg-gradient-to-b from-[#2b1f3a] via-[#0f2d2c] to-[#0a0a0a] text-white flex flex-col px-4 py-6">

            {/* Logo */}
            <div className="flex justify-center mb-8">
                <Image
                    src="/images/Logo Copy.png"
                    alt="Tribe Logo"
                    width={34}
                    height={28}
                />
            </div>

            {/* Search */}
            <div className="flex items-center w-full h-[36px] bg-white/5 border border-white/10 rounded-md px-3 mb-6">
                <Search size={14} className="text-gray-400" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent outline-none ml-2 text-[13px] text-gray-300 placeholder-gray-500 w-full"
                />
            </div>

            {/* Navigation */}
            <div className="space-y-[6px] mb-6">

                {/* Home */}
                <div
                    onClick={() => router.push("/home")}
                    className={`flex items-center gap-3 px-3 py-[8px] rounded-md cursor-pointer ${pathname.startsWith("/home")
                        ? "bg-white/10"
                        : "hover:bg-white/10"
                        }`}
                >
                    <Home size={16} />
                    <span className="text-[13px] font-medium">Home</span>
                </div>

                {/* Explore */}
                <div
                    onClick={() => router.push("/explore")}
                    className={`flex items-center gap-3 px-3 py-[8px] rounded-md cursor-pointer ${pathname.startsWith("/explore")
                        ? "bg-white/10"
                        : "hover:bg-white/10"
                        }`}
                >
                    <Compass size={16} />
                    <span className="text-[13px] font-medium">Explore</span>
                </div>

                {/* Collection */}
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

                        <div className="flex items-center gap-3">
                            <Image src="/home/pp.png" alt="" width={26} height={26} className="rounded-full" />
                            <span className="text-[13px] font-medium">JZero</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image src="/home/Bitmap.png" alt="" width={26} height={26} className="rounded-full" />
                                <span className="text-[13px] font-medium">Tobi Rockstar</span>
                            </div>

                            <span className="bg-pink-500 text-white text-[10px] px-[6px] py-[2px] rounded-full">
                                2
                            </span>
                        </div>

                        <div className="flex items-center gap-3">
                            <Image src="/home/pp.png" alt="" width={26} height={26} className="rounded-full" />
                            <span className="text-[13px] font-medium">Tom Crypto</span>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image src="/home/pp.png" alt="" width={26} height={26} className="rounded-full" />
                                <span className="text-[13px] font-medium">Storyglitch</span>
                            </div>

                            <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        </div>

                    </div>
                </>
            )}

            {/* SUGGESTED */}
            <p className="text-[11px] text-gray-400 mb-3 tracking-wider">
                SUGGESTED
            </p>

            <div className="space-y-3 mb-8">

                {[
                    "Victor Pacheco",
                    "Jesus Bañuelos",
                    "Nembo Lukeni",
                    "Relow",
                ].map((name, i) => (
                    <div key={i} className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                            <Image src="/home/pp.png" alt="" width={26} height={26} className="rounded-full" />
                            <span className="text-[13px] font-medium">{name}</span>
                        </div>

                        <span className="text-gray-500 cursor-pointer text-sm">×</span>
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

        </div>
    );
}