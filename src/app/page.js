import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import HomeHeader from "@/components/sections/home/HomeHeader";

export default function Page() {
  return (
    <MainLayout isLoggedIn={false}>
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-white">

        {/* Home Header */}
        <div className="mb-4 sm:mb-6">
          <HomeHeader />
        </div>

        {/* Hero Section */}
        <HeroSection />

      </div>
    </MainLayout>
  );
}