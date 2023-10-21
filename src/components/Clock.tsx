import { useState, useEffect } from "react";
import Circular from "./Circular";
import { useDataProvider } from "../store/dataProvider";

const Clock = () => {
  const { menu, formular, auxData, clickMenu, setClickMenu, font, setFont,theme,setTheme } =
    useDataProvider();
  const [start, setStart] = useState<boolean>(false);
  const [idInterval, setIdInterval] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(60);
  const [min, setMin] = useState<number>(formular.pomodoro);
  const [cont, setCont] = useState<number>(60 * min); // este valor y clicks tienen que ser iguales para que descuente parejo
  const [max, setMax] = useState<number>(60 * min);

  const getFont = (): string => {
    if (auxData.length > 0) {
      if (auxData[0]["Roboto-Slab"]) return "Roboto-Slab";
      if (auxData[0]["Space-Mono"]) return "Space-Mono";
    }
    return "Kumbh-Sans";
  };
  const getTheme = (): string => {
    if (auxData.length > 0) {
      if (auxData[0].purple) return "purple";
      if (auxData[0]["light-blue"]) return "light-blue";
    }
    return "orange";
  };

  const showTime = () => {
    if (auxData.length === 0) {
      if (menu === "pomodoro") return formular.pomodoro;
      if (menu === "short break") return formular["short break"];
      return formular["long break"];
    }
    if (menu === "pomodoro") return auxData[0].pomodoro;
    if (menu === "short break") return auxData[0]["short break"];
    return auxData[0]["long break"];
  };

  useEffect(() => {
    setStart(false);
    setSeconds(60);
  }, [clickMenu]);

  useEffect(() => {
    setSeconds(60);
    setFont(getFont());
    setTheme(getTheme());
  }, [auxData]);
  useEffect(() => {
    const converToSecond = showTime();
    setMin(converToSecond);
    setCont(converToSecond * 60);
    setMax(converToSecond * 60);
  }, [clickMenu, auxData]);

  useEffect(() => {
    if (start) {
      let id = setInterval(() => {
        setSeconds((prev) => prev - 1);
        setCont((prev) => prev - 1);
      }, 1000);

      setIdInterval(id);
    } else {
      clearInterval(idInterval);
    }
  }, [start]);

  useEffect(() => {
    // Convert();
  }, [seconds === 9]);

  useEffect(() => {
    if (start) {
      setSeconds(60);
    }
  }, [seconds === 0]);

  useEffect(() => {
    if (start && seconds === 59) setMin((prev) => prev - 1);
  }, [seconds === 59]);

  useEffect(() => {
    if (seconds === 0 && min === 0) {
      clearInterval(idInterval);
      setCont(60 * 1);
    }
  }, [seconds]);

  const startPomodoro = () => {
    setStart((prev) => !prev);
    if (min === 0 && seconds === 60) setClickMenu(!menu);
  };

  return (
    <section
      className={`  w-[300px] h-[300px] bg-dark-blue rounded-full  font-${font} md:w-[410px] md:h-[410px]`}
    >
      <div className=" p-5 w-full h-full rounded-full bg-gradient-to-tl from-[#6F76B9] to-transparent  to-65%">
        <div className=" relative bg-dark-blue border-3 w-full h-full rounded-full flex justify-center items-center  p-2 ">
          <p className="text-gray-metal font-bold text-7xl absolute transition-opacity  md:text-8xl">
            {" "}
            {min < 10 ? "0" + min : min === 0 ? "00" : min}:
            {seconds === 60
              ? "00"
              : seconds === 0 && min === 0
              ? "00"
              : seconds < 10
              ? "0" + seconds
              : seconds}{" "}
          </p>
          {min === 0 && seconds === 60 ? (
            <button
              onClick={startPomodoro}
              className="cursor-pointer z-40 absolute bottom-10 text-2xl font-bold text-gray-metal tracking-[0.4em]"
            >
              RESTART
            </button>
          ) : (
            <button
              className=" cursor-pointer z-40 absolute bottom-10 text-2xl font-bold text-gray-metal tracking-[0.4em]"
              onClick={startPomodoro}
            >
              {start ? "PAUSE" : "START"}
            </button>
          )}
          <div className='w-full h-full mx-auto'>
            <Circular cont={cont} maxValue={max} theme={theme} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clock;
