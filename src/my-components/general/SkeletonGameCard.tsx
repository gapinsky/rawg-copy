interface Props {
  gamesDisplay: string;
}

const SkeletonGameCard = ({ gamesDisplay }: Props) => {
  return (
    <div
      className={`${
        gamesDisplay === "col" ? "w-[70%]" : "w-full"
      } border-2  border-neutral-300 my-5 rounded-lg overflow-hidden shadow-lg text-neutral-900  bg-neutral-100 dark:shadow-neutral-900 dark:text-neutral-100 dark:bg-neutral-800 dark:border-neutral-800`}
    >
      <div
        className={`${
          gamesDisplay === "col" ? "h-[300px] object-top" : "md:h-64"
        } h-52    bg-neutral-500 w-full`}
      />
      <div className="py-2 px-4 ">
        <p className="bg-neutral-600 space-x-3 w-[20%] h-4" />
        <p className=" bg-neutral-600  my-1 w-[80%] h-10" />
        <p className="bg-neutral-600 w-[30%] h-6" />
        <div className=" flex items-start justify-between">
          <p className="bg-neutral-600 h-6" />
          <p className="flex space-x-4 justify-end">
            <p className="bg-neutral-600 w-[10%] h-6"></p>
            <p className="bg-neutral-600 w[10%] h-6"></p>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonGameCard;
