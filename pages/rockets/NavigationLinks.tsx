import { FormattedRocketData } from "../../types";

interface IProps {
  formattedData: FormattedRocketData[];
  selection: number;
  onClick: (index: number) => void;
}

function NavigationLinks({ formattedData, selection, onClick }: IProps) {
  const onSelect = (index: number) => {
    onClick(index);
  };
  return (
    <div className="xl:h-96 xl:w-1/5 mb-5 md:mb-10 xl:mb-0 mx-4 lg:mx-0 xl:pb-10 xl:px-4 flex xl:flex-col xl:ml-10 xl:justify-center rounded-md overflow-x-auto">
      {formattedData.map((element, index) => (
        <button
          key={element.id}
          className={`lg:py-3 xl:py-5 lg:px-10 xl:px-0 mr-10 xl:mr-0 xl:mb-4 text-2xl lg:text-base lg:rounded-lg lg:border-2 lg:border-transparent font-semibold text-white whitespace-nowrap ${
            selection === index
              ? "lg:bg-yellow-500 text-opacity-100 lg:bg-opacity-50"
              : "text-opacity-50 lg:text-opacity-100"
          } focus:outline-none md:hover:border-yellow-500`}
          onClick={() => onSelect(index)}
        >
          {element.overview.name}
        </button>
      ))}
    </div>
  );
}

export default NavigationLinks;
