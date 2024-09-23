import React from "react";

interface FormComponentProps extends React.FormHTMLAttributes<HTMLFormElement> {
  name: string;
}

export const FormData: React.FC<FormComponentProps> = ({
  name,
  children,
  ...props
}) => {
  return (
    <div>
    <form name={name} {...props} className="w-[200px] md:w-[400px] grid gap-10">
      {children}
    </form>
    </div>
  );
};
