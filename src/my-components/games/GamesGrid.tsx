import { useEffect } from "react";
import useGames from "./useGames";
import { useInView } from "react-intersection-observer";
import Loader from "../general/Loader";
import GameCard from "./GameCard";
interface Props {
  gamesDisplay: string;
}

const GamesGrid = ({ gamesDisplay }: Props) => {
  const { data, error, status, fetchNextPage, isFetchingNextPage } = useGames();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  // console.log(data, error, status);
  if (status === "pending") return <p>Loading... tu skeletony wrzucam</p>;
  if (status === "error") return <p>{error.message}</p>;
  return (
    <div className="flex flex-col  w-full bg-red-500 ">
      {data.pages.map((page) => (
        <div
          key={page.currentPage}
          className=" grid grid-cols-1 justify-items-center  bg-blue-500 lg:grid-cols-3"
        >
          {page.data.map((item) => (
            <GameCard
              key={item.id}
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
