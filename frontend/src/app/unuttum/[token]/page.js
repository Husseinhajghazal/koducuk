"use client";

import axios from "axios";
import { use, useLayoutEffect, useState } from "react";
import { setLoading, setUser } from "@/store/userSlice";
import ResetPassword from "@/components/resetPassword/ResetPassword";
import Image from "next/image";

export default function SifreSifirla({ params }) {
  const [success, setSuccess] = useState(null);
  const { token } = use(params);

  useLayoutEffect(() => {
    async function activateAccount() {
      try {
        const response = await axios.put(
          process.env.NEXT_PUBLIC_BACKEND_LOCAL_URL +
            "/api/user/forget_password/" +
            token
        );

        const { token, expiresIn, ...userData } = response.data.data[0];

        localStorage.setItem("token", token);
        localStorage.setItem("tokenExpiration", expiresIn);
        dispatch(setUser({ user: userData, expiresIn }));
        dispatch(setLoading(false));

        setTimeout(() => {
          router.push("/giris");
        }, 10000);

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
    <main>
      <div className="h-screen w-screen grid lg:grid-cols-3">
        <ResetPassword />
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
