import Container from "@/components/layout/Container";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import React from "react";
import ProgressBar from "@/components/lessons/ProgressBar";
import Button from "@/components/ui/Button";

const page = () => {
  return (
    <React.Fragment>
      <Header />
      <main className="min-h-screen bg-purplish-black">
        <Container>
          <div className="py-12 flex flex-col gap-7">
            <div className="flex items-center gap-5">
              <ProgressBar percentage={50} />
              <Link
                href="/kurslar"
                className="text-kc-gray hover:text-white hover:bg-kc-gray/20 rounded-full p-1.5 duration-300"
              >
                <IoClose size={25} />
              </Link>
            </div>
            <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-semibold md:px-14 lg:px-28">
              {/* Kısa videoyu izleyin ve bilgileri öğrenin. */}
              Soru: Bir HTML sayfasında ana metni tanımlamak için hangi eleman
              kullanılır?
            </h2>
            <div className="md:px-14 lg:px-28 grid grid-cols-2 md:grid-cols-4 gap-3">
              <div></div>
            </div>
            {/* <div className="md:px-14 lg:px-28">
              <iframe
                width="100%"
                height="300"
                src="https://www.youtube.com/embed/tgbNymZ7vqY"
                allowFullScreen
              />
            </div>
            <div className="md:px-14 lg:px-28 text-kc-gray">
              Programlamanın tarihi, elektronik dünyasında korkunç bir devrim
              olan bilgisayar testinin 1930'lu yıllara kadar uzanmaktadır.
            </div>
            <div className="md:px-14 lg:px-28">
              <Button className="py-4 px-8 w-full md:w-max">
                Test'i başla
              </Button>
            </div> */}
          </div>
        </Container>
      </main>
      <Footer />
    </React.Fragment>
  );
};

export default page;
