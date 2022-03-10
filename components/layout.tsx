import { joinClasses } from "../libs/common";

interface LayoutProps {
  title?: React.ReactNode;
  hasTabBar?: boolean;
  children: React.ReactNode;
}

export default function Layout({ children, hasTabBar, title }: LayoutProps) {
  return (
    <>
      <section className="fixed top-0 w-full h-10">
        {title ? title : null}
      </section>
      <section
        className={title ? joinClasses("pt-10", hasTabBar ? "pb-10" : "") : ""}
      >
        {children}
      </section>
      <section
        className={joinClasses(
          "fixed bottom-0 w-full",
          hasTabBar ? "bg-slate-300 py-7" : ""
        )}
      ></section>
    </>
  );
}
