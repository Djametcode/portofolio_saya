import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ContactComponents() {
  const isDark = useSelector((state: RootState) => state.dark.isDark);
  return (
    <>
      <div
        className={` ${
          isDark ? "bg-black text-white" : "bg-slate-100"
        } translate-y-28 max-sm:translate-y-0 flex flex-col justify-center items-center font-figtree max-sm:p-4 p-8 text-2xl font-extrabold max-sm:pb-10 pb-5 text-center`}
      >
        <h1>Contact Me</h1>
      </div>
      <div
        className={` ${
          isDark ? "bg-black text-white" : "bg-slate-100"
        } max-sm:p-5 flex justify-center `}
      >
        <form
          className={` ${
            isDark ? " bg-slate-50 text-white" : "bg-slate-50"
          } w-[350px] h-full p-8 rounded-2xl font-figtree flex flex-col gap-5`}
          action="#"
        >
          <input
            className={` ${
              isDark
                ? "bg-none rounded-lg border-none placeholder:text-black shadow-sm"
                : ""
            } border p-1 placeholder:pl-3 focus:outline-none max-sm:rounded-lg pl-3`}
            type="text"
            placeholder="Name"
          />
          <input
            className={` ${
              isDark
                ? "bg-none rounded-lg border-none placeholder:text-black shadow-sm"
                : ""
            } border p-1 placeholder:pl-3 focus:outline-none max-sm:rounded-lg pl-3`}
            type="email"
            placeholder="Email"
          />
          <textarea
            className={` ${
              isDark
                ? "bg-none rounded-lg border-none placeholder:text-black shadow-sm"
                : ""
            } border placeholder:p-5 h-[150px] max-sm:rounded-lg p-3 focus:outline-none`}
            placeholder="Write your message here ..."
          />
          <div className=" flex justify-center">
            <button
              className={` ${
                isDark
                  ? "bg-black rounded-lg border-none placeholder:text-white"
                  : ""
              } bg-black w-36 h-11 text-white max-sm:rounded-lg`}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
