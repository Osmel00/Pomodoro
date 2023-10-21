import { FC, } from "react";
import { useDataProvider } from "../store/dataProvider";

const Menu: FC = () => {
  const {menu,setMenu,setClickMenu,clickMenu,font,theme } = useDataProvider();
 
  const toggleMenu = (e: any) => {
    setMenu(e.target.innerHTML);
    setClickMenu(!clickMenu);
  };
  
  return (
    <section className=" w-[327px] h-[150px]  flex flex-col justify-between items-center font-bold text-xs md:w-[373px] md:text-sm">
      <h1 className="font-Space-Mono  text-gray-metal text-3xl md:text-4xl">pomodoro</h1>
      <div className={` menu-container  w-full h-[63px] flex justify-around px-1 items-center rounded-full bg-dark-blue text-gray-metal shadow-2xl font-${font}`}>
        <button
          onClick={toggleMenu}
          className={`flex items-center justify-center rounded-full w-[106px] h-12 transition-colors duration-700  ${menu==='pomodoro'? `bg-${theme} text-main-background`:null }   `}
        >
          pomodoro
        </button>
        <button
          onClick={toggleMenu}
          className={`flex items-center justify-center rounded-full w-[106px] h-12 transition-colors duration-700  ${menu==='short break'? `bg-${theme} text-main-background`:null }`}
        >
          short break
        </button>
        <button
          onClick={toggleMenu}
          className={` flex items-center justify-center rounded-full w-[106px] h-12 transition-colors duration-700  ${menu==='long break'? `bg-${theme} text-main-background`:null } `}
        >
          long break
        </button>
      </div>
    </section>
  );
};

export default Menu;
