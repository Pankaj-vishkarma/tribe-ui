"use client";

import { useRouter } from "next/navigation";

import MainLayout from "@/components/layout/MainLayout";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
import Avatar from "@/components/ui/Avatar";

export default function EditProfilePage() {
    const router = useRouter();

    return (
        <MainLayout>
            <div className="py-6 text-white">

                {/* CENTER WRAPPER */}
                <div className="max-w-3xl mx-auto">

                    {/* HEADER */}
                    <div className="flex justify-between items-center border-b border-[#1f1f1f] pb-4">
                        <h1 className="text-2xl font-semibold">Edit Info</h1>

                        <div className="flex gap-3">
                            <Button
                                variant="outline"
                                onClick={() => router.back()}
                                className="px-4 py-1.5 text-sm"
                            >
                                Cancel
                            </Button>

                            <Button className="px-5 py-1.5 text-sm">
                                Save
                            </Button>
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-8 space-y-6">

                        {/* IMAGE */}
                        <div className="flex flex-col items-center gap-2">
                            <Avatar size="xl" src="/home/pp.png" />

                            <p className="text-gray-500 text-sm">
                                Drag image here
                            </p>

                            <Button
                                variant="outline"
                                className="px-4 py-1 text-sm"
                            >
                                Change
                            </Button>
                        </div>

                        {/* FORM */}
                        <div className="space-y-4">

                            <Input placeholder="Name" />
                            <Input placeholder="Username" />
                            <Input placeholder="Email Address" />

                            <textarea
                                placeholder="Bio"
                                className="w-full bg-[#111] border border-[#2a2a2a] text-white text-sm px-4 py-3 rounded-lg outline-none focus:border-white transition"
                            />

                            <Input placeholder="Credits" />
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}