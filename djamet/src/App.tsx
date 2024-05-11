import { useEffect, useState } from "react";
import HeaderComponent from "./components/header";
import Main from "./components/main";
import Portofolio from "./components/portofolio";
import ContactComponents from "./components/contact";
import { useSelector } from "react-redux";
import { RootState } from "../src/store/store";
import IntroduceComponents from "./components/introduce";
import AboutmeComponent from "./components/aboutme";

export default function App() {
  const year = new Date().getFullYear();
  const [scroll, setScroll] = useState(0);
  const [footer, setFooter] = useState("fixed");
  const isDark = useSelector((state: RootState) => state.dark.isDark);

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
    <div className=" relative w-screen h-full overflow-scroll bg-slate-100">
      <div className=" absolute z-0 -top-[275px] w-[500px] h-[500px] rounded-full border-b border-r border-black/10"></div>
      <div className=" absolute z-0 -top-[325px] -left-[48px] w-[600px] h-[600px] rounded-full border-b border-r border-black/10"></div>
      <div className=" absolute z-0 -bottom-[275px] -right-[75px] w-[500px] h-[500px] rounded-full border-t border-l border-black/10"></div>
      <div className=" absolute z-0 -bottom-[325px] -right-[115px] w-[600px] h-[600px] rounded-full border-t border-l border-black/10"></div>
      <div className=" sticky top-0">
        <HeaderComponent />
      </div>
      <div className=" relative z-30">
        <IntroduceComponents />
      </div>
      <div>
        <AboutmeComponent />
      </div>
    </div>
    // <div className=" max-w-[2000px] h-screen bg-slate-50">
    //   <div className=" fixed top-0 w-full z-40">
    //     <HeaderComponent />
    //   </div>
    //   <Main />
    //   <IntroduceComponents />
    //   <Portofolio />
    //   <div className=" md:hidden">
    //     <ContactComponents />
    //   </div>
    //   <div
    //     className={`${footer} max-sm:hidden bottom-0 w-full font-figtree flex gap-5 p-8`}
    //   >
    //     <p>&copy; copyright {year}</p>
    //     <p>Djamet Coder</p>
    //   </div>
    // </div>
  );
}
