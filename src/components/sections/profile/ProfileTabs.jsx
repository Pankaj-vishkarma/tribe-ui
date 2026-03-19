const tabs = [
    "projects",
    "creations",
    "activity",
    "following",
    "followers",
];

export default function ProfileTabs({ activeTab, setActiveTab }) {
    return (
        <div className="mt-6 sm:mt-8 border-b border-[#1f1f1f] pb-2 sm:pb-3">

            <div className="flex gap-3 sm:gap-6 overflow-x-auto scrollbar-hide">

                {tabs.map((tab) => {
                    const isActive = activeTab === tab;

                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`
                                flex-shrink-0 whitespace-nowrap
                                text-[12px] sm:text-sm capitalize px-3 py-1.5 rounded-md transition-all duration-200
                                ${isActive
                                    ? "border border-white text-white bg-white/5"
                                    : "text-gray-500 hover:text-white"
                                }
                            `}
                        >
                            {tab}
                        </button>
                    );
                })}

            </div>
        </div>
    );
}