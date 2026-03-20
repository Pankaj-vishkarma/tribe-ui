"use client";

import MainLayout from "@/components/layout/MainLayout";
import HomeHeader from "@/components/sections/home/HomeHeader";
import WelcomeSection from "@/components/sections/home/WelcomeSection";
import ActivityFeed from "@/components/sections/home/ActivityFeed";
import Recommended from "@/components/sections/home/Recommended";

import { useEffect, useState } from "react";

export default function Page() {
    const [hasFollowing, setHasFollowing] = useState(null);

    useEffect(() => {
        const followState = localStorage.getItem("hasFollowing");
        setHasFollowing(followState === "true");
    }, []);

    // ⛔ important (avoid flicker)
    if (hasFollowing === null) return null;

    return (
        <MainLayout isLoggedIn={true}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white">

                <div className="mb-6">
                    <HomeHeader />
                </div>

                {!hasFollowing ? (
                    <div className="mt-16">
                        <WelcomeSection setHasFollowing={setHasFollowing} />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                        <div className="lg:col-span-2 space-y-6">
                            <ActivityFeed />
                        </div>

                        <div className="hidden lg:block">
                            <Recommended setHasFollowing={setHasFollowing} />
                        </div>

                    </div>
                )}

            </div>
        </MainLayout>
    );
}