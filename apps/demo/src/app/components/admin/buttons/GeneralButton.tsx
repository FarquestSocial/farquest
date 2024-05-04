import type { ButtonHTMLAttributes, ReactNode } from "react";
interface GeneralButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const GeneralButton = ({
  children,
  className = "",
  ...rest
}: GeneralButtonProps) => {
  return (
    <button
      className={`font-bold rounded-lg  text-text px-4 py-2 uppercase active:scale-[99%] ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};
