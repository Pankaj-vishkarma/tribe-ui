"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const tabs = [
    "preferences",
    "password",
    "wallet",
    "emails",
    "account",
];

export default function SettingsPage() {
    const [activeTab, setActiveTab] = useState("preferences");

    return (
        <MainLayout>
            <div className="py-6 text-white">

                <div className="max-w-5xl mx-auto">

                    {/* TITLE */}
                    <h1 className="text-[28px] font-semibold mb-8">Settings</h1>

                    <div className="flex gap-12">

                        {/* LEFT MENU */}
                        <div className="w-52 space-y-4 border-r border-[#1f1f1f] pr-6">

                            {tabs.map((tab) => {
                                const isActive = activeTab === tab;

                                return (
                                    <p
                                        key={tab}
                                        onClick={() => setActiveTab(tab)}
                                        className={`
                                            cursor-pointer capitalize text-sm transition
                                            ${isActive
                                                ? "text-white font-medium"
                                                : "text-gray-500 hover:text-white"
                                            }
                                        `}
                                    >
                                        {tab}
                                    </p>
                                );
                            })}

                        </div>

                        {/* RIGHT CONTENT */}
                        <div className="flex-1">

                            {/* PREFERENCES */}
                            {activeTab === "preferences" && (
                                <div className="space-y-6 max-w-md">

                                    <Toggle label="Dark mode" />
                                    <Toggle label="Auto play videos" />
                                    <Toggle label="Show NSFW content" />

                                </div>
                            )}

                            {/* PASSWORD */}
                            {activeTab === "password" && (
                                <div className="space-y-4 max-w-md">

                                    <Input placeholder="Current Password" />
                                    <Input placeholder="New Password" />
                                    <Input placeholder="Confirm Password" />

                                    <Button>
                                        Update Password
                                    </Button>

                                </div>
                            )}

                            {/* WALLET */}
                            {activeTab === "wallet" && (
                                <div className="space-y-4 max-w-md">

                                    <p className="text-gray-400 text-sm">
                                        Connect your wallet to manage NFTs.
                                    </p>

                                    <Button>
                                        Connect Wallet
                                    </Button>

                                </div>
                            )}

                            {/* EMAILS */}
                            {activeTab === "emails" && (
                                <div className="space-y-6 max-w-md">

                                    <Toggle label="Marketing Emails" />
                                    <Toggle label="Product Updates" />
                                    <Toggle label="Security Alerts" />

                                </div>
                            )}

                            {/* ACCOUNT */}
                            {activeTab === "account" && (
                                <div className="space-y-4 max-w-md">

                                    <p className="text-gray-400 text-sm">
                                        Permanently delete your account.
                                    </p>

                                    <Button variant="danger">
                                        Delete Account
                                    </Button>

                                </div>
                            )}

                        </div>
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}





/* 🔥 FIXED TOGGLE COMPONENT */

function Toggle({ label }) {
    const [enabled, setEnabled] = useState(true);

    return (
        <div className="flex items-center justify-between">

            <span className="text-sm text-white">{label}</span>

            <div
                onClick={() => setEnabled(!enabled)}
                className={`
                    w-10 h-5 flex items-center rounded-full p-[2px] cursor-pointer transition-all duration-200
                    ${enabled ? "bg-white" : "bg-[#2a2a2a]"}
                `}
            >
                <div
                    className={`
                        w-4 h-4 bg-black rounded-full transition-all duration-200
                        ${enabled ? "translate-x-5" : ""}
                    `}
                />
            </div>

        </div>
    );
}