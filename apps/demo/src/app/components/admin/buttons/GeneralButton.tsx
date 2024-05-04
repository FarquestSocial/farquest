import type { ButtonHTMLAttributes, ReactNode } from "react";
interface GeneralButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  className?: string;
}

export const GeneralButton = ({
  children,
  className,
  ...rest
}: GeneralButtonProps) => {
  return (
    <button
      className={`border font-bold border-white bg-primary-bg px-4 py-2 uppercase active:scale-[99%] ${
        className ?? ""
      }`}
      {...rest}
    >
      {children}
    </button>
  );
};
