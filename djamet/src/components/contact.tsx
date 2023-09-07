import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function ContactComponents() {
  const isDark = useSelector((state: RootState) => state.dark.value);
  return (
    <div
      className={`${
        isDark ? " bg-black text-white" : "bg-slate-50"
      } w-full h-[500px] max-sm:p-2 p-8`}
    >
      <div className=" flex justify-center">
        <form
          className={` ${
            isDark ? "  bg-gray-500 text-black" : "bg-slate-50"
          } max-sm:p-2  p-10 rounded-xl font-figtree flex flex-col gap-5 max-sm:w-full max-sm:h-full w-[600px] h-[500px]`}
          action="#"
        >
          <div className=" flex gap-5">
            <input
              className=" w-full p-2 rounded-lg focus:outline-none shadow-sm"
              type="text"
              placeholder="first_name"
            />
            <input
              className=" w-full p-2 rounded-lg shadow-sm focus:outline-none"
              type="text"
              placeholder="last_name"
            />
          </div>
          <input
            className=" w-full p-2 rounded-lg focus:outline-none shadow-sm"
            type="email"
            placeholder="email"
          />
          <textarea className=" h-56 shadow-sm p-2 focus:outline-none rounded-lg" />
          <div className=" flex justify-center">
            <input
              className=" bg-white p-2 rounded-lg"
              type="submit"
              value="Send"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
