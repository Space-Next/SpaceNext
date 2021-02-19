import NavigationLinks from "../components/NavigationLinks";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-900">
        <div className="pl-28 lg:pl-44 pt-10 w-full">
          <Component {...pageProps} />
        </div>
        <NavigationLinks />
      </div>
    </>
  );
}

export default MyApp;
