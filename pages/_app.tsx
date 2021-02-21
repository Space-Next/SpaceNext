import NavigationLinks from "../components/NavigationLinks";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <div className="min-h-screen w-screen bg-gray-900">
          {
            Component.name === 'Home' ? <Component {...pageProps} /> : <div className="pl-0 lg:pl-44 pt-10 w-full">
            <Component {...pageProps} />
          </div>
          }
        <NavigationLinks />
      </div>
    </>
  );
}

export default MyApp;
