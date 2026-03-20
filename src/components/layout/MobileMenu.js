"use client";

import { X } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

export default function MobileMenu({ isOpen, onClose }) {
    const router = useRouter();
    const pathname = usePathname();

    if (!isOpen) return null;

    // ✅ Navigation handler
    const handleNavigate = (path) => {
        router.push(path);
        onClose();
    };

    return (
        <div className="fixed inset-0 z-50">

            {/* OVERLAY */}
            <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* DRAWER */}
            <div className="absolute left-0 top-0 h-full w-[280px] bg-[#0B0F19] p-5 flex flex-col transition-transform duration-300 translate-x-0 pb-[env(safe-area-inset-bottom)]">

                {/* HEADER */}
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-white font-semibold text-lg">Menu</h2>
                    <button onClick={onClose}>
                        <X size={20} />
                    </button>
                </div>

                {/* SEARCH */}
                <input
                    type="text"
                    placeholder="Search"
                    className="w-full mb-6 px-4 py-2 rounded-lg bg-[#111827] text-white outline-none"
                />

                {/* NAV ITEMS */}
                <div className="space-y-3 text-white text-sm">

                    <div
                        onClick={() => handleNavigate("/")}
                        className={`px-3 py-2 rounded-lg cursor-pointer transition ${pathname === "/" ? "bg-white/10" : "hover:bg-[#111827]"
                            }`}
                    >
                        Home
                    </div>

                    <div
                        onClick={() => handleNavigate("/explore")}
                        className="px-3 py-2 rounded-lg hover:bg-[#111827] cursor-pointer transition"
                    >
                        Explore
                    </div>

                    <div
                        onClick={() => handleNavigate("/collection")}
                        className="px-3 py-2 rounded-lg hover:bg-[#111827] cursor-pointer transition"
                    >
                        Collection
                    </div>

                    <div
                        onClick={() => handleNavigate("/creation")}
                        className="px-3 py-2 rounded-lg hover:bg-[#111827] cursor-pointer transition"
                    >
                        Create
                    </div>

                </div>

                {/* SUGGESTED */}
                <div className="mt-8">
                    <p className="text-gray-400 text-xs mb-3">SUGGESTED</p>

                    <div className="space-y-3 text-white text-sm">

                        <p
                            onClick={() => handleNavigate("/profile")}
                            className="cursor-pointer hover:text-gray-300 transition"
                        >
                            Victor Pacheco
                        </p>

                        <p
                            onClick={() => handleNavigate("/profile")}
                            className="cursor-pointer hover:text-gray-300 transition"
                        >
                            Jesus Bañuelos
                        </p>

                        <p
                            onClick={() => handleNavigate("/profile")}
                            className="cursor-pointer hover:text-gray-300 transition"
                        >
                            Nembo Lukeni
                        </p>

                    </div>
                </div>

                {/* FOOTER */}
                <div className="mt-auto text-xs text-gray-400 space-y-2 pt-6">

                    <p
                        onClick={() => handleNavigate("/blog")}
                        className="cursor-pointer hover:text-gray-300 transition"
                    >
                        Blog
                    </p>

                    <p
                        onClick={() => handleNavigate("/help")}
                        className="cursor-pointer hover:text-gray-300 transition"
                    >
                        Help
                    </p>

                    <p
                        onClick={() => handleNavigate("/privacy")}
                        className="cursor-pointer hover:text-gray-300 transition"
                    >
                        Privacy
                    </p>

                </div>

            </div>
        </div>
    );
}