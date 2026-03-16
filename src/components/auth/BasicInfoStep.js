"use client";

import { useState } from "react";

export default function BasicInfoStep({ nextStep }) {

    const [artist, setArtist] = useState(false);

    return (

        <div className="w-[527px] mx-auto space-y-7">

            {/* NAME */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    Name
                </label>

                <input
                    placeholder="First Name Last Name"
                    className="w-full h-[52px] bg-[#050505] text-gray-200 px-4 rounded-[6px] outline-none placeholder-gray-500 border border-white/10 focus:border-white/30 transition"
                />

            </div>


            {/* EMAIL */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    Email or Phone
                </label>

                <div className="relative">

                    <input
                        placeholder="Email or Phone"
                        className="w-full h-[52px] bg-[#050505] text-gray-200 px-4 rounded-[6px] outline-none placeholder-gray-500 border border-white/10 focus:border-white/30 transition"
                    />

                    {/* success icon */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 text-sm">
                        ✔
                    </span>

                </div>

            </div>


            {/* PASSWORD */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    Password
                </label>

                <div className="relative">

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full h-[52px] bg-[#050505] text-gray-200 px-4 rounded-[6px] outline-none placeholder-gray-500 border border-white/10 focus:border-white/30 transition"
                    />

                </div>

                {/* error message */}
                <p className="text-red-400 text-[12px]">
                    Too short
                </p>

            </div>


            {/* USERNAME */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    Username
                </label>

                <div className="relative">

                    <input
                        placeholder="Username"
                        className="w-full h-[52px] bg-[#050505] text-gray-200 px-4 rounded-[6px] outline-none placeholder-gray-500 border border-white/10 focus:border-white/30 transition"
                    />

                    {/* success icon */}
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-400 text-sm">
                        ✔
                    </span>

                </div>

            </div>


            {/* Checkbox */}
            <div
                onClick={() => setArtist(!artist)}
                className="flex items-center gap-3 pt-4 cursor-pointer"
            >

                <div className="w-[18px] h-[18px] bg-black border border-gray-500 flex items-center justify-center text-[10px] text-white">
                    {artist && "✓"}
                </div>

                <span className="text-gray-300 text-[14px]">
                    I am an artist
                </span>

            </div>


            {/* Button */}
            <div className="flex justify-center pt-8">

                <button
                    onClick={nextStep}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[13px] hover:bg-white hover:text-black transition"
                >
                    Next
                </button>

            </div>

        </div>

    );
}