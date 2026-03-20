"use client";

export default function Recommended({ setHasFollowing }) {
    const users = [
        { name: "JZero", image: "/home/pp.png" },
        { name: "Tobi Rockstar", image: "/home/Bitmap.png" },
        { name: "Andrea", image: "/home/pp.png" },
        { name: "JZero", image: "/home/Bitmap.png" },
        { name: "Tobi Rockstar", image: "/home/pp.png" },
        { name: "Andrea", image: "/home/Bitmap.png" },
    ];

    return (
        <div className="bg-[#0f172a] border border-white/10 rounded-2xl p-6 shadow-sm">

            {/* TITLE */}
            <h3 className="text-white text-sm font-medium mb-1">
                Recommended for You
            </h3>

            {/* DESCRIPTION */}
            <p className="text-xs text-gray-500 mb-5 leading-relaxed">
                Check out these Tribes based on your interests.
            </p>

            {/* USERS */}
            <div className="space-y-4">

                {users.map((user, i) => (
                    <div
                        key={i}
                        className="flex items-center justify-between"
                    >

                        {/* LEFT */}
                        <div className="flex items-center gap-3">

                            <img
                                src={user.image}
                                alt={user.name}
                                className="w-10 h-10 rounded-full object-cover"
                            />

                            <span className="text-sm text-white font-medium">
                                {user.name}
                            </span>

                        </div>

                        {/* FOLLOW BUTTON */}
                        <button
                            onClick={() => {
                                localStorage.setItem("hasFollowing", "true");
                                setHasFollowing(true);
                            }}
                            className="px-4 py-1.5 text-xs border border-white/20 rounded-full hover:border-white/40 hover:bg-white/10 transition"
                        >
                            Follow
                        </button>

                    </div>
                ))}

            </div>

            {/* SHOW MORE */}
            <p className="text-xs text-gray-500 mt-6 cursor-pointer hover:text-white transition">
                show more
            </p>

        </div>
    );
}