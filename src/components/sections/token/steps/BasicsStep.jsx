"use client";

import UploadBox from "../basics/UploadBox";
import PreviewCard from "../basics/PreviewCard";

export default function BasicsStep({
    formData,
    setFormData,
    next,
    back,
    isValid,
}) {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">

            {/* LEFT */}
            <div className="lg:col-span-2 space-y-6 lg:space-y-8">

                {/* TITLE */}
                <h2 className="text-lg sm:text-xl font-semibold text-white">
                    2. Basics
                </h2>

                {/* NAME */}
                <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300">Name</label>
                    <input
                        className="input h-10 sm:h-11 text-sm"
                        placeholder="Enter name"
                        value={formData.name}
                        onChange={(e) =>
                            setFormData({ ...formData, name: e.target.value })
                        }
                    />

                    {!formData.name && (
                        <p className="text-xs text-red-400">
                            Name is required
                        </p>
                    )}
                </div>

                {/* PROJECT */}
                <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300">Project</label>
                    <select
                        className="input h-10 sm:h-11 text-sm"
                        value={formData.project}
                        onChange={(e) =>
                            setFormData({ ...formData, project: e.target.value })
                        }
                    >
                        <option>Personal Project</option>
                        <option>Create new Project</option>
                    </select>
                </div>

                {/* THUMBNAIL */}
                <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300">Thumbnail</label>
                    <UploadBox formData={formData} setFormData={setFormData} />
                </div>

                {/* DESCRIPTION */}
                <div className="space-y-2">
                    <label className="text-xs sm:text-sm text-gray-300">Description</label>
                    <textarea
                        className="input min-h-[100px] sm:min-h-[120px] text-sm"
                        placeholder="Enter description"
                        value={formData.description}
                        onChange={(e) =>
                            setFormData({ ...formData, description: e.target.value })
                        }
                    />
                </div>

                {/* BUTTONS */}
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

            {/* RIGHT PREVIEW */}
            <div className="lg:col-span-1">
                <div className="mt-6 lg:mt-0">
                    <PreviewCard formData={formData} />
                </div>
            </div>

        </div>
    );
}