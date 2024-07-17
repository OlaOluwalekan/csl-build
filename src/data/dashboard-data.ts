import { FaTents } from "react-icons/fa6";
import { LuCopyPlus } from "react-icons/lu";
import { RiHome5Line } from "react-icons/ri";

export const navData = [
  {
    id: 1,
    icon: RiHome5Line,
    label: "Dashboard",
    link: "/",
  },
  {
    id: 2,
    icon: LuCopyPlus,
    label: "Requests",
    link: "/requests",
  },
  {
    id: 3,
    icon: FaTents,
    label: "Tents",
    link: "/tents",
  },
];
