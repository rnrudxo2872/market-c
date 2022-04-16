import Link from "next/link";
import { memo } from "react";
import Video from "./video";

interface IElementProps {
  title: string;
  userName: string;
  linkId?: number;
  userId?: number;
}

export default memo(function LiveElement({
  title,
  linkId,
  userName,
  userId,
}: IElementProps) {
  return (
    <section className="space-y-2">
      {linkId ? (
        <Link href={`/live/${linkId}`}>
          <a>
            <Video />
          </a>
        </Link>
      ) : (
        <Video />
      )}

      <section className="flex items-center gap-1.5">
        <div>
          <div className="aspect-square w-10 rounded-full bg-gray-400"></div>
        </div>
        <div className="flex flex-col">
          {linkId ? (
            <Link href={`/live/${linkId}`}>
              <a>
                <span className="text-sm">{title}</span>
              </a>
            </Link>
          ) : (
            <span className="text-sm">{title}</span>
          )}
          <span className="text-xs text-gray-400">{userName}</span>
        </div>
      </section>
    </section>
  );
});
