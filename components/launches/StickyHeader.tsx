import { ReactNode } from "react";

interface IProps {
  children: ReactNode;
  title: string;
}

const StickyHeader = ({ children, title }: IProps) => {
  return (
    <div className="relative">
      <h1 className="sticky top-0 px-4 lg:px-2 py-3 text-yellow-500 font-medium text-2xl bg-gray-900">
        {title}
      </h1>
      {children}
    </div>
  );
};

export default StickyHeader;
