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

    async function temFunc(file: File, id?: string) {
      const tempFormData = new FormData();
      const { uploadURL } = await (await fetch("/api/files")).json();

      tempFormData.append("file", file, id);

      return (
        await fetch(uploadURL, {
          method: "POST",
          body: tempFormData,
        })
      ).json();
    }

    let temp: Promise<any>[] = [];
    for (let i = 0; i < files.length; ++i) {
      temp[temp.length] = temFunc(files[i], id ? `${id}/${i}` : undefined);
    }

    const result = await Promise.all(temp);
    setIsLoading(false);

    return result.map(({ result: { id } }) => id);
  }

  return { isLoading, uploadCloud };
}
