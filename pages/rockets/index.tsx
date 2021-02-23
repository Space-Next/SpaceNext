import { useEffect } from "react";
import { useRouter } from 'next/router'
import { GetStaticProps } from "next";
import { FormattedRocketData, RocketData } from "../../types";

interface IProps {
  formattedData: FormattedRocketData[];
}

const Rockets = ({ formattedData }: IProps) => {
  const { id } = formattedData[0];
  const router = useRouter()

  useEffect (() => {
    router.push(`rockets/${id}`)
  })
  return (
    <div>
      Loading
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch("https://api.spacexdata.com/v4/rockets");
  const rocketData: RocketData[] = await request.json();
  const formattedData = rocketData.map((element) => {
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

export default Rockets;
