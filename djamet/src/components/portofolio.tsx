/* eslint-disable @typescript-eslint/no-unused-vars */

import { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft, FaGithub, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { DiNodejs } from "react-icons/di";

export default function Portofolio() {
  const url: string[] = ["/pj1.png", "/pj1-1.png"];
  const [index, setIndex] = useState(0);

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
    <div className=" w-full h-full max-sm:flex-col flex justify-center gap-10 bg-slate-100">
      <div className=" relative bg-slate-50 pt-5 shadow w-[600px] h-[550px] flex flex-col gap-14 items-center p-4 rounded-lg">
        <div className=" flex">
          <h1 className=" absolute left-5 text-gray-700 text-xl font-extralight font-figtree">
            Nolife Social Media
          </h1>
          <span className=" absolute right-5">
            <FaGithub size={25} />
          </span>
        </div>
        <div className=" relative w-[550px] h-[350px] flex gap-5">
          <img
            className=" w-full h-full object-contain shadow rounded-lg"
            src={url[index]}
            alt=""
          />
          <div className=" absolute flex items-center w-[550px] h-[350px] justify-between">
            <div onClick={prevImage} className=" cursor-pointer">
              <FaAngleLeft size={35} />
            </div>
            <div onClick={nextImage} className=" cursor-pointer">
              <FaAngleRight size={35} />
            </div>
          </div>
        </div>
        <div className=" font-figtree -translate-y-10 text-sm absolute bottom-5 left-5">
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
        </div>
      </div>
      <div className=" relative bg-slate-50 pt-5 shadow w-[600px] h-[550px] flex flex-col gap-14 items-center p-4 rounded-lg">
        <div className=" flex">
          <h1 className=" absolute left-5 text-gray-700 text-xl font-extralight font-figtree">
            Upcoming Project
          </h1>
          <span className=" absolute right-5">
            <FaGithub size={25} />
          </span>
        </div>
        <div className=" relative w-[550px] h-[350px] flex gap-5">
          <img
            className=" w-full h-full object-contain shadow rounded-lg"
            src={url[index]}
            alt=""
          />
          <div className=" absolute flex items-center w-[550px] h-[350px] justify-between">
            <div onClick={prevImage} className=" cursor-pointer">
              <FaAngleLeft size={35} />
            </div>
            <div onClick={nextImage} className=" cursor-pointer">
              <FaAngleRight size={35} />
            </div>
          </div>
        </div>
        <div className=" font-figtree -translate-y-10 text-sm absolute bottom-5 left-5">
          <p>Upcoming </p>
          {/* <div className=" flex gap-5">
            <p>Built Using : </p>
            <div className=" flex gap-3">
              <FaReact size={20} />
              <DiNodejs size={20} />
              <BiLogoTypescript size={20} />
              <TbBrandNextjs size={20} />
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
}
