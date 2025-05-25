import { motion } from "framer-motion";

const Background = ({ toggleShow }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={toggleShow}
      className="w-screen h-screen fixed z-10 top-0 left-0 bg-black-700/60"
    />
  );
};

export default Background;
