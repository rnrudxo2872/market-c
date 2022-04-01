import { memo } from "react";
import { splitNewLine } from "@libs/client/utils";

interface IPostTextProps {
  postId: any;
  text: string;
}

export default memo(function PostText({ postId, text }: IPostTextProps) {
  return (
    <>
      {splitNewLine(text).map((item, index) => (
        <p key={`${postId}/${index}`}>{item}</p>
      ))}
    </>
  );
});
