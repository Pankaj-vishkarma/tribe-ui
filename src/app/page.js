import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/sections/HeroSection";
import HomeHeader from "@/components/sections/home/HomeHeader";

export default function Page() {
  return (
    <MainLayout isLoggedIn={false}>
      <div className="px-6">

        {/* Home Header */}
        <HomeHeader />

        {/* Hero Section */}
        <HeroSection />

      </div>
    </MainLayout>
  );
}