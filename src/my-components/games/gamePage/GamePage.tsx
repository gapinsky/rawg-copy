import { useParams } from "react-router-dom";
import useGame from "./useGame";
import { FaCirclePlus, FaGift } from "react-icons/fa6";
import GamePageButton from "./GamePageButton";
import GamePageRatingBar from "./GamePageRatingBar";
import GamePageGridAndOpacity from "./GamePageGridAndOpacity";
import { useState } from "react";

const GamePage = () => {
  const params = useParams();
  const gameSlug = params.game ? params.game : "";
  const { data: game, isLoading, error } = useGame(gameSlug);
  const [isExpand, setIsExpand] = useState(false);
  console.log(game);
  if (isLoading) return <p>Loading</p>;

  return (
    <div
      className="relative w-full z-0 bg-top bg-no-repeat  overflow-hidden xl:bg-contain"
      style={{
        backgroundImage: `url(${game?.background_image})`,
      }}
    >
      <GamePageGridAndOpacity>
        <div className=" space-y-8  col-span-1 xl:col-span-3 ">
          <p className="text-6xl font-bold xl:text-8xl">{game?.name}</p>
          <p className="flex space-x-8">
            <GamePageButton>
              My Library <FaCirclePlus className=" text-2xl text-lime-400" />
            </GamePageButton>
            <GamePageButton>
              Wishlist <FaGift className="text-2xl text-neutral-50" />
            </GamePageButton>
          </p>
          <GamePageRatingBar ratings={game?.ratings} />
          <div className="px-2 xl:px-0">
            <p className="text-2xl font-semibold">About</p>
            <p>
              {isExpand
                ? game?.description_raw
                : game?.description_raw.slice(0, 500)}{" "}
              <button
                onClick={() => setIsExpand((prev) => !prev)}
                className="bg-neutral-900 text-neutral-900 dark:bg-neutral-50 dark:text-neutral-900 text-sm px-1 rounded-sm hover:opacity-90 hover:cursor-pointer"
              >
                {isExpand ? "Show less" : "Read more"}
              </button>
            </p>
          </div>
          <div className="px-2 grid grid-cols-3 justify-items-start gap-5 xl:px-0">
            <div>
              <p className="text-xl font-semibold opacity-60">Publishers</p>
              {game?.publishers.map((item) => (
                <p> {item.name}</p>
              ))}
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Genre</p>
              <p>
                {" "}
                {game?.genres.map((item) => (
                  <p key={item.id}>{item.name}</p>
                ))}
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Metascore</p>
              <p
                className={`border w-fit px-1 rounded-sm
              ${
                game?.metacritic &&
                game?.metacritic < 25 &&
                "text-red-500 border-red-500/50"
              }
              ${
                game?.metacritic &&
                game?.metacritic < 50 &&
                "text-yellow-500 border-yellow-500/50"
              }
              ${
                game?.metacritic &&
                game?.metacritic < 75 &&
                "text-blue-500 border-blue-500/50"
              }
              ${
                game?.metacritic &&
                game?.metacritic <= 100 &&
                "text-green-500 border-green-500/50"
              }
              
              
              `}
              >
                {game?.metacritic}
              </p>
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Released</p>
              <p>{game?.released}</p>
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Age rating</p>
              <p>{game?.esrb_rating?.name ?? "Not added"}</p>
            </div>
          </div>
        </div>
        <div className="xl:col-span-2">
          <img
            src={game?.background_image_additional}
            alt={`${game?.name} image`}
            className="w-full rounded-lg"
          />
          <div className="mt-6 px-2 xl:px-0">
            <p className="mb-2 font-semibold text-neutral-300">Where to buy</p>
            <div className="space-x-6 grid grid-cols-2 gap-2 ">
              {game?.stores.map((store) => (
                <a
                  href={`https://${store.store.domain}`}
                  target="_blank"
                  className=" py-2 bg-neutral-700 text-neutral-300 text-center w-full rounded-sm hover:bg-neutral-600"
                >
                  {store.store.name}
                </a>
              ))}
            </div>
            <div className="mt-6">
              <p className="font-semibold text-neutral-300">Platforms</p>
              {game?.platforms.map((platform, index) => (
                <span key={platform.platform.id}>
                  {platform.platform.name}
                  {index !== game?.platforms.length - 1 ? ", " : ""}
                </span>
              ))}
              .
            </div>
          </div>
        </div>
      </GamePageGridAndOpacity>
      <footer className="border-t absolute w-full bottom-0 py-3 text-center opacity-50">
        <p>&copy; Antoni Gapiński </p>
        <p>
          This website was created as a private project and is not affiliated
          with rawg.com
        </p>
      </footer>
    </div>
  );
};

{
  /* <p>{game?.ratings}</p> */
}

export default GamePage;
