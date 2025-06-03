import React from "react";
import { motion } from "framer-motion";

export default function LessonContent({ videoUrl, description }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      <div className="md:px-14 lg:px-28">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <iframe
            width="100%"
            height="300"
            src={videoUrl}
            allowFullScreen
            className="rounded-xl"
          />
        </motion.div>
      </div>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="md:px-14 lg:px-28 text-kc-gray"
      >
        {description}
      </motion.div>
    </motion.div>
  );
}
