import { useState } from "react";
import Head from "next/head";
import { GetStaticProps } from "next";
import NavigationLinks from "./NavigationLinks";
import RocketOverview from "./RocketOverview";
import { FormattedRocketData, RocketData } from "../../types";
import dayjs from "dayjs";
import SpecOverview from "./SpecOverview";

interface IProps {
  formattedData: FormattedRocketData[];
}

const formatter = new Intl.NumberFormat().format;

const Rockets = ({ formattedData }: IProps) => {
  const [selection, setSelection] = useState(0);
  const { overview, specs, payloadWeights } = formattedData[selection];

  const onClick = (index: number) => {
    setSelection(index);
  };

  return (
    <>
      <Head>
        <title>SpaceNext - Rockets</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col xl:flex-row-reverse justify-start">
        <NavigationLinks
          formattedData={formattedData}
          selection={selection}
          onClick={onClick}
        />
        <div className="w-full px-4 lg:px-0 flex flex-col md:flex-row items-start justify-between rounded-md">
          <RocketOverview overview={overview} />
          <SpecOverview specs={specs} payloadWeights={payloadWeights} />
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const request = await fetch("https://api.spacexdata.com/v4/rockets");
  const rocketData: RocketData[] = await request.json();
  const formattedData = rocketData.map((element) => {
    const specs = [
      {
        spec: "height",
        main: formatter(element.height.feet),
        mainSuffix: "ft",
        secondary: formatter(element.height.meters),
        secondarySuffix: "m /",
      },
      {
        spec: "diameter",
        main: formatter(element.diameter.feet),
        mainSuffix: "ft",
        secondary: formatter(element.diameter.meters),
        secondarySuffix: "m /",
      },
      {
        spec: "Mass",
        main: formatter(element.mass.lb),
        mainSuffix: "lb",
        secondary: formatter(element.mass.kg),
        secondarySuffix: "kg /",
      },
      {
        spec: "Cost per launch",
        main: `$ ${formatter(element.cost_per_launch)}`,
      },
      {
        spec: "First flight",
        main: dayjs(element.first_flight).format("MMM DD, YY"),
      },
    ];
    const payloadWeights = element.payload_weights.map((element) => {
      return {
        id: element.id,
        main: formatter(element.kg),
        mainSuffix: "lb",
        secondary: formatter(element.kg),
        secondarySuffix: "kg /",
        spec: element.name,
      };
    });
    return {
      id: element.id,
      overview: {
        images: element.flickr_images,
        name: element.name,
        description: element.description,
        wikipedia: element.wikipedia,
        active: element.active,
        stages: element.stages,
        layout: element.engines.layout,
        engine: element.engines.type,
      },
      specs,
      payloadWeights,
    };
  });

  return {
    props: {
      formattedData,
    },
  };
};

export default Rockets;
