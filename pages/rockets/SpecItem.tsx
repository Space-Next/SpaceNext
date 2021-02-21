interface IProps {
  element: {
    spec: string;
    main: string | number;
    secondary: string | number;
    mainSuffix?: string;
    secondarySuffix?: string;
  };
}

const SpecItem = ({
  element: { main, mainSuffix = "", secondary, secondarySuffix = "", spec },
}: IProps) => {
  return (
    <div className="text-right xl:mr-0 xl:mb-10">
      <h1 className="text-yellow-500 opacity-85 font-black text-2xl sm:text-3xl xl:text-6xl font-nunito">
        {secondary && (
          <span className="text-gray-400 text-2xl md:text-3xl xl:text-4xl mr-4">
            {secondary + secondarySuffix}
          </span>
        )}
        {main + mainSuffix}
      </h1>
      <h2 className="my-3 text-gray-400 uppercase font-semibold text-base xl:text-xl">
        {spec}
      </h2>
    </div>
  );
};

export default SpecItem;
