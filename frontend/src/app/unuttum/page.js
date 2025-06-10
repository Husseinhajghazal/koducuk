"use client";

import Forget from "@/assets/images/forget.jpg";
import ForgetPassword from "@/components/forgetPassword/ForgetPassword";
import Image from "next/image";

export default function Unuttum() {
  return (
    <main>
      <div className="h-screen w-screen grid lg:grid-cols-3">
        <ForgetPassword />
        <div className="hidden lg:block relative overflow-hidden">
          <Image
            src={Forget}
            alt="login image"
            className="w-full h-full object-cover object-[-467px]"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-ai-purple/30" />
        </div>
      </div>
    </main>
  );
}
