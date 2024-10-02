import React from "react";

const H1 = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={`font-bold mb-4 mt-2 md:text-[1.30em] shadow-md bg-red-400 max-w-[200px] rounded px-4 ${className}`}
    >
      {children}
    </div>
  );
};

export default H1;
