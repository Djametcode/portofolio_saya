// import { useSelector } from "react-redux";
// import { RootState } from "../store/store";
// import { FaReact, FaNodeJs } from "react-icons/fa";
// import {
//   SiTypescript,
//   SiMongodb,
//   SiMongoose,
//   SiPostgresql,
//   SiPostman,
//   SiJavascript,
//   SiHtml5,
//   SiCss3,
//   SiTailwindcss,
// } from "react-icons/si";

// export default function IntroduceComponents() {
//   const isDark = useSelector((state: RootState) => state.dark.isDark);
//   return (
//     <>
//       <div
//         className={` ${
//           isDark
//             ? "bg-black text-white max-sm:bg-slate-black"
//             : " bg-slate-100 max-sm:bg-slate-50"
//         } w-full max-sm:h-full max-sm:w-full h-full flex flex-col justify-center shadow-sm`}
//       >
//         <div className=" flex justify-center gap-10 max-sm:flex-col max-sm:p-7 max-sm:gap-7">
//           <div
//             className={` ${
//               isDark ? "  bg-slate-50 text-black" : "bg-slate-200"
//             } max-sm:p-5 max-sm:h-[400px] md:w-[600px] md:h-[400px] md:p-5 flex flex-col gap-5 rounded-xl font-figtree`}
//           >
//             <div className=" text-center text-2xl">
//               <h1>About My Self</h1>
//             </div>
//             <div className=" flex flex-col gap-5">
//               <p className=" text-lg max-sm:text-base text-justify">
//                 Hello, My name is Tofik Hidayat. I graduated from Senior High
//                 School Negeri 2 Cilacap. My Passion in web development make me
//                 learn this all stuff. I love tech and gadget, Watching anime and
//                 play game. Hire Me and i will give you everything i got about
//                 website development.
//               </p>
//               <div>
//                 <button className=" bg-black text-white max-sm:text-sm p-2 rounded-lg">
//                   Hire Me
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div
//             className={` ${
//               isDark ? " bg-slate-50 text-black" : "bg-slate-200"
//             } max-sm:p-5 max-sm:h-[400px] md:w-[500px] flex flex-col gap-5 rounded-xl font-figtree`}
//           >
//             <div className=" text-2xl text-center">
//               <h1>Skills</h1>
//             </div>
//             <div>
//               <div className=" grid grid-cols-3 gap-10 place-items-center max-sm:p-8">
//                 <SiHtml5 size={35} />
//                 <SiCss3 size={35} />
//                 <SiJavascript size={35} />
//                 <SiTypescript size={35} />
//                 <SiMongodb size={35} />
//                 <SiPostgresql size={35} />
//                 <SiPostman size={35} />
//                 <SiMongoose size={35} />
//                 <SiTailwindcss />
//                 <FaReact size={35} />
//                 <FaNodeJs size={35} />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

export default function IntroduceComponents() {
  return (
    <div className=" flex flex-col items-center h-screen w-full z-0 relative">
      <div className=" flex flex-col items-center gap-5 pt-20 text-center font-montserat w-full">
        <div className=" font-figtree font-extrabold max-w-[1000px]">
          <h1 className=" text-[47px] leading-[60px] tracking-wider">
            I'm <span className=" text-blue-600">Tofik Hidayat</span>.
            Programmer and coding enthusiast
          </h1>
        </div>
      </div>
      <div className=" absolute -bottom-[50px] z-40 w-[800px] h-[800px]">
        <img
          className=" w-full h-full object-cover grayscale"
          src="/raikus.png"
          alt=""
        />
      </div>
      <div className=" absolute top-[400px] left-[650px] w-[12px] h-[12px] rounded-full bg-black"></div>
      <div className=" absolute top-[600px] right-[350px] w-[12px] h-[12px] rounded-full bg-black"></div>
      <div className=" absolute bottom-[350px] left-[450px] w-[6px] h-[6px] rounded-full bg-black"></div>
      <div className=" absolute top-[450px] right-[650px] w-[8px] h-[8px] rounded-full bg-black"></div>
      <div className=" absolute top-[300px] right-[800px] w-[8px] h-[8px] rounded-full bg-black"></div>
      <div className=" absolute bottom-[225px] left-[500px] z-50">
        <div className=" bg-slate-100/15 p-2 rounded-3xl">
          <div className=" bg-white rounded-3xl p-2 text-center text-xs w-[175px] h-[65px] font-montserat font-bold flex items-center justify-center">
            <p>Frontend</p>
          </div>
        </div>
      </div>
      <div className=" absolute bottom-[135px] right-[520px] z-50">
        <div className=" bg-slate-100/15 p-2 rounded-3xl">
          <div className=" bg-white rounded-3xl p-2 text-center text-xs w-[175px] h-[65px] font-montserat font-bold flex items-center justify-center">
            <p>Backend</p>
          </div>
        </div>
      </div>
      <div className=" absolute -bottom-[175px] w-[500px] h-[500px] rounded-full border-t-2 border-black/30"></div>
      <div className=" absolute -bottom-[300px] w-[700px] h-[700px] rounded-full border-t-2 border-black/30"></div>
      <div className=" absolute -bottom-[600px] bg-gradient-to-br from-purple-600/35 to-blue-600/35 w-[1200px] h-[1200px] blur-3xl rounded-full"></div>
    </div>
  );
}
