import { useRouter } from "next/router";
import { joinClasses } from "@libs/common";
import PrevBtn from "./prevBtn";
import TabBar from "./tabBar";

interface LayoutProps {
  title?: React.ReactNode;
  hasTabBar?: boolean;
  hasBackBtn?: boolean;
  children: React.ReactNode;
}

export default function Layout({
  children,
  hasTabBar,
  hasBackBtn,
  title,
}: LayoutProps) {
  const router = useRouter();

  function clickPreBtn() {
    router.back();
  }

  return (
    <div className="w-full max-w-lg mx-auto">
      <section
        className={joinClasses(
          "fixed top-0 w-full bg-white z-10 border-b border-b-gray-300 max-w-lg flex gap-3",
          title || hasBackBtn ? "h-14" : ""
        )}
      >
        {hasBackBtn ? <PrevBtn OnClick={clickPreBtn} /> : null}
        {title ? title : null}
      </section>
      <section
        className={joinClasses(
          "",
          title || hasBackBtn ? "pt-14" : "",
          hasTabBar ? "pb-14" : ""
        )}
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
        {hasTabBar ? <TabBar /> : null}
      </section>
    </div>
  );
}
