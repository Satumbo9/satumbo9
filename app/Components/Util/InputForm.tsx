import React from "react";

interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

//Reuseable Input
export const InputForm: React.FC<InputComponentProps> = ({
  label,
  id,
  ...props
}) => {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="text-[1.40em]">
        {label}
      </label>
      <input id={id} className="h-[30px] p-4 text-black" {...props} />
    </div>
  );
};
