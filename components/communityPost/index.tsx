import Link from "next/link";
import { memo } from "react";
import { ICommunityPostProps } from "./interfaces";
import PostStat from "./postStat";

export default memo(function CommunityPost({
  id,
  type,
  comment,
  like,
  local,
  publishedAt,
  title,
  user,
}: ICommunityPostProps) {
  return (
    <div className="flex flex-col border-b-4 border-gray-300 pt-4">
      <section className="border-b border-gray-300 pb-2">
        <div className="flex mb-2 px-4">
          <span className="bg-slate-200 px-1 py-[0.15rem] rounded-md text-xs">
            {type}
          </span>
        </div>
        <div className="mb-6 flex gap-x-1 px-4">
          <Link href={`/community/${id}`}>
            <a>
              <span className="tracking-widest text-amber-600 text-opacity-80">
                Q.
              </span>
              <span className="">{title}</span>
            </a>
          </Link>
        </div>
        <div className="flex justify-between px-4">
          <div className="flex gap-1 text-sm text-gray-500">
            <span>{user}</span>
            <span>•</span>
            <span>{local}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500">{publishedAt}</span>
          </div>
        </div>
      </section>
      <section className="px-4">
        <PostStat comment={comment} like={like} />
      </section>
    </div>
  );
});
