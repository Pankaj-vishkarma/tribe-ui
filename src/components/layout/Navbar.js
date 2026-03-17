"use client";

import { Bell, Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import Avatar from "@/components/ui/Avatar";
import Button from "@/components/ui/Button";

export default function Navbar({ isLoggedIn: propLoggedIn }) {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const stored = localStorage.getItem("isLoggedIn");
        setIsLoggedIn(propLoggedIn ?? stored === "true");
    }, [propLoggedIn]);

    return (
        <div className="w-full h-[56px] flex items-center justify-end px-6 border-b border-[#1a1a1a] bg-black text-white">

            <div className="flex items-center gap-4">

                {/* CREATE BUTTON */}
                <Button
                    variant="outline"
                    className="flex items-center gap-2 px-4 py-1.5 text-sm"
                >
                    <Plus size={14} />
                    Create
                </Button>

                {/* NOTIFICATION */}
                <div className="relative cursor-pointer hover:opacity-80 transition">
                    <Bell size={18} className="text-gray-300" />

                    <span className="absolute -top-1 -right-1 bg-pink-500 text-white text-[10px] px-[5px] py-[1px] rounded-full">
                        2
                    </span>
                </div>

                {/* USER SECTION */}
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
                        className="px-4 py-1.5 text-sm"
                    >
                        Sign in
                    </Button>
                )}

            </div>
        </div>
    );
}