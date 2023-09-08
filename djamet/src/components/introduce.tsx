import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiMongoose,
  SiPostgresql,
  SiPostman,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
} from "react-icons/si";

export default function IntroduceComponents() {
  const isDark = useSelector((state: RootState) => state.dark.value);
  return (
    <>
      <div
        className={` ${
          isDark ? "bg-black text-white" : "bg-slate-100"
        } translate-y-28 max-sm:translate-y-0 flex max-sm:rounded-tl-2xl max-sm:rounded-tr-2xl flex-col items-center font-figtree p-8 text-2xl font-extrabold max-sm:pb-5 pb-5 text-center`}
      >
        <h1>About My Self</h1>
      </div>
      <div
        className={` ${
          isDark
            ? "bg-black text-white max-sm:bg-slate-black"
            : " bg-slate-100 max-sm:bg-slate-50"
        } w-full max-sm:h-full max-sm:p-5 max-sm:pb-72 h-full max-sm:flex-col flex justify-center gap-10 items-center`}
      >
        <div
          className={` ${
            isDark ? "bg-black text-white" : " bg-slate-200"
          } w-[800px] h-[400px] max-sm:w-full max-sm:h-full  max-sm:m-4 p-10 rounded-xl flex flex-col gap-10 text-lg font-figtree`}
        >
          <p className=" text-lg max-sm:text-base">
            Hello My name is Tofik Hidayat
          </p>
          <p className=" text-lg max-sm:text-base">
            I graduated from Senior High School Negeri 2 Cilacap. My Passion in
            web development make me learn this all stuff. I love tech and
            gadget, Watching anime and play game. Hire Me and i will give you
            everything i got about website development.
          </p>
          <div>
            <button className=" bg-black text-white max-sm:text-sm p-2 rounded-lg">
              Hire Me
            </button>
          </div>
        </div>
        <div
          className={` ${
            isDark ? "bg-black text-white" : " bg-slate-200"
          } w-[800px] h-[400px] max-sm:h-full max-sm:w-full  max-sm:m-4 p-10 rounded-xl flex flex-col gap-10 text-lg font-figtree`}
        >
          <p className=" text-lg max-sm:text-base">Why you should hire me?</p>
          <p className=" text-lg max-sm:text-base">
            i have experience over 3 years of Fullstack development. I can work
            in pressure. I am well trained person. so thats why you should hire
            me
          </p>
        </div>
        <div
          className={` ${
            isDark ? "bg-black text-white" : " bg-slate-200"
          } w-[800px] h-[400px] max-sm:h-full max-sm:w-full  max-sm:m-4 p-10 rounded-xl flex flex-col gap-10 text-lg font-figtree`}
        >
          <p>My skill</p>
          <div className=" grid grid-cols-3  gap-5 place-items-center">
            <SiHtml5 size={35} />
            <SiCss3 size={35} />
            <SiJavascript size={35} />
            <SiTypescript size={35} />
            <SiMongodb size={35} />
            <SiPostgresql size={35} />
            <SiPostman size={35} />
            <SiMongoose size={35} />
            <SiTailwindcss />
            <FaReact size={35} />
            <FaNodeJs size={35} />
          </div>
        </div>
      </div>
    </>
  );
}
