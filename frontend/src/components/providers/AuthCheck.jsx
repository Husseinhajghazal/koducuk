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

      // Check if token has expired
      if (new Date(tokenExpiration) <= new Date()) {
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        dispatch(clearUser());
        return;
      }

      try {
        const response = await userService.getMe();
        const { token: newToken, expiresIn, ...userData } = response.data;

        // Update token and expiration
        localStorage.setItem("token", newToken);
        localStorage.setItem("tokenExpiration", expiresIn);

        dispatch(setUser({ user: userData, expiresIn }));
      } catch (error) {
        console.error("Auth check failed:", error);
        localStorage.removeItem("token");
        localStorage.removeItem("tokenExpiration");
        dispatch(clearUser());
      }
    };

    checkAuth();

    // Set up interval to check token expiration
    const interval = setInterval(checkAuth, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [dispatch]);

  return children;
}
