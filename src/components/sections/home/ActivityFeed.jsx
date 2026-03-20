"use client";

export default function ActivityFeed() {
    return (
        <div className="space-y-6">

            {/* ================= TOP POST ================= */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-sm">

                <div className="flex gap-4">

                    <img
                        src="/home/pp.png"
                        className="w-12 h-12 rounded-full object-cover"
                        alt="user"
                    />

                    <div>
                        <p className="text-white text-sm font-medium">
                            JZero
                        </p>

                        <p className="text-sm text-gray-500 mt-1 max-w-md leading-relaxed">
                            Check out the new version. I added some background vocals
                            and refined the bass line.
                        </p>
                    </div>

                </div>

            </div>

            {/* ================= MEMBERS ADDED ================= */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-sm">

                <p className="text-sm text-gray-500 mb-4">
                    Added new Tribe members
                </p>

                <div className="flex items-center gap-6">

                    {[
                        { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
                        { name: "Tom", image: "/home/pp.png" },
                        { name: "Andrea", image: "/home/Bitmap.png" },
                    ].map((user, i) => (
                        <div key={i} className="text-center">

                            <img
                                src={user.image}
                                className="w-12 h-12 rounded-full mx-auto object-cover"
                                alt={user.name}
                            />

                            <p className="text-xs mt-2 text-gray-300">
                                {user.name}
                            </p>

                        </div>
                    ))}

                </div>

            </div>

            {/* ================= FOLLOWING ================= */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-sm">

                <p className="text-sm text-gray-500 mb-4">
                    Is now following a new Tribe
                </p>

                <div className="flex items-center justify-between">

                    <div className="flex items-center gap-3">

                        <img
                            src="/home/pp.png"
                            className="w-10 h-10 rounded-full object-cover"
                            alt="user"
                        />

                        <span className="text-white text-sm font-medium">
                            Freilich Open Arts
                        </span>

                    </div>

                    <button className="px-4 py-1.5 text-xs border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition">
                        Follow
                    </button>

                </div>

            </div>

            {/* ================= CROWDFUND ================= */}
            <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-sm">

                <p className="text-sm text-gray-500 mb-4">
                    Announced a crowdfund
                </p>

                <div className="flex items-center gap-4 mb-5">

                    <img
                        src="/home/Bitmap.png"
                        className="w-12 h-12 rounded-full object-cover"
                        alt="user"
                    />

                    <div>
                        <p className="text-white text-sm font-medium">
                            Tobi Rockstar
                        </p>
                        <p className="text-xs text-gray-500">
                            Raising for our first album
                        </p>
                    </div>

                </div>

                <div className="flex justify-between text-xs text-gray-500 mb-2">
                    <span>5h 24min left</span>
                    <span>27% Funded</span>
                    <span>Raising ETH 250</span>
                </div>

                <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                    <div className="bg-green-400 h-2 w-[27%]" />
                </div>

            </div>

        </div>
    );
}