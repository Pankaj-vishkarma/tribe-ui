import TokenCard from "@/components/token/TokenCard";

export default function ProfileCreations() {

    const tokens = [
        { id: 1, title: "Landfall" },
        { id: 2, title: "Landfall" },
        { id: 3, title: "Landfall" },
        { id: 4, title: "Landfall" },
        { id: 5, title: "Landfall" },
        { id: 6, title: "Landfall" },
    ];

    return (
        <div className="mt-4 sm:mt-6">

            {/* EMPTY STATE */}
            {tokens.length === 0 && (
                <div className="text-center text-gray-400 py-16 sm:py-20 text-sm">
                    No creations yet
                </div>
            )}

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">

                {tokens.map((token) => (
                    <div key={token.id}>
                        <TokenCard {...token} />
                    </div>
                ))}

            </div>

        </div>
    );
}