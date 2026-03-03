export type commonCardTypes = {
  id: number;
  icon: string;
  title: string;
  description: string;
};

export type CustomButtonProps = {
  text: string;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
};
