import React from "react";
import Nav from "../Pages/NAV/page";
import Link from "next/link";

interface NavLinksProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

const NavLinks = React.forwardRef<HTMLAnchorElement, NavLinksProps>(
  ({ className, href, children, ...props }, ref) => {
    return (
      <div>
        <Link
          className={` text-[2em] font-bold ${className}`}
          href={href}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }
);
export default NavLinks;
