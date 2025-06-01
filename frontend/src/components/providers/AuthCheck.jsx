"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser, clearUser, setLoading } from "@/store/userSlice";
import { userService } from "@/services/userService";

export default function AuthCheck({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");
      const tokenExpiration = localStorage.getItem("tokenExpiration");

      if (!token || !tokenExpiration) {
        dispatch(setLoading(false));
        return;
      }

      if (new Date(tokenExpiration) <= new Date()) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        dispatch(clearUser());
        return;
      }

      try {
        const response = await userService.getMe();
        const { token: newToken, expiresIn, ...userData } = response.data;

        localStorage.setItem("token", newToken);
        localStorage.setItem("tokenExpiration", expiresIn);

        dispatch(setUser({ user: userData, expiresIn }));
      } catch (error) {
        console.error(error);
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        dispatch(clearUser());
      } finally {
        dispatch(setLoading(false));
      }
    };

    checkAuth();
  }, []);

  return children;
}
