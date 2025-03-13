import { useParams } from "react-router-dom";
import useGame from "./useGame";
import { FaCirclePlus, FaGift } from "react-icons/fa6";
import GamePageButton from "./GamePageButton";
import GamePageRatingBar from "./GamePageRatingBar";

const GamePage = () => {
  const params = useParams();
  const gameSlug = params.game ? params.game : "";
  const { data: game, isLoading, error } = useGame(gameSlug);

  if (isLoading) return <p>Loading</p>;

  return (
    <div
      className="relative w-full z-0 bg-center bg-cover rounded-t-2xl overflow-hidden "
      style={{
        backgroundImage: ` url(${game?.background_image_additional})`,
      }}
    >
      <div className="absolute -z-10  inset-0 bg-gradient-to-t  from-neutral-50/100 via-neutral-50/80 to-neutral-50/30 dark:via-neutral-900/80 dark:from-neutral-900/100 dark:to-neutral-900/30"></div>

      <div className="w-[70%] mx-auto border-2 border-red-500  grid grid-cols-1 justify-items-center xl:grid-cols-5 xl:gap-4   xl:py-10">
        <div className="border-2 border-blue-500 xl:col-span-3">
          <p className="text-7xl font-bold">{game?.name}</p>
          <p className="flex space-x-8">
            <GamePageButton>
              My Library <FaCirclePlus className=" text-2xl text-lime-400" />
            </GamePageButton>
            <GamePageButton>
              Wishlist <FaGift className="text-2xl text-neutral-50" />
            </GamePageButton>
          </p>
          <GamePageRatingBar ratings={game?.ratings} />
          <p>{game?.released}</p>
          <div>
            <p>About</p>
            <p>{game?.description_raw}</p>
          </div>
          <p>{game?.esrb_rating.name}</p>
          <p>{game?.metacritic}</p>
          <p>{game?.released}</p>
        </div>
        <div className="col-span-2">
          <img
            src={game?.background_image}
            alt={`${game?.name} image`}
            className="w-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

{
  /* <p>{game?.publisher?.name}</p> */
}
{
  /* <p>{game?.ratings}</p> */
}
{
  /* <p className="bg-blue-500">
  {game?.platforms.map((item) => item.name)}
  </p> */
}
export default GamePage;
