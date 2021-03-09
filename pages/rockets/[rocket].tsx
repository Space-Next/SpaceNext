import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import NavigationLinks from "./NavigationLinks";
import RocketOverview from "./RocketOverview";
import { FormattedRocketData } from "../../types";
import SpecOverview from "./SpecOverview";
import { GetIds, GetFormattedData } from "../services/Rockets";

interface IProps {
  formattedData: FormattedRocketData[];
}


const SingleRocket = ({ formattedData }: IProps) => {
  const router = useRouter();
  const queryId: string = router.query.rocket as string;

  const [selection, setSelection] = useState(0);
  const { overview, specs, payloadWeights, id } = formattedData[selection];

  useEffect(() => {
    if (id !== queryId) {
      const newIdx = formattedData.map((curr) => curr.id).indexOf(queryId);
      setSelection(newIdx);
    }
  });

  return (
    <>
      <Head>
        <title>SpaceNext - Rockets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col xl:flex-row-reverse justify-start">
        <NavigationLinks formattedData={formattedData} selection={selection} />
        <div className="w-full px-4 lg:px-0 flex flex-col md:flex-row items-start justify-between rounded-md">
          <RocketOverview overview={overview} />
          <SpecOverview specs={specs} payloadWeights={payloadWeights} />
        </div>
      </div>
    </>
  );
};

export const getStaticPaths = async () => {
  const ids = await GetIds();
  const paths = ids.map(id => ({params: {rocket: id}}))

  return { paths, fallback: false };
};

export const getStaticProps = async () => {
  const formattedData = await GetFormattedData()
  
  return {
    props: {
      formattedData,
    },
  };
};

export default SingleRocket;
