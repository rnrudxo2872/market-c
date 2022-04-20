import { memo } from "react";
import Image from "next/image";
import Link from "next/link";

interface IProps {
  imageUrl?: string;
  children?: React.ReactNode;
  label: string;
  url: string;
}

export default memo(function ProfileButton({
  label,
  url,
  children,
  imageUrl,
}: IProps) {
  return (
    <Link href={url}>
      <a>
        <button className="flex flex-col gap-2 items-center justify-center">
          {children ? (
            children
          ) : imageUrl ? (
            <Image src={imageUrl} alt={`${label} 버튼`}></Image>
          ) : null}
          <span className="text-sm font-semibold">{label}</span>
        </button>
      </a>
    </Link>
  );
});
