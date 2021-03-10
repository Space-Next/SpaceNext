
import { GetStaticProps } from "next";
import Head from "next/head";import { useEffect } from "react";
import HistoryComponent from "./HistoryComponent";
import { useRouter } from 'next/router'
import { FormattedHistoryData, HistoryData } from "../../types";
import StickyHeader from "../launches/StickyHeader";

interface IProps {
  data: FormattedHistoryData[];
}

const History = ( { historyList }:IProps ) => {
  return(
    <>
      <Head>
        <title>SpaceNext - History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <StickyHeader title="history">
          <HistoryComponent data={ historyList }/>
        </StickyHeader>
      </>
    </>
  )
}

export default History;

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch("https://api.spacexdata.com/v4/history");
  const historyData: HistoryData[] = await request.json();
  const historyList = historyData.map((element) => {
    return {
      id: element.id,
      links: element.links,
      title: element.title,
      event_date: element.event_date_utc,
      details: element.details,
    };
  });

  return {
    props: { historyList },
  };
};

