import Link from "next/link";
import { memo } from "react";
import { joinClasses } from "../../libs/common";
import { INavLinkBtnProps } from "./interfaces";

export default memo(function NavLinkBtn({
  children,
  name,
  href,
  selected,
}: INavLinkBtnProps) {
  return (
    <Link href={href}>
      <a className="flex flex-col items-center group">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={joinClasses(
            "h-6 w-6 text-gray-400 transition-colors",
            selected ? "text-amber-500" : "group-hover:text-amber-500"
          )}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          {children}
        </svg>
        <span
          className={joinClasses("text-xs", selected ? "font-semibold" : "")}
        >
          {name}
        </span>
      </a>
    </Link>
  );
});
