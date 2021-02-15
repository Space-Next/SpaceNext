interface IProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: IProps) => {
  return (
    <div className="w-screen p-4 flex justify-center lg:justify-between z-20 text-white">
      <div className="hidden lg:flex items-center">
        <h1 className="text-3xl font-semibold">SpaceNext</h1>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Tabs;
