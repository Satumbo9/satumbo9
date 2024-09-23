import React, { ButtonHTMLAttributes } from "react";

interface ButtonForm extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export const ButtonForm: React.FC<ButtonForm> = ({ label, ...props }) => {
  return (
    <button
      {...props}
      className="text-[1.40em] bg-[yellow] text-gray-600 p-4 font-bold"
    >
      {label}
    </button>
  );
};
