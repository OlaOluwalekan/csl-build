import { useDispatch, useSelector } from "react-redux";
import { filterArray } from "../../data/request-filter";
import IconInput from "../ui/inputs/IconInput";
import { useEffect, useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RootState } from "../../store";
import clsx from "clsx";
import { setFilter } from "../../features/requestsSlice";

const RequestFilter = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { filter } = useSelector((store: RootState) => store.requests);
  const dispatch = useDispatch();

  const changeFilter = (field: string, value: string) => {
    dispatch(setFilter({ field, value }));
  };

  useEffect(() => {
    if (searchTerm) {
      dispatch(setFilter({ field: "search", value: searchTerm }));
    } else {
      dispatch(setFilter({ field: "all", value: "all" }));
    }
  }, [searchTerm]);

  return (
    <div className="flex flex-wrap items-center">
      <span className="mr-2 text-navy-blue text-sm">Filter By:</span>{" "}
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
      {filterArray.map((item) => (
        <button
          key={item.id}
          className={clsx(
            "mx-1 my-1 shadow-md py-1 px-4 rounded-lg text-sm",
            filter.value === item.value
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

export default RequestFilter;
