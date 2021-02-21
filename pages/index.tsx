import Head from "next/head";
import HomePage from "../components/homePage"

export default function Home() {
  return (
    <>
      <Head>
        <title>SpaceNext</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomePage />
    </>
  );
}
