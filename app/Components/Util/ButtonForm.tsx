import React from "react";

interface ButtonForm extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  className?: string;
}

export const ButtonForm: React.FC<ButtonForm> = ({
  label,
  className,
  ...props
}) => {
  return (
    <button
      {...props}
      className={`text-[1.40em] bg-[yellow] text-gray-600 p-4 font-bold ${className}`}
    >
      {label}
    </button>
  );
};
