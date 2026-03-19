"use client";

import { useState } from "react";

export default function TermsStep({ nextStep, prevStep }) {

    const [terms, setTerms] = useState(true);
    const [privacy, setPrivacy] = useState(true);

    return (

        <div className="w-full max-w-[527px] mx-auto px-4 sm:px-0 space-y-6 sm:space-y-8 pb-10 sm:pb-12">

            {/* Terms */}
            <div className="space-y-[6px]">

                <label className="text-[14px] sm:text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    I accept the terms of service
                </label>

                <div
                    onClick={() => setTerms(!terms)}
                    className="flex items-center gap-3 cursor-pointer"
                >

                    <div className="w-[18px] h-[18px] bg-black border border-gray-500 flex items-center justify-center text-[10px] text-white">
                        {terms && "✓"}
                    </div>

                    <span className="text-gray-300 text-[13px] sm:text-[14px] leading-snug">
                        <span className="text-pink-500 cursor-pointer">
                            Link
                        </span>{" "}
                        to Terms of Service
                    </span>

                </div>

            </div>


            {/* Privacy */}
            <div className="space-y-[6px]">

                <label className="text-[14px] sm:text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    I accept the privacy policy
                </label>

                <div
                    onClick={() => setPrivacy(!privacy)}
                    className="flex items-center gap-3 cursor-pointer"
                >

                    <div className="w-[18px] h-[18px] bg-black border border-gray-500 flex items-center justify-center text-[10px] text-white">
                        {privacy && "✓"}
                    </div>

                    <span className="text-gray-300 text-[13px] sm:text-[14px] leading-snug">
                        <span className="text-pink-500 cursor-pointer">
                            Link
                        </span>{" "}
                        to Privacy Policy
                    </span>

                </div>

            </div>


            {/* Buttons */}
            <div className="flex justify-center gap-3 sm:gap-4 pt-6 sm:pt-8">

                <button
                    onClick={prevStep}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[12px] sm:text-[13px] hover:bg-white hover:text-black transition"
                >
                    Back
                </button>

                <button
                    onClick={nextStep}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[12px] sm:text-[13px] hover:bg-white hover:text-black transition"
                >
                    Next
                </button>

            </div>

        </div>

    );
}