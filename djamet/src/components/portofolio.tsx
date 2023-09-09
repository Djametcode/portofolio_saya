/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft, FaGithub, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Link } from "react-router-dom";

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
    <div
      className={`w-full md:h-full h-[650px] max-sm:h-full flex flex-col justify-center max-sm:p-5 gap-10 max-sm:gap-5 ${
        isDark ? "bg-black text-white" : " bg-slate-100"
      }`}
    >
      <div className=" md:flex md:flex-col md:gap-24">
        <div
          className={` ${
            isDark
              ? "bg-black text-white max-sm:rounded-tl-none max-sm:rounded-tr-none"
              : ""
          } flex flex-col items-center font-figtree max-sm:p-4 p-8 text-2xl font-extrabold max-sm:pb-10 pb-5 text-center`}
        >
          <h1>Portofolio</h1>
        </div>
        <div className=" md:flex md:justify-center md:gap-10 max-sm:flex-col max-sm:flex max-sm:gap-5">
          <div
            className={` ${
              isDark ? " bg-slate-100 text-black" : "bg-slate-50"
            } relative  pt-5 shadow max-sm:w-full max-sm:h-[350px] w-[600px] h-[550px] flex flex-col gap-14 items-center p-4 rounded-lg`}
          >
            <div className=" flex">
              <h1 className=" absolute left-5 text-xl font-extralight font-figtree">
                Nolife Social Media
              </h1>
              <div className=" absolute bg-black p-2 rounded-lg text-sm right-5 font-figtree">
                <Link to={"http://nolife.vercel.app"} className=" text-white">
                  visit project
                </Link>
              </div>
            </div>
            <div className=" relative max-sm:w-full max-sm:bg-slate-50 max-sm:h-full w-[550px] h-[350px] flex gap-5">
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
          <div
            className={`  ${
              isDark ? " bg-slate-100 text-black" : "bg-slate-50"
            } relative pt-5 shadow max-sm:w-full max-sm:h-full w-[600px] h-[550px] flex flex-col gap-14 items-center p-4 rounded-lg`}
          >
            <div className=" flex">
              <h1 className=" absolute left-5 text-xl font-extralight font-figtree">
                Upcoming Project
              </h1>
              <span className=" absolute right-5">
                <FaGithub size={25} />
              </span>
            </div>
            <div className=" relative max-sm:w-full max-sm:bg-slate-50 max-sm:h-full w-[550px] h-[350px] flex gap-5">
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
      </div>
    </div>
  );
}
