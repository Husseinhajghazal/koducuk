"use client";

import { use, useEffect, useState } from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/animations/success.json";
import failAnimation from "@/assets/animations/fail.json";
import { useRouter } from "next/navigation";
import { userService } from "@/services/userService";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/userSlice";

export default function Activation({ params }) {
  const [success, setSuccess] = useState(null);
  const { token } = use(params);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    async function activateAccount() {
      try {
        const response = await userService.activeAccount(token);
        const { token: newToken, expiresIn, ...userData } = response.data;

        // Store authentication data
        localStorage.setItem("token", newToken);
        localStorage.setItem("tokenExpiration", expiresIn);

        // Update Redux store with user data
        dispatch(setUser({ user: userData, expiresIn }));

        setSuccess(true);

        setTimeout(() => {
          router.push("/");
        }, 3000);
      } catch (error) {
        console.error(error);
        setSuccess(false);
      }
    }

    activateAccount();
  }, [router, token, dispatch]);

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
        {success === true
          ? "Hesabınızı Başarı ile etkinleştirdik"
          : success === false
          ? "Maalesef Hesabınızı Etkinleştiremedik"
          : "Hesabınız etkinleştiriliyor..."}
      </p>
    </div>
  );
}
