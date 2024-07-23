import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { setFilter } from "../../features/clientsSlice";
import clsx from "clsx";
import { clientsFilterArray } from "../../data/request-filter";
import IconInput from "../ui/inputs/IconInput";
import { IoIosSearch } from "react-icons/io";

const ClientsFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { filter } = useSelector((store: RootState) => store.clients);
  const dispatch = useDispatch();

  const changeFilter = (field: string, value: string | boolean) => {
    dispatch(setFilter({ field, value }));
  };

  useEffect(() => {
    console.log(filter);
  }, [filter]);

  useEffect(() => {
    if (searchTerm) {
      dispatch(setFilter({ field: "search", value: searchTerm }));
    } else {
      dispatch(setFilter({ field: "all", value: "all" }));
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-wrap items-center">
      <span className="mr-2">Filter By:</span>{" "}
      <button
        className={clsx(
          "mr-2 shadow py-1 px-4 rounded-lg text-sm",
          filter.value === "all"
            ? "bg-pink-overlay text-navy-blue font-semibold"
            : "bg-base-white text-base-grey"
        )}
        onClick={() => changeFilter("all", "all")}
      >
        All
      </button>
      {clientsFilterArray.map((item) => (
        <button
          key={item.id}
          className={clsx(
            "mx-1 my-1 shadow-md py-1 px-4 rounded-lg text-sm",
            filter.value === item.value && filter.field === item.field
              ? "bg-pink-overlay text-navy-blue font-semibold"
              : "bg-base-white text-base-grey"
          )}
          onClick={() => changeFilter(item.field, item.value)}
        >
          {item.label}
        </button>
      ))}
      <IconInput
        type="text"
        placeholder="search"
        icon={<IoIosSearch />}
        value={searchTerm}
        handleChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
};

export default ClientsFilter;
