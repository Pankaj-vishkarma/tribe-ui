"use client";

import ToggleSwitch from "../details/ToggleSwitch";
import UnlockableSection from "../details/UnlockableSection";

export default function DetailsStep({ formData, setFormData, next, back }) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">

                {/* TITLE */}
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                    3. Details
                </h2>

                {/* ---------------- PROPERTIES ---------------- */}
                <div className="bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-4 sm:p-5 space-y-4">
                    <h3 className="text-sm font-medium text-white">Properties</h3>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <input className="input h-10 sm:h-11 text-sm" placeholder="Key" />
                        <input className="input h-10 sm:h-11 text-sm" placeholder="Value" />
                    </div>

                    <button
                        type="button"
                        className="text-xs text-blue-400 hover:underline"
                    >
                        + Add more
                    </button>
                </div>

                {/* ---------------- UNLOCKABLE ---------------- */}
                <div className="space-y-3">
                    <h3 className="text-sm font-medium text-white">
                        Unlockable Content
                    </h3>

                    <UnlockableSection
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>

                {/* ---------------- SETTINGS ---------------- */}
                <div className="space-y-3">
                    <h3 className="text-sm font-medium text-white">
                        Settings
                    </h3>

                    <div className="space-y-3">
                        <ToggleSwitch
                            label="Part of a series"
                            value={formData.isSeries}
                            onChange={(v) =>
                                setFormData({ ...formData, isSeries: v })
                            }
                        />

                        <ToggleSwitch
                            label="For Sale"
                            value={formData.isForSale}
                            onChange={(v) =>
                                setFormData({ ...formData, isForSale: v })
                            }
                        />

                        <ToggleSwitch
                            label="Wrap as a present"
                            value={formData.isGift}
                            onChange={(v) =>
                                setFormData({ ...formData, isGift: v })
                            }
                        />
                    </div>
                </div>

                {/* ---------------- BUTTONS ---------------- */}
                <div className="flex flex-col sm:flex-row sm:justify-between gap-3 pt-4">

                    {/* Back */}
                    <button
                        type="button"
                        onClick={back}
                        className="w-full sm:w-auto px-4 py-2 border border-gray-600 rounded-lg text-sm hover:bg-[#111827] transition"
                    >
                        Back
                    </button>

                    {/* Next */}
                    <button
                        type="button"
                        onClick={next}
                        className="w-full sm:w-auto px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm font-medium transition"
                    >
                        Next
                    </button>

                </div>

            </div>

        </div>
    );
}