import { useEffect } from "react";
import { useRouter } from 'next/router'
import { GetStaticProps } from "next";
import { FormattedHistoryData, HistoryData } from "../../types";

interface IProps {
  formattedData: FormattedHistoryData[];
}

const History = ({ formattedData }: IProps) => {
  const { id } = formattedData[0];
  const router = useRouter()

  useEffect (() => {
    router.push(`history/${id}`)
  })
  return (
    <div>
      Loading
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch("https://api.spacexdata.com/v4/history");
  const historyData: HistoryData[] = await request.json();
  const formattedData = historyData.map((element) => {
    return {
      id: element.id,
    };
  });

  return {
    props: {
      formattedData,
    },
  };
};

export default History;
