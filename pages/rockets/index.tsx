import { useEffect } from "react";
import { useRouter } from "next/router";
import { GetStaticProps } from "next";
import { FormattedRocketData } from "../../types";
import { GetIds } from "../../services/Rockets";
import { SpiralSpinner } from "react-spinners-kit";
interface IProps {
  formattedData: FormattedRocketData[];
}

const Rockets = ({ formattedData }: IProps) => {
  const id = formattedData[0];
  const router = useRouter();

  useEffect(() => {
    router.push(`rockets/${id}`);
  });

  return (
    <div className="w-full mt-10 flex items-center justify-center">
      <SpiralSpinner frontColor={"rgb(245, 158, 11)"} size={150} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const formattedData = await GetIds();

  return {
    props: {
      formattedData,
    },
  };
};

export default Rockets;
