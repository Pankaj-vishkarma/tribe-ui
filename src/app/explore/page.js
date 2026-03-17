"use client";

import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";

import ExploreHeader from "@/components/sections/explore/ExploreHeader";
import ExploreTabs from "@/components/sections/explore/ExploreTabs";
import ArtistRow from "@/components/sections/explore/ArtistRow";
import CardGrid from "@/components/sections/explore/CardGrid";
import CreatorGrid from "@/components/sections/explore/CreatorGrid";
import TokenFilters from "@/components/sections/explore/TokenFilters";

export default function ExplorePage() {
    const [activeTab, setActiveTab] = useState("browse");

    return (
        <MainLayout isLoggedIn={true}>
            <div className="p-6 text-white">

                <ExploreHeader />

                <ExploreTabs activeTab={activeTab} setActiveTab={setActiveTab} />

                {activeTab === "browse" && (
                    <>
                        <ArtistRow />
                        <CardGrid title="Newest Creations" />
                        <CardGrid title="In the Spotlight" />
                    </>
                )}

                {activeTab === "projects" && (
                    <>
                        <CreatorGrid />
                    </>
                )}

                {activeTab === "tokens" && (
                    <>
                        <TokenFilters />
                        <CardGrid />
                    </>
                )}

            </div>
        </MainLayout>
    );
}