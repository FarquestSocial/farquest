import { Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CaretDown } from "phosphor-react";

interface SelectProps {
  options: { value: string; id: string }[];
  selected: string;
  placeholder: string;
  id?: string;
  handleSelected: (option: string) => void;
  selectionPlacement?: "above" | "below";
  error?: string;
  fullWidth?: boolean;
}

export const Select = ({
  options,
  selected,
  placeholder,
  selectionPlacement = "below",
  id,
  error,
  handleSelected,
  fullWidth,
}: SelectProps) => {
  const emptyValue = selected === "" || selected === undefined;
  return (
    <Listbox
      name={id}
      value={selected}
      onChange={handleSelected}
      defaultValue={placeholder}
    >
      <div className={`relative ${fullWidth ? "w-full" : ""}`}>
        <Listbox.Button
          className={`relative flex cursor-pointer items-center justify-between gap-2 border bg-secondary backdrop-blur-sm border-text rounded-lg px-4 py-2 h-[63px] ${fullWidth ? "w-full" : ""}`}
        >
          <span
            className={`block truncate ${emptyValue ? "text-placeholder" : ""}`}
          >
            {emptyValue ? placeholder : selected}
          </span>
          <CaretDown />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave='transition ease-in duration-100'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <Listbox.Options
            className={`absolute left-1/2 -translate-x-1/2 z-50 mt-1 max-h-60 w-full min-w-[200px] overflow-auto border bg-[#1c1c1c] border-secondary p-2 focus:outline-none  ${
              error ? "border-red-500" : ""
            } ${selectionPlacement === "above" ? "bottom-10" : "top-10"}`}
          >
            {options.map((i, idx: number) => (
              <Listbox.Option
                key={idx}
                className={({ active }) =>
                  `relative cursor-pointer select-none rounded-sm px-3 py-2 text-white hover:bg-primary  ${
                    active ? "bg-primary font-bold" : "bg-transparent"
                  }`
                }
                value={i.value}
              >
                {({ selected }) => (
                  <>
                    <span
                      className={`block truncate ${selected ? "font-medium" : "font-normal"}`}
                    >
                      {i.id}: {i.value}
                    </span>
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
        {error && <p className='text-[12px] text-red-500'>{error}</p>}
      </div>
    </Listbox>
  );
};
