import { joinStrs } from "@libs/common";
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
  url: string | null;
  setState: Dispatch<SetStateAction<any[]>>;
  urlQuery?: {
    [param: string]: string | number | null;
  };
}

interface IResData {
  ok: boolean;
  error?: string;
  data?: any[];
}

export default memo(function InfiniteScroll({
  url,
  setState,
  urlQuery,
}: IProps) {
  const [page, setPage] = useState(1);
  const { data, error } = useSWR<IResData>(
    url
      ? joinStrs(
          [
            `${url}?page=${page}`,
            ...(urlQuery
              ? Object.keys(urlQuery).map((key) => `${key}=${urlQuery[key]}`)
              : []),
          ],
          "&"
        )
      : null
  );

  const bottomRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver>();

  console.log(data);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          setPage((prev) => {
            return prev + 1;
          });

          if (observer.current) observer.current.disconnect();
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
      const list = data.data!;

      setState((state) => {
        if (
          !list.length ||
          (state.length &&
            state[state.length - 1].id === list[list.length - 1].id)
        ) {
          return state;
        }

        return [...state, ...(data.data ? data.data : [])];
      });

      if (list && list.length < 5) {
        observer.current && bottomRef.current
          ? observer.current.disconnect()
          : null;
        return;
      }

      observer.current && bottomRef.current
        ? observer.current.observe(bottomRef.current)
        : null;
    }
  }, [data, setState]);

  return <div ref={bottomRef}></div>;
});
