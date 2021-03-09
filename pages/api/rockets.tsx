import { RocketData } from "../../types";
import type { NextApiRequest, NextApiResponse } from 'next'


export default async (_: NextApiRequest, res: NextApiResponse) => {
  const req = await fetch("https://api.spacexdata.com/v4/rockets");
  const rocketData: RocketData[] = await req.json();
  res.json(rocketData);
};
