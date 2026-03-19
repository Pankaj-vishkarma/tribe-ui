"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children, isLoggedIn = true }) {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="flex min-h-screen">

            {/* ✅ Sidebar (Desktop same as before) */}
            <div className="hidden md:flex">
                <Sidebar isLoggedIn={isLoggedIn} />
            </div>

            {/* ✅ Mobile Sidebar Overlay */}
            {isSidebarOpen && (
                <div className="fixed inset-0 z-50 md:hidden">

                    <div
                        className="absolute inset-0 bg-black/50"
                        onClick={() => setIsSidebarOpen(false)}
                    />

                    <div className="relative z-50">
                        <Sidebar isLoggedIn={isLoggedIn} />
                    </div>

                </div>
            )}

            {/* Right Side */}
            <div className="flex-1 flex flex-col">

                <Navbar
                    isLoggedIn={isLoggedIn}
                    toggleSidebar={() => setIsSidebarOpen(true)}
                />

                <main
                    className={`flex-1 
          px-4 sm:px-6 md:px-8 
          py-4 sm:py-5
          ${isLoggedIn
                            ? "bg-black text-white"
                            : "bg-gradient-to-b from-[#f2dfe3] to-[#cfe6e8] text-black"
                        }`}
                >

                    {/* ✅ IMPORTANT: same width behavior */}
                    <div className="max-w-[1400px] mx-auto w-full">
                        {children}
                    </div>

                </main>

            </div>
        </div>
    );
}