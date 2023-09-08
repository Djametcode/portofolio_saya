import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function IntroduceComponents() {
  const isDark = useSelector((state: RootState) => state.dark.value);
  return (
    <div
      className={` ${
        isDark ? "bg-black text-white" : ""
      } w-full max-sm:h-[600px] max-sm:bg-slate-50 bg-slate-100 h-full flex justify-center items-center`}
    >
      <div className=" w-[700px] bg-slate-100 max-sm:m-4 p-10 rounded-xl flex flex-col gap-10 text-lg font-figtree">
        <p className=" text-lg max-sm:text-base">
          Hello My name is Tofik Hidayat
        </p>
        <p className=" text-lg max-sm:text-base">
          I graduated from Senior High School Negeri 2 Cilacap. My Passion in
          web development make me learn this all stuff. I love tech and gadget,
          Watching anime and play game. Hire Me and i will give you everything i
          got about website development.
        </p>
        <div>
          <button className=" bg-black text-white max-sm:text-sm p-2 rounded-lg">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
}
