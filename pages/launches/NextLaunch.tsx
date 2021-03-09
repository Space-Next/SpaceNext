import { createRef, useEffect } from "react";
import LaunchCountdown from "./LaunchCountdown";
import { FormattedLaunchData } from "../../types";
import dayjs from "dayjs";
import { Globe, Play } from "../../components/icons/Icons";

interface IProps {
  data: FormattedLaunchData;
}

const NextLaunch = ({ data }: IProps) => {
  const launchRef = createRef<HTMLHeadingElement>();
  useEffect(() => {
    launchRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, []);

  return (
    <div className="my-10 p-4" ref={launchRef}>
      <div className="flex flex-col items-center">
        <h1 className="text-white text-4xl lg:text-5xl xl:text-7xl font-nunito font-bold">
          Next Launch
        </h1>
        <LaunchCountdown
          className="text-yellow-500 text-2xl lg:text-3xl xl:text-5xl text-center mt-3"
          time={dayjs(data.dateLocal).toDate()}
        />
      </div>
      <div className="mt-10 p-4 flex flex-col-reverse lg:flex-row items-center justify-between bg-gradient-to-r from-gray-800 to-transparent shadow-xl rounded-lg">
        <div className="space-y-4 flex lg:block flex-col items-center">
          <h1 className="text-white text-xl text-opacity-75">
            Flight Number: {data.flightNumber}
          </h1>
          {data.youtube && (
            <a
              className="text-yellow-500 flex text-xl md:text-3xl hover:underline cursor-pointer"
              href={data.youtube}
              target="_blank"
            >
              <Play />
              Livestream
            </a>
          )}
          {data.wikipedia && (
            <a
              className="text-yellow-500 flex text-xl md:text-3xl hover:underline cursor-pointer"
              href={data.wikipedia}
              target="_blank"
            >
              <Globe className={"w-7 h-7 md:w-10 md:h-10 mr-2"} />
              Wikipedia
            </a>
          )}
        </div>
        <img
          className="h-40 w-40 lg:h-32 lg:w-32"
          src={data.largePatch}
          alt="large patch"
        />
      </div>
    </div>
  );
};

export default NextLaunch;
