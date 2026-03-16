"use client";

export default function AdditionalInfoStep({ nextStep, prevStep }) {

    return (

        <div className="w-[527px] mx-auto space-y-8">

            {/* Upload Section */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    Profile Image
                </label>

                <div className="w-full h-[180px] bg-[#050505] border border-white/10 rounded-[6px] flex items-center justify-center text-gray-500 text-[14px] cursor-pointer hover:border-white/30 transition">
                    Drag here or click to choose file
                </div>

            </div>


            {/* Category */}
            <div className="space-y-[6px]">

                <label className="text-[16px] font-[300] tracking-[0.1px] text-gray-400 uppercase">
                    Category
                </label>

                <select className="w-full h-[52px] bg-[#050505] text-gray-200 px-4 rounded-[6px] border border-white/10 outline-none focus:border-white/30 transition">

                    <option>Music</option>
                    <option>Photography</option>
                    <option>Writing</option>
                    <option>Digital Art</option>
                    <option>3D Art</option>

                </select>

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