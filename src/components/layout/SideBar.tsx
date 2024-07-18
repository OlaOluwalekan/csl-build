import clsx from "clsx";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { LiaTimesSolid } from "react-icons/lia";
import { toggleNav } from "../../features/generalSlice";
import { navData } from "../../data/dashboard-data";
import SideBarItem from "./SideBarItem";

const SideBar = () => {
  const { navIsOpen } = useSelector((store: RootState) => store.general);
  const dispatch = useDispatch();

  return (
    <nav
      className={clsx(
        "w-full h-screen fixed top-0 z-10 transition-all bg-[#00000079] laptop:static laptop:h-full laptop:w-[300px]",
        navIsOpen ? "left-0" : "left-[-5000px]"
      )}
      onClick={() => dispatch(toggleNav(false))}
    >
      <div className="w-[300px] h-full bg-base-secondary px-4">
        <section>
          <article className="py-4 tablet:hidden">
            <button
              className="text-2xl"
              onClick={() => dispatch(toggleNav(false))}
            >
              <LiaTimesSolid />
            </button>
          </article>

          <div className="flex flex-col gap-3 py-4">
            {navData.map((item) => {
              return <SideBarItem item={item} key={item.id} />;
            })}
          </div>
        </section>
      </div>
    </nav>
  );
};

export default SideBar;
