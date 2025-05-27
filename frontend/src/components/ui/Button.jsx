import { twMerge } from "tailwind-merge";

const Button = ({
  children,
  className,
  variant = "primary",
  isSubmitting,
  ...others
}) => {
  const baseClasses =
    "border-2 w-max duration-300 rounded-xl py-2 md:py-4 px-8 font-bold cursor-pointer";
  const submittingClasses = isSubmitting
    ? "bg-kc-gray border-kc-gray hover:bg-kc-gray cursor-progress"
    : "";

  const variants = {
    primary: "bg-ai-purple border-ai-purple hover:bg-transparent text-white",
    outline:
      "bg-transparent border-white hover:bg-ai-purple hover:border-ai-purple text-white",
  };

  return (
    <button
      className={twMerge(
        baseClasses,
        variants[variant] || variants.primary,
        submittingClasses,
        className
      )}
      disabled={isSubmitting}
      {...others}
    >
      {children}
    </button>
  );
};

export default Button;
