import { RocketData } from "../../types";
import type { NextApiRequest, NextApiResponse } from "next";

export default async (_: NextApiRequest, res: NextApiResponse) => {
  try {
    const req = await fetch("https://api.spacexdata.com/v4/rockets");
    const rocketData: RocketData[] = await req.json();
    res.json(rocketData);
  } catch (error) {
    console.error(error)
  }
};
