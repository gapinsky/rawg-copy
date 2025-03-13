import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GamePageGridAndOpacity = ({ children }: Props) => {
  return (
    <>
      <div className="absolute -z-10  inset-0 bg-gradient-to-t  from-neutral-50/100 via-neutral-50/100 to-neutral-50/60 dark:via-neutral-900/100 dark:from-neutral-900/100 dark:to-neutral-900/60"></div>
      <div className="w-[95%] my-5 mx-auto   grid grid-cols-1 space-y-10 xl:space-y-0 xl:justify-items-center xl:w-[80%] xl:grid-cols-5 xl:space-x-8   xl:py-10">
        {children}
      </div>
    </>
  );
};

export default GamePageGridAndOpacity;
