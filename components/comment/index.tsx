import { memo } from "react";
import PostUser from "@components/profile/postUser";
import PostText from "@components/postText";

interface ICommentProps {
  id: number;
  content: string;
  user: {
    name: string;
  };
}

export default memo(function Comment({ id, content, user }: ICommentProps) {
  return (
    <div className="flex gap-2 pb-6 ">
      <PostUser
        name={user.name}
        option={
          <div className="flex flex-col leading-none">
            <div className="flex gap-1 text-xs text-gray-500 pb-1">
              <span>영등포구 도림동</span>
              <span>•</span>
              <span>1시간 전</span>
            </div>
            <PostText postId={`comment-${id}`} text={content}></PostText>
          </div>
        }
      />
    </div>
  );
});
