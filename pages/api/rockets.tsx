import { RocketData } from "../../types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
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
    res.json(rocketData);
  } catch (error) {
    console.error(error)
  }
};
