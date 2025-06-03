"use client";

import { use, useLayoutEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/animations/success.json";
import failAnimation from "@/assets/animations/fail.json";
import { useRouter } from "next/navigation";
import { userService } from "@/services/userService";

export default function Activation({ params }) {
  const [success, setSuccess] = useState(null);
  const { token } = use(params);
  const Router = useRouter();

  useLayoutEffect(() => {
    async function activateAccount() {
      try {
        await userService.activeAccount(token);

        setSuccess(true);

        setTimeout(() => {
          Router.push("/");
        }, 10000);
      } catch (error) {
        console.log(error);
        setSuccess(false);
      }
    }

    activateAccount();
  }, [Router, token]);

  return (
    <div className="bg-purplish-black h-screen flex flex-col gap-10 items-center justify-center text-white">
      <div className="h-44 w-44 text-center">
        {success === true ? (
          <DotLottieReact
            data={successAnimation}
            loop
            autoplay
            className="w-full h-full"
          />
        ) : success === false ? (
          <DotLottieReact
            data={failAnimation}
            loop
            autoplay
            className="w-full h-full"
          />
        ) : (
          "Hesabı Etkinleştirmeye çalışıyoruz..."
        )}
      </div>
      <p className="text-xl font-semibold">
        {success
          ? "Hesabınızı Başarı ile etkinleştirdik"
          : "Maalesef Hesabınızı Etkinleştiremedik"}
      </p>
    </div>
  );
}
