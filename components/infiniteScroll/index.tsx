import {
  Dispatch,
  memo,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import useSWR from "swr";

interface IProps {
  url: string;
  setState: Dispatch<SetStateAction<any[]>>;
}

interface IResData {
  ok: boolean;
  error?: string;
  data?: any[];
}

export default memo(function InfiniteScroll({ url, setState }: IProps) {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR<IResData>(`${url}?page=${page}`);

  const bottomRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();
  const isFirst = useRef<boolean>(true);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setPage((prev) => prev + 1);
        }
      });
    });
  }, []);

  useEffect(() => {
    if (error) {
      console.error(error);
    }
  }, [error]);

  useEffect(() => {
    if (data && data.ok) {
      setState((live) => [...live, ...(data.data ? data.data : [])]);

      //after the list is rendered.
      if (isFirst.current && bottomRef.current && observer.current) {
        observer.current.observe(bottomRef.current);
        isFirst.current = !isFirst.current;
      }
    }
  }, [data, setState]);

  return <div ref={bottomRef}></div>;
});
