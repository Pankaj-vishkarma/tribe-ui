import MainLayout from "@/components/layout/MainLayout";
import HomeHeader from "@/components/sections/home/HomeHeader";
import WelcomeSection from "@/components/sections/home/WelcomeSection";

export default function Page() {
    return (
        <MainLayout>
            <div className="p-6 text-white">
                <HomeHeader />
                <WelcomeSection />
            </div>
        </MainLayout>
    );
}