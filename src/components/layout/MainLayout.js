import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
    return (
        <div className="flex min-h-screen">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <div className="flex-1 flex flex-col">

                {/* Top Navbar */}
                <Navbar />

                {/* Page Content */}
                <main className="flex-1 bg-gradient-to-b from-[#f2dfe3] to-[#cfe6e8] px-5 py-5">
                    {children}
                </main>

            </div>

        </div>
    );
}