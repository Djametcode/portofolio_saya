import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { TfiMenu } from "react-icons/tfi";

const HeaderComponent = () => {
  const [scroll, setScroll] = useState(0);
  const [bg, setBg] = useState("");
  const [text, setText] = useState("text-gray-500");
  useEffect(() => {
    const updateScroll = () => {
      setScroll(window.scrollY);
      console.log(scroll);
    };
    window.addEventListener("scroll", updateScroll);

    return () => {
      window.removeEventListener("scroll", updateScroll);
    };
  }, []);

  useEffect(() => {
    if (scroll > 20) {
      setBg("bg-slate-200/75");
    }

    if (scroll > 200) {
      setText("text-black underline underline-offset-4");
    }
  }, [scroll]);
  return (
    <div className={` ${bg} flex max-sm:h-32 max-sm:items-center p-8`}>
      <div className=" font-candal font-extrabold max-sm:text-4xl text-2xl text-gray-700">
        <h1>DJAMET CODER</h1>
      </div>
      <div className=" max-sm:hidden font-figtree text-gray-500 text-xl font-extrabold flex absolute right-10 gap-6">
        <Link className={`text-black underline underline-offset-4`} to="/">
          Home
        </Link>
        <Link className={`${text}`} to="/">
          Portofolio
        </Link>
        <Link to="/">Project</Link>
        <Link to="/">Contact</Link>
        {/* <div>
          <button>Dark Mode</button>
        </div> */}
      </div>
      <div className=" md:hidden absolute right-8">
        <TfiMenu size={40} />
      </div>
    </div>
  );
};

export default HeaderComponent;
