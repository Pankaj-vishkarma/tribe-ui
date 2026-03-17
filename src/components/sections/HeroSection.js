"use client";

import { useRouter } from "next/navigation";

export default function HeroSection() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center text-center min-h-[calc(100vh-120px)] px-4">

            {/* Main Heading */}
            <h1 className="text-[44px] font-semibold leading-[48px] tracking-tight max-w-[700px] mb-6 text-black">
                Sign up for free to connect with Your Tribes
            </h1>

            {/* Sub Content */}
            <div className="max-w-[620px] space-y-4 mb-10">

                <p className="text-[16px] font-semibold text-black leading-[22px]">
                    Discover new artists and invest into their future.
                </p>

                <p className="text-[16px] font-semibold text-black leading-[22px]">
                    Build your collection of artworks and memorabilia and truly own it.
                </p>

                <p className="text-[16px] font-semibold text-black leading-[22px]">
                    Connect with and collaborate on creative projects.
                </p>

            </div>

            {/* CTA Button */}
            <button
                onClick={() => router.push("/signup")}
                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-[40px] py-[14px] rounded-full text-[14px] font-medium shadow-[0_0_30px_rgba(255,0,128,0.5)] hover:scale-105 transition-all duration-200"
            >
                Sign up
            </button>

            {/* Learn More */}
            <p className="text-pink-600 mt-4 text-[13px] cursor-pointer hover:underline">
                Learn more
            </p>

        </div>
    );
}