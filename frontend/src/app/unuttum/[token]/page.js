"use client";

import axios from "axios";
import { use, useLayoutEffect, useState } from "react";
import { setLoading, setUser } from "@/store/userSlice";
import ResetPassword from "@/components/resetPassword/ResetPassword";
import Forget from "@/assets/images/forget.jpg";
import Image from "next/image";

export default function SifreSifirla({ params }) {
  const { token } = use(params);

  return (
    <main>
      <div className="h-screen w-screen grid lg:grid-cols-3">
        <ResetPassword token={token} />
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
