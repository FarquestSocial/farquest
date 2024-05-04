import { ReactNode } from "react";
import { useIsSSR } from "@/hooks/client/useIsSSR";

interface RenderProps<T> {
  data: T | undefined;
  isLoading: boolean;
  isLoadingComponent?: ReactNode;
  isError: boolean;
  subject: string;
  messageClassname?: string;
  children: ReactNode;
}

export function RenderIfReady<T>({
  data,
  isLoading,
  isLoadingComponent,
  isError,
  subject,
  messageClassname,
  children,
}: RenderProps<T>) {
  const isSSR = useIsSSR();

  if ((isLoading || isSSR) && !isLoadingComponent) {
    return <p className='text-center'>Loading...</p>;
  }

  if ((isLoading || isSSR) && isLoadingComponent) {
    return <>{isLoadingComponent}</>;
  }

  if (isError && !isLoading && !data && !isSSR) {
    return (
      <p
        className={`flex min-h-[250px] font-bold text-xl items-center justify-center ${messageClassname ?? ""}`}
      >
        Error fetching {subject}.
      </p>
    );
  }

  if (Array.isArray(data) && data.length === 0) {
    return (
      <p
        className={`flex min-h-[250px] items-center justify-center ${messageClassname ?? ""}`}
      >
        No {subject} found.
      </p>
    );
  }

  return <>{children}</>;
}
