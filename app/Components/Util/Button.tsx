export const ButtonPage = ({
  type,
  className,
  children,
  Onclick,
}: {
  type?: "submit" | "reset" | "button";
  className?: string;
  children?: React.ReactNode;
  Onclick?: () => void;
}) => {
  return (
    <button
      onClick={Onclick}
      className={`text-[--Color-yellow] hover:text-gray-200 w-[200px] flex  items-center justify-center gap-4  ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
