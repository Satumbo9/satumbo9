import React from "react";

interface FormComponentProps extends React.FormHTMLAttributes<HTMLFormElement> {
  name?: string;
}

export const Form: React.FC<FormComponentProps> = ({
  name,
  children,
  ...props
}) => {
  return (
    <form
      name={name}
      {...props}
      className="w-[200px] md:w-[400px] flex flex-col gap-4 "
    >
      {children}
    </form>
  );
};
