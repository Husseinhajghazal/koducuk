"use client";

import { use, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearUser } from "@/store/userSlice";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/animations/success.json";
import failAnimation from "@/assets/animations/fail.json";
import axios from "axios";

export default function EmailVerification({ params }) {
  const [success, setSuccess] = useState(null);
  const { token } = use(params);
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await axios.put(
          process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL + "/api/user/email/" + token
        );

        setSuccess(true);
      } catch (error) {
        setSuccess(false);
      }

      localStorage.removeItem("token");
      localStorage.removeItem("tokenExpiration");
      dispatch(clearUser());
      setTimeout(() => {
        router.push("/giris");
      }, 10000);
    };

    verifyEmail();
  }, [dispatch, router, token]);

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
          "Hesabı gücellemeye çalışıyoruz..."
        )}
      </div>
      <p className="text-xl font-semibold">
        {success
          ? "Hesabınızı Başarı ile güncelledik"
          : "Maalesef Hesabınızı güncelleyemedik"}
      </p>
    </div>
  );
}
