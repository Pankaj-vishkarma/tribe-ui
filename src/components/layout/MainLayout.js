import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children, isLoggedIn = true }) {
    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <Sidebar isLoggedIn={isLoggedIn} />

            {/* Right Side */}
            <div className="flex-1 flex flex-col">

                {/* Navbar */}
                <Navbar isLoggedIn={isLoggedIn} />

                {/* Page Content */}
                <main
                    className={`flex-1 px-8 py-5 ${isLoggedIn
                            ? "bg-black text-white"
                            : "bg-gradient-to-b from-[#f2dfe3] to-[#cfe6e8] text-black"
                        }`}
                >
                    {/* Content Wrapper (IMPORTANT) */}
                    <div className="max-w-[1400px] mx-auto w-full">
                        {children}
                    </div>
                </main>

            </div>
        </div>
    );
}