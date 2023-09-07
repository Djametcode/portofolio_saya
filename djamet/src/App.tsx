import { useEffect, useState } from "react";
import HeaderComponent from "./components/header";
import Main from "./components/main";
import Portofolio from "./components/portofolio";
import ContactComponents from "./components/contact";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/store";

export default function App() {
  const year = new Date().getFullYear();
  const [scroll, setScroll] = useState(0);
  const [footer, setFooter] = useState("fixed");
  const isDark = useSelector((state: RootState) => state.dark.value);

  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY);
      console.log(scroll);
    };
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, [scroll]);

  useEffect(() => {
    if (scroll > 50) {
      setFooter("hidden");
    }
    if (scroll < 50) {
      setFooter("fixed");
    }

    if (scroll > 1500) {
      setFooter("fixed");
    }
  }, [scroll]);
  return (
    <div className=" h-screen w-screen bg-slate-50">
      <div className=" fixed top-0 w-full z-40">
        <HeaderComponent />
      </div>
      <Main />
      <div
        className={` ${
          isDark ? "bg-black text-white" : "bg-slate-50"
        } flex flex-col items-center font-figtree p-8 text-2xl font-extrabold pb-20 text-center`}
      >
        <h1 className=" pb-5">My Portofolio</h1>
        <hr className=" h-4 w-[500px]" />
      </div>
      <Portofolio />
      <div
        className={`${
          isDark ? "bg-black text-white" : "bg-slate-50"
        } flex flex-col items-center font-figtree p-8 text-2xl font-extrabold pb-20 text-center`}
      >
        <h1 className=" pb-5">Contact</h1>
        <hr className=" h-4 w-[500px]" />
      </div>
      <ContactComponents />
      <div className={`${footer} bottom-0 w-full font-figtree flex gap-5 p-8`}>
        <p>&copy; copyright {year}</p>
        <p>Djamet Coder</p>
      </div>
    </div>
  );
}
