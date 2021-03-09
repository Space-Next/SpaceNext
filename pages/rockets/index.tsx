import { useEffect } from "react";
import { useRouter } from 'next/router'
import { GetStaticProps } from "next";
import { FormattedRocketData } from "../../types";
import {GetIds} from "../services/Rockets"
interface IProps {
  formattedData: FormattedRocketData[];
}

const Rockets = ({ formattedData }: IProps) => {
  const id  = formattedData[0];
  const router = useRouter()

  useEffect (() => {
    router.push(`rockets/${id}`)
  })

  return (
    <div className="text-white">
      Loading
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const formattedData = await GetIds()
  
  return {
    props: {
      formattedData,
    },
  };
};

export default Rockets;
