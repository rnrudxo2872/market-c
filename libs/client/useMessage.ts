import useMutation from "@libs/client/useMutation";
import { useRouter } from "next/router";
import { IChatForm } from "pages/live/[id]";
import { useEffect, useState } from "react";
import useSWR from "swr";

interface IMessage {
  user: {
    id: number;
    name: string;
  };
  content: string;
  createdAt: string;
}

interface IResMessageData {
  ok: boolean;
  messages: IMessage[];
}

interface IChatRes {
  ok: boolean;
  error?: string;
}

export default function useMessage() {
  const router = useRouter();
  const [nowDate, setNowDate] = useState(Date.now());
  const [curMessages, setCurMessages] = useState<IMessage[]>([]);
  const {
    data: messageData,
    error: messageError,
    mutate,
  } = useSWR<IResMessageData>(
    router.query.id
      ? `/api/live/${router.query.id}/message?time=${nowDate}`
      : null,
    { refreshInterval: 1000 }
  );
  const {
    data: chatResData,
    fetchMutation,
    error: chatError,
    loading,
  } = useMutation<IChatRes, IChatForm>(`/api/live/${router.query.id}/message`);

  useEffect(() => {
    if (chatResData && chatResData.ok) {
      mutate();
    }
  }, [chatResData, mutate]);

  useEffect(() => {
    if (messageData && messageData.messages.length > 5) {
      setCurMessages((prev) => [...prev, ...messageData.messages]);
      setNowDate(Date.now());
    }
  }, [messageData]);

  return {
    messages: [...curMessages, ...(messageData ? messageData.messages : [])],
    sendMessage: fetchMutation,
    isSending: loading,
  };
}
