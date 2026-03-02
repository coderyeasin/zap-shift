import { FiArrowUpRight } from "react-icons/fi";

const CircleButton = () => {
  return (
    <div className="bg-dark w-12 h-12 rounded-full hover:opacity-90 transition flex justify-center items-center cursor-pointer">
      <FiArrowUpRight className="text-primary text-3xl" />
    </div>
  );
};

export default CircleButton;
