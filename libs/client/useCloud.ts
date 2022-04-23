import { useState } from "react";

interface IUseCloud {
  isLoading: boolean;
  uploadCloud: (id: string) => Promise<string[] | undefined>;
}

export default function useCloud(files: File[]): IUseCloud {
  const [isLoading, setIsLoading] = useState(false);

  async function uploadCloud(id: string) {
    if (!files.length) return;
    setIsLoading(true);

    const tempFormData = new FormData();

    let temp: string[] = [];

    //promiseAll
    for (let i = 0; i < files.length; ++i) {
      const { uploadURL } = await (await fetch("/api/files")).json();

      tempFormData.append("file", files[i], id ? `${id}/${i}` : undefined);

      const {
        result: { id: urlId },
      } = await (
        await fetch(uploadURL, {
          method: "POST",
          body: tempFormData,
        })
      ).json();

      temp[temp.length] = urlId;
      tempFormData.delete("file");
    }

    setIsLoading(false);
    return temp;
  }

  return { isLoading, uploadCloud };
}
