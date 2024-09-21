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
      className={`bg-[--Color-yellow] text-[--Text-grey] w-[200px] flex  items-center justify-center gap-4  font-bold ${className}`}
      type={type}
    >
      {children}
    </button>
  );
};
