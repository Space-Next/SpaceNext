import { Fragment } from "react";
import { Globe } from "../../components/icons/Icons";

interface IProps {
  overview: {
    images: string[];
    name: string;
    description: string;
    wikipedia: string;
    active: boolean;
    engine: string;
    stages: number;
    layout: string;
  };
}

const RocketOverview = ({ overview }: IProps) => {
  const tags = [overview.layout, overview.engine];
  return (
    <div className="w-full md:w-1/2 sm:flex md:block lg:w-96 mb-10 lg:mb-0">
      <div className="relative w-full sm:w-96">
        <img
          className="h-96 w-full rounded-md"
          src={overview.images[0]}
          alt="rocket ship"
        />
        <div className="w-full absolute bottom-0 pt-5 bg-gradient-to-b from-transparent to-gray-900">
          <div className="flex items-end px-2 justify-between">
            <h1 className="font-bold text-3xl lg:text-5xl text-yellow-500">
              {overview.name}
            </h1>

            <p className="text-gray-100">
              {overview.active ? "Active" : "Not active"}
            </p>
          </div>
        </div>
      </div>
      <div className="sm:w-1/2 md:w-auto sm:px-4 md:px-0 flex flex-col justify-between">
        <p className="my-5 sm:m-0 md:my-5 text-white text-base sm:text-lg">
          {overview.description}
        </p>
        <div className="mt-5 flex flex-row lg:flex-col justify-between">
          <div className="flex lg:mb-10">
            {tags.map((tag) => (
              <Fragment key={tag}>
                {tag && (
                  <span className="px-3 lg:px-4 py-1 lg:py-2 mr-2 bg-yellow-500 text-white text-sm font-medium capitalize bg-opacity-50 rounded-full flex items-center">
                    {tag}
                  </span>
                )}
              </Fragment>
            ))}
          </div>

          <a
            className="inline-flex items-center md:hover:text-yellow-500 md:hover:underline text-white font-medium text-sm lg:text-base"
            href={overview.wikipedia}
            target="_blank"
          >
            <Globe className={"h-5 w-5 lg:w-6 lg:h-6 mr-2 text-white"} />
            Wikipedia
          </a>
        </div>
      </div>
    </div>
  );
};

export default RocketOverview;
