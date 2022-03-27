import Layout from "@components/layout";
import TextArea from "@components/textArea";
import { NextPage } from "next";
import { useForm } from "react-hook-form";

const CommunityWrite: NextPage = () => {
  const { register } = useForm();
  return (
    <Layout hasBackBtn title="동네생활 글쓰기">
      <form className="py-5 flex flex-col">
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
          글쓰기
        </button>
      </form>
    </Layout>
  );
};

export default CommunityWrite;
