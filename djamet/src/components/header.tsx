import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import { TfiMenu } from "react-icons/tfi";
import {useDispatch} from 'react-redux'
import {toggleDarkMode} from '../store/slice'
import {MdDarkMode} from 'react-icons/md'

const HeaderComponent = () => {
  const [scroll, setScroll] = useState(0);
  const [bg, setBg] = useState("");
  const [text, setText] = useState("text-gray-500");
  const [home, setHome] = useState("text-black underline underline-offset-4");
  const [porto, setPorto] = useState("");

  const dispatch = useDispatch();
  const darkModeOn = () => {
    dispatch(toggleDarkMode());
  };

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
    if (scroll < 30) {
      setHome(" underline underline-offset-4");
      setBg("");
      setText("");
    }
    if (scroll > 30) {
      setBg("bg-slate-200/75");
    }

    if (scroll > 800) {
      setHome("");
      setText(" underline underline-offset-4");
      setPorto("");
    }

    if (scroll > 1500) {
      setHome("");
      setText("");
      setPorto("text-black underline underline-offset-4");
    }
  }, [scroll]);
  return (
    <div
      className={` ${bg} flex max-sm:justify-start max-sm:bg-black max-sm:24 max-sm:p-5 max-sm:items-center p-8`}
    >
      <div className=" max-sm:pl-5 font-candal max-sm:flex max-sm:font-extralight font-extrabold max-sm:text-xl text-2xl max-sm:text-white text-gray-700">
        <h1>Djamet Coder</h1>
      </div>
      <div className=" max-sm:hidden font-figtree text-gray-500 text-xl font-extrabold flex absolute right-10 gap-6">
        <Link className={`${home}`} to="/">
          Home
        </Link>
        <Link className={`${text}`} to="/">
          Portofolio
        </Link>
        <Link className={`${porto}`} to="/">
          Contact
        </Link>
        <div className=" flex items-center">
          <input className="" onClick={darkModeOn} type="checkbox" id="dark" />
          <label htmlFor="dark">
            <MdDarkMode size={25} />
          </label>
        </div>
      </div>
      <div className=" absolute right-5 text-white">
        <input
          className=" hidden"
          onClick={darkModeOn}
          type="checkbox"
          id="dark"
        />
        <label htmlFor="dark">
          <MdDarkMode size={25} />
        </label>
      </div>
    </div>
  );
};

export default HeaderComponent;
