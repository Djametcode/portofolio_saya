/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft, FaGithub, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Portofolio() {
  const url: string[] = ["/pj1.png", "/pj1-1.png"];
  const [index, setIndex] = useState(0);
  const isDark = useSelector((state: RootState) => state.dark.value);

  const nextImage = () => {
    setIndex(index + 1);

    if (index === url.length - 1) {
      setIndex(0);
    }
  };

  const prevImage = () => {
    setIndex(index - 1);

    if (index === 0) {
      setIndex(url.length - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(1);

      if (index === url.length - 1) {
        setIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  });
  return (
    <>
      <div
        className={` ${
          isDark ? "bg-black text-white" : "bg-slate-100"
        } flex flex-col items-center font-figtree p-8 text-2xl font-extrabold max-sm:pb-5 pb-20 text-center`}
      >
        <h1 className=" pb-5">My Portofolio</h1>
      </div>
      <div
        className={`w-full h-[650px] max-sm:flex-col flex justify-center max-sm:p-5 gap-10 ${
          isDark ? "bg-black text-white" : "bg-slate-100"
        }`}
      >
        <div
          className={` ${
            isDark ? " bg-gray-500 text-white" : "bg-slate-100"
          } relative  pt-5 shadow max-sm:w-full max-sm:h-full w-[600px] h-[550px] flex flex-col gap-14 items-center p-4 rounded-lg`}
        >
          <div className=" flex">
            <h1 className=" absolute left-5 text-xl font-extralight font-figtree">
              Nolife Social Media
            </h1>
            <div className=" absolute bg-black rounded-lg text-sm right-5 font-figtree">
              <button className=" p-2 text-white">visit project</button>
            </div>
          </div>
          <div className=" relative max-sm:w-full max-sm:h-full w-[550px] h-[350px] flex gap-5">
            <img
              className=" w-full h-full object-contain shadow rounded-lg"
              src={url[index]}
              alt=""
            />
            <div className=" absolute flex items-center max-sm:w-full max-sm:h-full w-[550px] h-[350px] justify-between">
              <div onClick={prevImage} className=" cursor-pointer">
                <FaAngleLeft size={35} />
              </div>
              <div onClick={nextImage} className=" cursor-pointer">
                <FaAngleRight size={35} />
              </div>
            </div>
            {/* <div className=" font-figtree -translate-y-10 max-sm:translate-y-0 max-sm:text-xs text-sm ">
          <p>Simple Social Media App. Can do CRUD operation</p>
          <div className=" flex gap-5">
            <p>Built Using : </p>
            <div className=" flex gap-3">
              <FaReact size={20} />
              <DiNodejs size={20} />
              <BiLogoTypescript size={20} />
              <TbBrandNextjs size={20} />
            </div>
          </div>
        </div> */}
          </div>
        </div>
        <div
          className={`  ${
            isDark ? " bg-gray-500 text-white" : "bg-slate-100"
          } relative pt-5 shadow max-sm:w-full max-sm:h-full w-[600px] h-[550px] flex flex-col gap-14 items-center p-4 rounded-lg`}
        >
          <div className=" flex">
            <h1 className=" absolute left-5 text-gray-700 text-xl font-extralight font-figtree">
              Upcoming Project
            </h1>
            <span className=" absolute right-5">
              <FaGithub size={25} />
            </span>
          </div>
          <div className=" relative max-sm:w-full max-sm:h-full w-[550px] h-[350px] flex gap-5">
            <img
              className=" w-full h-full object-contain shadow rounded-lg"
              src={url[index]}
              alt=""
            />
            <div className=" absolute flex items-center max-sm:w-full max-sm:h-full w-[550px] h-[350px] justify-between">
              <div onClick={prevImage} className=" cursor-pointer">
                <FaAngleLeft size={35} />
              </div>
              <div onClick={nextImage} className=" cursor-pointer">
                <FaAngleRight size={35} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
