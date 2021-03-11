import { FormattedLaunchData } from "../../types";
import LaunchCountdown from "./LaunchCountdown";
import dayjs from "dayjs";

interface IProps {
  data: FormattedLaunchData[];
}

const UpcomingLaunches = ({ data }: IProps) => {
  return (
    <ul className="grid grid-cols-1 md:grid-cols-2">
      {data.map((launch) => (
        <li
          className="p-3 lg:p-4 my-1 lg:my-2 flex items-center justify-between bg-gradient-to-r from-gray-800 to-transparent rounded-lg"
          key={launch.id}
        >
          <div className="flex flex-col space-y-3">
            <span className="text-sm text-gray-400">
              Flight number: {launch.flightNumber}
            </span>
            <span className="text-yellow-500 text-xl lg:text-2xl font-medium font-nunito">
              {dayjs(launch.dateLocal).format("MMM DD, YYYY")}
            </span>
            <span className="flex text-white">
              <LaunchCountdown time={dayjs(launch.dateLocal).toDate()} />
            </span>
          </div>

          <div className="h-20 w-20 lg:h-24 lg:w-24">
            {launch.largePatch && (
              <img
                className="h-full w-full"
                src={launch.largePatch}
                alt="patch of flight"
              />
            )}
          </div>
        </li>
      ))}
    </ul>
  );
};

export default UpcomingLaunches;
