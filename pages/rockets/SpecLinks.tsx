import { Dispatch, SetStateAction } from "react";

interface IProps {
  links: string[];
  setLinkState: Dispatch<SetStateAction<string>>;
  selectedStyle: (
    link: string
  ) =>
    | "border-b-2 border-yellow-500"
    | "border-b-2 border-gray-700 text-opacity-70 hover:text-opacity-100";
}

const SpecLinks = ({ links, setLinkState, selectedStyle }: IProps) => {
  return (
    <div className="w-full flex items-center justify-center xl:justify-end mb-10">
      {links.map((link) => (
        <button
          key={link}
          className={`px-4 pb-4 text-gray-300 font-medium capitalize ${selectedStyle(
            link
          )} focus:outline-none xl:hover:border-yellow-900`}
          onClick={() => setLinkState(link)}
        >
          {link}
        </button>
      ))}
    </div>
  );
};

export default SpecLinks;
