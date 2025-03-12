import { useEffect } from "react";
import useGames from "./useGames";
import { useInView } from "react-intersection-observer";
import Loader from "../general/Loader";
import GameCard from "./gameCard/GameCard";
import dummyData from "../general/skeletonData";
import SkeletonGameCard from "../general/SkeletonGameCard";
import { useParams } from "react-router-dom";
interface Props {
  gamesDisplay: string;
}

const GamesGrid = ({ gamesDisplay }: Props) => {
  const params = useParams();
  const genre = params.genre ? params.genre : "";
  console.log(genre);
  const { data, error, status, fetchNextPage, isFetchingNextPage } =
    useGames(genre);
  // const { data, error, status, fetchNextPage, isFetchingNextPage } = useGames();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  if (status === "pending")
    return (
      <div
        className={`
        grid grid-cols-1 justify-items-center   gap-x-10  ${
          gamesDisplay === "grid"
            ? "lg:grid-cols-2  xl:grid-cols-3"
            : "grid-cols-1"
        }`}
      >
        {dummyData.map((item) => (
          <SkeletonGameCard key={item} gamesDisplay={gamesDisplay} />
        ))}
      </div>
    );
  if (status === "error") return <p>{error.message}</p>;
  return (
    <div className="flex flex-col  w-full  ">
      {data.pages.map((page, pageIndex) => (
        <div
          key={pageIndex}
          className={`
             grid grid-cols-1 justify-items-center   gap-x-10  ${
               gamesDisplay === "grid" ? "  xl:grid-cols-3" : "grid-cols-1"
             }`}
        >
          {page.data.map((item) => (
            <GameCard
              key={item.id}
              gamesDisplay={gamesDisplay}
              slug={item.slug}
              released={item.released}
              background_image={item.background_image}
              name={item.name}
              metacritic={item.metacritic}
              id={item.id}
              platforms={item.platforms}
            />
          ))}
        </div>
      ))}
      <div ref={ref} className="flex items-center justify-center mt-8">
        {isFetchingNextPage && <Loader />}
      </div>
    </div>
  );
};

export default GamesGrid;
