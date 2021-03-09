import { RocketData } from "../../types";

export default async (_, res, next) => {
  try {
    const req = await fetch("https://api.spacexdata.com/v4/rockets");
    const rocketData : RocketData[] = await req.json();
    res.json(rocketData)
  } catch (error) {
    next(error)
  }
}


