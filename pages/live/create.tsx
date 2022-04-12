import BaseBtn from "@components/baseBtn";
import InputWithLabel from "@components/labelInput";
import TextAreaWithLabel from "@components/labelTextArea";
import Layout from "@components/layout";
import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IFormData {
  title: string;
  price: number;
  description: string;
}

interface IResFormData {
  ok: boolean;
  error?: string;
  liveId?: number;
}

const CreateStream: NextPage = () => {
  const { register, handleSubmit, watch } = useForm<IFormData>();
  const { data, fetchMutation, loading } = useMutation<IResFormData, IFormData>(
    "/api/live"
  );
  const router = useRouter();

  function onValid(data: IFormData) {
    if (loading) return;
    fetchMutation(data);
  }

  useEffect(() => {
    if (data && data.ok) {
      router.replace(`/live/${data.liveId}`);
    }
  }, [data, router]);

  return (
    <Layout hasBackBtn>
      <form className="space-y-4 pt-8" onSubmit={handleSubmit(onValid)}>
        <InputWithLabel
          id="title"
          type="text"
          labelText="스트리밍 제목"
          register={register("title", {
            required: true,
          })}
        />
        <InputWithLabel
          id="price"
          type="price"
          labelText="가격"
          placeholder="0.00"
          register={register("price", {
            required: true,
            valueAsNumber: true,
          })}
        />
        <TextAreaWithLabel
          id="description"
          labelText="상품 설명"
          register={register("description", {
            required: true,
          })}
          rows={3}
        />
        <BaseBtn OnClick={() => {}}>방송 시작하기</BaseBtn>
      </form>
    </Layout>
  );
};

export default CreateStream;
