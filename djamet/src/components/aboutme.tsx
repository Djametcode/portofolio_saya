import { IoLogoJavascript, IoLogoReact } from "react-icons/io5";
import { SiTypescript } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { GoArrowDown } from "react-icons/go";

export default function AboutmeComponent() {
  return (
    <div className=" h-screen w-full relative z-30 text-white font-montserat">
      <div className=" h-[500px] bg-black w-full flex justify-around items-center pb-10">
        <div className=" flex gap-3 h-[30px] items-center">
          <IoLogoJavascript size={40} />
          <p>Javascript</p>
        </div>
        <div className=" flex gap-3 h-[30px] items-center">
          <SiTypescript size={40} />
          <p>Typescript</p>
        </div>
        <div className=" flex gap-3 h-[30px] items-center">
          <IoLogoReact size={40} />
          <p>ReactJS</p>
        </div>
        <div className=" flex gap-3 h-[30px] items-center">
          <TbBrandNextjs size={40} />
          <p>NextJS</p>
        </div>
        <div className=" flex gap-3 h-[30px] items-center">
          <SiMongodb size={40} />
          <p>MongoDB</p>
        </div>
        <div className=" flex gap-3 h-[30px] items-center">
          <BiLogoPostgresql size={40} />
          <p>Postgresql</p>
        </div>
      </div>
      <div className=" -translate-y-[100px] flex w-full justify-center">
        <div className=" w-full mr-[100px] ml-[100px] h-[400px] bg-blue-600 font-montserat flex flex-col gap-[30px] items-center">
          <div className=" -translate-y-[40px] bg-slate-50 rounded-full w-[75px] h-[75px] text-black flex items-center justify-center">
            <GoArrowDown size={30} />
          </div>
          <p className=" max-w-[700px] text-center font-extrabold text-4xl">
            Want to work together and create amazing product with me ?
          </p>
          <div className=" pl-3 w-[600px] flex justify-between gap-5 h-[50px] bg-slate-400/50 p-1 rounded-3xl">
            <input
              className=" bg-transparent focus:outline-none"
              type="text"
              placeholder="Your email"
            />
            <div className=" flex h-full items-center justify-center bg-slate-50 rounded-3xl w-[100px] text-blue-700 text-center font-montserat">
              <p>Lets talk</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div className=" text-black flex justify-center pb-10 w-full">
        <div className=" max-w-[500px] h-full">
          <h1 className=" text-xl font-extrabold pb-3">About me</h1>
          <p className=" text-base text-justify">
            Hey there! I'm Tofik Hidayat, a full-stack developer passionate
            about creating awesome websites and applications. With 1 years of
            experience, I love turning ideas into reality through code. On the
            front end, I work with HTML, CSS, and JavaScript frameworks like
            React.js and Vue.js to make websites look great and user-friendly.
            And on the back end, I use Node.js, Express.js, and MongoDB to build
            secure and scalable server-side applications. I'm also into DevOps
            stuff, like deploying applications to AWS or Azure and setting up
            CI/CD pipelines for smooth delivery. Plus, I enjoy working with
            teams, communicating ideas clearly, and learning new things every
            day. When I'm not coding, you can find me exploring new tech,
            attending meetups, or enjoying the outdoors. I'm always up for a
            challenge and excited about building cool stuff with cool people.
            Let's chat and see how we can create something awesome together!
          </p>
        </div>
      </div> */}
    </div>
  );
}
