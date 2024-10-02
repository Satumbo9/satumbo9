import React from "react";

interface CartProps extends React.AllHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const CartInfo = React.forwardRef<HTMLDivElement, CartProps>(
  ({ children, ...props }, ref) => {
    return (
      <div
        className="mb-2 text-[1.0em] md:text-[1.0em] xl:text-[1.25em] shadow-md p-2 "
        {...props}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);

CartInfo.displayName = "CardInfo";

export default CartInfo;
