"use client";

import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import CommingSoonAnimation from "@/assets/animations/comming-soon.json";
import Container from "../layout/Container";

export default function ComingSoon() {
  return (
    <div className="bg-purplish-black text-white py-10">
      <Container>
        <div className="w-full aspect-square max-w-md mx-auto">
          <DotLottieReact
            data={CommingSoonAnimation}
            loop
            autoplay
            className="w-full h-full"
          />
        </div>
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Çok Yakında!
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Heyecan verici yeni özellikler üzerinde çalışıyoruz. Çok yakında
            sizlerle!
          </p>
        </div>
      </Container>
    </div>
  );
}
