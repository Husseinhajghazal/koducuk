"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import { useEffect, useState } from "react";
import { userCourseService } from "@/services/userCourseService";
import { useAuth } from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

const CourseCard = ({ id, name, image_url, onEnroll }) => {
  const [buttonText, setButtonText] = useState("Katıl");
  const { isAuthenticated } = useAuth();
  const router = useRouter();
  useEffect(() => {
    const checkSubscription = async () => {
      if (isAuthenticated) {
        try {
          const response = await userCourseService.isSubscribed(id);
          setButtonText(response.data ? "Devam Et" : "Katıl");
        } catch (error) {
          console.error(error);
        }
      }
    };

    checkSubscription();
  }, [id, isAuthenticated]);

  return (
    <motion.div
      className="flex-shrink-0 w-[280px] mx-auto"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="bg-black/40 rounded-xl overflow-hidden backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image_url}
            alt={name}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
        </div>
        <div className="p-4">
          <h3 className="font-medium text-white mb-4">{name}</h3>
          <Button
            variant="outline"
            className="w-full"
            onClick={() =>
              buttonText === "Katıl"
                ? onEnroll(id)
                : router.push(`/kurslar/${id}`)
            }
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default CourseCard;
