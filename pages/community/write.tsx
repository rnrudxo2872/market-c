import Layout from "@components/layout";
import TextArea from "@components/textArea";
import useCoord from "@libs/client/useCoord";
import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IWritePost {
  content: string;
  coords: {
    latitude: number | null;
    longitude: number | null;
  };
}

interface IResponse {
  ok: boolean;
  postId: number;
}

const CommunityWrite: NextPage = () => {
  const { register, handleSubmit } = useForm<IWritePost>();
  const {
    data: postResponse,
    fetchMutation,
    loading,
  } = useMutation<IResponse, IWritePost>("/api/community");
  const router = useRouter();
  const ee = useCoord();
  const { latitude, longitude, loading: coordLoading } = ee;
  console.log(ee);
  function OnValid(data: IWritePost) {
    if (loading || coordLoading) return;
    console.log(latitude, longitude);
    fetchMutation({ content: data.content, coords: { latitude, longitude } });
  }

  useEffect(() => {
    if (postResponse && postResponse.ok) {
      router.replace(`/community/${postResponse.postId}`);
    }
  }, [postResponse, router]);

  return (
    <Layout hasBackBtn title="동네생활 글쓰기">
      <form className=" py-5 flex flex-col" onSubmit={handleSubmit(OnValid)}>
        <select name="type" className="mb-2">
          <option value="question">동네질문</option>
          <option value="news">동네소식</option>
          <option value="restaurant">동네맛집</option>
        </select>
        <TextArea
          id="content"
          rows={5}
          register={register("content", {
            required: {
              value: true,
              message: "글 내용은 필수입니다.",
            },
            minLength: {
              value: 5,
              message: "5글자 이상이여야 합니다.",
            },
          })}
        />
        <button className="bg-yellow-500 text-stone-100 text-sm font-semibold py-2 rounded-lg border-[1px] shadow-md w-full">
          {coordLoading
            ? "사용자 좌표 설정중..."
            : loading
            ? "글쓰기 중..."
            : "글쓰기"}
        </button>
      </form>
    </Layout>
  );
};

export default CommunityWrite;
