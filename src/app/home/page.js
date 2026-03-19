import MainLayout from "@/components/layout/MainLayout";
import HomeHeader from "@/components/sections/home/HomeHeader";
import WelcomeSection from "@/components/sections/home/WelcomeSection";

export default function Page() {
    return (
        <MainLayout>
            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white">

                <div className="mb-4 sm:mb-6">
                    <HomeHeader />
                </div>

                <WelcomeSection />

            </div>
        </MainLayout>
    );
}