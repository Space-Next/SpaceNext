import React from "react";
import { useRouter } from "next/router";

const GiantHeader = () => {
  const router = useRouter();
  return (
    <h1 className="fixed text-8xl lg:text-11xl left-16 lg:left-20 top-16 origin-left transform rotate-90 text-yellow-500 tracking-wide capitalize z-0 text-center">
      {router.pathname.split("/")}
    </h1>
  );
};

export default GiantHeader;
