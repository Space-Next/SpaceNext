import Link from "next/link";

interface IProps {
  children: React.ReactNode;
}

const Tabs = ({ children }: IProps) => {
  return (
    <div className="w-screen p-4 flex justify-center lg:justify-between z-20 text-white">
      <div className="hidden lg:flex items-center">
        <Link href="/">
          <h1 className="text-3xl font-semibold cursor-pointer">SpaceNext</h1>
        </Link>
      </div>

      <div>{children}</div>
    </div>
  );
};

export default Tabs;
