import Link from "next/link";
import { useRouter } from "next/router";
import { joinClasses } from "../libs/common";

interface LayoutProps {
  title?: React.ReactNode;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({ children, hasTabBar, title }: LayoutProps) {
  const router = useRouter();
  console.log(router);
  console.log("탭 유무 -> ", hasTabBar);

  return (
    <div className="w-full max-w-lg mx-auto">
      <section className="fixed top-0 w-full h-14 bg-white z-10 border-b border-b-gray-300 max-w-lg">
        {title ? title : null}
      </section>
      <section
        className={title ? joinClasses("pt-14", hasTabBar ? "pb-14" : "") : ""}
      >
        {children}
      </section>
      <section
        className={joinClasses(
          "fixed bottom-0 w-full max-w-lg",
          hasTabBar
            ? "bg-white py-2 border-t border-t-gray-300 flex justify-between px-6"
            : ""
        )}
      >
        {hasTabBar ? (
          <>
            <Link href={"/"}>
              <a className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 group-hover:text-amber-500 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                </svg>
                <span className="text-xs">홈</span>
              </a>
            </Link>
            <Link href={"/community"}>
              <a className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 group-hover:text-amber-500 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                  />
                  <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                </svg>
                <span className="text-xs">동네생활</span>
              </a>
            </Link>
            <Link href={"/live"}>
              <a className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 group-hover:text-amber-500 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
                </svg>
                <span className="text-xs">실시간</span>
              </a>
            </Link>
            <Link href={"/chats"}>
              <a className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 group-hover:text-amber-500 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                  <path d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                </svg>
                <span className="text-xs">채팅</span>
              </a>
            </Link>
            <Link href={"/profile"}>
              <a className="flex flex-col items-center group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-gray-400 group-hover:text-amber-500 transition-colors"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-xs">나의 당근</span>
              </a>
            </Link>
          </>
        ) : null}
      </section>
    </div>
  );
}
