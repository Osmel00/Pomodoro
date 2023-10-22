import { useState } from "react";
import SettingsBtn from "./SettingsBtn.tsx";
import CloseBtn from "./Close.tsx";
import { useDataProvider } from "../store/dataProvider";
import { motion, AnimatePresence } from "framer-motion";

function SettingsModal() {
  const [toggleBtn, setToggleBtn] = useState<boolean>(false);
  const { theme, formular, auxData, addData } = useDataProvider(
    (state) => state
  );

  const getDataForm = (e: any) => {
    e.preventDefault();
    const aux: any = {};
    Object.entries(formular).map(([key, value], index) => {
      if (e.target[index].value === "on") {
        aux[key] = e.target[index].checked;
      } else {
        aux[key] = e.target[index].value;
      }
    });

    if (auxData.length > 1) auxData.pop();

    addData(aux);
    setToggleBtn((prev) => !prev);
  };

  return (
    <>
      {/* <!-- Modal toggle --> */}

      <button
        className=" hover:animate-spin"
        onClick={() => setToggleBtn((prev) => !prev)}
      >
        <SettingsBtn />
      </button>

      {/* <!-- Main modal --> */}
      <AnimatePresence>
        <motion.div
          key={toggleBtn}
          initial={{ opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          exit={{ opacity: 0 }}
          className={`${
            !toggleBtn ? "hidden" : "fixed"
          }    inset-0 z-[70] bg-black bg-opacity-30 backdrop-blur-sm w-full p-4 overflow-x-hidden overflow-y-auto  h-screen flex items-center  `}
        >
          <motion.section
            initial={{ y: -1000, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ y: -1000, opacity: 0 }}
            className=" rounded-lg  bg-silver-custom  w-[90%] h-full max-h-[600px] mx-auto relative md:w-[540px] "
          >
            <div className="text-dark-blue flex justify-between px-5 items-center  border-b-2 py-6 ">
              <h2 className="text-xl font-bold md:text-3xl">Settings</h2>
              <CloseBtn onClick={() => setToggleBtn((prev) => !prev)} />
            </div>
            <form onSubmit={getDataForm} className="time p-5 ">
              <h3 className="pb-5 font-semibold text-dark-blue text-center tracking-[0.4em] md:text-left">
                TIME (MINUTES)
              </h3>
              <div className="container flex flex-col  gap-y-4 pb-7 md:flex md:flex-row md:justify-between md:w-[462px] md:mx-auto  ">
                <div className="flex justify-between items-center  font-bold text-gray-400  md:flex md:flex-col md:items-start md:gap-y-3 ">
                  pomodoro
                  <input
                    className="text-dark-blue fon w-[140px] py-2 px-4 h-10 rounded-md bg-[#979797]/10 outline-none"
                    type="number"
                    min={1}
                    max={999}
                    pattern="^[0-9]+"
                    defaultValue={25}
                    name="pomodoro"
                  />
                </div>
                <div className="flex justify-between items-center  font-bold text-gray-400 md:flex md:flex-col md:items-start md:gap-y-3">
                  short break
                  <input
                    className="text-dark-blue fon w-[140px] py-2 px-4 h-10 rounded-md bg-[#979797]/10 outline-none"
                    type="number"
                    min={1}
                    max={999}
                    pattern="^[0-9]+"
                    defaultValue={5}
                  />
                </div>
                <div className="flex justify-between items-center  font-bold text-gray-400 md:flex md:flex-col md:items-start md:gap-y-3">
                  long break
                  <input
                    className="text-dark-blue fon w-[140px] py-2 px-4 h-10 rounded-md bg-[#979797]/10 outline-none"
                    type="number"
                    min={1}
                    max={999}
                    pattern="^[0-9]+"
                    defaultValue={15}
                  />
                </div>
              </div>

              <div className="font border-y-2 py-8 flex flex-col items-center md:flex md:flex-row md:justify-between md:w-[462px] md:mx-auto">
                <h3 className=" font-semibold text-dark-blue text-center tracking-[0.4em]">
                  FONT
                </h3>
                <div className="container-btn w-[200px] h-12 flex justify-center items-center gap-x-8 ">
                  <label htmlFor="Kumbh-Sans" className="cursor-pointer ">
                    <div className="w-10 h-10 flex justify-center items-center rounded-ful">
                      <input
                        className=" peer sr-only"
                        type="radio"
                        name="fonts"
                        id="Kumbh-Sans"
                        defaultChecked
                      />
                      <span className=" font-Kumbh-Sans rounded-full w-10 h-10  transition-all flex items-center justify-center text-lg     peer-checked:bg-dark-blue peer-checked:text-white   ">
                        Aa
                      </span>
                    </div>
                  </label>
                  <label htmlFor="Space-Mono" className="cursor-pointer">
                    <div className="w-10 h-10 flex justify-center items-center rounded-ful">
                      <input
                        className=" peer sr-only"
                        type="radio"
                        name="fonts"
                        id="Space-Mono"
                      />
                      <span className="font-Space-Mono rounded-full w-10 h-10 transition-all   text-lg flex justify-center items-center  peer-checked:bg-dark-blue peer-checked:text-white  ">
                        Aa
                      </span>
                    </div>
                  </label>

                  <label htmlFor="Roboto-Slab" className="cursor-pointer">
                    <div className="w-10 h-10 flex justify-center items-center rounded-ful">
                      <input
                        className=" peer sr-only"
                        type="radio"
                        name="fonts"
                        id="Roboto-Slab"
                      />
                      <span className="font-Roboto-Slab rounded-full w-10 h-10  transition-all  text-lg flex justify-center items-center  peer-checked:bg-dark-blue peer-checked:text-white  ">
                        Aa
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="colors w-full h-full flex flex-col justify-center items-center gap-y-4 pt-4 md:flex md:flex-row md:justify-between md:w-[462px] md:items-center md:mx-auto md:py-6 ">
                <h3 className=" font-semibold text-dark-blue text-center tracking-[0.4em]">
                  COLOR
                </h3>
                <div className="color-btn  w-[200px] h-12 flex justify-center gap-x-8">
                  <label htmlFor="orange" className="cursor-pointer">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-orange">
                      <input
                        className=" peer sr-only"
                        type="radio"
                        name="colors"
                        id="orange"
                        defaultChecked ={theme === 'orange'? true: false} 
                      />
                      <span className={` w-5 h-5  peer-checked:flex peer-checked:justify-center peer-checked:items-center  text-2xl  hidden`}>
                        <img src="/src/images/check.png" alt="image-check" />
                      </span>
                    </div>
                  </label>

                  <label htmlFor="blue" className="cursor-pointer">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-light-blue">
                      <input
                        className=" peer sr-only "
                        type="radio"
                        name="colors"
                        id="blue"
                        defaultChecked ={theme === 'light-blue'? true: false} 
                      />
                      <span className={` w-5 h-5   peer-checked:flex peer-checked:justify-center peer-checked:items-center  text-2xl  hidden`}>
                        <img src="/src/images/check.png" alt="image-check" />
                      </span>
                    </div>
                  </label>
                  <label htmlFor="purple" className="cursor-pointer">
                    <div className="w-10 h-10 flex justify-center items-center rounded-full bg-purple">
                      <input
                        className=" peer sr-only "
                        type="radio"
                        name="colors"
                        id="purple"
                        defaultChecked ={theme === 'purple'? true: false} 
                      />
                      <span className={` w-5 h-5   peer-checked:flex peer-checked:justify-center peer-checked:items-center  text-2xl  hidden `}>
                        <img src="/src/images/check.png" alt="image-check" />
                      </span>
                    </div>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className={`absolute left-0 right-0 -bottom-6 m-auto w-[140px] h-[53px] bg-${theme} rounded-full text-white font-semibold hover:scale-110 transition-transform duration-300`}
              >
                Apply
              </button>
            </form>
          </motion.section>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default SettingsModal;
