import { useState } from "react";
import SpecLinks from "./SpecLinks";
import SpecItem from "./SpecItem";

interface IProps {
  payloadWeights: {
    id: string;
    spec: string;
    main: number | string;
    secondary: number | string;
    mainSuffix: string;
    secondarySuffix: string;
  }[];
  specs: {
    spec: string;
    main: string | number;
    secondary: string | number;
    mainSuffix?: string;
    secondarySuffix?: string;
  }[];
}

const SpecOverview = ({ specs, payloadWeights }: IProps) => {
  const [linkState, setLinkState] = useState("Specs");

  const links = ["Specs", "Payload weights"];

  const selectedStyle = (link: string) =>
    linkState === link
      ? "border-b-2 border-yellow-500"
      : "border-b-2 border-gray-700 text-opacity-70 hover:text-opacity-100";

  return (
    <div className="h-full ml-10">
      <SpecLinks
        links={links}
        selectedStyle={selectedStyle}
        setLinkState={setLinkState}
      />
      {linkState === "Specs"
        ? specs.map((spec) => {
            return <SpecItem key={spec.main} element={spec} />;
          })
        : payloadWeights.map((weight) => (
            <SpecItem key={weight.id} element={weight} />
          ))}
    </div>
  );
};

export default SpecOverview;
