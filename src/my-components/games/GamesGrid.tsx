import { useEffect } from "react";
import useGames from "./useGames";
import { useInView } from "react-intersection-observer";
interface Props {
  gamesDisplay: string;
}

const GamesGrid = ({ gamesDisplay }: Props) => {
  const { data, error, status, fetchNextPage } = useGames();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);
  // console.log(data, error, status);
  if (status === "pending") return <p>Loading...</p>;
  if (status === "error") return <p>{error.message}</p>;
  return (
    <div className="bg-blue-200">
      {data.pages.map((page) => (
        <div key={page.currentPage}>
          {page.data.map((item) => (
            <div key={item.id} className="h-56 w-56 bg-red-500">
              {item.name}
            </div>
          ))}
        </div>
      ))}
      <div ref={ref}></div>
    </div>
  );
};

export default GamesGrid;
