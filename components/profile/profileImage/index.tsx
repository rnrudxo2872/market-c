import { makeImageURL } from "@libs/client/utils";
import { joinClasses } from "@libs/common";
import Image from "next/image";
import { memo } from "react";

interface IProps {
  avatarId?: string;
  name?: string;
  size?: string;
}

export default memo(function ProfileImage({ avatarId, name, size }: IProps) {
  return (
    <div
      className={joinClasses(
        "rounded-full relative overflow-hidden",
        size ? `w-${size} h-${size}` : "w-10 h-10"
      )}
    >
      {avatarId ? (
        <Image
          src={makeImageURL({ imageId: avatarId })}
          alt={`${name}의 프로필 사진`}
          layout="fill"
        />
      ) : (
        <div className="w-full h-full bg-gray-400" />
      )}
    </div>
  );
});
