import BaseBtn from "@components/baseBtn";
import InputWithLabel from "@components/labelInput";
import TextAreaWithLabel from "@components/labelTextArea";
import Layout from "@components/layout";
import useMutation from "@libs/client/useMutation";
import { joinClasses } from "@libs/common";
import { NextPage } from "next";
import Image from "next/image";
import { useRouter } from "next/router";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";

interface UploadResponse {
  ok: boolean;
  post: { id: number };
}

interface IUploadFormData {
  name: string;
  price: string;
  description: string;
}

const Upload: NextPage = () => {
  const router = useRouter();
  const { register, handleSubmit } = useForm<IUploadFormData>();
  const { data, error, fetchMutation, loading } = useMutation<
    UploadResponse,
    IUploadFormData
  >("/api/products");
  const [fileList, setFileList] = useState<File[]>([]);
  const dropZoneRef = useRef<HTMLLabelElement>(null);

  function onValid(formData: IUploadFormData) {
    if (loading) return;

    fetchMutation(formData);
  }

  useEffect(() => {
    const dropZoneElem = dropZoneRef.current;

    const InitClassName =
      "border-4 border-dashed py-20 flex justify-center rounded-lg hover:border-amber-400 hover:text-yellow-500";

    function dragLeaveHandler() {
      if (dropZoneElem) {
        dropZoneElem.className = joinClasses(
          InitClassName,
          "border-gray-400 text-gray-400"
        );
      }
    }

    function dragOverHandler() {
      if (dropZoneElem) {
        dropZoneElem.className = joinClasses(
          InitClassName,
          "border-amber-400 text-amber-400"
        );
      }
    }

    function dropHandler(event: DragEvent) {
      const dt = event.dataTransfer;

      if (dt) {
        const { files } = dt;

        setFileList((previewList) => {
          const arr = [];
          for (const file of files) {
            arr[arr.length] = file;
          }
          return [...previewList, ...arr];
        });
      }
    }

    if (dropZoneElem) {
      ["dragstart", "dragenter", "dragover", "drop"].forEach((cmd) => {
        dropZoneElem.addEventListener(cmd, (event) => {
          event.preventDefault();
        });
      });

      dropZoneElem.addEventListener("dragleave", dragLeaveHandler);

      ["dragenter", "dragover"].forEach((cmd) => {
        dropZoneElem.addEventListener(cmd, dragOverHandler);
      });

      dropZoneElem.addEventListener("drop", dropHandler);
    }

    return () => {
      if (dropZoneElem) {
        dropZoneElem.removeEventListener("dragleave", dragLeaveHandler);
        ["dragenter", "dragover"].forEach((cmd) => {
          dropZoneElem.removeEventListener(cmd, dragOverHandler);
        });
        dropZoneElem.removeEventListener("drop", dropHandler);
      }
    };
  }, []);

  console.log(fileList);

  useEffect(() => {
    if (data && data.ok) {
      router.replace(`/products/${data.post.id}`);
    }
  }, [data, router]);

  return (
    <Layout hasBackBtn title="거래 글쓰기">
      <form
        className="py-10 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onValid)}
      >
        <label
          ref={dropZoneRef}
          className="border-4 border-dashed border-gray-400 text-gray-400 py-20 flex justify-center rounded-lg hover:border-amber-400 hover:text-yellow-500"
        >
          <svg
            className="h-12 w-12"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input type="file" className="hidden" />
        </label>
        <section className="flex gap-x-2">
          {fileList.length
            ? fileList.map((file, index) => (
                <div
                  key={`${file.name}/${index}`}
                  className="relative w-14 h-14 rounded-lg overflow-hidden"
                >
                  <Image
                    src={URL.createObjectURL(file)}
                    alt={`${index + 1} 번째 이미지`}
                    layout="fill"
                  />
                </div>
              ))
            : null}
        </section>
        <InputWithLabel
          id={"name"}
          type={"text"}
          labelText={"상품명"}
          register={register("name", {
            required: {
              value: true,
              message: "상품명을 입력해 주세요.",
            },
          })}
        />
        <InputWithLabel
          id={"price"}
          type={"number"}
          labelText={"가격"}
          register={register("price", {
            required: {
              value: true,
              message: "가격을 입력해 주세요.",
            },
          })}
        />
        <TextAreaWithLabel
          id={"description"}
          labelText={"상품 설명"}
          register={register("description", {
            required: {
              value: true,
              message: "설명을 입력해 주세요.",
            },
          })}
        />
        <BaseBtn OnClick={() => {}}>
          {loading ? "게시하는 중..." : "상품 올리기"}
        </BaseBtn>
      </form>
    </Layout>
  );
};

export default Upload;
