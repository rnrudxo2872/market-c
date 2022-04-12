import ChatForm from "@components/chat/chatForm";
import Layout from "@components/layout";
import ChatMessage from "@components/live/chatMessage";
import Video from "@components/live/video";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const StreamDetail: NextPage = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
    watch,
  } = useForm({ mode: "onChange" });

  function onValid(data: any) {
    console.log("제출! -->  ", data);
  }

  return (
    <Layout hasBackBtn>
      <div className="space-y-2 flex flex-col">
        <section className="space-y-2">
          <Video />
          <section className="flex items-center gap-1.5 px-3">
            <div className="aspect-square w-10 rounded-full bg-gray-400"></div>
            <div className="flex flex-col">
              <span className="text-sm">
                당근을 파는 감자입니다. 구경 해봐요!
              </span>
              <span className="text-xs text-gray-400">쏘세니</span>
            </div>
          </section>
        </section>
        <section className="px-4 pt-5 pb-2 space-y-6 h-[calc(100vh-calc(100vw/calc(16/9))+0.3rem)] overflow-auto">
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
          <ChatMessage />
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
