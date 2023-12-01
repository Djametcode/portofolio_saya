/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Main() {
  let initialText = "Hi, I am Tofik";
  const [displayedText, setDisplayedText] = useState<string>("");
  const isDark = useSelector((state: RootState) => state.dark.isDark);

  useEffect(() => {
    let currentIndex = 0;

    const typewriterInterval = setInterval(() => {
      if (currentIndex < initialText.length) {
        setDisplayedText(initialText.substring(0, currentIndex + 1));
        currentIndex++;
      } else {
        initialText = "Welcome to My Portofolio";
        currentIndex = 0;
      }
    }, 300); // Adjust the delay (in milliseconds) between characters as needed

    return () => {
      clearInterval(typewriterInterval);
    };
  }, []);
  return (
    <div
      className={` ${
        isDark ? "bg-black text-white " : ""
      } relative flex max-sm:flex-col max-sm:justify-center justify-start max-sm:pl-10 gap-24 max-sm:gap-5 w-full max-sm:h-full h-full max-sm:items-start items-center max-sm:p-3 p-10`}
    >
      <div className=" max-sm:hidden flex flex-col gap-8">
        <Link className=" cursor-pointer" to={"https://github.com/Djametcode"}>
          <FaGithub size={35} />
        </Link>
        <Link to={"https://www.linkedin.com/in/tofik-hidayat-414140243/"}>
          <FaLinkedin size={35} />
        </Link>
        <Link to={"https://www.instagram.com/hidayattofik_/"}>
          <FaInstagram size={35} />
        </Link>
        <Link to={"https://twitter.com/@HackerMania20"}>
          <FaTwitter size={35} />
        </Link>
      </div>
      <div className=" flex flex-col gap-4">
        <h1 className=" font-figtree font-extrabold max-sm:text-3xl text-8xl">
          {displayedText} <br />
        </h1>
        <h2 className=" text-2xl font-extralight text-gray-500">
          Fullstack Developer
        </h2>
      </div>
      <div className=" md:hidden flex gap-3">
        <Link className=" cursor-pointer" to={"https://github.com/Djametcode"}>
          <FaGithub size={25} />
        </Link>
        <Link to={"https://www.linkedin.com/in/tofik-hidayat-414140243/"}>
          <FaLinkedin size={25} />
        </Link>
        <Link to={"https://www.instagram.com/hidayattofik_/"}>
          <FaInstagram size={25} />
        </Link>
        <Link to={"https://twitter.com/@HackerMania20"}>
          <FaTwitter size={25} />
        </Link>
      </div>
    </div>
  );
}
