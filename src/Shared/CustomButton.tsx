import type { CustomButtonProps } from "../Components/types/types";

const CustomButton = ({
  text,
  onClick,
  className,
  disabled,
  type,
}: CustomButtonProps) => {
  return (
    <button
      className={`px-6 py-3 font-bold text-[20px] hover:opacity-90 transition cursor-pointer ${className || ""}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {text}
    </button>
  );
};

export default CustomButton;
