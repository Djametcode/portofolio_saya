/* eslint-disable prefer-const */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function Main() {
  let initialText = "Hi, I am Tofik";
  const [displayedText, setDisplayedText] = useState<string>("");
  const isDark = useSelector((state: RootState) => state.dark.value);

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
        isDark ? "bg-black text-white" : ""
      } relative flex justify-start max-sm:justify-center gap-24 max-sm:gap-5 w-full h-full items-center p-10`}
    >
      <div className=" max-sm:hidden flex flex-col gap-8">
        <FaGithub size={35} />
        <FaLinkedin size={35} />
        <FaInstagram size={35} />
        <FaTwitter size={35} />
      </div>
      <div className=" flex flex-col gap-4">
        <h1 className=" font-figtree font-extrabold max-sm:text-5xl text-8xl">
          {displayedText} <br />
        </h1>
        <h2 className=" text-2xl font-extralight text-gray-500">
          Fullstack Developer
        </h2>
      </div>
    </div>
  );
}
