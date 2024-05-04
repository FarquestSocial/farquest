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
      className={`active:scale-[99%] bg-[#00000052] disabled:cursor-not-allowed text-primary font-bold border-0 py-1 px-6 focus:outline-none w-full flex items-center justify-center ease-in-out duration-75 relative ${wrapperClassName}`}
      {...rest}
    >
      {children}
    </button>
  );
};
