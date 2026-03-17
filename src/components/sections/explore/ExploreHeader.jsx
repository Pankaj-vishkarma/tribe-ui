export default function ExploreHeader() {
    return (
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-4xl font-semibold">Explore</h1>

            <div className="flex gap-6 text-sm text-gray-400">
                <button className="hover:text-white">BROWSE</button>
                <button className="hover:text-white">TOKENS ▾</button>
                <button className="hover:text-white">PROJECTS ▾</button>
            </div>
        </div>
    );
}