import { FormattedRocketData } from "../../types";

interface IProps {
  formattedData: FormattedRocketData[];
  selection: number;
  onClick: (index: number) => void;
}

function NavigationLinks({ formattedData, selection, onClick }: IProps) {
  return (
    <div className="h-96 pb-10 px-4 flex flex-col ml-10 justify-center rounded-md">
      {formattedData.map((element, index) => (
        <button
          key={element.id}
          className={`py-5 px-10 mb-4 rounded-lg border-2 border-transparent font-semibold text-white whitespace-nowrap ${
            selection === index ? "bg-yellow-500 bg-opacity-50" : ""
          } focus:outline-none hover:border-yellow-500`}
          onClick={() => onClick(index)}
        >
          {element.overview.name}
        </button>
      ))}
    </div>
  );
}

export default NavigationLinks;
