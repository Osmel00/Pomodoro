import { FC } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

type Props = {
  maxValue: number;
  cont: number;
  theme: string;
};

const Circular: FC<Props> = ({ cont, maxValue,theme }) => {
  const percentage = cont;

  return (
    <>
      <CircularProgressbar
        value={percentage}
        strokeWidth={3}
        maxValue={maxValue}
        styles={buildStyles({
          textColor: "red",
          pathColor: `${theme === 'orange'?' #F87070':theme === 'light-blue'? '#70F3F8':'#D881F8' }`,
          trailColor: "#161932",
        })}
      />
      ;
    </>
  );
};

export default Circular;
