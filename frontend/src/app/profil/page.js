"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import InfoForm from "@/components/profile/InfoForm";
import PasswordForm from "@/components/profile/PasswordForm";
import EmailForm from "@/components/profile/EmailForm";
import { useAuth } from "@/hooks/useAuth";
import ProfileHeader from "@/components/profile/ProfileHeader";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { clearUser } from "@/store/userSlice";
import Loader from "@/components/ui/Loader";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const tabs = [
  { id: "info", label: "Bilgilerim" },
  { id: "password", label: "Şifre Değiştir" },
  { id: "email", label: "E-posta Değiştir" },
];

export default function Profil() {
  const [activeTab, setActiveTab] = useState("info");
  const { user, isLoading } = useAuth();
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("tokenExpiration");
    dispatch(clearUser());
    router.push("/");
  };

  if (isLoading || !user) {
    return <Loader />;
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-purplish-black py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <ProfileHeader user={user} onLogout={handleLogout} />

            {/* Tabs */}
            <div className="mt-12 border-b border-kc-gray/30">
              <div className="flex gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 relative ${
                      activeTab === tab.id
                        ? "text-ai-purple"
                        : "text-kc-gray hover:text-white"
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-ai-purple"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Forms */}
            <div className="mt-8">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.2 }}
              >
                {activeTab === "info" && <InfoForm user={user} />}
                {activeTab === "password" && <PasswordForm />}
                {activeTab === "email" && <EmailForm user={user} />}
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
