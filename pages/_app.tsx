import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SWRConfig } from "swr";
import useUser from "@libs/client/useUser";

function AuthComponent() {
  useUser(["/enter"]);
  return null;
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig
      value={{
        fetcher: async (url) => {
          const res = await fetch(url);

          if (!res.ok) {
            throw {
              info: res.body,
              status: res.status,
            };
          }

          return res.json();
        },
      }}
    >
      <AuthComponent />
      <Component {...pageProps} />
    </SWRConfig>
  );
}

export default MyApp;
