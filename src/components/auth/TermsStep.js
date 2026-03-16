"use client";

import { useState } from "react";

export default function TermsStep({ nextStep, prevStep }) {

    const [terms, setTerms] = useState(true);
    const [privacy, setPrivacy] = useState(true);

    return (

        <div className="w-[527px] mx-auto space-y-8">

            {/* Terms */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    I accept the terms of service
                </label>

                <div
                    onClick={() => setTerms(!terms)}
                    className="flex items-center gap-3 cursor-pointer"
                >

                    <div className="w-[18px] h-[18px] bg-black border border-gray-500 flex items-center justify-center text-[10px] text-white">
                        {terms && "✓"}
                    </div>

                    <span className="text-gray-300 text-[14px]">
                        <span className="text-pink-500 cursor-pointer">
                            Link
                        </span>{" "}
                        to Terms of Service
                    </span>

                </div>

            </div>


            {/* Privacy */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    I accept the privacy policy
                </label>

                <div
                    onClick={() => setPrivacy(!privacy)}
                    className="flex items-center gap-3 cursor-pointer"
                >

                    <div className="w-[18px] h-[18px] bg-black border border-gray-500 flex items-center justify-center text-[10px] text-white">
                        {privacy && "✓"}
                    </div>

                    <span className="text-gray-300 text-[14px]">
                        <span className="text-pink-500 cursor-pointer">
                            Link
                        </span>{" "}
                        to Privacy Policy
                    </span>

                </div>

            </div>


            {/* Buttons */}
            <div className="flex justify-center gap-4 pt-8">

                <button
                    onClick={prevStep}
                    className="border border-white text-white w-[60px] h-[28px] rounded-full text-[13px] hover:bg-white hover:text-black transition"
                >
                    Back
                </button>

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