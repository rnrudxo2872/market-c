import { makeImageURL } from "@libs/client/utils";
import { joinClasses } from "@libs/common";
import Image from "next/image";
import { memo } from "react";

interface IProps {
  imageId: string;
  alt: string;
  width?: string;
  height?: string;
  variant?: string;
  quality?: number;
}

export default memo(function ImageItem({
  imageId,
  alt,
  width,
  height,
  variant = "public",
  quality,
}: IProps) {
  return (
    <div
      className={joinClasses(
        "relative",
        width ? `w-${width}` : "w-full",
        height ? `h-${height}` : "h-full"
      )}
    >
      <Image
        src={makeImageURL({ imageId, variant })}
        alt={alt}
        layout="fill"
        quality={quality ? String(quality) : "75"}
      />
    </div>
  );
});
