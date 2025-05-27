import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import ClosedEyeIcon from "@/assets/icons/closed-eye.svg";
import OpenedEyeIcon from "@/assets/icons/opened-eye.svg";

const Input = ({
  id,
  type = "text",
  value,
  handleChange,
  handleBlur,
  placeholder,
  valid,
  error,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputType =
    type === "password" ? (showPassword ? "text" : "password") : type;

  return (
    <div>
      <div className="relative">
        <input
          id={id}
          type={inputType}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder={placeholder}
          className={twMerge(
            "w-full placeholder:text-white text-white p-2 px-4 rounded-xl outline-0 border-2 duration-300 caret-ai-purple hover:border-ai-purple",
            valid && "caret-red-500 border-red-500 hover:border-red-500"
          )}
          aria-invalid={valid}
          aria-describedby={valid ? `${id}-error` : undefined}
        />
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3"
            aria-label="Toggle password visibility"
          >
            <Image
              src={showPassword ? ClosedEyeIcon : OpenedEyeIcon}
              width={20}
              height={20}
              alt=""
            />
          </button>
        )}
      </div>
      <AnimatePresence>
        {valid && (
          <motion.p
            id={`${id}-error`}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
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
