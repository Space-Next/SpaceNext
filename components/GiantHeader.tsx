import React from "react";

interface IProps {
  link: string;
}

const GiantHeader = ({ link }: IProps) => {
  return (
    <h1 className="mb-5 ml-5 hidden lg:block text-8xl lg:text-7xl vertical-mode transform rotate-60 text-gray-400 tracking-wide capitalize text-center">
      {link}
    </h1>
  );
};

export default GiantHeader;
