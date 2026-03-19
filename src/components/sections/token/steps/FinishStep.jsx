"use client";

import PreviewCard from "../basics/PreviewCard";

export default function FinishStep({ formData, back }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">

                {/* TITLE */}
                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        4. Review and Finish
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400">
                        Review your token details before creating.
                    </p>
                </div>

                {/* SUMMARY CARD */}
                <div className="bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-4 sm:p-5 space-y-4">

                    <div>
                        <p className="text-[11px] sm:text-xs text-gray-400">Name</p>
                        <p className="text-sm text-white">{formData.name || "—"}</p>
                    </div>

                    <div>
                        <p className="text-[11px] sm:text-xs text-gray-400">Project</p>
                        <p className="text-sm text-white">{formData.project || "—"}</p>
                    </div>

                    <div>
                        <p className="text-[11px] sm:text-xs text-gray-400">Description</p>
                        <p className="text-sm text-white">
                            {formData.description || "—"}
                        </p>
                    </div>

                    <div>
                        <p className="text-[11px] sm:text-xs text-gray-400">Type</p>
                        <p className="text-sm text-white">
                            {formData.type || "—"}
                        </p>
                    </div>

                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-4">

                    {/* Back */}
                    <button
                        onClick={back}
                        className="w-full sm:w-auto px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-[#111827] transition"
                    >
                        Back
                    </button>

                    {/* Create */}
                    <button
                        className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition"
                    >
                        Create Token
                    </button>

                </div>
            </div>

            {/* RIGHT PREVIEW */}
            <div className="lg:col-span-1">
                <div className="mt-6 lg:mt-0">
                    <PreviewCard formData={formData} />
                </div>
            </div>

        </div>
    );
}