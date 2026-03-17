import FollowItem from "./FollowItem";

const users = [
    { id: 1, name: "JZero", image: "/home/pp.png", following: true },
    { id: 2, name: "Tobi Rockstar", image: "/home/pp.png", following: true },
    { id: 3, name: "Victor Pacheco", image: "/home/pp.png", following: false },
    { id: 4, name: "Julia Koenig", image: "/home/pp.png", following: false },
];

export default function ProfileFollowers() {
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
                        No followers yet.
                    </div>
                )}

            </div>
        </div>
    );
}