import { GoDotFill } from "react-icons/go";
import { GameDetailsRatingsProps } from "./useGame";

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
    <div>
      {" "}
      <div className=" w-[80%] rounded-md overflow-hidden flex">
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
      <p className="flex">
        {ratings?.map((rating) => (
          <span className="px-2 flex font-semibold">
            <GoDotFill
              className={`
                      ${rating.title === "exceptional" && "text-lime-600"} 
                      ${rating.title === "recommended" && "text-blue-600"} 
                      ${rating.title === "meh" && "text-yellow-500"} 
                      ${rating.title === "skip" && "text-red-600"} 
                      text-2xl`}
            />
            {rating.title}
          </span>
        ))}
      </p>
    </div>
  );
};

export default GamePageRatingBar;
