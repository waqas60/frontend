import type { ReactNode } from "react";

interface ButtonType {
  icon?: ReactNode;
  type?: "submit" | "reset" | "button";
  variant: keyof typeof buttonVaraint;
  title: string;
  fn?: () => void;
}

enum buttonVaraint {
  primary = "bg-[#1e40af] text-white",
  secondary = "bg-[#0369a1] text-white",
  tertiary = "bg-[#fb7185] text-white hover:bg-[#fecdd3]",
}

const Button = ({ fn, icon, type, variant, title }: ButtonType) => {
  return (
    <button
      type={type}
      onClick={fn}
      className={`${buttonVaraint[variant]} rounded-md  p-2 font-bold cursor-pointer  transition-all duration-100 flex items-center justify-center gap-1 text-sm `}
    >
      {icon}
      {title}
    </button>
  );
};

export default Button;
