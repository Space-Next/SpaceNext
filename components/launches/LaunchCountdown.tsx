import Countdown from "react-countdown";

interface IProps {
  time: Date;
  className?: string;
}

const pluralOrNot = (time: number) => `${time > 1 ? "s" : ""}`;
const timeLeft = (
  days: number,
  hours: number,
  minutes: number,
  seconds: number
) =>
  `${days ? `${days} day${pluralOrNot(days)}` : ""}  ${
    hours && days < 3 ? `${hours} hour${pluralOrNot(hours)}` : ""
  } ${minutes ? `${minutes} minute${pluralOrNot(minutes)}` : ""} ${
    seconds && days < 1 ? `${seconds} second${pluralOrNot(seconds)}` : ""
  }`;

const LaunchCountdown = ({ className = "", time }: IProps) => {
  return (
    <Countdown
      date={time}
      renderer={({ days, hours, minutes, seconds }) => {
        return (
          <div className={`space-x-2 flex items-center ${className}`}>
            {timeLeft(days, hours, minutes, seconds)} left
          </div>
        );
      }}
    />
  );
};

export default LaunchCountdown;
