import AboutUsSection from "@/components/home/AboutUsSection";
import CallToAction from "@/components/home/CallToAction";
import CoursesSection from "@/components/home/CoursesSection";
import DividerSection from "@/components/home/DividerSection";
import HeroSection from "@/components/home/HeroSection";
import TapeSection from "@/components/home/TapeSection";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

async function getCourses() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL}/api/course/active?page=1&limit=8`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    return data.data[0].courses;
  } catch (error) {
    console.error(error);
    return [];
  }
}

export default async function Home() {
  const courses = await getCourses();

  return (
    <React.Fragment>
      <Header />
      <main>
        <HeroSection />
        <DividerSection />
        <AboutUsSection />
        <TapeSection />
        <CoursesSection courses={courses} />
        <CallToAction />
        <Footer />
      </main>
    </React.Fragment>
  );
}
