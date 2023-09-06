import { useEffect, useState } from "react";
import HeaderComponent from "./components/header";
import Main from "./components/main";
import Portofolio from "./components/portofolio";

export default function App() {
  const year = new Date().getFullYear();
  const [scroll, setScroll] = useState(0);
  const [footer, setFooter] = useState("fixed");
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
    if (scroll > 20) {
      setFooter("hidden");
    }
  }, [scroll]);
  return (
    <div className=" h-screen w-screen bg-slate-100">
      <div className=" fixed top-0 w-full z-40">
        <HeaderComponent />
      </div>
      <Main />
      <Portofolio />
      <div className={`${footer} bottom-0 w-full font-figtree flex gap-5 p-8`}>
        <p>&copy; copyright {year}</p>
        <p>Djamet Coder</p>
      </div>
    </div>
  );
}
