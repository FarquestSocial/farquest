import classNames from "classnames";
import { X } from "phosphor-react";
import React, {
  FC,
  KeyboardEvent,
  ReactElement,
  forwardRef,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IMultiInput {
  className?: string;
  id: string;
  input?(props: any): ReactElement | null;
  value: string;
  onChange(val: string): void;
  size?: "sm" | "default";
  delimiter: string;
  label: string;
}

export const MultiInput: FC<IMultiInput> = forwardRef<
  HTMLInputElement,
  IMultiInput
>(function MultiInput(
  {
    className,
    id,
    input: Input,
    value,
    onChange,
    size = "default",
    delimiter = " ",
    label,
  },
  ref
) {
  const [values, setValues] = useState({
    all: value.split(delimiter || " "),
    typed: "",
  });
  const _onChange = useCallback(
    (val: string) => {
      if (val.slice(-1) === (delimiter || " ")) {
        setValues((prev) => ({
          typed: "",
          all: [...prev.all, prev.typed],
        }));
      } else {
        setValues((prev) => ({
          typed: val,
          all: prev.all,
        }));
      }
    },
    [delimiter]
  );

  const remove = useCallback((val: string) => {
    setValues((prev) => ({
      typed: prev.typed,
      all: prev.all.filter((_val) => _val !== val),
    }));
  }, []);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Backspace") {
        setValues((prev) => ({
          typed: prev.typed,
          all: prev.all.slice(0, -1),
        }));
      }
      if (event.key === "Enter") {
        setValues((prev) => ({
          typed: "",
          all: [...prev.all, prev.typed],
        }));
      }
    },
    []
  );

  useEffect(() => {
    if (delimiter) {
      onChange(
        `${values.typed} ${values.all.filter((el) => el !== " " && el !== "").join(" ")}`
      );
    }
  }, [delimiter, onChange, values]);

  return (
    <div
      className={classNames(
        className,
        size === "sm" ? "h-[38px] text-sm px-[8px]" : "",
        "border bg-secondary backdrop-blur-sm border-secondary w-full px-4 py-2 flex flex-col gap-1"
      )}
    >
      <label
        htmlFor={id}
        className='text-[12px]'
      >
        {label}
      </label>
      <div className='flex flex-wrap gap-1'>
        {values.all
          .filter((el) => el !== " " && el !== "")
          .map((el, i) => (
            <div
              onClick={() => remove(el)}
              key={i}
              className='font-semibold text-gray-600 flex items-center normal-case text-sm rounded-full p-1 pl-2.5 bg-black/[0.8] gap-1'
            >
              {el}
              <div className='cursor-pointer rounded-full p-0.5'>
                <X />
              </div>
            </div>
          ))}
      </div>
      <input
        id={`${id}-address-input`}
        testdata-id={`${id}-address-input`}
        placeholder={"Press space to add"}
        value={values.typed}
        onChange={(e) => _onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        className={classNames(
          "truncate outline-none normal-case font-semibold w-full bg-transparent !p-0 placeholder:font-medium placeholder:text-gray-400 placeholder:dark:text-slate-500 text-gray-900 dark:text-slate-200"
        )}
        autoCorrect='off'
        autoCapitalize='off'
        spellCheck='false'
        autoComplete='off'
      />
      {value && (
        <div className='absolute right-3 flex items-center'>
          {value ? (
            <div
              onClick={() =>
                setValues({
                  all: [],
                  typed: "",
                })
              }
            >
              <X />
            </div>
          ) : (
            <></>
          )}
        </div>
      )}
    </div>
  );
});
