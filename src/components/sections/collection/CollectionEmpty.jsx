"use client";

import { useRouter } from "next/navigation";

export default function CollectionEmpty() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-[55vh] sm:min-h-[60vh] lg:min-h-[65vh] text-center px-4">

            {/* Heading */}
            <h2 className="text-[22px] sm:text-[26px] lg:text-[32px] font-semibold text-white mb-6 sm:mb-8 tracking-tight">
                Start building the ultimate collection
            </h2>

            {/* Button */}
            <button
                onClick={() => router.push("/signup")}
                className="bg-[#22c55e] text-white text-[13px] sm:text-[14px] px-6 sm:px-8 py-2.5 sm:py-[10px] rounded-full font-medium hover:bg-[#16a34a] active:scale-95 transition"
            >
                Sign in
            </button>

        </div>
    );
}