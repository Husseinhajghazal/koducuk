import React from "react";
import { motion } from "framer-motion";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import successAnimation from "@/assets/animations/success.json";
import Button from "@/components/ui/Button";

export default function LessonComplete({ onReturn }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-12 flex items-center justify-center flex-col gap-10"
    >
      <motion.div
        className="h-44 w-44 text-center"
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <DotLottieReact
          data={successAnimation}
          loop
          autoplay
          className="w-full h-full"
        />
      </motion.div>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-xl font-semibold text-white"
      >
        Başarıyla dersi tamamladınız!
      </motion.p>
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Button onClick={onReturn} className="py-4 px-8 w-full md:w-max">
          Kursa Dön
        </Button>
      </motion.div>
    </motion.div>
  );
}
