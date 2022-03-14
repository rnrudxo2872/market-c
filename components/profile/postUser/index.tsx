import React, { memo } from "react";

interface IPostUserProps {
  name: string;
  image?: string;
  option?: React.ReactNode;
}

export default memo(function PostUser({ name, option }: IPostUserProps) {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 rounded-full bg-gray-300 flex-shrink-0" />
      <div className="flex flex-col leading-none">
        <span className="text-sm">{name}</span>
        {option ? option : null}
      </div>
    </div>
  );
});
