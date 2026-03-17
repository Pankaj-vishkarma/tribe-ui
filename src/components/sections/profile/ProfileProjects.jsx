import Avatar from "@/components/ui/Avatar";

const projects = [
    { id: 1, name: "JZero", image: "/home/pp.png" },
    { id: 2, name: "Tobi Rockstar", image: "/home/pp.png" },
    { id: 3, name: "Tom Crypto", image: "/home/pp.png" },
    { id: 4, name: "Storyglitch", image: "/home/pp.png" },
];

export default function ProfileProjects() {
    return (
        <div className="mt-6">

            <div className="max-w-2xl space-y-5">

                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div
                            key={project.id}
                            className="flex items-center gap-4"
                        >
                            <Avatar size="lg" src={project.image} />

                            <p className="text-white text-sm font-medium">
                                {project.name}
                            </p>
                        </div>
                    ))
                ) : (
                    <div className="flex items-center justify-center h-40 text-gray-500 text-sm">
                        No projects yet.
                    </div>
                )}

            </div>

        </div>
    );
}