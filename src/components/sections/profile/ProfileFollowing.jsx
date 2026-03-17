import FollowItem from "./FollowItem";

const users = [
    { id: 1, name: "JZero", image: "/home/pp.png", following: true },
    { id: 2, name: "Tobi Rockstar", image: "/home/pp.png", following: true },
    { id: 3, name: "Tom Crypto", image: "/home/pp.png", following: true },
    { id: 4, name: "Storyglitch", image: "/home/pp.png", following: true },
];

export default function ProfileFollowing() {
    return (
        <div className="mt-6">

            {/* LIST */}
            <div className="max-w-2xl">

                {users.length > 0 ? (
                    users.map((user) => (
                        <FollowItem
                            key={user.id}
                            user={user}
                            isFollowing={user.following}
                        />
                    ))
                ) : (
                    <div className="flex items-center justify-center h-40 text-gray-500 text-sm">
                        Not following anyone yet.
                    </div>
                )}

            </div>
        </div>
    );
}