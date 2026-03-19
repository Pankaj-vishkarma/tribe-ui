"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";

import ExploreHeader from "@/components/sections/explore/ExploreHeader";
import ExploreTabs from "@/components/sections/explore/ExploreTabs";
import ArtistRow from "@/components/sections/explore/ArtistRow";
import CardGrid from "@/components/sections/explore/CardGrid";
import CreatorGrid from "@/components/sections/explore/CreatorGrid";
import TokenFilters from "@/components/sections/explore/TokenFilters";

function ExploreContent() {
    const [activeTab, setActiveTab] = useState("browse");
    const [selectedCategory, setSelectedCategory] = useState("all");

    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    return (
        <MainLayout isLoggedIn={true}>
            <div className="w-full px-4 sm:px-6 py-4 sm:py-6 text-white max-w-7xl mx-auto">

                <div className="mb-4 sm:mb-6">
                    <ExploreHeader />
                </div>

                <div className="mb-4 sm:mb-6">
                    <ExploreTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>

                {activeTab === "browse" && (
                    <div className="space-y-6 sm:space-y-8">
                        <ArtistRow />
                        <CardGrid title="Newest Creations" />
                        <CardGrid title="In the Spotlight" />
                    </div>
                )}

                {activeTab === "projects" && (
                    <div className="mt-2 sm:mt-4">
                        <CreatorGrid />
                    </div>
                )}

                {activeTab === "tokens" && (
                    <div className="space-y-6 sm:space-y-8">

                        <TokenFilters
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />

                        <CardGrid
                            selectedCategory={selectedCategory}
                            searchQuery={searchQuery}
                        />
                    </div>
                )}

            </div>
        </MainLayout>
    );
}

export default function ExplorePage() {
    return (
        <Suspense fallback={<div className="text-white p-6">Loading...</div>}>
            <ExploreContent />
        </Suspense>
    );
}