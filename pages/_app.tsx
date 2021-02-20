import Navigation from "../components/Navigation";
import GiantHeader from "../components/GiantHeader";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="w-screen bg-gray-900">
        <Navigation>
          {
            Component.name === 'Home' ? <Component {...pageProps} /> : <div className="pt-6 lg:pt-12 pl-28 lg:pl-44 pr-4">
            <Component {...pageProps} />
          </div>
          }
          <GiantHeader />
        </Navigation>
      </div>
    </>
  );
}

export default MyApp;
