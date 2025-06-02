import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { twMerge } from "tailwind-merge";

export default function LessonItem({
  id,
  index,
  sectionIndex,
  totalLessonIndex,
  reached_lesson,
  starOffset,
  onClick,
}) {
  return (
    <motion.div
      key={id}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        delay: sectionIndex * 0.1 + index * 0.05,
      }}
      className={twMerge(
        "relative flex items-center rounded-full p-5 bg-ai-purple hover:bg-ai-purple/80 duration-300 cursor-pointer hover:scale-105 text-white",
        reached_lesson < totalLessonIndex &&
          "bg-kc-gray hover:bg-kc-gray/80 text-gray-500 cursor-not-allowed"
      )}
      style={{
        left: starOffset + "px",
      }}
      onClick={onClick}
    >
      <FaStar size={40} />
    </motion.div>
  );
}
