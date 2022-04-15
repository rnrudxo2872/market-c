import ChatForm from "@components/chat/chatForm";
import Layout from "@components/layout";
import ChatMessage from "@components/live/chatMessage";
import LiveElement from "@components/live/liveElement";
import useMessage from "@libs/client/useMessage";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import useSWR from "swr";

interface ILive {
  id: number;
  title: string;
  createdAt: string;
  price: string;
  streamerId: number;
  streamer: string;
}

interface IResLiveData {
  ok: boolean;
  live: ILive;
}

export interface IChatForm {
  chat: string;
}

const StreamDetail: NextPage = () => {
  const router = useRouter();
  const { data: liveData, error } = useSWR<IResLiveData>(
    router.query.id ? `/api/live/${router.query.id}` : null
  );
  const {
    register,
    handleSubmit,
    formState: { isValid },
    reset,
  } = useForm<IChatForm>({ mode: "onChange" });
  const { messages, sendMessage, isSending } = useMessage();

  function onValid(data: IChatForm) {
    if (isSending || !router.query) return;
    sendMessage(data);
    reset();
  }

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
          {messages?.map(({ content, user: { id, name } }, index) => (
            <ChatMessage
              key={`${id}/${index}`}
              userId={id}
              name={name}
              content={content}
            />
          ))}
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
