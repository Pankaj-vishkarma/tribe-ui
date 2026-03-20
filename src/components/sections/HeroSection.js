"use client";

import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();

    return (
        <div className="min-h-[calc(100vh-80px)] flex items-center justify-center text-center px-4 pt-16 sm:pt-20">

            {/* CENTER WRAPPER */}
            <div className="max-w-4xl mx-auto">

                {/* HEADING */}
                <h1 className="text-[34px] sm:text-[48px] lg:text-[56px] font-semibold leading-tight tracking-tight text-black mb-6">
                    Sign up for free to connect with Your Tribes
                </h1>

                {/* SUBTEXT */}
                <div className="max-w-[600px] mx-auto space-y-4 mb-12">

                    <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                        Discover new artists and invest into their future.
                    </p>

                    <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                        Build your collection of artworks and memorabilia and truly own it.
                    </p>

                    <p className="text-[15px] sm:text-[16px] text-gray-600 leading-relaxed">
                        Connect with and collaborate on creative projects.
                    </p>

                </div>

                {/* CTA BUTTON */}
                <button
                    onClick={() => router.push("/signup")}
                    className="bg-pink-500 hover:bg-pink-600 text-white px-10 py-3.5 rounded-full text-sm font-medium shadow-[0_0_50px_rgba(255,0,128,0.6)] hover:scale-105 active:scale-95 transition-all duration-200"
                >
                    Sign up
                </button>

                {/* LEARN MORE */}
                <p className="text-pink-400 hover:text-pink-500 mt-5 text-sm cursor-pointer transition">
                    Learn more
                </p>

            </div>
        </div>
    );
}