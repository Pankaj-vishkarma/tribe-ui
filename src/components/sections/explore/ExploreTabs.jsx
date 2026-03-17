export default function ExploreTabs({ activeTab, setActiveTab }) {
    return (
        <div className="flex items-center gap-5 border-b border-white/10 mb-6">

            {["browse", "tokens", "projects"].map((tab) => (
                <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`relative pb-3 text-[13px] uppercase tracking-wide transition ${activeTab === tab
                            ? "text-white"
                            : "text-[#6B7280] hover:text-white"
                        }`}
                >
                    {tab}

                    {/* Active underline */}
                    {activeTab === tab && (
                        <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white" />
                    )}
                </button>
            ))}

        </div>
    );
}