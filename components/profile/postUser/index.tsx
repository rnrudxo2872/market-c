import { makeImageURL } from "@libs/client/utils";
import Image from "next/image";
import React, { memo } from "react";

interface IPostUserProps {
  name: string;
  image?: string;
  option?: React.ReactNode;
}

export default memo(function PostUser({ name, option, image }: IPostUserProps) {
  return (
    <div className="flex gap-2">
      <div className="w-10 h-10 rounded-full flex-shrink-0 overflow-hidden relative">
        {image ? (
          <Image
            src={makeImageURL({ imageId: image })}
            alt={`${name}의 프로필 이미지`}
            layout="fill"
          />
        ) : (
          <div className="w-full h-full bg-gray-300" />
        )}
      </div>
      <div className="flex flex-col leading-none">
        <span className="text-sm">{name}</span>
        {option ? option : null}
      </div>
    </div>
  );
});
