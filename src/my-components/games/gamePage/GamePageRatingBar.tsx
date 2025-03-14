import { GoDotFill } from "react-icons/go";

interface Props {
  id: number;
  percent: number;
  title: string;
}
interface ratingsProps {
  ratings: Props[] | undefined;
}

const GamePageRatingBar = ({ ratings }: ratingsProps) => {
  return (
    <div className="flex flex-col items-center w-full ">
      <p className="mb-2 self-start opacity-60">Community rating</p>
      <div className=" w-full rounded-sm  overflow-hidden flex mb-1  ">
        {ratings?.map((rating) => (
          <div
            key={rating.id}
            style={{ width: `${rating.percent}%` }}
            className={` h-[50px] flex items-center justify-center bg-gradient-to-t
      ${rating.title === "exceptional" && ` from-lime-900 to-lime-500`} 
      ${rating.title === "recommended" && ` from-blue-900 to-blue-500`}
      ${rating.title === "meh" && ` from-yellow-900 to-yellow-500`}
      ${rating.title === "skip" && ` from-red-900 to-red-500`}`}
          />
        ))}
      </div>
      <p className="flex flex-wrap gap-2">
        {ratings?.map((rating) => (
          <span className=" flex font-semibold text-sm " key={rating.id}>
            <GoDotFill
              className={`
                      ${rating.title === "exceptional" && "text-lime-600"} 
                      ${rating.title === "recommended" && "text-blue-600"} 
                      ${rating.title === "meh" && "text-yellow-500"} 
                      ${rating.title === "skip" && "text-red-600"} 
                      text-2xl`}
            />
            {rating.percent}% - {rating.title}
          </span>
        ))}
      </p>
    </div>
  );
};

export default GamePageRatingBar;
