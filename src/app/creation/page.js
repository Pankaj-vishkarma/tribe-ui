"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreationPage() {
    const router = useRouter();

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [file, setFile] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#05070d] via-[#0b0f19] to-[#05070d] text-white px-4 py-12">

            <div className="max-w-2xl mx-auto">

                {/* 🔙 BACK BUTTON */}
                <button
                    onClick={() => router.back()}
                    className="mb-6 text-sm text-gray-400 hover:text-white transition"
                >
                    ← Back
                </button>

                {/* HEADER */}
                <h1 className="text-[28px] font-semibold mb-10 tracking-tight">
                    New Creation
                </h1>

                {/* UPLOAD BOX */}
                <div className="border border-dashed border-gray-700 rounded-2xl h-[140px] flex flex-col items-center justify-center gap-3 mb-8 hover:border-gray-500 transition">

                    <input
                        type="file"
                        onChange={(e) => setFile(e.target.files[0])}
                        className="hidden"
                        id="fileUpload"
                    />

                    <label
                        htmlFor="fileUpload"
                        className="cursor-pointer flex flex-col items-center justify-center gap-3"
                    >
                        <div className="w-12 h-12 bg-[#111827] rounded-full flex items-center justify-center text-lg">
                            +
                        </div>

                        <p className="text-sm text-gray-400">
                            Click to upload file
                        </p>
                    </label>

                    {file && (
                        <p className="text-xs text-green-400">
                            {file.name}
                        </p>
                    )}
                </div>

                {/* FORM */}
                <div className="space-y-6">

                    {/* TITLE */}
                    <div>
                        <label className="text-sm text-gray-400 block mb-2">
                            Title
                        </label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            placeholder="Enter title"
                            className="w-full h-[48px] px-4 bg-[#0f1623] rounded-xl outline-none border border-transparent focus:border-gray-600 transition"
                        />
                    </div>

                    {/* DESCRIPTION */}
                    <div>
                        <label className="text-sm text-gray-400 block mb-2">
                            Description
                        </label>
                        <textarea
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows={4}
                            placeholder="Write something..."
                            className="w-full px-4 py-3 bg-[#0f1623] rounded-xl outline-none border border-transparent focus:border-gray-600 transition resize-none"
                        />
                    </div>

                </div>

                {/* PREVIEW */}
                {(title || file) && (
                    <div className="mt-10 p-5 bg-[#111827] rounded-xl">

                        <p className="text-sm text-gray-400 mb-3">
                            Preview
                        </p>

                        <div className="flex items-center gap-4">

                            <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center">
                                🎵
                            </div>

                            <div>
                                <p className="text-white font-medium">
                                    {title || "Untitled"}
                                </p>
                                <p className="text-xs text-gray-400">
                                    {file?.name || "No file selected"}
                                </p>
                            </div>

                        </div>

                    </div>
                )}

                {/* BUTTON */}
                <button className="mt-10 w-full h-[52px] bg-pink-500 hover:bg-pink-600 rounded-full text-sm font-medium shadow-[0_0_60px_rgba(255,0,128,0.6)] hover:shadow-[0_0_80px_rgba(255,0,128,0.8)] transition-all duration-200">
                    Publish Creation
                </button>

            </div>
        </div>
    );
}