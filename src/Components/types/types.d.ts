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

export type ReviewCardTypes = {
  id: number;
  description: string;
  profile: string;
  name: string;
  designation: string;
};

export type FaqQuestionTypes = {
  id: number;
  question: string;
  answer?: string;
};
