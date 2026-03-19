"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import MainLayout from "@/components/layout/MainLayout";

import ProfileHeader from "@/components/sections/profile/ProfileHeader";
import ProfileTabs from "@/components/sections/profile/ProfileTabs";

import ProfileProjects from "@/components/sections/profile/ProfileProjects";
import ProfileCreations from "@/components/sections/profile/ProfileCreations";
import ProfileActivity from "@/components/sections/profile/ProfileActivity";
import ProfileFollowing from "@/components/sections/profile/ProfileFollowing";
import ProfileFollowers from "@/components/sections/profile/ProfileFollowers";

export default function ProfilePage() {
    const router = useRouter();

    const [activeTab, setActiveTab] = useState("projects");
    const [isFollowing, setIsFollowing] = useState(false);
    const [isOwner, setIsOwner] = useState(true);

    // AUTH CHECK
    useEffect(() => {
        const loggedIn = localStorage.getItem("isLoggedIn");

        if (!loggedIn) {
            router.push("/signup");
        }

        setIsOwner(true);
    }, [router]);

    return (
        <MainLayout>
            <div className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 lg:py-8 text-white">

                {/* CENTERED CONTENT */}
                <div className="max-w-5xl mx-auto">

                    {/* HEADER */}
                    <ProfileHeader
                        isOwner={isOwner}
                        isFollowing={isFollowing}
                        setIsFollowing={setIsFollowing}
                    />

                    {/* TABS */}
                    <div className="mt-4 sm:mt-6">
                        <ProfileTabs
                            activeTab={activeTab}
                            setActiveTab={setActiveTab}
                        />
                    </div>

                    {/* TAB CONTENT */}
                    <div className="mt-6 sm:mt-8">
                        {activeTab === "projects" && <ProfileProjects />}
                        {activeTab === "creations" && <ProfileCreations />}
                        {activeTab === "activity" && <ProfileActivity />}
                        {activeTab === "following" && <ProfileFollowing />}
                        {activeTab === "followers" && <ProfileFollowers />}
                    </div>

                </div>
            </div>
        </MainLayout>
    );
}