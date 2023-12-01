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
  const isDark = useSelector((state: RootState) => state.dark.isDark);
  return (
    <>
      <div
        className={` ${
          isDark
            ? "bg-black text-white max-sm:bg-slate-black"
            : " bg-slate-100 max-sm:bg-slate-50"
        } w-full max-sm:h-full max-sm:w-full h-full flex flex-col justify-center shadow-sm`}
      >
        <div className=" flex justify-center gap-10 max-sm:flex-col max-sm:p-7 max-sm:gap-7">
          <div
            className={` ${
              isDark ? "  bg-slate-50 text-black" : "bg-slate-200"
            } max-sm:p-5 max-sm:h-[400px] md:w-[600px] md:h-[400px] md:p-5 flex flex-col gap-5 rounded-xl font-figtree`}
          >
            <div className=" text-center text-2xl">
              <h1>About My Self</h1>
            </div>
            <div className=" flex flex-col gap-5">
              <p className=" text-lg max-sm:text-base text-justify">
                Hello, My name is Tofik Hidayat. I graduated from Senior High
                School Negeri 2 Cilacap. My Passion in web development make me
                learn this all stuff. I love tech and gadget, Watching anime and
                play game. Hire Me and i will give you everything i got about
                website development.
              </p>
              <div>
                <button className=" bg-black text-white max-sm:text-sm p-2 rounded-lg">
                  Hire Me
                </button>
              </div>
            </div>
          </div>
          <div
            className={` ${
              isDark ? " bg-slate-50 text-black" : "bg-slate-200"
            } max-sm:p-5 max-sm:h-[400px] md:w-[500px] flex flex-col gap-5 rounded-xl font-figtree`}
          >
            <div className=" text-2xl text-center">
              <h1>Skills</h1>
            </div>
            <div>
              <div className=" grid grid-cols-3 gap-10 place-items-center max-sm:p-8">
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
        </div>
      </div>
    </>
  );
}
