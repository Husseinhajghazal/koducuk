"use client";

import axios from "axios";
import { use, useLayoutEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/animations/success.json";
import failAnimation from "@/assets/animations/fail.json";

export default function Activation({ params }) {
  const [success, setSuccess] = useState(null);
  const { token } = use(params);

  useLayoutEffect(() => {
    async function activateAccount() {
      try {
        await axios.get(
          process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL +
            "/api/user/activate/" +
            token
        );
        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }
    }

    if (token) {
      activateAccount();
    }
  }, [token]);

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
