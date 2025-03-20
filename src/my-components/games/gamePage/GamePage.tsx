import { useParams } from "react-router-dom";
import useGame from "./useGame";
import GamePageRatingBar from "./GamePageRatingBar";
import GamePageGridAndOpacity from "./GamePageGridAndOpacity";
import { GamePageWhereToBuy } from "./GamePageWhereToBuy";
import GamePageMetacritic from "./GamePageMetacritic";
import GamePagePlatforms from "./GamePagePlatforms";
import GamePageAbout from "./GamePageAbout";
import GamePageLoading from "./GamePageLoading";
import GamePageImages from "./GamePageImages";
import ErrorPage from "@/my-components/general/ErrorPage";
import GamePageSimilarSuggestions from "./GamePageSimilarSuggestions";
import GamePageActionButtons from "./GamePageActionButtons";

const GamePage = () => {
  const params = useParams();
  const gameSlug = params.game ? params.game : "";
  const { data: game, isLoading, error } = useGame(gameSlug);

  const gameInfo = {
    id: game?.id ?? 0,
    name: game?.name ?? "Unknown ame",
    background_image: game?.background_image ?? "/images/noImage.png",
    slug: gameSlug,
  };

  if (isLoading) return <GamePageLoading />;
  if (error) return <ErrorPage message={error.message} />;
  return (
    <div
      className="relative flex flex-col justify-between w-full z-0 bg-top bg-no-repeat  overflow-hidden xl:bg-contain"
      style={{
        backgroundImage: `url(${game?.background_image})`,
      }}
    >
      <GamePageGridAndOpacity>
        <div className=" space-y-8  col-span-1 xl:col-span-3 ">
          <p className="text-6xl font-bold xl:text-8xl text-neutral-800 dark:text-neutral-200">
            {game?.name}
          </p>
          <GamePageActionButtons gameInfo={gameInfo} />
          <GamePageRatingBar ratings={game?.ratings} />
          <div className="px-2 xl:px-0">
            <GamePageAbout gameDescription={game?.description_raw} />
          </div>
          <div className="px-2 grid grid-cols-3 justify-items-start gap-5 xl:px-0">
            <div>
              <p className="text-xl font-semibold opacity-60">Publishers</p>
              {game?.publishers.map((item) => (
                <p key={item.id}> {item.name}</p>
              ))}
              {game?.publishers.length == 0 && <p>Not added</p>}
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Genre</p>{" "}
              {game?.genres.map((item) => (
                <p key={item.id}>{item.name}</p>
              ))}
              {game?.genres.length == 0 && <p>Not added</p>}
            </div>
            <div>
              <GamePageMetacritic game={game} />
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Released</p>
              <p>{game?.released ?? "Not added"}</p>
            </div>
            <div>
              <p className="text-xl font-semibold opacity-60">Age rating</p>
              <p>{game?.esrb_rating?.name ?? "Not added"}</p>
            </div>
            <div>
              <GamePagePlatforms platforms={game?.platforms} />
            </div>
          </div>
        </div>
        <div className="xl:col-span-2">
          <GamePageImages gamePk={game?.id} />
          <div className="mt-6 px-2 xl:px-0">
            <GamePageWhereToBuy stores={game?.stores} />
          </div>
        </div>
        <GamePageSimilarSuggestions gameName={game?.name} gamePk={game?.id} />
      </GamePageGridAndOpacity>
      <footer className="border-t  w-full  py-3 text-center opacity-50">
        <p>
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/antoni-gapinski"
            target="_blank"
            className="underline underline-offset-2 font-semibold"
          >
            Antoni Gapiński
          </a>{" "}
        </p>
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
