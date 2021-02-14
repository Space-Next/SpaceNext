import Head from "next/head";
import styles from "../styles/Home.module.css";
import {PlanetButton} from "../components/PlanetButton"

const data = ['rockets', 'ships', 'launches', 'news']

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
        <PlanetButton text={"Enter Space Next"} orbits={data}/>
      </div>
    </div>
  );
}
