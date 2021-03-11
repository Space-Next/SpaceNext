import { GetStaticProps } from "next";
import Head from "next/head";
import NewsComponent from "../../components/history/NewsComponent";
import { FormattedNewsData, NewsData } from "../../types";
import StickyHeader from "../../components/launches/StickyHeader";

interface IProps {
  historyList: FormattedNewsData[];
}

const History = ({ historyList }: IProps) => {
  return (
    <>
      <Head>
        <title>SpaceNext - News</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <StickyHeader title="News">
          <NewsComponent data={historyList} />
        </StickyHeader>
      </>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch("https://api.spacexdata.com/v4/history");
  const historyData: NewsData[] = await request.json();
  const historyList = historyData
    .map((element) => {
      return {
        id: element.id,
        links: element.links,
        title: element.title,
        event_date: element.event_date_utc,
        details: element.details,
      };
    })
    .sort(
      (a, b) => Number(new Date(b.event_date)) - Number(new Date(a.event_date))
    );

  return {
    props: { historyList },
  };
};

export default History;
