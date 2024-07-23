import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DateInputProps } from "../../../types/input.interface";
import { forwardRef, useRef } from "react";
import { addDays, format } from "date-fns";

const DateInput = ({
  value,
  label,
  id,
  placeholder,
  onDateChange,
}: DateInputProps) => {
  const inputRef = useRef<HTMLButtonElement>(null);

  const CustomInput = forwardRef<
    HTMLButtonElement,
    { val: string; onClick: () => void; className: string }
  >(({ val, onClick, className }, ref) => (
    <button type="button" className={className} onClick={onClick} ref={ref}>
      {val ? format(val, "dd/MM/yyy") : placeholder}
    </button>
  ));

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-xs">
        {label}:
      </label>
      <DatePicker
        selected={value ? new Date(value) : new Date()}
        onChange={onDateChange}
        customInput={
          <CustomInput
            val={value}
            className="border-[1px] w-full text-left border-light-grey px-4 py-2 rounded-md focus:border-[1.5px] focus:outline-none bg-base-white"
            onClick={() => inputRef.current?.click()}
          />
        }
        excludeDateIntervals={[
          { start: addDays(new Date(), 0), end: new Date(8640000000000000) },
        ]}
        fixedHeight
        showMonthDropdown
        showYearDropdown
        dropdownMode="select"
        peekNextMonth
      />
    </div>
  );
};

export default DateInput;
