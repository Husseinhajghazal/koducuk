import AboutUsSection from "@/components/home/AboutUsSection";
import CallToAction from "@/components/home/CallToAction";
import CoursesSection from "@/components/home/CoursesSection";
import DividerSection from "@/components/home/DividerSection";
import HeroSection from "@/components/home/HeroSection";
import TapeSection from "@/components/home/TapeSection";
import Footer from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <DividerSection />
        <AboutUsSection />
        <TapeSection />
        <CoursesSection />
        <CallToAction />
        <Footer />
      </main>
    </React.Fragment>
  );
}
