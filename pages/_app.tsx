import TabsBar from "../components/TabsBar";
import GiantHeader from "../components/GiantHeader";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="h-screen w-screen bg-gray-900">
        <TabsBar>
          <div className="pt-6 lg:pt-12 pl-28 lg:pl-44 pr-4">
            <Component {...pageProps} />
          </div>
          <GiantHeader />
        </TabsBar>
      </div>
    </>
  );
}

export default MyApp;