import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ContactComponents() {
  const isDark = useSelector((state: RootState) => state.dark.value);
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
            isDark ? " bg-slate-300 text-white" : "bg-slate-50"
          } w-[350px] h-full p-8 rounded-2xl font-figtree flex flex-col gap-5`}
          action="#"
        >
          <input
            className={` ${
              isDark
                ? "bg-slate-500 rounded-lg border-none placeholder:text-white"
                : ""
            } border p-1 placeholder:pl-5 focus:outline-none`}
            type="text"
            placeholder="Name"
          />
          <input
            className={` ${
              isDark
                ? "bg-slate-500 rounded-lg border-none placeholder:text-white"
                : ""
            } border p-1 placeholder:pl-5 focus:outline-none`}
            type="email"
            placeholder="Email"
          />
          <textarea
            className={` ${
              isDark
                ? "bg-slate-500 rounded-lg border-none placeholder:text-white"
                : ""
            } border placeholder:p-5 h-[150px]`}
            placeholder="Write your message here ..."
          />
          <div className=" flex justify-center">
            <button
              className={` ${
                isDark
                  ? "bg-slate-500 rounded-lg border-none placeholder:text-white"
                  : ""
              } bg-black w-36 h-11 text-white`}
            >
              SUBMIT
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
