import dayjs from "dayjs";
import { FormattedLaunchData } from "../../types";

interface IProps {
  data: FormattedLaunchData[];
}

const PreviousLaunches = ({ data }: IProps) => {
  return (
    <ul className="px-4 lg:px-0 grid grid-cols-1 md:grid-cols-2">
      {data.map((launch) => (
        <li className="rounded-lg shadow-lg my-1 lg:my-2" key={launch.id}>
          <div className="w-full p-4 flex items-center justify-between bg-gradient-to-r from-gray-800 to-gray-900 z-10 rounded-l-lg">
            <div className="flex flex-col space-y-3">
              <span className="text-sm text-gray-300">
                Flight number: {launch.flightNumber}
              </span>
              <span className="text-yellow-500 text-xl lg:text-2xl font-medium font-nunito">
                {dayjs(launch.dateLocal).format("MMM DD, YYYY")}
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
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PreviousLaunches;
