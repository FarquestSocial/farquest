import type { ButtonHTMLAttributes, ReactNode } from "react";

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
  wrapperClassName?: string;
}

export const PrimaryButton = ({
  children,
  className,
  wrapperClassName = "",
  ...rest
}: PrimaryButtonProps) => {
  return (
    <button
      className={`active:scale-[99%] w-fit bg-primary disabled:cursor-not-allowed rounded-lg p-3 text-text font-bold border-0 py-1 px-6 focus:outline-none flex items-center justify-center ease-in-out duration-75 relative ${wrapperClassName}`}
      {...rest}
    >
      {children}
    </button>
  );
};
