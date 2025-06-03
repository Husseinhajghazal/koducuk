import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { twMerge } from "tailwind-merge";

const choiceVariants = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
  tap: { scale: 0.95 },
};

export default function ChoiceCard({
  choice,
  index,
  icon,
  selected,
  isTrue,
  onClick,
  delay,
}) {
  return (
    <motion.div
      variants={choiceVariants}
      initial="initial"
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      transition={{ delay: delay * 0.1 }}
      className={twMerge(
        "flex flex-col items-center justify-center gap-5 bg-ai-purple/30 border-ai-purple border-2 p-5 rounded-lg cursor-pointer hover:bg-orange-400/40 hover:border-orange-400 duration-300",
        selected &&
          "bg-orange-400/40 border-orange-400 hover:bg-orange-400/40 hover:border-orange-400",
        selected &&
          isTrue === true &&
          "bg-green-400/40 border-green-400 hover:bg-green-400/40 hover:border-green-400",
        selected &&
          isTrue === false &&
          "bg-red-400/40 border-red-400 hover:bg-red-400/40 hover:border-red-400"
      )}
      onClick={onClick}
    >
      <motion.div
        animate={
          selected
            ? {
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0],
              }
            : {}
        }
        transition={{ duration: 0.5 }}
      >
        <Image src={icon} width={100} height={100} alt="icon" />
      </motion.div>
      <p className="text-xl text-white font-medium">{choice}</p>
    </motion.div>
  );
}
