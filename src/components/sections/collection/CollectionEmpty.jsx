"use client";

import { useRouter } from "next/navigation";

export default function CollectionEmpty() {
    const router = useRouter();

    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] text-center">

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-white mb-8 tracking-tight">
                Start building the ultimate collection
            </h2>

            {/* Button */}
            <button
                onClick={() => router.push("/signup")}
                className="bg-[#22c55e] text-white text-[14px] px-8 py-[10px] rounded-full font-medium hover:bg-[#16a34a] transition"
            >
                Sign in
            </button>

        </div>
    );
}