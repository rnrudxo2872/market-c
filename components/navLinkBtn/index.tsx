import Link from "next/link";
import { memo } from "react";
import { INavLinkBtnProps } from "./interfaces";

export default memo(function NavLinkBtn({
  children,
  name,
  href,
}: INavLinkBtnProps) {
  return (
    <Link href={href}>
      <a className="flex flex-col items-center group">
        {children}
        <span className="text-xs">{name}</span>
      </a>
    </Link>
  );
});
