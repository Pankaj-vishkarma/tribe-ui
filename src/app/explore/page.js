"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import MainLayout from "@/components/layout/MainLayout";

import ExploreHeader from "@/components/sections/explore/ExploreHeader";
import ExploreTabs from "@/components/sections/explore/ExploreTabs";
import ArtistRow from "@/components/sections/explore/ArtistRow";
import CardGrid from "@/components/sections/explore/CardGrid";
import CreatorGrid from "@/components/sections/explore/CreatorGrid";
import TokenFilters from "@/components/sections/explore/TokenFilters";

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState("browse");

    // ✅ Category filter
    const [selectedCategory, setSelectedCategory] = useState("all");

    // ✅ GET SEARCH FROM URL
    const searchParams = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    return (
        <MainLayout isLoggedIn={true}>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white">

                {/* Header */}
                <div className="mb-4 sm:mb-6">
                    <ExploreHeader />
                </div>

                {/* Tabs */}
                <div className="mb-4 sm:mb-6">
                    <ExploreTabs
                        activeTab={activeTab}
                        setActiveTab={setActiveTab}
                    />
                </div>

                {/* Browse Tab */}
                {activeTab === "browse" && (
                    <div className="space-y-5 sm:space-y-6 lg:space-y-8">
                        <ArtistRow />
                        <CardGrid title="Newest Creations" />
                        <CardGrid title="In the Spotlight" />
                    </div>
                )}

                {/* Projects Tab */}
                {activeTab === "projects" && (
                    <div className="mt-3 sm:mt-4">
                        <CreatorGrid />
                    </div>
                )}

                {/* Tokens Tab */}
                {activeTab === "tokens" && (
                    <div className="space-y-5 sm:space-y-6 lg:space-y-8">

                        {/* Filters */}
                        <TokenFilters
                            selectedCategory={selectedCategory}
                            setSelectedCategory={setSelectedCategory}
                        />

                        {/* Cards */}
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