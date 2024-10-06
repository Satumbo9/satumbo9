import React, { forwardRef } from "react";

interface InputComponentProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
}

//Reuseable Input
export const InputForm = forwardRef<HTMLInputElement, InputComponentProps>(
  ({ label, id, ...props }, ref) => {
    return (
      <div className="flex flex-col">
        <label htmlFor={id} className="text-2xl mb-4 ">
          <code>{label}</code>
        </label>
        <input
          id={id}
          ref={ref} // Attach the ref here
          className="h-[40px] p-4 text-black md:h-[50px] text-2xl"
          {...props}
        />
      </div>
    );
  }
);

InputForm.displayName = "InputForm";
