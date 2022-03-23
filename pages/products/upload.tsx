import BaseBtn from "@components/baseBtn";
import InputWithLabel from "@components/labelInput";
import TextAreaWithLabel from "@components/labelTextArea";
import Layout from "@components/layout";
import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

interface UploadResponse {
  ok: boolean;
  post: number;
}

interface IUploadFormData {
  name: string;
  price: string;
  description: string;
}

const Upload: NextPage = () => {
  const { register, handleSubmit } = useForm<IUploadFormData>();
  const { data, error, fetchMutation, loading } = useMutation<
    UploadResponse,
    IUploadFormData
  >("/api/products");

  function onValid(data: IUploadFormData) {
    console.log(data);
    fetchMutation(data);
  }

  return (
    <Layout hasBackBtn title="거래 글쓰기">
      <form
        className="py-10 flex flex-col gap-y-4"
        onSubmit={handleSubmit(onValid)}
      >
        <label className="border-4 border-dashed border-gray-400 py-20 flex justify-center rounded-lg hover:border-amber-400 hover:text-yellow-500">
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
        <BaseBtn OnClick={() => {}}>상품 올리기</BaseBtn>
      </form>
    </Layout>
  );
};

export default Upload;
