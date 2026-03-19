"use client";

import { useState, useEffect } from "react";
import MainLayout from "@/components/layout/MainLayout";

import CollectionEmpty from "@/components/sections/collection/CollectionEmpty";
import CollectionConnect from "@/components/sections/collection/CollectionConnect";
import WalletModal from "@/components/sections/collection/WalletModal";
import CollectionFilters from "@/components/sections/collection/CollectionFilters";
import CollectionCardGrid from "@/components/sections/collection/CollectionGrid";

export default function CollectionPage() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [walletConnected, setWalletConnected] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [loading, setLoading] = useState(true);

    const [activeFilter, setActiveFilter] = useState("All categories");
    const [activeCategory, setActiveCategory] = useState(null);
    const [sort, setSort] = useState("Purchase Date");

    useEffect(() => {
        const login = localStorage.getItem("isLoggedIn") === "true";
        const wallet = localStorage.getItem("walletConnected") === "true";

        setIsLoggedIn(login);
        setWalletConnected(wallet);

        setLoading(false);
    }, []);

    const handleConnect = () => {
        localStorage.setItem("walletConnected", "true");
        setWalletConnected(true);
    };

    if (loading) {
        return (
            <MainLayout isLoggedIn={false}>
                <div className="flex items-center justify-center h-[70vh] sm:h-[80vh] text-white text-sm sm:text-base">
                    Loading...
                </div>
            </MainLayout>
        );
    }

    return (
        <MainLayout isLoggedIn={isLoggedIn}>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">

                {/* HEADER */}
                <div className="mb-5 sm:mb-6 border-b border-white/10 pb-2 sm:pb-3">
                    <h1 className="text-[24px] sm:text-[30px] lg:text-[36px] font-semibold text-white tracking-tight">
                        Collection
                    </h1>
                </div>

                {/* NOT LOGGED IN */}
                {!isLoggedIn && <CollectionEmpty />}

                {/* CONNECT WALLET */}
                {isLoggedIn && !walletConnected && (
                    <CollectionConnect onConnect={() => setShowModal(true)} />
                )}

                {/* MAIN UI */}
                {isLoggedIn && walletConnected && (
                    <>
                        <CollectionFilters
                            activeFilter={activeFilter}
                            setActiveFilter={setActiveFilter}
                            activeCategory={activeCategory}
                            setActiveCategory={setActiveCategory}
                            sort={sort}
                            setSort={setSort}
                        />

                        <CollectionCardGrid
                            activeFilter={activeFilter}
                            activeCategory={activeCategory}
                            sort={sort}
                        />
                    </>
                )}

                {/* MODAL */}
                {showModal && (
                    <WalletModal
                        onClose={() => setShowModal(false)}
                        onConnect={handleConnect}
                    />
                )}

            </div>

        </MainLayout>
    );
}