import React from "react";
// import Nav from "../Pages/NAV/page";
import Link from "next/link";

interface NavLinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  href: string;
  onClick: () => void;
}

const NavLinks = React.forwardRef<HTMLAnchorElement, NavLinksProps>(
  ({ className, href, children, onClick, ...props }, ref) => {
    return (
      <div>
        {/* #9967da; --Background-secondary: #5a65c4; */}
        <Link
          className={` flex justify-center h-[80px] items-center   
            text-[yellow] border-b-4 border-transparent hover:border-solid hover:border-b-4  
            hover:border-[yellow] hover:text-[white] font-bold
            transition-all delay-75
            ${className}`}
          ref={ref}
          href={href}
          onClick={onClick}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
);

NavLinks.displayName = "NavLinks";
export default NavLinks;
