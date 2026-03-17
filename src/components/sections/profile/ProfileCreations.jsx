import TokenCard from "@/components/token/TokenCard";

export default function ProfileCreations() {

    // mock data (future API ready)
    const tokens = [
        { id: 1, title: "Landfall" },
        { id: 2, title: "Landfall" },
        { id: 3, title: "Landfall" },
        { id: 4, title: "Landfall" },
        { id: 5, title: "Landfall" },
        { id: 6, title: "Landfall" },
    ];

    return (
        <div className="mt-6">

            {/* GRID */}
            <div className="grid grid-cols-3 gap-6">

                {tokens.map((token) => (
                    <div key={token.id} className="flex justify-start">
                        <TokenCard {...token} />
                    </div>
                ))}

            </div>

        </div>
    );
}