
import { GetStaticProps } from "next";
import Head from "next/head";
import HistoryComponent from "../../components/history/HistoryComponent";
import { FormattedHistoryData, HistoryData } from "../../types";
import StickyHeader from "../../components/launches/StickyHeader";

interface IProps {
  historyList: FormattedHistoryData[];
}

const History = ( { historyList }:IProps ) => {
  return(
    <>
      <Head>
        <title>SpaceNext - History</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <StickyHeader title="News">
          <HistoryComponent data={ historyList }/>
        </StickyHeader>
      </>
    </>
  )
}


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

export default History;
