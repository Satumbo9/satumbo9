export const ButtonForm = ({
  text,
  type,
  className,
}: {
  text: string;
  type: "submit" | "reset" | "button";
  className: string;
}) => {
  return (
    <button type={type} className={className}>
      {text}
    </button>
  );
};
