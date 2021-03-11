
import NavigationLinks from "../components/NavigationLinks";
import type { AppProps } from "next/app";
import "../styles/globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const conditionalPadding =
    router.pathname === "/" ? "" : "pl-0 lg:pl-44 pt-10 w-full";

  return (
    <div className="min-h-screen w-screen bg-gray-900">
      <div className={conditionalPadding}>
        <Component {...pageProps} />
      </div>

      <NavigationLinks />
    </div>
  );
}

export default MyApp;
