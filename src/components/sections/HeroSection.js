"use client";

import { useRouter } from "next/navigation";

export default function HeroSection() {

    const router = useRouter();

    return (
        <div className="w-full h-[824px] mt-[0px] mx-auto flex flex-col items-center text-center">

            {/* Page Title */}
            <div className="w-full height-[58px] mb-12">
                <h1 className="text-[47px] font-semibold mb-2 text-left">Home</h1>
                <div className="border-b border-gray-300"></div>
            </div>

            {/* Hero Content */}
            <div className="max-w-[642px] height-[171px] pt-[142px]">

                <h2 className="text-[47px] font-bold leading-[47px] tracking-[-1.38px] mb-6">
                    Sign up for free to connect with Your Tribes
                </h2>

                <div className="max-w-[620px] mx-auto space-y-2 mb-8">

                    <p className="text-[18px] font-bold leading-[18px] tracking-[-0.86px] text-center pb-5">
                        Discover new artists and invest into their future.
                    </p>

                    <p className="text-[18px] font-bold leading-[18px] tracking-[-0.86px] text-center pb-5">
                        Build your collection of artworks and memorabilia and truly own it.
                    </p>

                    <p className="text-[18px] font-bold leading-[18px] tracking-[-0.86px] text-center">
                        Connect with and collaborate on creative projects.
                    </p>

                </div>

                {/* Button */}
                <button
                    onClick={() => router.push("/signup")}
                    className="bg-[#FF2E6A] text-white px-10 py-3 rounded-full text-[16px] font-semibold hover:bg-[#e3275d] transition"
                >
                    Sign up
                </button>

                {/* Learn More */}
                <p className="text-[#FF2E6A] mt-4 text-[14px] cursor-pointer">
                    Learn more
                </p>

            </div>
        </div>
    );
}