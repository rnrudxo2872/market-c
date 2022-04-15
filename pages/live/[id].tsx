import ChatForm from "@components/chat/chatForm";
import Layout from "@components/layout";
import ChatMessage from "@components/live/chatMessage";
import LiveElement from "@components/live/liveElement";
import useMutation from "@libs/client/useMutation";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface IMessage {
  user: {
    id: number;
    name: string;
  };
  content: string;
}

interface ILive {
  id: number;
  title: string;
  createdAt: string;
  price: string;
  streamerId: number;
  streamer: string;
  messages: IMessage[];
}

interface IResLiveData {
  ok: boolean;
  live: ILive;
}

interface IChatForm {
  chat: string;
}

interface IChatRes {
  ok: boolean;
  error?: string;
}

const StreamDetail: NextPage = () => {
  const router = useRouter();
  const [nowDate] = useState(Date.now());
  const {
    data: liveData,
    error,
    mutate,
  } = useSWR<IResLiveData>(
    router.query.id ? `/api/live/${router.query.id}?time=${nowDate}` : null,
    { refreshInterval: 1000 }
  );
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<IChatForm>({ mode: "onChange" });
  const {
    data: chatResData,
    fetchMutation,
    error: chatError,
    loading,
  } = useMutation<IChatRes, IChatForm>(`/api/live/${router.query.id}/message`);

  function onValid(data: IChatForm) {
    if (loading || !router.query) return;
    fetchMutation(data);
    reset();
  }

  useEffect(() => {
    console.log("결과 -> ", chatResData);
    if (chatResData && chatResData.ok) {
      console.log("새로 가져오기");
      mutate((res) => res, {});
    }
  }, [chatResData, mutate]);

  console.log("----->", liveData);
  return (
    <Layout hasBackBtn>
      <div className="space-y-2 flex flex-col">
        {liveData && liveData.ok ? (
          <LiveElement
            title={liveData.live.title}
            userName={liveData.live.streamer}
          />
        ) : null}
        <section className="px-4 pt-5 pb-2 space-y-6 h-[calc(100vh-calc(100vw/calc(16/9))+0.3rem)] overflow-auto">
          {liveData?.live.messages.map(
            ({ content, user: { id, name } }, index) => (
              <ChatMessage
                key={`${id}/${index}`}
                userId={id}
                name={name}
                content={content}
              />
            )
          )}
        </section>
        <ChatForm
          id="chat"
          handleSubmit={handleSubmit(onValid)}
          register={register("chat", {
            required: true,
          })}
          isValid={isValid}
        />
      </div>
    </Layout>
  );
};

export default StreamDetail;
