import { NextPage } from "next";
import BaseBtn from "@components/baseBtn";
import PostStat from "@components/communityPost/postStat";
import TextArea from "@components/textArea";
import Layout from "@components/layout";
import PostUser from "@components/profile/postUser";
import useSWR from "swr";
import { useRouter } from "next/router";
import useMutation from "@libs/client/useMutation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

interface IPost {
  id: number;
  content: string;
  user: {
    id: number;
    name: string;
    avatar: string | null;
  };
  userId: number;
  answer: {
    content: string;
    user: {
      name: string;
      email: string;
      id: number;
    };
  }[];
  _count: {
    wonder: number;
  };
}

interface IGetPostResponse {
  ok: boolean;
  post: IPost;
}

interface IReqAnswer {
  content: string;
}

interface IResAnswer {
  ok: boolean;
}

const CommunityPostDetail: NextPage = () => {
  const router = useRouter();
  const { data, error, mutate } = useSWR<IGetPostResponse>(
    router.query.id ? `/api/community/${router.query.id}` : null
  );
  const {
    data: mutationData,
    fetchMutation,
    loading,
  } = useMutation<IResAnswer, IReqAnswer>(
    `/api/community/${router.query.id}/answer`
  );
  const { handleSubmit, register, reset } = useForm<IReqAnswer>();

  function onValidAnswer(data: IReqAnswer) {
    if (loading) return;
    fetchMutation(data);
  }

  useEffect(() => {
    if (mutationData && mutationData.ok) {
      reset();
      mutate();
    }
  }, [mutate, mutationData, reset]);

  return (
    <Layout hasBackBtn>
      <div className="pt-5">
        <section className="flex flex-col">
          <div className="flex mb-2 ">
            <span className="bg-slate-200 px-1 py-[0.15rem] rounded-md text-xs">
              동네질문
            </span>
          </div>
          <div>
            <div className="border-b border-stone-400 pb-3">
              <PostUser
                name={data?.post ? data.post.user.name : ""}
                option={
                  <div className="flex gap-1 text-xs text-gray-500">
                    <div>
                      <span>영등포구 도림동</span>
                      <span>인증 {6}회</span>
                    </div>
                    <span>•</span>
                    <div>
                      <span>1시간 전</span>
                    </div>
                  </div>
                }
              />
            </div>
          </div>
        </section>
        <article className="py-4 space-y-6 border-b border-gray-300">
          <section>{data?.post ? data.post.content : ""}</section>
          <section className="flex items-center gap-1 text-xs text-gray-500 fill-gray-500">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="currentColor"
              className="w-4 h-4"
            >
              <g data-name="Layer 2" id="Layer_2">
                <path d="M21,16H20V10A8,8,0,0,0,4,10v6H3a1,1,0,0,0-1,1v4a1,1,0,0,0,1,1H21a1,1,0,0,0,1-1V17A1,1,0,0,0,21,16ZM12,6V8a2,2,0,0,0-2,2H8A4,4,0,0,1,12,6Zm8,14H4V18H20Z" />
              </g>
            </svg>
            <span className="underline">
              부적절한 게시글이라면 감자마켓에 알려주세요.
            </span>
          </section>
        </article>
        <section className="border-b border-gray-300">
          <PostStat comment={2} like={1} />
        </section>
        <section className="pt-3.5">
          {data?.post
            ? data.post.answer.map((answer, index) => (
                <div key={index}>
                  <div className="flex gap-2 pb-6 ">
                    <PostUser
                      name={answer.user.name}
                      option={
                        <div className="flex flex-col leading-none">
                          <div className="flex gap-1 text-xs text-gray-500 pb-1">
                            <span>영등포구 도림동</span>
                            <span>•</span>
                            <span>1시간 전</span>
                          </div>
                          <p>{answer.content}</p>
                        </div>
                      }
                    />
                  </div>
                </div>
              ))
            : null}
        </section>
        <section className="flex flex-col gap-2 pb-4 ">
          <form
            onSubmit={handleSubmit(onValidAnswer)}
            className="flex flex-col space-y-5"
          >
            <TextArea
              id="content"
              rows={4}
              register={register("content", {
                minLength: {
                  value: 3,
                  message: "최소 3글자 이상입니다!",
                },
              })}
            ></TextArea>
            <BaseBtn OnClick={() => console.log("")}>
              {loading ? "글 작성 중..." : "댓글 쓰기"}
            </BaseBtn>
          </form>
        </section>
      </div>
    </Layout>
  );
};

export default CommunityPostDetail;
