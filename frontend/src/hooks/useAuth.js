"use client";

import { useSelector } from "react-redux";

export const useAuth = () => {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.user
  );

  return {
    user,
    isAuthenticated,
    isLoading,
  };
};
