import AboutUsSection from "@/components/home/AboutUsSection";
import CallToAction from "@/components/home/CallToAction";
import CoursesSection from "@/components/home/CoursesSection";
import DividerSection from "@/components/home/DividerSection";
import HeroSection from "@/components/home/HeroSection";
import TapeSection from "@/components/home/TapeSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <DividerSection />
      <AboutUsSection />
      <TapeSection />
      <CoursesSection />
      <CallToAction />
      <Footer />
    </div>
  );
}
