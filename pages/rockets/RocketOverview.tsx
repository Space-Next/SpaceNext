import { Globe } from "../../components/icons/Icons";

interface IProps {
  overview: {
    images: string[];
    name: string;
    description: string;
    wikipedia: string;
    active: boolean;
  };
}

const RocketOverview = ({ overview }: IProps) => {
  return (
    <div className="w-96 pt-4">
      <div className="relative">
        <img
          className="h-96 w-96 rounded-md"
          src={overview.images[0]}
          alt="rocket ship"
        />
        <div className="w-full absolute bottom-0 pt-5 bg-gradient-to-b from-transparent to-gray-900">
          <div className="flex items-end justify-between px-2">
            <h1 className="font-bold text-5xl text-yellow-500">
              {overview.name}
            </h1>

            <p className="text-gray-100">
              {overview.active ? "Active" : "Not active"}
            </p>
          </div>
        </div>
      </div>
      <p className="my-5 px-2 text-white">{overview.description}</p>
      <div className="hover:text-yellow-500 hover:underline inline">
        <a
          className="inline-flex text-white font-medium"
          href={overview.wikipedia}
          target="_blank"
        >
          <Globe />
          Wikipedia
        </a>
      </div>
    </div>
  );
};

export default RocketOverview;
