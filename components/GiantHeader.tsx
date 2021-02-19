import React from "react";

interface IProps {
  link: string;
}

const GiantHeader = ({ link }: IProps) => {
  return (
    <h1 className="mb-10 text-8xl lg:text-11xl vertical-mode transform rotate-60 text-gray-300 tracking-wide capitalize text-center">
      {link}
    </h1>
  );
};

export default GiantHeader;
