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
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white">

                {/* CENTER WRAPPER */}
                <div className="max-w-3xl mx-auto">

                    {/* HEADER */}
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 border-b border-[#1f1f1f] pb-4">

                        <h1 className="text-[20px] sm:text-2xl font-semibold">
                            Edit Info
                        </h1>

                        <div className="flex gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">

                            <Button
                                variant="outline"
                                onClick={() => router.back()}
                                className="px-3 sm:px-4 py-1.5 text-sm"
                            >
                                Cancel
                            </Button>

                            <Button className="px-4 sm:px-5 py-1.5 text-sm">
                                Save
                            </Button>

                        </div>
                    </div>

                    {/* CONTENT */}
                    <div className="mt-6 sm:mt-8 space-y-5 sm:space-y-6">

                        {/* IMAGE */}
                        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                            <Avatar size="xl" src="/home/pp.png" />

                            <p className="text-gray-500 text-xs sm:text-sm">
                                Drag image here
                            </p>

                            <Button
                                variant="outline"
                                className="px-3 sm:px-4 py-1 text-xs sm:text-sm"
                            >
                                Change
                            </Button>
                        </div>

                        {/* FORM */}
                        <div className="space-y-3 sm:space-y-4">

                            <Input placeholder="Name" />
                            <Input placeholder="Username" />
                            <Input placeholder="Email Address" />

                            <textarea
                                placeholder="Bio"
                                className="w-full bg-[#111] border border-[#2a2a2a] text-white text-[13px] sm:text-sm px-4 py-2.5 sm:py-3 rounded-lg outline-none focus:border-white transition min-h-[100px] sm:min-h-[120px]"
                            />

                            <Input placeholder="Credits" />
                        </div>

                    </div>
                </div>
            </div>
        </MainLayout>
    );
}