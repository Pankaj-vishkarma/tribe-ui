export default function ExploreTabs({ activeTab, setActiveTab }) {
    return (
        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5 border-b border-white/10 mb-4 sm:mb-6 overflow-x-auto scrollbar-hide scroll-smooth px-1 sm:px-0">

            {["browse", "tokens", "projects"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-2 sm:pb-3 min-w-max text-[11px] sm:text-[13px] uppercase tracking-wide transition whitespace-nowrap flex-shrink-0 active:scale-95
                        ${activeTab === tab
                            ? "text-white"
                            : "text-[#6B7280] hover:text-white"
                        }`}
                >
                    {tab}

                    {/* Active underline */}
                    {activeTab === tab && (
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white opacity-90" />
                    )}
                </button>
            ))}

        </div>
    );
}