"use client";

import ToggleSwitch from "./ToggleSwitch";

export default function UnlockableSection({ formData, setFormData }) {
    return (
        <div className="bg-[#0B0F19] border border-[#1f2937] rounded-2xl p-5 space-y-4">

            {/* Header */}
            <div className="flex items-center justify-between">
                <div>
                    <p className="text-sm font-medium text-white">
                        Unlockable Content
                    </p>
                    <p className="text-xs text-gray-400">
                        Content that will be unlocked after purchase
                    </p>
                </div>

                <ToggleSwitch
                    value={formData.unlockable}
                    onChange={(v) =>
                        setFormData({ ...formData, unlockable: v })
                    }
                />
            </div>

            {/* Content */}
            {formData.unlockable && (
                <div className="space-y-4">

                    {/* Tabs */}
                    <div className="flex gap-2">

                        {/* File Tab */}
                        <button
                            onClick={() =>
                                setFormData({ ...formData, unlockableType: "file" })
                            }
                            className={`px-4 py-1.5 rounded-lg text-sm transition
                ${formData.unlockableType === "file"
                                    ? "bg-blue-500 text-white"
                                    : "bg-[#111827] text-gray-400 hover:text-white"
                                }
              `}
                        >
                            File
                        </button>

                        {/* Link Tab */}
                        <button
                            onClick={() =>
                                setFormData({ ...formData, unlockableType: "link" })
                            }
                            className={`px-4 py-1.5 rounded-lg text-sm transition
                ${formData.unlockableType === "link"
                                    ? "bg-blue-500 text-white"
                                    : "bg-[#111827] text-gray-400 hover:text-white"
                                }
              `}
                        >
                            Link
                        </button>
                    </div>

                    {/* Input Area */}
                    {formData.unlockableType === "link" ? (
                        <input
                            className="input h-11"
                            placeholder="Enter URL"
                            value={formData.link}
                            onChange={(e) =>
                                setFormData({ ...formData, link: e.target.value })
                            }
                        />
                    ) : (
                        <label className="border border-dashed border-[#1f2937] rounded-xl p-4 flex flex-col items-center justify-center cursor-pointer hover:bg-[#111827] transition">

                            <input
                                type="file"
                                className="hidden"
                                onChange={(e) =>
                                    setFormData({
                                        ...formData,
                                        file: e.target.files[0],
                                    })
                                }
                            />

                            <p className="text-sm text-gray-400">
                                Upload file
                            </p>

                            {formData.file && (
                                <p className="text-xs text-green-400 mt-1">
                                    {formData.file.name}
                                </p>
                            )}
                        </label>
                    )}

                </div>
            )}
        </div>
    );
}