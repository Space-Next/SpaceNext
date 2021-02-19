interface IProps {
  element: {
    spec: string;
    main: string | number;
    secondary: string | number;
    mainSuffix?: string;
    secondarySuffix?: string;
  };
}

const SpecItem = ({ element }: IProps) => {
  return (
    <div className="text-right mb-10">
      <h1 className="text-yellow-500 opacity-75 font-black text-6xl font-nunito">
        {element.secondary && (
          <span className="text-gray-400 text-4xl mr-4">
            {element.secondary}{" "}
            {element.secondarySuffix && element.secondarySuffix}
          </span>
        )}
        {element.main} {element.mainSuffix && element.mainSuffix}
      </h1>
      <h2 className="mb-3 text-gray-400 uppercase font-semibold text-xl">
        {element.spec}
      </h2>
    </div>
  );
};

export default SpecItem;
