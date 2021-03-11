import { RocketData } from "../types";
import dayjs from "dayjs";

const formatter = new Intl.NumberFormat().format;

export const GetIds = async () => {
  const req = await fetch("https://api.spacexdata.com/v4/rockets", {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const rocketData : RocketData[] = await req.json();

  const ids = rocketData.map(rocket => rocket.id)
  return ids
}

export const GetFormattedData = async () => {
  const req = await fetch("https://api.spacexdata.com/v4/rockets", {
    method: "GET",
    headers: {
      // update with your user-agent
      "User-Agent":
        "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.89 Safari/537.36",
      Accept: "application/json; charset=UTF-8",
    },
  });
  const rocketData: RocketData[] = await req.json();
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

  return formattedData;
}


