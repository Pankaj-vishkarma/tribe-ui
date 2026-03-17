"use client";

export default function CollectionConnect({ onConnect }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-[65vh] text-center">

            {/* Heading */}
            <h2 className="text-[32px] font-semibold text-white mb-8 tracking-tight">
                Please connect your wallet
            </h2>

            {/* Button */}
            <button
                onClick={onConnect}
                className="bg-[#22c55e] text-white text-[14px] px-8 py-[10px] rounded-full font-medium hover:bg-[#16a34a] transition"
            >
                Connect
            </button>

        </div>
    );
}