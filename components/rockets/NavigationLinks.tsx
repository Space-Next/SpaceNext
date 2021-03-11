import { FormattedRocketData } from "../../types";
import Link from 'next/link'

interface IProps {
  formattedData: FormattedRocketData[];
  selection: number;
}

function NavigationLinks({ formattedData, selection }: IProps) {

  return (
    <div className="xl:h-96 xl:w-1/5 mb-5 md:mb-10 xl:mb-0 mx-4 lg:mx-0 xl:pb-10 xl:px-4 flex xl:flex-col xl:ml-10 xl:justify-center rounded-md overflow-x-auto">
      {formattedData.map((element, index) => (
        <Link
          key={element.id}
          href="/rockets/[rocket]" as={`/rockets/${formattedData[index].id}`}
        >
          <a className={`lg:py-3 xl:py-5 w-full text-center	mr-10 xl:mr-0 xl:mb-4 text-2xl lg:text-base lg:rounded-lg lg:border-2 lg:border-transparent font-semibold text-white whitespace-nowrap ${
            selection === index
              ? "lg:bg-yellow-500 text-opacity-100 lg:bg-opacity-50"
              : "text-opacity-50 lg:text-opacity-100"
          } focus:outline-none md:hover:border-yellow-500`}>{element.overview.name}</a>
        </Link>
      ))}
    </div>
  );
}

export default NavigationLinks;
