import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Main() {
  return (
    <div className=" flex justify-start max-sm:justify-center gap-24 max-sm:gap-5 h-full items-center p-10">
      <div className=" flex flex-col gap-8">
        <FaGithub size={35} />
        <FaLinkedin size={35} />
        <FaInstagram size={35} />
        <FaTwitter size={35} />
      </div>
      <div className=" flex flex-col gap-4">
        <h1 className=" font-figtree font-extrabold max-sm:text-5xl text-9xl">
          Hi, i am <br /> Tofik Hidayat{" "}
        </h1>
        <h2 className=" text-2xl font-extralight text-gray-500">
          Fullstack Developer
        </h2>
      </div>
    </div>
  );
}
