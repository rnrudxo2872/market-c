import ChatBubble from "@components/chat/chatBubble";
import ChatForm from "@components/chat/chatForm";
import { NextPage } from "next";

const ChatDetail: NextPage = () => {
  return (
    <>
      <div className="px-4 py-5 space-y-6">
        <ChatBubble
          text={
            "안녕하세요.\n 펄스 4 보고 연락드립니다.\n 15만원에 가능하신가요?"
          }
          time="오후 2:49"
        ></ChatBubble>

        <ChatBubble
          text={
            "아 안녕하세요! \n 아직까지는 내릴 생각이 없어서ㅠㅠ. \n 후에 가격 조정하면 연락 드리겠습니다."
          }
          time="오후 2:54"
          me
        ></ChatBubble>

        <ChatBubble text={"넵"} time="오후 3:12"></ChatBubble>
      </div>
      <ChatForm />
    </>
  );
};

export default ChatDetail;
