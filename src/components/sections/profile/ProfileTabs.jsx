const tabs = [
    "projects",
    "creations",
    "activity",
    "following",
    "followers",
];

export default function ProfileTabs({ activeTab, setActiveTab }) {
    return (
        <div className="mt-8 flex gap-6 border-b border-[#1f1f1f] pb-3">

            {tabs.map((tab) => {
                const isActive = activeTab === tab;

                return (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`
                            text-sm capitalize px-3 py-1.5 rounded-md transition-all duration-200
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
    );
}