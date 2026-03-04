import type { ReactNode } from "react";

interface CircleButtonProps {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
}

const CircleButton = ({ onClick, children, className }: CircleButtonProps) => {
  return (
    <button
      className={`bg-dark w-12 h-12 rounded-full hover:opacity-90 transition flex justify-center items-center cursor-pointer ${className || ""}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CircleButton;
