import Link from "next/link";
import { ILaunchButtonProps } from "./interfaces";

export default function LaunchButton({ children, href }: ILaunchButtonProps) {
  return (
    <Link href={href}>
      <a className="fixed bottom-24 right-5 rounded-full bg-amber-500 p-3 shadow-2xl hover:bg-red-500 group">
        {children}
      </a>
    </Link>
  );
}
