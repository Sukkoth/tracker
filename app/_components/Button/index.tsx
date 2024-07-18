import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline" | "dark";
  outline?: boolean;
  outlineColor?: string;
  onClick?: () => void;
};
function Button({
  children,
  variant = "primary",
  onClick,
  outlineColor = "border-primary-400",
}: Props) {
  const primarySetting = `bg-primary-400 hover:bg-primary-300 border-primary-400 hover:border-primary-300 text-white border-2`;

  const outlineSetting = `bg-white hover:bg-primary-100 text-primary-400 border-2 ${outlineColor} `;

  const darkSetting = `bg-black hover:bg-stone-700 hover:border-stone-700 text-white border-2 border-black `;

  let constructedClass;

  switch (variant) {
    case "primary":
      constructedClass = primarySetting;
      break;
    case "outline":
      constructedClass = outlineSetting;
      break;
    case "dark":
      constructedClass = darkSetting;
      break;
    default:
      constructedClass = primarySetting;
  }

  return (
    <button
      onClick={onClick}
      className={`${constructedClass} w-full  rounded-3xl py-3 text-lg duration-300 transition-colors`}
    >
      {children}
    </button>
  );
}

export default Button;
