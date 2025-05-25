import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";

const Input = ({
  id,
  type,
  value,
  handleChange,
  handleBlur,
  placeholder,
  valid,
  error,
}) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={twMerge(
          "w-full placeholder:text-white text-white p-2 px-4 rounded-3xl outline-0 border-2 duration-300 caret-ai-purple hover:border-ai-purple",
          valid && "caret-red-500 border-red-500 hover:border-red-500"
        )}
      />
      <AnimatePresence>
        {valid && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="text-red-500 text-xs pl-5 mt-1"
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Input;
