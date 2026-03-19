"use client";

import TokenCategory from "../kind/TokenCategory";

const contentTypes = [
    "Video",
    "Visual Art",
    "Audio",
    "Game",
    "Writing",
    "Other",
];

const functionalTypes = [
    "Tickets",
    "Voucher",
    "Membership",
    "Certificate",
];

export default function KindStep({
    formData,
    setFormData,
    next,
    isValid,
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">

                <div>
                    <h2 className="text-lg sm:text-xl font-semibold text-white mb-2">
                        1. What kind of Token
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-400">
                        Choose the type of token you want to create.
                    </p>
                </div>

                <TokenCategory
                    title="Content Token"
                    description="Create a unique token for your digital content like video, art, music, games, or writing."
                    items={contentTypes}
                    formData={formData}
                    setFormData={setFormData}
                />

                <TokenCategory
                    title="Functional Token"
                    description="Create tokens with utility such as tickets, memberships, vouchers, or certificates."
                    items={functionalTypes}
                    formData={formData}
                    setFormData={setFormData}
                />

                {/* NEXT BUTTON */}
                <div className="pt-2">
                    <button
                        type="button"
                        onClick={next}
                        disabled={!isValid}
                        className={`w-full sm:w-auto px-6 py-2 rounded-lg text-sm font-medium transition
              ${isValid
                                ? "bg-blue-500 hover:bg-blue-600"
                                : "bg-gray-700 opacity-50 cursor-not-allowed"
                            }
            `}
                    >
                        Next
                    </button>
                </div>

            </div>

            {/* RIGHT FAQ */}
            <div className="lg:col-span-1">
                <div className="bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-4 sm:p-5 lg:sticky lg:top-6">

                    <h3 className="text-sm font-medium text-white mb-4">FAQ</h3>

                    <div className="space-y-3 sm:space-y-4 text-xs sm:text-sm">

                        <div className="border-b border-[#1f2937] pb-3">
                            <p className="text-gray-300">
                                What is a Non-fungible token (NFT)?
                            </p>
                        </div>

                        <div className="border-b border-[#1f2937] pb-3">
                            <p className="text-gray-300">
                                What is a Smart Contract?
                            </p>
                        </div>

                        <div className="border-b border-[#1f2937] pb-3">
                            <p className="text-gray-300">
                                Why are tokens better?
                            </p>
                        </div>

                        <div className="border-b border-[#1f2937] pb-3">
                            <p className="text-gray-300">
                                What are gas fees?
                            </p>
                        </div>

                        <div>
                            <p className="text-gray-300">
                                How can I distribute tokens?
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
}