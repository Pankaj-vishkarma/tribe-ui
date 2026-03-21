export default function ExploreHeader() {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6 gap-3 sm:gap-4">

            {/* Title */}
            <h1 className="text-xl sm:text-2xl lg:text-4xl font-semibold whitespace-nowrap sm:flex-shrink-0">
                Explore
            </h1>

            {/* Right Menu */}
            <div className="flex items-center gap-3 sm:gap-5 lg:gap-6 text-[11px] sm:text-sm text-gray-400 overflow-x-auto scrollbar-hide scroll-smooth w-full sm:w-auto">

                <button className="hover:text-white whitespace-nowrap sm:flex-shrink-0 transition">
                    BROWSE
                </button>

                <button className="hover:text-white whitespace-nowrap sm:flex-shrink-0 transition">
                    TOKENS ▾
                </button>

                <button className="hover:text-white whitespace-nowrap sm:flex-shrink-0 transition">
                    PROJECTS ▾
                </button>

            </div>

        </div>
    );
}