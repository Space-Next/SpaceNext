import Head from "next/head";
import styles from "../styles/Home.module.css";
import {PlanetButton} from "../components/PlanetButton"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex items-center justify-center">
        <PlanetButton />
      </div>
    </div>
  );
}
