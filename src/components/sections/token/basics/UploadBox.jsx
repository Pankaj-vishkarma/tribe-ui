"use client";

export default function UploadBox({ formData, setFormData }) {
    const handleFile = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({ ...formData, thumbnail: file });
        }
    };

    return (
        <div className="border border-dashed border-[#1f2937] rounded-xl p-4 sm:p-6 text-center bg-[#0B0F19]">

            {!formData.thumbnail ? (
                <div className="flex flex-col items-center gap-2 sm:gap-3">

                    {/* Text */}
                    <p className="text-xs sm:text-sm text-gray-400">
                        Drag image here
                    </p>

                    <p className="text-[10px] sm:text-xs text-gray-500">or</p>

                    {/* Hidden Input */}
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFile}
                        />

                        {/* Button */}
                        <div className="px-3 sm:px-4 py-2 border border-gray-600 rounded-lg text-xs sm:text-sm text-white hover:bg-[#111827] transition">
                            Upload
                        </div>
                    </label>

                </div>
            ) : (
                <div className="flex flex-col items-center gap-2 sm:gap-3">

                    {/* Preview circle */}
                    <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-600 rounded-full" />

                    {/* File name */}
                    <p className="text-[10px] sm:text-xs text-gray-400 max-w-[120px] truncate">
                        {formData.thumbnail.name}
                    </p>

                    {/* Uploaded */}
                    <p className="text-green-400 text-xs sm:text-sm">
                        Uploaded
                    </p>

                    {/* Change button */}
                    <label className="cursor-pointer">
                        <input
                            type="file"
                            className="hidden"
                            onChange={handleFile}
                        />

                        <div className="px-2 sm:px-3 py-1 border border-gray-600 rounded-md text-[10px] sm:text-xs hover:bg-[#111827] transition">
                            Change file
                        </div>
                    </label>

                </div>
            )}
        </div>
    );
}