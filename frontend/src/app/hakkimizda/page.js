import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AboutUsContent from "@/components/aboutUs/AboutUsContent";

export default function Hakkimizda() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-purplish-black">
        <AboutUsContent />
      </main>
      <Footer />
    </>
  );
}
