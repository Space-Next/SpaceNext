import dayjs from "dayjs";
import { FormattedHistoryData } from "../../types";

interface IProps {
    data: FormattedHistoryData[];
}

const HistoryComponent = ({ data }: IProps) => {
    return (
      <ul className="px-4 lg:px-0 grid grid-cols-1">
        {data.map((historyList) => (
          <li className="rounded-lg shadow-lg my-1 lg:my-2" key={historyList.id}>
            <div className="w-full p-4 bg-gradient-to-r from-gray-800 to-gray-900 z-10 rounded-l-lg h-30">
              <div className="flex flex-col">
                <span className="text-yellow-500 text-xl lg:text-1xl font-medium font-nunito">
                  {dayjs(historyList.event_date).format("MMM DD, YYYY")}
                </span>
                <span className="text-xl text-gray-300 font-bold font-nunito">
                  {historyList.title}
                </span>
              <span className="text-sm text-gray-300 font-light font-nunito overflow-ellipsis">
                {historyList.details}
              </span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    );
  };

export default HistoryComponent;  