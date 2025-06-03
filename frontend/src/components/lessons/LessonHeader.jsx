import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { IoClose } from "react-icons/io5";
import ProgressBar from "@/components/lessons/ProgressBar";

export default function LessonHeader({ progress, courseId }) {
  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="flex items-center gap-5"
    >
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2 }}
        style={{ width: "100%" }}
      >
        <ProgressBar percentage={progress} />
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <Link
          href={"/kurslar/" + courseId}
          className="text-kc-gray hover:text-white hover:bg-kc-gray/20 rounded-full p-1.5 duration-300"
        >
          <IoClose size={25} />
        </Link>
      </motion.div>
    </motion.div>
  );
}
