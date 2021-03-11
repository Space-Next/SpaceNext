import { GetStaticProps } from "next";
import Head from "next/head";
import UpcomingLaunches from "../../components/launches/UpcomingLaunches";
import NextLaunch from "../../components/launches/NextLaunch";
import PreviousLaunches from "../../components/launches/PreviousLaunches";
import { FormattedLaunchData, LaunchData } from "../../types";
import dayjs from "dayjs";
import isSameOrAfter from "dayjs/plugin/isSameOrAfter";
import StickyHeader from "../../components/launches/StickyHeader";
dayjs.extend(isSameOrAfter);

interface IProps {
  upcoming: FormattedLaunchData[];
  next: FormattedLaunchData[];
  past: FormattedLaunchData[];
}

type ModifiedLaunchData = [FormattedLaunchData[], FormattedLaunchData[]];

const Launches = ({ upcoming, next, past }: IProps) => {
  return (
    <>
      <Head>
        <title>SpaceNext - Launches</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <StickyHeader title="Upcoming">
          <UpcomingLaunches data={upcoming} />
        </StickyHeader>
        <NextLaunch data={next[0]} />
        <StickyHeader title="Past">
          <PreviousLaunches data={past} />
        </StickyHeader>
      </>
    </>
  );
};

export default Launches;

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://api.spacexdata.com/v4/launches");
  const launches: LaunchData[] = await response.json();
  const sortedLaunches = launches.sort((a, b) => b.date_unix - a.date_unix);

  // Split array into two arrays
  const [upcoming, past] = sortedLaunches.reduce(
    (acc, launch) => {
      const {
        id,
        details,
        rocket: rocketId,
        flight_number,
        date_local,
        success,
        payloads,
        links: {
          patch: { large },
          flickr: { original },
          wikipedia,
          webcast,
        },
      } = launch;

      // If launch is today or after today
      if (dayjs(date_local).isSameOrAfter(dayjs())) {
        acc[0].push({
          id,
          details,
          rocketId,
          payloads,
          flightNumber: flight_number,
          dateLocal: date_local,
          largePatch: large,
          flickr: original,
          wikipedia,
          youtube: webcast,
        });
      } else {
        acc[1].push({
          id,
          details,
          rocketId,
          payloads,
          flightNumber: flight_number,
          dateLocal: date_local,
          success,
          largePatch: large,
          flickr: original,
          wikipedia,
          youtube: webcast,
        });
      }
      return acc;
    },
    [[], []] as ModifiedLaunchData
  );

  const next = upcoming.splice(-1, 1);

  return {
    props: { upcoming, next, past },
  };
};
