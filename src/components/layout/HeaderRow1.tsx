import { FaBars } from "react-icons/fa6";
import Logo from "../logo/Logo";
import { useDispatch } from "react-redux";
import { toggleNav } from "../../features/generalSlice";

const HeaderRow1 = () => {
  const dispatch = useDispatch();

  return (
    <section className="flex gap-3 items-center">
      <button
        className="text-2xl text-base-black laptop:hidden"
        onClick={() => dispatch(toggleNav(true))}
      >
        <FaBars />
      </button>
      <Logo size="sm" />
    </section>
  );
};

export default HeaderRow1;
