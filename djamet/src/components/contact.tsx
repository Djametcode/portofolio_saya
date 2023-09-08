import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ContactComponents() {
  const isDark = useSelector((state: RootState) => state.dark.value);
  return (
    <div
      className={`${
        isDark ? " bg-black text-white" : "bg-slate-100"
      } w-full h-full max-sm:h-[750px] p-8`}
    >
      {" "}
      <div
        className={`${
          isDark ? "bg-black text-white" : ""
        } flex flex-col items-center font-figtree p-8 text-2xl font-extrabold max-sm:pb-5 max-sm:pt-24 pb-20 text-center`}
      >
        <h1 className=" pb-5">Contact</h1>
      </div>
      <div className=" flex justify-center">
        <form
          className={` ${
            isDark ? "  bg-gray-500 text-black" : "bg-slate-200"
          } max-sm:p-2  p-10 rounded-xl font-figtree flex flex-col gap-5 max-sm:w-[350px] max-sm:h-[500px] w-[600px] h-[500px]`}
          action="#"
        >
          <div className=" flex gap-5">
            <input
              className=" w-full p-2 max-sm:placeholder:text-sm rounded-lg focus:outline-none shadow-sm"
              type="text"
              placeholder="first_name"
            />
            <input
              className=" w-full p-2 max-sm:placeholder:text-sm rounded-lg shadow-sm focus:outline-none"
              type="text"
              placeholder="last_name"
            />
          </div>
          <input
            className=" w-full p-2 max-sm:placeholder:text-sm rounded-lg focus:outline-none shadow-sm"
            type="email"
            placeholder="email"
          />
          <textarea className=" h-56 shadow-sm p-2 focus:outline-none rounded-lg" />
          <div className=" flex justify-center">
            <input
              className=" max-sm:text-sm bg-white p-2 rounded-lg"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
